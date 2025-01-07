// // import React, { useState, useEffect } from "react";
// // import api from "api";
//
// // const ParticularFacultyReport = () => {
// //   const [formData, setFormData] = useState({
// //     facultyName: "",
// //     fromDate: "",
// //     endDate: "",
// //   });
//
// //   const [facultyAttendance, setFacultyAttendance] = useState([]);
//
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };
//
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
//
// //     api
// //       .post(
// //         `${process.env.REACT_APP_BASE_URL}/hr/particularFacultyAttendance`,
// //         formData
// //       )
// //       .then((response) => {
// //         if (response.data && response.data.attendance) {
// //           setFacultyAttendance(response.data.attendance);
// //         } else {
// //         }
// //       })
// //       .catch((error) => {
// //       });
// //   };
//
// //   return (
// //     <div className="sub-main">
// //       <h4 className="fw-bolder">Report Generation</h4>
// //       <form onSubmit={handleSubmit} style={{ width: "25vw" }}>
// //         <div>
// //           <label className="form-label fs-4 fw-bold" htmlFor="facultyName ">
// //             Faculty Name:
// //           </label>
// //           <select
// //             className="form-control"
// //             name="facultyName"
// //             value={formData.facultyName}
// //             onChange={handleInputChange}
// //           >
// //             <option value="">Select a name</option>
// //             {facultyNames.map((name, index) => (
// //               <option key={index} value={name.name}>
// //                 {name.name}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <div>
// //           <label className="form-label fs-4 fw-bold" htmlFor="fromDate">
// //             From Date:
// //           </label>
// //           <input
// //             className="form-control"
// //             type="date"
// //             name="fromDate"
// //             value={formData.fromDate}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <div>
// //           <label className="form-label fs-4 fw-bold" htmlFor="endDate">
// //             End Date:
// //           </label>
// //           <input
// //             className="form-control"
// //             type="date"
// //             name="endDate"
// //             value={formData.endDate}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <div>
// //           <button className="btn my-2 btn-outline-dark" type="submit">
// //             Fetch Attendance
// //           </button>
// //         </div>
// //       </form>
//
// //       <table className="table table-bordered">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Date</th>
// //             <th>Remark</th>
// //             <th>Working Hours</th>
// //             <th>On Time</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {facultyAttendance.map((record, index) => (
// //             <tr key={index}>
// //               <td>{record.name}</td>
// //               <td>{new Date(record.date_d).toLocaleDateString()}</td>
// //               <td>{record.remark}</td>
// //               <td>{record.working_hours}</td>
// //               <td>{record["On Time"]}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };
//
// // export default ParticularFacultyReport;
//
//
//
//
// import React, { useState, useEffect } from "react";
// import api from "../../../api";
// // import api from "api";
//
// const ParticularFacultyReport = () => {
//   const [formData, setFormData] = useState({
//     facultyName: "",
//     fromDate: "",
//     endDate: "",
//   });
//
//   const [reportType, setReportType] = useState("attendance"); // "attendance" or "leave"
//   const [facultyReport, setFacultyReport] = useState([]);
//   const [facultyNames, setFacultyNames] = useState([]);
//
//   useEffect(() => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/hr/facultyNames`)
//       .then((response) => {
//         setFacultyNames(response.data.facultyNames);
//       })
//       .catch((error) => {
//       });
//   }, []);
//
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//
//
//
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     if (reportType === "attendance") {
//       api
//         .post(
//           `${process.env.REACT_APP_BASE_URL}/hr/particularFacultyAttendance`,
//           formData
//         )
//         .then((response) => {
//           if (response.data && response.data.attendance) {
//             setFacultyReport(response.data.attendance);
//           } else {
//           }
//         })
//         .catch((error) => {
//         });
//     } else if (reportType === "leave") {
//       api
//         .post(
//           `${process.env.REACT_APP_BASE_URL}/hr/particularFacultyLeaveReport`,
//           formData
//         )
//         .then((response) => {
//           if (response.data && response.data.leaveReport) {
//             setFacultyReport(response.data.leaveReport);
//           } else {
//           }
//         })
//         .catch((error) => {
//         });
//     }
//   };
//
//
//
//   const [inputValue, setInputValue] = useState('');
//   const [options, setOptions] = useState([]);
//   const [showOptions, setShowOptions] = useState(false);
//
//   useEffect(() => {
//     if (inputValue) {
//         // setOptions(facultyNames);
//         setShowOptions(true);
//     } else {
//       setOptions([]);
//       setShowOptions(false);
//     }
//   }, [inputValue]);
//
//   const handleOptionClick = (option) => {
//     // setFormData({ ...formData, facultyName: option.name });
//     setInputValue(option.name);
//     setShowOptions(false);
//     handleInputChange({target:{name:'facultyName',value:option.name}})
//
//   };
//
//   const handleInputChange2 = (event) => {
//     const { value } = event.target;
//     setInputValue(value);
//     setOptions(facultyNames.filter(e=>e.name.toLowerCase().includes(value.toLowerCase())));
//   };
//
//
//   return (
//     <div className="sub-main">
//       <h4 className="fw-bolder">Report Generation</h4>
//       <form onSubmit={handleSubmit} style={{ width: "25vw" }}>
//         <div>
//           <label className="form-label fs-4 fw-bold" htmlFor="facultyName ">
//             Faculty Name:
//           </label>
//
//           <div style={{ position: 'relative' }}>
//       <label htmlFor="facultyName">Select a name:</label>
//       <input
//         type="text"
//         name="facultyName"
//         value={inputValue}
//         onChange={handleInputChange2}
//         onFocus={() => setShowOptions(true)}
//         className="form-control"
//       />
//       {(showOptions==true && options.length > 0) ? (
//         <ul style={{ border: '1px solid #ccc', position: 'absolute', backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
//           {options.map((option, index) => (
//             <li key={index} style={{ padding: '8px', cursor: 'pointer' }} onClick={() => handleOptionClick(option)}>
//               {option.name}
//             </li>
//           ))}
//         </ul>
//       ):<></>}
//     </div>
//
//
//         </div>
//         <div>
//           <label className="form-label fs-4 fw-bold" htmlFor="fromDate">
//             From Date:
//           </label>
//           <input
//             className="form-control"
//             type="date"
//             name="fromDate"
//             value={formData.fromDate}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label className="form-label fs-4 fw-bold" htmlFor="endDate">
//             End Date:
//           </label>
//           <input
//             className="form-control"
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <button
//             className="btn my-2  me-2 btn-outline-dark"
//             type="submit"
//             onClick={() => setReportType("attendance")}
//           >
//             Fetch Attendance
//           </button>
//           <button
//             className="btn my-2 btn-outline-dark ms-2"
//             type="submit"
//             onClick={() => setReportType("leave")}
//           >
//             Fetch Reports
//           </button>
//         </div>
//       </form>
//
//       {reportType === "attendance" ? (
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Date</th>
//               <th>Remark</th>
//               <th>In Time</th>
//               <th>Out Time</th>
//               <th>Working Hours</th>
//               <th>On Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {facultyReport.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.name}</td>
//                 <td>{new Date(record.date_d).toLocaleDateString()}</td>
//                 <td>{record.remark}</td>
//                 <td>{record.punch_in}</td>
//                 <td>{record.punch_out}</td>
//                 <td>{record.working_hours}</td>
//                 <td>{record["On Time"]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Leave App ID</th>
//               <th>Faculty CLG ID</th>
//               <th>Department</th>
//               <th>Leave Type</th>
//               <th>From Date</th>
//               <th>To Date</th>
//               <th>Reason</th>
//               <th>No of Days</th>
//               <th>Doc Link</th>
//               <th>Status</th>
//               <th>Signed By HOD</th>
//               <th>Signed By Principal</th>
//               <th>Alternate</th>
//               <th>Status Alternate</th>
//               <th>Half Full Day</th>
//             </tr>
//           </thead>
//           <tbody>
//             {facultyReport.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.leave_app_id}</td>
//                 <td>{record.faculty_clg_id}</td>
//                 <td>{record.department_name}</td>
//                 <td>{record.leaveName}</td>
//                 <td>{new Date(record.from_date).toLocaleDateString()}</td>
//                 <td>{new Date(record.to_date).toLocaleDateString()}</td>
//                 <td>{record.reason}</td>
//                 <td>{record.no_of_days}</td>
//                 <td>{record.doc_link}</td>
//                 <td>
//                   {record.status === 0
//                     ? "Pending"
//                     : record.status === 1
//                     ? "Approved"
//                     : record.status === 2
//                     ? "Denied"
//                     : "Cancelled"}
//                 </td>
//                 <td>
//                   {record.signed_by_hod == 0
//                     ? "Pending"
//                     : record.signed_by_hod == 1
//                     ? "Approved"
//                     : "denied"}
//                 </td>
//                 <td>{record.signed_by_principal}</td>
//                 <td>{record.altname}</td>
//                 <td>
//                   {record.status_alternate == 0
//                     ? "Pending"
//                     : record.status_alternate == 1
//                     ? "Approved"
//                     : record.status_alternate == 2
//                     ? "denied"
//                     : ""}
//                 </td>
//
//                 <td>{record.half_full_day}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };
//
// export default ParticularFacultyReport;


import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import api from "../../../api";

interface FormData {
  facultyName: string;
  fromDate: string;
  endDate: string;
}

interface FacultyName {
  name: string;
}

interface AttendanceRecord {
  name: string;
  date_d: string;
  remark: string;
  punch_in: string;
  punch_out: string;
  working_hours: string;
  "On Time": string;
}

interface LeaveRecord {
  leave_app_id: string;
  faculty_clg_id: string;
  department_name: string;
  leaveName: string;
  from_date: string;
  to_date: string;
  reason: string;
  no_of_days: number;
  doc_link: string;
  status: number;
  signed_by_hod: number;
  signed_by_principal: string;
  altname: string;
  status_alternate: number;
  half_full_day: string;
}

const ParticularFacultyReport: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    facultyName: "",
    fromDate: "",
    endDate: "",
  });

  const [reportType, setReportType] = useState<"attendance" | "leave">("attendance");
  const [facultyReport, setFacultyReport] = useState<(AttendanceRecord | LeaveRecord)[]>([]);
  const [facultyNames, setFacultyNames] = useState<FacultyName[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<FacultyName[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    api
      .get(`${process.env.REACT_APP_BASE_URL}/hr/facultyNames`)
      .then((response) => {
        setFacultyNames(response.data.facultyNames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const endpoint = reportType === "attendance"
      ? "/hr/particularFacultyAttendance"
      : "/hr/particularFacultyLeaveReport";

    api
      .post(`${process.env.REACT_APP_BASE_URL}${endpoint}`, formData)
      .then((response) => {
        if (reportType === "attendance" && response.data.attendance) {
          setFacultyReport(response.data.attendance);
        } else if (reportType === "leave" && response.data.leaveReport) {
          setFacultyReport(response.data.leaveReport);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (inputValue) {
      setShowOptions(true);
    } else {
      setOptions([]);
      setShowOptions(false);
    }
  }, [inputValue]);

  const handleOptionClick = (option: FacultyName) => {
    setInputValue(option.name);
    setShowOptions(false);
    handleInputChange({ target: { name: 'facultyName', value: option.name } } as ChangeEvent<HTMLInputElement>);
  };

  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    setOptions(facultyNames.filter(e => e.name.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div className="sub-main">
      <h4 className="fw-bolder">Report Generation</h4>
      <form onSubmit={handleSubmit} style={{ width: "25vw" }}>
        <div>
          <label className="form-label fs-4 fw-bold" htmlFor="facultyName">
            Faculty Name:
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name="facultyName"
              value={inputValue}
              onChange={handleInputChange2}
              onFocus={() => setShowOptions(true)}
              className="form-control"
            />
            {showOptions && options.length > 0 && (
              <ul style={{ border: '1px solid #ccc', position: 'absolute', backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                {options.map((option, index) => (
                  <li key={index} style={{ padding: '8px', cursor: 'pointer' }} onClick={() => handleOptionClick(option)}>
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div>
          <label className="form-label fs-4 fw-bold" htmlFor="fromDate">
            From Date:
          </label>
          <input
            className="form-control"
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label fs-4 fw-bold" htmlFor="endDate">
            End Date:
          </label>
          <input
            className="form-control"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            className="btn my-2 me-2 btn-outline-dark"
            type="submit"
            onClick={() => setReportType("attendance")}
          >
            Fetch Attendance
          </button>
          <button
            className="btn my-2 btn-outline-dark ms-2"
            type="submit"
            onClick={() => setReportType("leave")}
          >
            Fetch Reports
          </button>
        </div>
      </form>

      {reportType === "attendance" ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Remark</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Working Hours</th>
              <th>On Time</th>
            </tr>
          </thead>
          <tbody>
            {facultyReport.map((record, index) => (
              <tr key={index}>
                <td>{(record as AttendanceRecord).name}</td>
                <td>{new Date((record as AttendanceRecord).date_d).toLocaleDateString()}</td>
                <td>{(record as AttendanceRecord).remark}</td>
                <td>{(record as AttendanceRecord).punch_in}</td>
                <td>{(record as AttendanceRecord).punch_out}</td>
                <td>{(record as AttendanceRecord).working_hours}</td>
                <td>{(record as AttendanceRecord)["On Time"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Leave App ID</th>
              <th>Faculty CLG ID</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Reason</th>
              <th>No of Days</th>
              <th>Doc Link</th>
              <th>Status</th>
              <th>Signed By HOD</th>
              <th>Signed By Principal</th>
              <th>Alternate</th>
              <th>Status Alternate</th>
              <th>Half Full Day</th>
            </tr>
          </thead>
          <tbody>
            {facultyReport.map((record, index) => (
              <tr key={index}>
                <td>{(record as LeaveRecord).leave_app_id}</td>
                <td>{(record as LeaveRecord).faculty_clg_id}</td>
                <td>{(record as LeaveRecord).department_name}</td>
                <td>{(record as LeaveRecord).leaveName}</td>
                <td>{new Date((record as LeaveRecord).from_date).toLocaleDateString()}</td>
                <td>{new Date((record as LeaveRecord).to_date).toLocaleDateString()}</td>
                <td>{(record as LeaveRecord).reason}</td>
                <td>{(record as LeaveRecord).no_of_days}</td>
                <td>{(record as LeaveRecord).doc_link}</td>
                <td>
                  {(record as LeaveRecord).status === 0
                    ? "Pending"
                    : (record as LeaveRecord).status === 1
                    ? "Approved"
                    : (record as LeaveRecord).status === 2
                    ? "Denied"
                    : "Cancelled"}
                </td>
                <td>
                  {(record as LeaveRecord).signed_by_hod === 0
                    ? "Pending"
                    : (record as LeaveRecord).signed_by_hod === 1
                    ? "Approved"
                    : "Denied"}
                </td>
                <td>{(record as LeaveRecord).signed_by_principal}</td>
                <td>{(record as LeaveRecord).altname}</td>
                <td>
                  {(record as LeaveRecord).status_alternate === 0
                    ? "Pending"
                    : (record as LeaveRecord).status_alternate === 1
                    ? "Approved"
                    : (record as LeaveRecord).status_alternate === 2
                    ? "Denied"
                    : ""}
                </td>
                <td>{(record as LeaveRecord).half_full_day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ParticularFacultyReport;