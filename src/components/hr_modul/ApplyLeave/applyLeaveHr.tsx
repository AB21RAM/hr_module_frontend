// // import api from "api";
// import React from "react";
// import { IKImage, IKContext, IKUpload } from "imagekitio-react";
// import { Navigate } from "react-router-dom";
// import api from "../../../api";
//
// class ApplyForLeaveHR extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       half_full_day: "",
//       leave_list: [],
//       leave_id: "",
//       from_date: "",
//       to_date: "",
//       reason: "",
//       alternate: "",
//       facultyList: [],
//       doc: null,
//       faculty_id: "",
//       faculty_idlist: [],
//       facultyNameInput: "",
//       alternateNameInput: "",
//       filteredFacultyNames: [],
//       filteredAlternateNames: [],
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//     this.fetchAllFacultyIds();
//   }
//
//   fetchData = async () => {
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/fetchAllLeaves`
//       );
//       this.setState({
//         leave_list: response.data["leaves"],
//       });
//     } catch (error) {
//     }
//   };
//
//   fetchAllFacultyIds = async () => {
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFacultyIds`
//       );
//       this.setState({
//         faculty_idlist: response.data["facultylist"],
//       });
//     } catch (error) {
//     }
//   };
//
//   handleLeaveTypeChange = (selectedLeaveType) => {
//     this.setState({
//       leave_id: selectedLeaveType,
//       half_full_day: "",
//     });
//   };
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const end = new Date(this.state.to_date);
//     const start = new Date(this.state.from_date);
//
//     let no_of_days = end - start;
//     no_of_days = Math.floor(no_of_days / (24 * 60 * 60 * 1000)) + 1;
//
//     api
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/hr/Apply_leave_hr`,
//         {
//           faculty_id: this.state.faculty_id,
//           leave_id: this.state.leave_id,
//           from_date: this.state.from_date,
//           to_date: this.state.to_date,
//           reason: this.state.reason,
//           no_of_date: no_of_days,
//           alternate: this.state.alternate,
//           uid: localStorage.getItem("uid"),
//           doc: this.state.doc,
//           half_full_day: this.state.half_full_day,
//         }
//       )
//       .then((response) => {
//         this.setState({
//           msg: response.data["message"],
//           err: "",
//         });
//       })
//       .catch((error) => {
//         this.setState({ err: error.response.data["message"], msg: "" });
//       });
//   };
//
//   handleFacultyNameChange = (event) => {
//     const { value } = event.target;
//     const filteredFacultyNames = this.state.faculty_idlist.filter((faculty) =>
//       faculty.name.toLowerCase().includes(value.toLowerCase())
//     );
//     this.setState({
//       facultyNameInput: value,
//       filteredFacultyNames,
//     });
//   };
//
//   handleAlternateNameChange = (event) => {
//     const { value } = event.target;
//     const filteredAlternateNames = this.state.faculty_idlist.filter((faculty) =>
//       faculty.name.toLowerCase().includes(value.toLowerCase())
//     );
//     this.setState({
//       alternateNameInput: value,
//       filteredAlternateNames,
//     });
//   };
//
//   handleFacultyNameSelect = (faculty) => {
//     this.setState({
//       faculty_id: faculty.faculty_id,
//       facultyNameInput: faculty.name,
//       filteredFacultyNames: [],
//     });
//   };
//
//   handleAlternateNameSelect = (faculty) => {
//     this.setState({
//       alternate: faculty.faculty_id,
//       alternateNameInput: faculty.name,
//       filteredAlternateNames: [],
//     });
//   };
//
//   handleFileChange = async(e) => {
//     const { name, files } = e.target;
//
//     // Create a FormData object and append the selected file(s)
//     const formData = new FormData();
//     formData.append("file", files[0]); // Assuming you only want to upload the first file, adjust as needed
//
//     // Make an AJAX request to upload the file
//     api.post(`${process.env.REACT_APP_BASE_URL}/security/upload`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': localStorage.getItem('token')
//         }
//     })
//     .then(response => {
//
//         this.setState({ doc: response.data.filename });
//         alert('Document Uploaded');
//     })
//     .catch(error => {
//     });
// }
//
//   render() {
//
//     const leaveItems = [];
//
//     if (this.state.leave_list.length > 0) {
//       for (let i = 0; i < this.state.leave_list.length; i++) {
//         leaveItems.push(
//           <option value={this.state.leave_list[i].leave_id}>
//             {this.state.leave_list[i].lname}
//           </option>
//         );
//       }
//     }
//
//     let secondLevelOptions = null;
//     if (
//       this.state.leave_id === 1 ||
//       this.state.leave_id === 3 ||
//       this.state.leave_id === 8
//     ) {
//       secondLevelOptions = (
//         <div className="mb-2">
//           <label htmlFor="half_full_day" className="form-label fw-semibold">
//             Second Level Selection:
//           </label>
//           <select
//             className="form-select"
//             aria-label="Default select example"
//             onChange={(e) => this.setState({ half_full_day: e.target.value })}
//           >
//             <option defaultValue>Open this select menu</option>
//             <option value="first_half">First Half - Half Day</option>
//             <option value="second_half">Second Half - Half Day</option>
//             <option value="full_day">Full Day</option>
//           </select>
//         </div>
//       );
//     }
//
//
//
//     return (
//       <div className="col-lg-10">
//         {this.state.msg && <p>{this.state.msg}</p>}
//         {this.state.err && <p>{this.state.err}</p>}
//         <div className="container mx-auto" style={{ width: "30rem" }}>
//           <h3 className="fw-bolder text-center">Leave Application Form</h3>
//           <form className="my-2" onSubmit={this.handleSubmit}>
//
//             <div className="mb-2">
//               <label htmlFor="facultyName" className="form-label fw-semibold">
//                 Faculty Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="facultyName"
//                 value={this.state.facultyNameInput}
//                 onChange={this.handleFacultyNameChange}
//                 onBlur={() => setTimeout(() => this.setState({ filteredFacultyNames: [] }), 100)}
//               />
//               {this.state.filteredFacultyNames.length > 0 && (
//                 <ul style={{ border: '1px solid #ccc', position: 'absolute', backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
//                   {this.state.filteredFacultyNames.map((faculty) => (
//                     <li
//                       key={faculty.faculty_id}
//                       style={{ padding: '8px', cursor: 'pointer' }}
//                       onMouseDown={() => this.handleFacultyNameSelect(faculty)}
//                     >
//                       {faculty.name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="from_date" className="form-label fw-semibold">
//                 From Date:
//               </label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="from_date"
//                 onChange={(e) => this.setState({ from_date: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="to_date" className="form-label fw-semibold">
//                 To Date:
//               </label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="to_date"
//                 onChange={(e) => this.setState({ to_date: e.target.value })}
//               />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="leave_id" className="form-label fw-semibold">
//                 Leave Type
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.handleLeaveTypeChange(e.target.value)}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {leaveItems}
//               </select>
//             </div>
//
//             {secondLevelOptions && (
//               <div className="mb-2">
//                 <label
//                   htmlFor="half_full_day"
//                   className="form-label fw-semibold"
//                 >
//                   Second Level Selection:
//                 </label>
//                 <select
//                   className="form-select"
//                   aria-label="Default select example"
//                   value={this.state.half_full_day}
//                   onChange={(e) =>
//                     this.setState({ half_full_day: e.target.value })
//                   }
//                 >
//                   <option value="">Open this select menu</option>
//                   <option value="first_half">First Half - Half Day</option>
//                   <option value="second_half">Second Half - Half Day</option>
//                   <option value="full_day">Full Day</option>
//                 </select>
//               </div>
//             )}
//
//             <div className="mb-2">
//               <label htmlFor="alternate" className="form-label fw-semibold">
//                 Alternate
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="alternate"
//                 value={this.state.alternateNameInput}
//                 onChange={this.handleAlternateNameChange}
//                 onBlur={() => setTimeout(() => this.setState({ filteredAlternateNames: [] }), 100)}
//               />
//               {this.state.filteredAlternateNames.length > 0 && (
//                 <ul style={{ border: '1px solid #ccc', position: 'absolute', backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
//                   {this.state.filteredAlternateNames.map((faculty) => (
//                     <li
//                       key={faculty.faculty_id}
//                       style={{ padding: '8px', cursor: 'pointer' }}
//                       onMouseDown={() => this.handleAlternateNameSelect(faculty)}
//                     >
//                       {faculty.name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="reason" className="form-label fw-semibold">
//                 Reason:
//               </label>
//               <textarea
//                 className="form-control"
//                 id="reason"
//                 rows="3"
//                 onChange={(e) => this.setState({ reason: e.target.value })}
//               ></textarea>
//             </div>
//             <div className="mb-2">
//               <label htmlFor="doc" className="form-label fw-semibold">
//                 Attach Document
//               </label>
//               <input class="form-control" type="file" onChange={(e)=>this.handleFileChange(e)}/>
//             </div>
//
//             <button
//               type="submit"
//               className="btn btn-dark my-3"
//               style={{ width: "28.5rem" }}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default ApplyForLeaveHR;
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import api from "../../../api";

interface Faculty {
  faculty_id: string;
  name: string;
}

interface Leave {
  leave_id: string;
  lname: string;
}

const ApplyForLeaveHR: React.FC = () => {
  const [halfFullDay, setHalfFullDay] = useState<string>("");
  const [leaveList, setLeaveList] = useState<Leave[]>([]);
  const [leaveId, setLeaveId] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [alternate, setAlternate] = useState<string>("");
  // const [facultyList, setFacultyList] = useState<Faculty[]>([]);
  const [doc, setDoc] = useState<string | null>(null);
  const [facultyId, setFacultyId] = useState<string>("");
  const [facultyIdList, setFacultyIdList] = useState<Faculty[]>([]);
  const [facultyNameInput, setFacultyNameInput] = useState<string>("");
  const [alternateNameInput, setAlternateNameInput] = useState<string>("");
  const [filteredFacultyNames, setFilteredFacultyNames] = useState<Faculty[]>([]);
  const [filteredAlternateNames, setFilteredAlternateNames] = useState<Faculty[]>([]);
  const [msg, setMsg] = useState<string>("");
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    fetchData();
    fetchAllFacultyIds();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(`${process.env.REACT_APP_BASE_URL}/hr/fetchAllLeaves`);
      setLeaveList(response.data["leaves"]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllFacultyIds = async () => {
    try {
      const response = await api.get(`${process.env.REACT_APP_BASE_URL}/hr/fetchAllFacultyIds`);
      setFacultyIdList(response.data["facultylist"]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLeaveTypeChange = (selectedLeaveType: string) => {
    setLeaveId(selectedLeaveType);
    setHalfFullDay("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const end = new Date(toDate);
    const start = new Date(fromDate);

    let noOfDays = end.getTime() - start.getTime();
    noOfDays = Math.floor(noOfDays / (24 * 60 * 60 * 1000)) + 1;

    api
      .post(`${process.env.REACT_APP_BASE_URL}/hr/Apply_leave_hr`, {
        faculty_id: facultyId,
        leave_id: leaveId,
        from_date: fromDate,
        to_date: toDate,
        reason: reason,
        no_of_date: noOfDays,
        alternate: alternate,
        uid: localStorage.getItem("uid"),
        doc: doc,
        half_full_day: halfFullDay,
      })
      .then((response) => {
        setMsg(response.data["message"]);
        setErr("");
      })
      .catch((error) => {
        setErr(error.response.data["message"]);
        setMsg("");
      });
  };

  const handleFacultyNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredNames = facultyIdList.filter((faculty) =>
      faculty.name.toLowerCase().includes(value.toLowerCase())
    );
    setFacultyNameInput(value);
    setFilteredFacultyNames(filteredNames);
  };

  const handleAlternateNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filteredNames = facultyIdList.filter((faculty) =>
      faculty.name.toLowerCase().includes(value.toLowerCase())
    );
    setAlternateNameInput(value);
    setFilteredAlternateNames(filteredNames);
  };

  const handleFacultyNameSelect = (faculty: Faculty) => {
    setFacultyId(faculty.faculty_id);
    setFacultyNameInput(faculty.name);
    setFilteredFacultyNames([]);
  };

  const handleAlternateNameSelect = (faculty: Faculty) => {
    setAlternate(faculty.faculty_id);
    setAlternateNameInput(faculty.name);
    setFilteredAlternateNames([]);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files[0]) {
      const formData = new FormData();
      formData.append("file", files[0]);

      try {
        const response = await api.post(`${process.env.REACT_APP_BASE_URL}/security/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem('token') || ''
          }
        });
        setDoc(response.data.filename);
        alert('Document Uploaded');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const leaveItems = leaveList.map((leave) => (
    <option key={leave.leave_id} value={leave.leave_id}>
      {leave.lname}
    </option>
  ));

  const secondLevelOptions = (leaveId === "1" || leaveId === "3" || leaveId === "8") && (
    <div className="mb-2">
      <label htmlFor="half_full_day" className="form-label fw-semibold">
        Second Level Selection:
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={halfFullDay}
        onChange={(e) => setHalfFullDay(e.target.value)}
      >
        <option value="">Open this select menu</option>
        <option value="first_half">First Half - Half Day</option>
        <option value="second_half">Second Half - Half Day</option>
        <option value="full_day">Full Day</option>
      </select>
    </div>
  );

  return (
    <div className="col-lg-10">
      {msg && <p>{msg}</p>}
      {err && <p>{err}</p>}
      <div className="container mx-auto" style={{ width: "30rem" }}>
        <h3 className="fw-bolder text-center">Leave Application Form</h3>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="facultyName" className="form-label fw-semibold">
              Faculty Name
            </label>
            <input
              type="text"
              className="form-control"
              id="facultyName"
              value={facultyNameInput}
              onChange={handleFacultyNameChange}
              onBlur={() => setTimeout(() => setFilteredFacultyNames([]), 100)}
            />
            {filteredFacultyNames.length > 0 && (
              <ul style={{ border: '1px solid #ccc', position: 'absolute', backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                {filteredFacultyNames.map((faculty) => (
                  <li
                    key={faculty.faculty_id}
                    style={{ padding: '8px', cursor: 'pointer' }}
                    onMouseDown={() => handleFacultyNameSelect(faculty)}
                  >
                    {faculty.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="from_date" className="form-label fw-semibold">
              From Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="from_date"
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="to_date" className="form-label fw-semibold">
              To Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="to_date"
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="leave_id" className="form-label fw-semibold">
              Leave Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => handleLeaveTypeChange(e.target.value)}
            >
              <option value="">Open this select menu</option>
              {leaveItems}
            </select>
          </div>

          {secondLevelOptions}

          <div className="mb-2">
            <label htmlFor="alternate" className="form-label fw-semibold">
              Alternate
            </label>
            <input
              type="text"
              className="form-control"
              id="alternate"
              value={alternateNameInput}
              onChange={handleAlternateNameChange}
              onBlur={() => setTimeout(() => setFilteredAlternateNames([]), 100)}
            />
            {filteredAlternateNames.length > 0 && (
              <ul style={{ border: '1px solid #ccc', position: 'absolute', backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                {filteredAlternateNames.map((faculty) => (
                  <li
                    key={faculty.faculty_id}
                    style={{ padding: '8px', cursor: 'pointer' }}
                    onMouseDown={() => handleAlternateNameSelect(faculty)}
                  >
                    {faculty.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="reason" className="form-label fw-semibold">
              Reason:
            </label>
            <textarea
              className="form-control"
              id="reason"
              rows={3}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-2">
            <label htmlFor="doc" className="form-label fw-semibold">
              Attach Document
            </label>
            <input className="form-control" type="file" onChange={handleFileChange} />
          </div>

          <button
            type="submit"
            className="btn btn-dark my-3"
            style={{ width: "28.5rem" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForLeaveHR;