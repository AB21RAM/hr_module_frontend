// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AbsentFaculty = () => {
//   const [absentFacultyList, setAbsentFacultyList] = useState([]);
//   const [search, setSearch] = useState("");
//   const [month, setMonth] = useState("");
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     fetchAbsentFaculty();
//   }, []);

//   const fetchAbsentFaculty = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/getAbsentFacultyList`,
//         {
//           params: {
//             date: month,
//           },
//         }
//       );
//       setAbsentFacultyList(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleMonthChange = (e) => {
//     setMonth(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const filteredList = absentFacultyList.filter((faculty) =>
//       faculty.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setAbsentFacultyList(filteredList);
//   };

//   const handleMonthFilter = () => {
//     fetchAbsentFaculty();
//   };

//   return (
//     <div className="sub-main">
//       <h4 className="fw-bolder">Absent Faculty List</h4>
//       <div className="search_faculty">
//         <div className="input">
//           <i className="material-icons">search</i>
//           <input
//             type="text"
//             placeholder="Search faculty name"
//             value={search}
//             onChange={handleSearchChange}
//           />
//           <button onClick={handleSearchSubmit}>Search</button>
//         </div>
//         <div className="input">
//           <input
//             type="month"
//             placeholder="Select month"
//             value={month}
//             onChange={handleMonthChange}
//           />
//           <button onClick={handleMonthFilter}>Filter by Month</button>
//         </div>
//       </div>
//       <div className="table">
//         <table className="table table-bordered">
//           <tr>
//             <th>Emp_ID</th>
//             <th>Faculty Name</th>
//             <th>Designation</th>
//             <th>Faculty Type</th>
//             <th>Department</th>
//             <th>Contact</th>
//             <th>Reason</th>
//           </tr>
//           {absentFacultyList.map((faculty) => (
//             <tr key={faculty.faculty_id}>
//               <td>{faculty.faculty_clg_id}</td>
//               <td>{faculty.name}</td>
//               <td>{faculty.role1}</td>
//               <td>{faculty.ftname}</td>
//               <td>{faculty.depart_name}</td>
//               <td>{faculty.contact}</td>
//               <td>
//                 <div className="reason-box">{faculty.reason}</div>
//               </td>
//             </tr>
//           ))}
//         </table>
//       </div>
//       {absentFacultyList.length === 0 && <h3>No faculty found.</h3>}
//       {msg && (
//         <h3 className="success-message">
//           <i className="material-icons tick">check_circle</i>
//           {msg}
//         </h3>
//       )}
//     </div>
//   );
// };

// export default AbsentFaculty;
