// import React, { useEffect, useState } from 'react';
//
// import '../../admission/customeReport/customReport.css';
// import api from '../../../api';
//
// const columnMappings = {
//   Student: {
//     seat_type: 'Seat Type',
//     programm_name: 'Program ID',
//     HDegree: 'Honour Degree Subject',
//     gr_number: 'GR Number',
//     cat_id: 'Category',
//     bname: 'Branch',
//     stud_clg_id: 'College ID'
//   },
//   Personal: {
//     gender_id: 'Gender',
//     dob: 'Date of Birth',
//     religion: 'Religion',
//     communitee: 'Community',
//     minority: 'Minority',
//     caste: 'Caste',
//     sub_caste: 'Sub Caste',
//     nationality: 'Nationality',
//     place_of_birth: 'Place of Birth',
//     child_number: 'Child Number',
//     contact: 'Contact',
//     bank_account_number: 'Bank Account Number',
//     bank_name: 'Bank Name',
//     married_status: 'Marital Status',
//     aadhar_number: 'Aadhar Number',
//     last_college_attended: 'Last College Attended',
//     first_name: 'First Name',
//     middle_name: 'Middle Name',
//     last_name: 'Last Name',
//     mother_name: 'Mother\'s Name',
//     pan: 'PAN',
//   },
//   Education: {
//     dep_cgpi: 'Deploma CGPI',
//     dep_per: 'Deploma Percentage',
//     dep_marks: 'Deploma Marks',
//     dep_seat: 'Deploma Seat',
//     dep_passing_year: 'Deploma Passing Year',
//     dep_clg_name: 'Deploma College Name',
//     physics_score_in_hsc: 'Physics Score in HSC',
//     chemistry_score_in_hsc: 'Chemistry Score in HSC',
//     maths_score_hsc: 'Maths Score in HSC',
//     vocational_total_score_hsc: 'Vocational Total Score in HSC',
//     ssc_passing_year: 'SSC Passing Year',
//     ssc_seat_number: 'SSC Seat Number',
//     ssc_name_of_board: 'SSC Name of Board',
//     ssc_marks: 'SSC Marks',
//     ssc_percentage: 'SSC Percentage',
//     hsc_passing_year: 'HSC Passing Year',
//     hsc_seat_year: 'HSC Seat Year',
//     hsc_name_of_board: 'HSC Name of Board',
//     hsc_marks: 'HSC Marks',
//     hsc_percentage: 'HSC Percentage',
//     dip_board: 'Diploma Board',
//     vocational_subject: 'Vocational Subject',
//     bio_marks: 'Biology Marks',
//     ssc_total_marks: 'SSC Total Marks',
//   },
//   Entrance:{
//     entrance_name:"Entrance Name",
//     roll_number:"Roll Number",
//     app_number:"Application Number",
//     phy_per:"Physics Percentile",
//     che_per:"Chemistry Percentile",
//     maths_per:"Maths Percentile",
//     overall_per:"Overall Percentile"
//   }
//
// };
//
// const academicYears = ['2023-24','2024-25'];
//
// const ReportGenerator = () => {
//   const [selectedColumns, setSelectedColumns] = useState([]);
//   const [selectedAcademicYear, setSelectedAcademicYear] = useState('');
//   const [program, setProgram] = useState([{ programm_name: "" }]);
//   const [branch, setBranch] = useState([]);
//   const [Rp,setRp] = useState("");
//   const [rB,setRB] = useState("");
//   const [isClicked,setIsClicked] = useState(false);
//
//   const handleColumnChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedColumns((prev) =>
//       checked ? [...prev, value] : prev.filter((col) => col !== value)
//     );
//   };
//
//   const handleGenerateReport = async () => {
//     try {
//       const response = await api.post(`${process.env.REACT_APP_BASE_URL}/admission/customReport`, {
//         columns: selectedColumns,
//         academicYear: selectedAcademicYear,
//         program:Rp,
//         branch:rB
//       }, {
//         responseType: 'blob', // Ensure api treats the response as binary data
//       });
//
//       // Create a URL for the Blob
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//
//       // Create a link element to download the file
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'report.xlsx');
//
//       // Append link to the body and trigger download
//       document.body.appendChild(link);
//       link.click();
//
//       // Clean up
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url); // Revoke the object URL to free memory
//
//     } catch (error) {
//     }
//   };
//
//
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = async () => {
//
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/signup`)
//       .then((res) => {
//         setProgram(res.data["programms"]);
//         setBranch(res.data["branch"]);
//       })
//       .catch((err) => {});
//
//   };
//
//   var proItems = [];
//   var brachList = [];
//   branch.forEach(e=>{
//     brachList.push(
//       <option value={e.branch_id}>{e.bname}</option>
//     )
//   })
//   for (let i = 0; i < program.length; i++) {
//     proItems.push(
//       <option value={program[i].programm_id}>{program[i].programm_name}</option>
//     );
//   }
//
//   return (
//     <div style={{ width: '80vw' }}>
//
//       <h2>Select Academic Year</h2>
//       <select
//         value={selectedAcademicYear}
//         onChange={(e) => setSelectedAcademicYear(e.target.value)}
//       >
//         <option value="">Select Academic Year</option>
//         {academicYears.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//
//
//       <select
//         // class="form-select"
//         aria-label="Program Name"
//         onChange={(e) => {
//           setRp(e.target.value);
//         }}
//       >
//         <option value={0} selected>
//           Select The Program
//         </option>
//         {proItems}
//       </select>
//
//       <select
//         // class="form-select"
//         aria-label="Program Name"
//         onChange={(e) => {
//           setRB(e.target.value);
//         }}
//       >
//         <option value={0} selected>
//           Select The Branch
//         </option>
//         {brachList}
//       </select>
//       <br />
//       <div className="btns mt-3">
//         <button className='btn' onClick={()=>setIsClicked(true)}>Get All Columns</button>
//       </div>
//
//       {isClicked && (
//         <div>
//           {Object.keys(columnMappings).map((table) => (
//             <div key={table} className='customReportCheck'>
//               <h3 style={{ width: '100%', marginTop: '20px' }}>{table} Data</h3>
//               {Object.entries(columnMappings[table]).map(([column, displayName]) => (
//                 <div key={column} className='checkBoxDiv'>
//                   <input
//                     type="checkbox"
//                     value={column}
//                     id={column}
//                     onChange={handleColumnChange}
//                   />
//                   <label htmlFor={column}>{displayName}</label>
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div className="btns">
//             <button className='' onClick={handleGenerateReport}>Generate Report</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default ReportGenerator;
