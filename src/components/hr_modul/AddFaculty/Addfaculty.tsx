// // import api from "api";
// import React from "react";
// // import './login.css'
// import CSVReader from "react-csv-reader";
// import { Navigate } from "react-router-dom";
// import api from "../../../api";
//
// class AddFaculty extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faculty_clg_id: "",
//       name: "",
//       contact: "",
//       ftype_id: "",
//       ftype_list: [],
//       depart_list: [],
//       role: "",
//       depart_id: "",
//       joining_date: "",
//       email: "",
//       password: "",
//       err: "",
//       msg: "",
//       shiftId: "",
//       roleList: [],
//       shiftList: [],
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//     this.fetch_all_shifts();
//   }
//
//   fetchData = async () => {
//     try {
//       const response = await api.get(
//         // 'http://185.210.144.40/api/hr/add_faculty_get'
//         `${process.env.REACT_APP_BASE_URL}/hr/add_faculty_get`
//       );
//       this.setState({
//         ftype_list: response.data["ftype_list"],
//         depart_list: response.data["depart_list"],
//         roleList: response.data["role"],
//       });
//     } catch (error) {
//     }
//   };
//
//   fetch_all_shifts = async () => {
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/fetch_all_Shifts`
//       );
//       this.setState({ shiftList: response.data["shifts"] });
//     } catch (error) {
//     }
//   };
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//
//     api
//       .post(
//         // 'http://185.210.144.40/api/hr/Add_Faculty',
//         `${process.env.REACT_APP_BASE_URL}/hr/Add_Faculty`,
//         {
//           faculty_clg_id: this.state.faculty_clg_id,
//           name: this.state.name,
//           contact: this.state.contact,
//           ftype_id: this.state.ftype_id,
//           role: this.state.role,
//           depart_id: this.state.depart_id,
//           joining_date: this.state.joining_date,
//           email: this.state.email,
//           password: this.state.password,
//           shift_id: this.state.shiftId,
//         }
//       )
//       .then((response) => {
//         this.setState({
//           msg: response.data["message"],
//           err: "",
//         });
//
//         alert("Faculty Added!");
//         window.location.reload();
//       })
//       .catch((error) => {
//         this.setState({ err: error.response.data["message"], msg: "" });
//       });
//   };
//
//   bulkUpload = async (data) => {
//     api
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/hr/BulkAdd_Faculty`,
//         // 'http://localhost:5000/api/hr/Add_Faculty',
//         {
//           data: data,
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
//   render() {
//     const ftyprItems = [];
//     const departItems = [];
//     const roleItems = [];
//     const shitsItem = [];
//
//     for (let i = 0; i < this.state.ftype_list.length; i++) {
//       ftyprItems.push(
//         <option value={this.state.ftype_list[i].ftype_id}>
//           {this.state.ftype_list[i].ftname}
//         </option>
//       );
//     }
//
//     for (let i = 0; i < this.state.depart_list.length; i++) {
//       departItems.push(
//         <option value={this.state.depart_list[i].depart_id}>
//           {this.state.depart_list[i].name}
//         </option>
//       );
//     }
//
//     for (let i = 0; i < this.state.roleList.length; i++) {
//       roleItems.push(
//         <option value={this.state.roleList[i].role_id}>
//           {this.state.roleList[i].name}
//         </option>
//       );
//     }
//
//     for (let i = 0; i < this.state.shiftList.length; i++) {
//       shitsItem.push(
//         <option value={this.state.shiftList[i].shift_id}>
//           {this.state.shiftList[i].sname}
//         </option>
//       );
//     }
//
//     return (
//       <div className="col-lg-10">
//         {this.state.err && <p>{this.state.err}</p>}
//         {this.state.msg && <p>{this.state.msg}</p>}
//         <div className="container mx-auto" style={{ width: "30rem" }}>
//           <center>
//             <CSVReader
//               onFileLoaded={(data, fileInfo, originalFile) =>
//                 this.bulkUpload(data)
//               }
//             ></CSVReader>
//           </center>
//           <br />
//           <br />
//           <h4 className="fw-bolder text-center">Add New Faculty</h4>
//           <form className="my-2" onSubmit={this.handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Name"
//                 onChange={(e) => this.setState({ name: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label
//                 htmlFor="Faculty_clg_id"
//                 className="form-label fw-semibold"
//               >
//                 Faculty College Id
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Faculty_clg_id"
//                 onChange={(e) =>
//                   this.setState({ faculty_clg_id: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="Email" className="form-label fw-semibold">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="Email"
//                 onChange={(e) => this.setState({ email: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="Phone_Number" className="form-label fw-semibold">
//                 Phone Number
//               </label>
//               <input
//                 type="phone"
//                 className="form-control"
//                 id="Phone_Number"
//                 onChange={(e) => this.setState({ contact: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="ftype" className="form-label fw-semibold">
//                 Faculty Type
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ ftype_id: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {ftyprItems}
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="depart" className="form-label fw-semibold">
//                 Department
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ depart_id: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {departItems}
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="role" className="form-label fw-semibold">
//                 Faculty Designation
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ role: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {roleItems}
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="role" className="form-label fw-semibold">
//                 Faculty Shift
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ shiftId: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {shitsItem}
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="jod" className="form-label fw-semibold">
//                 Date of Joining
//               </label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="jod"
//                 onChange={(e) =>
//                   this.setState({ joining_date: e.target.value })
//                 }
//               />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="password" className="form-label fw-semibold">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 onChange={(e) => this.setState({ password: e.target.value })}
//               />
//             </div>
//
//             <button
//               type="submit"
//               className="btn btn-dark my-3"
//               style={{ width: "28.5rem" }}
//             >
//               Add Faculty
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default AddFaculty;

import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import api from "../../../api";
import axios from "axios";

const AddFaculty: React.FC = () => {
  const [facultyClgId, setFacultyClgId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [ftypeId, setFtypeId] = useState("");
  const [ftypeList, setFtypeList] = useState<FacultyType[]>([]);
  const [departList, setDepartList] = useState<Department[]>([]);
  const [role, setRole] = useState("");
  const [departId, setDepartId] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [shiftId, setShiftId] = useState("");
  const [roleList, setRoleList] = useState<Role[]>([]);
  const [shiftList, setShiftList] = useState<Shift[]>([]);

  useEffect(() => {
    fetchData();
    fetchAllShifts();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/add_faculty_get`
      );
      setFtypeList(response.data["ftype_list"]);
      setDepartList(response.data["depart_list"]);
      setRoleList(response.data["role"]);
    } catch (error) {
      console.error("An error occurred:", error);
      setErr("An unexpected error occurred. Please try again later.");
    }
  };

  const fetchAllShifts = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/fetch_all_Shifts`
      );
      setShiftList(response.data["shifts"]);
    } catch (error) {
      console.error("An error occurred:", error);
      setErr("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/Add_Faculty`,
        {
          faculty_clg_id: facultyClgId,
          name,
          contact,
          ftype_id: ftypeId,
          role,
          depart_id: departId,
          joining_date: joiningDate,
          email,
          password,
          shift_id: shiftId,
        }
      );
      setMsg(response.data["message"]);
      setErr("");
      alert("Faculty Added!");
      window.location.reload();
    } catch (error ) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data && error.response.data.message) {
          setErr(error.response.data.message);
        } else {
          setErr("An error occurred with the request. Please try again.");
        }
      } else {
        console.error("An unexpected error occurred:", error);
        setErr("An unexpected error occurred. Please try again later.");
      }
      setMsg("");
    }
  };
  interface FacultyData {
    faculty_clg_id: string;
    name: string;
    contact: string;
    ftype_id: string;
    role: string;
    depart_id: string;
    joining_date: string;
    email: string;
    password: string;
    shift_id: string;
  }
  const bulkUpload = async (data: FacultyData[]) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/BulkAdd_Faculty`,
        { data }
      );
      setMsg(response.data["message"]);
      setErr("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data && error.response.data.message) {
          setErr(error.response.data.message);
        } else {
          setErr("An error occurred with the request. Please try again.");
        }
      } else {
        console.error("An unexpected error occurred:", error);
        setErr("An unexpected error occurred. Please try again later.");
      }
      setMsg("");
    }
  };
  interface Department {
    depart_id: string;
    name: string;
  }
  interface FacultyType {
    ftype_id: string;
    ftname: string;
  }
  interface Role {
    role_id: string;
    name: string;
  }

  interface Shift {
    shift_id: string;
    sname: string;
  }
  return (
    <div className="col-lg-10">
      {err && <p>{err}</p>}
      {msg && <p>{msg}</p>}
      <div className="container mx-auto" style={{ width: "30rem" }}>
        <center>
          <CSVReader
            onFileLoaded={(data) => bulkUpload(data)}
          />
        </center>
        <br />
        <br />
        <h4 className="fw-bolder text-center">Add New Faculty</h4>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="Name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Faculty_clg_id" className="form-label fw-semibold">
              Faculty College Id
            </label>
            <input
              type="text"
              className="form-control"
              id="Faculty_clg_id"
              onChange={(e) => setFacultyClgId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Phone_Number" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="phone"
              className="form-control"
              id="Phone_Number"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="ftype" className="form-label fw-semibold">
              Faculty Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setFtypeId(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {ftypeList.map((item: FacultyType) => (
                <option key={item.ftype_id} value={item.ftype_id}>
                  {item.ftname}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="depart" className="form-label fw-semibold">
              Department
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setDepartId(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {departList.map((item: Department) => (
                <option key={item.depart_id} value={item.depart_id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="role" className="form-label fw-semibold">
              Faculty Designation
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setRole(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {roleList.map((item: Role) => (
                <option key={item.role_id} value={item.role_id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="shift" className="form-label fw-semibold">
              Faculty Shift
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setShiftId(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {shiftList.map((item: Shift) => (
                <option key={item.shift_id} value={item.shift_id}>
                  {item.sname}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="jod" className="form-label fw-semibold">
              Date of Joining
            </label>
            <input
              type="date"
              className="form-control"
              id="jod"
              onChange={(e) => setJoiningDate(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark my-3"
            style={{ width: "28.5rem" }}
          >
            Add Faculty
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFaculty;
