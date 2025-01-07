// // import api from "api";
// // import React, { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";
//
// // function AdmssionPrint() {
// //   const [student, setStudent] = useState([]);
// //   const [personal, setPersonal] = useState([]);
// //   const [education, setEducation] = useState([]);
// //   const [entrance, setEntr] = useState([1, 2]);
// //   const [raddress, setrAdd] = useState([{ address: "" }, { address: "" }]);
// //   const [paddress, setpAdd] = useState([{ address: "" }, { address: "" }]);
// //   const [parents, setParents] = useState([
// //     { fullname: "", email: "" },
// //     { fullname: "", email: "" },
// //     { fullname: "", email: "" },
// //   ]);
// //   const [email, setEmail] = useState("");
// //   const [docs, setDocs] = useState("");
// //   const [cat, setCat] = useState("");
// //   const [branch, setBranch] = useState("");
// //   const [program, setProgram] = useState("");
// //   const [Semester, setSemester] = useState("");
// //   const [round, setRound] = useState("");
// //   const [fee, setfee] = useState("");
// //   const [receipt, setReceipt] = useState("");
// //   const [total, setTotal] = useState("");
// //   const [seat_type, setSeat_type] = useState("");
// //   const [name, setName] = useState("");
// //   const location = new useLocation();
// //   const searchQuery = new URLSearchParams(location.search);
//
// //   useEffect(() => {
// //     if (
// //       localStorage.getItem("user_type") == 4 ||
// //       localStorage.getItem("user_type") == 2
// //     ) {
// //       fetchData(localStorage.getItem("uid"));
// //       fetchFee(localStorage.getItem("uid"));
// //     } else {
// //       fetchData(searchQuery.get("id"));
// //       fetchFee(searchQuery.get("id"));
// //     }
// //     alert("Please Visit the account section to pay your FEE. Thank You!");
// //   }, []);
//
// //   const fetchData = (id) => {
// //     api
// //       .get(
// //         `${process.env.REACT_APP_BASE_URL}/admission/printApplication?uid=${id}`
// //       )
// //       .then((res) => {
// //         setStudent(res.data["student"][0]);
// //         if (res.data["address"].length < 2) {
// //           setrAdd(res.data["address"][0]);
// //           setpAdd(res.data["address"][0]);
// //         } else {
// //           setrAdd(res.data["address"][0]);
// //           setpAdd(res.data["address"][1]);
// //         }
// //         setEducation(res.data["education"][0]);
// //         setParents(res.data["parents"]);
// //         setPersonal(res.data["personal"][0]);
// //         setEmail(res.data["email"]);
// //         setDocs(res.data["docs"][0]);
// //         setEntr(res.data["entrence"]);
// //         setBranch(res.data["branch"][0].bname);
// //         setProgram(res.data["program"][0].programm_name);
// //         setSemester(res.data["sem"]);
// //         setRound(res.data["allowed_application"][0].round);
// //         setCat(res.data["allowed_application"][0].cat_id);
// //         setSeat_type(res.data["allowed_application"][0].seat_type);
// //         setName(res.data["allowed_application"][0].name);
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const fetchFee = (id) => {
// //     api
// //       .get(
// //         `${process.env.REACT_APP_BASE_URL}/admission/feeBalanceStud?uid=${id}`
// //       )
// //       .then((res) => {
// //         setfee(res.data.total_paid);
// //         setTotal(res.data.total);
// //         setReceipt(res.data.receipt);
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   let tableItem = [];
//
// //   if (entrance.length > 0) {
// //     for (let i = 0; i < entrance.length; i++) {
// //       tableItem.push(
// //         <>
// //           <tr>
// //             <td class="para-head">Entrance Exam Name</td>
// //             <td>{entrance[i].entrance_name}</td>
// //             <td class="para-head">Score</td>
// //             <td>{entrance[i].overall_per}</td>
// //           </tr>
//
// //           <tr>
// //             <td class="para-head">Roll No</td>
// //             <td>{entrance[i].roll_number}</td>
// //             <td class="para-head">Application No</td>
// //             <td>{entrance[i].app_number}</td>
// //           </tr>
//
// //           <tr>
// //             <td class="para-head">Physics Score</td>
// //             <td>{entrance[i].phy_per}</td>
// //             <td class="para-head">Chemistry Score </td>
// //             <td>{entrance[i].che_per}</td>
// //           </tr>
// //           <tr>
// //             <td class="para-head">Maths Score </td>
// //             <td colSpan={3}>{entrance[i].maths_per}</td>
// //           </tr>
// //           <br />
// //         </>
// //       );
// //     }
// //   }
//
// //   tableItem.push(
// //     <>
// //       <tr>
// //         <td class="para-head">SSC Passing Year</td>
// //         <td>{education.ssc_passing_year}</td>
// //         <td class="para-head">Board Name</td>
// //         <td>{education.ssc_name_of_board}</td>
// //       </tr>
//
// //       <tr>
// //         <td class="para-head">Seat Number</td>
// //         <td>{education.ssc_seat_number}</td>
// //         <td class="para-head">SSC Percentage</td>
// //         <td>{education.ssc_percentage}</td>
// //       </tr>
//
// //       <tr>
// //         <td class="para-head">SSC Marks</td>
// //         <td>{education.ssc_marks}</td>
// //         <td class="para-head">Out off </td>
// //         <td>500</td>
// //       </tr>
// //       <br />
// //     </>
// //   );
//
// //   var max = 0;
// //   if (
// //     education.chemistry_score_in_hsc > education.bio_marks &&
// //     education.chemistry_score_in_hsc > education.vocational_total_score_hsc
// //   ) {
// //     max = education.chemistry_score_in_hsc;
// //   } else if (
// //     education.chemistry_score_in_hsc < education.bio_marks &&
// //     education.bio_marks > education.vocational_total_score_hsc
// //   ) {
// //     max = education.bio_marks;
// //   } else {
// //     max = education.vocational_total_score_hsc;
// //   }
//
// //   if (education.hsc_passing_year != null) {
// //     tableItem.push(
// //       <>
// //         <tr>
// //           <td class="para-head">HSC Passing Year</td>
// //           <td>{education.hsc_passing_year}</td>
// //           <td class="para-head">Board Name</td>
// //           <td>{education.hsc_name_of_board}</td>
// //         </tr>
//
// //         <tr>
// //           <td class="para-head">Seat Number</td>
// //           <td>{education.hsc_seat_year}</td>
// //           <td class="para-head">HSC Percentage</td>
// //           <td>{education.hsc_percentage}</td>
// //         </tr>
//
// //         <tr>
// //           <td class="para-head">HSC Marks Obtained</td>
// //           <td>{education.hsc_marks}</td>
// //           <td class="para-head">Out off </td>
// //           <td>650</td>
// //         </tr>
// //         <tr>
// //           <td class="para-head">Physics Marks</td>
// //           <td>{education.physics_score_in_hsc}</td>
// //           <td class="para-head">Chemistry Marks </td>
// //           <td>{education.chemistry_score_in_hsc}</td>
// //         </tr>
// //         <tr>
// //           <td class="para-head">Maths Marks</td>
// //           <td>{education.maths_score_hsc}</td>
// //           <td class="para-head">Biology Marks</td>
// //           <td>{education.bio_marks}</td>
// //         </tr>
// //         <tr>
// //           <td class="para-head">
// //             Vocational Subject-{education.vocational_subject}
// //           </td>
// //           <td>{education.vocational_total_score_hsc}</td>
// //           <td class="para-head">Percentage</td>
// //           <td>
// //             {(Number(education.physics_score_in_hsc) +
// //               Number(max) +
// //               Number(education.maths_score_hsc)) /
// //               3}
// //           </td>
// //         </tr>
// //         <br />
// //       </>
// //     );
// //   }
//
// //   if (education.dep_passing_year != null) {
// //     tableItem.push(
// //       <>
// //         <tr>
// //           <td class="para-head">Diploma Passing Year</td>
// //           <td>{education.dep_passing_year}</td>
// //           <td class="para-head">College Name</td>
// //           <td>{education.dep_clg_name}</td>
// //         </tr>
//
// //         <tr>
// //           <td class="para-head">Seat Number</td>
// //           <td>{education.dep_seat}</td>
// //           <td class="para-head">Percentage</td>
// //           <td>{education.dep_per}</td>
// //         </tr>
//
// //         <tr>
// //           <td class="para-head">Marks Obtained</td>
// //           <td>{education.dep_marks}</td>
// //           <td class="para-head">CGPI </td>
// //           <td>{education.dep_cgpi}</td>
// //         </tr>
//
// //         <br />
// //       </>
// //     );
// //   }
//
// //   if (Semester.length > 0) {
// //     for (let i = 0; i < Semester.length; i++) {
// //       tableItem.push(
// //         <>
// //           <tr>
// //             <td class="para-head" colSpan={2}>
// //               <strong>Semester - {Semester[i].sem_number}</strong>
// //             </td>
// //             <td class="para">SGPA</td>
// //             <td>{Semester[i].grade_obtained}</td>
// //           </tr>
// //           <tr>
// //             <td class="para">Total Number of Internal K.T.</td>
// //             <td>{Semester[i].internal_kt}</td>
// //             <td class="para">Total Number of External K.T.</td>
// //             <td>{Semester[i].external_kt}</td>
// //           </tr>
// //           <tr>
// //             <td class="para">Total Number of K.T</td>
// //             <td>{Semester[i].total_kt}</td>
// //             <td class="para">Aggregate CGPA</td>
// //             <td>{Semester[i].aggregated_score}</td>
// //           </tr>
// //         </>
// //       );
// //     }
// //   }
//
// //   var hdgreeItem = [];
// //   if (student.HDegree != null) {
// //     <tr>
// //       <td class="para">Do you Want To apply For Hounors Degree</td>
// //       <td>Yes</td>
// //       <td class="para">Subject</td>
// //       <td>{student.HDegree}</td>
// //     </tr>;
// //   }
//
// //   const formatLink = (link) => {
// //     return String(link).substring(0, 4) === 'http' ? link : 'https://vppcoe-va.getflytechnologies.com/api/security/view/' + link;
// //   };
//
// //   return (
// //     <div className="containers">
// //       <style>
// //         {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
// //                 margin: 0;
// //                 padding: 0;
// //                 box-sizing: border-box;
//
// //               }
// //             body{
// //               font-family: 'Inter', sans-serif;
// //             }
//
// //             .containers{
// //                 width: 90%;
// //                 margin: auto;
// //             }
// //             h2{
// //                 font-size:25px;
// //             }
// //             .header{
// //                 display: flex;
// //             }
// //             .header-left{
// //                 flex: 3;
// //                 line-height:1.5;
// //                 // text-align: center;
// //             }
//
// //             table.GeneratedTable {
// //                 width: 100%;
// //                 margin: auto;
// //                 font-size:.8rem;
// //                 background-color: #ffffff;
// //                 border-collapse: collapse;
// //                 /* border: none; */
// //                 color: #000000;
// //             }
//
// //             table.GeneratedTable td,
// //             table.GeneratedTable th {
// //                 padding: 5px;
// //             }
//
// //             table.GeneratedTable thead {
// //                 background-color: #ffffff;
// //             }
// //             .main{
// //                 display: flex;
// //                 flex-direction: column;
// //                 gap: 2px;
// //                 width: 100%;
// //             }
// //             .card{
// //                 border: 1px solid #000;
// //                 padding: 1rem;
// //             }
// //             .para-head{
// //                 font-weight: bolder;
// //             }
// //             .tableHead{
// //                 text-align: start;
// //                 font-size: 1.3rem;
// //                 font-weight: bolder;
// //                 text-decoration:underline;
// //               }
// //             table.TableBorder {
// //                 width:100%
// //                 margin: 0;
// //             }
//
// //             table.TableBorder td, table.SSC th, table.SSC td{
// //                border-width: 1px;
// //                border-color: #000000;
// //                border-style: solid;
// //                border-collapse: collapse;
// //             }
//
// //                 .signature{
// //                     display:flex;
// //                     justify-content:space-between;
// //                 }
//
// //                 @media print{
// //                     .pagebreak{
// //                         page-break-after:always;
// //                     }
// //                 }
//
// //                 `}
// //       </style>
// //       <center>
// //         <button
// //           onClick={(e) => {
// //             e.target.style.display = "none";
// //             window.print();
// //           }}
// //         >
// //           Print
// //         </button>
// //       </center>
//
// //       <img
// //         src="/images/header.png"
// //         style={{ width: "100%", marginBottom: "1rem" }}
// //         alt=""
// //       />
// //       <div
// //         class="header"
// //         style={{ height: "auto", width: "100%", fontSize: "16px" }}
// //       >
// //         <br />
// //         <div class="header-left">
// //           <center>
// //             <h2 style={{ fontSize: "20px" }}>
// //               Application For Admission A.Y. 2024-25
// //             </h2>
// //             <h2 style={{ fontSize: "20px" }}>{program}</h2>
// //             <h2 style={{ fontSize: "20px" }}>{branch}</h2>
// //             <h2 style={{ fontSize: "20px" }}>{seat_type}</h2>
// //           </center>
// //         </div>
// //         <div
// //           class="header-right"
// //           style={{ display: "flex", flexDirection: "column" }}
// //         >
// //            <img
// //             src={String(docs.photo).substring(0,4)=='http'?docs.photo:'https://vppcoe-va.getflytechnologies.com/api/security/view/'+docs.photo}
// //             style={{ width: "100px", height: "100px" }}
// //             alt="Applicant's Image"
// //           />
// //           <img
// //             src={String(docs.signature).substring(0,4)=='http'?docs.signature:'https://vppcoe-va.getflytechnologies.com/api/security/view/'+docs.signature}
// //             style={{ width: "100px", height: "50px" }}
// //             alt="Applicant's Image"
// //           />
// //         </div>
// //       </div>
// //       <br />
// //       <div class="main">
// //         <div class="details card">
// //           <table class="GeneratedTable">
// //             <tbody>
// //               <th class="tableHead">Details of Admission</th>
// //               <tr>
// //                 <td class="para-head">Student ID No.</td>
// //                 <td>{student.stud_clg_id}</td>
// //                 <td class="para-head">Allotment</td>
// //                 <td>
// //                   {seat_type}-{round}
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Selected Program</td>
// //                 <td>{program}</td>
// //                 <td class="para-head">Branch</td>
// //                 <td>{branch}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Seat Type</td>
// //                 <td>{cat}</td>
// //                 <td class="para-head">GR. No.</td>
// //                 <td>{student.gr_number}</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //         <br />
// //         <div class="personal card">
// //           <table class="GeneratedTable">
// //             <tbody>
// //               <th class="tableHead">Personal Details</th>
// //               <tr>
// //                 <td class="para-head">Name</td>
// //                 <td>{name}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Gender</td>
// //                 <td>{personal.gender_id == 0 ? <>Male</> : <>Female</>}</td>
// //                 <td class="para-head">Birth Date</td>
// //                 <td>
// //                   {new Date(personal.dob).toLocaleDateString("en-NZ")}
// //                 </td>{" "}
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Religion</td>
// //                 <td>{personal.religion}</td>
// //                 <td class="para-head">Community</td>
// //                 <td>{personal.communitee}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Minority</td>
// //                 <td>{personal.minority}</td>
// //                 <td class="para-head">Caste</td>
// //                 <td>{personal.caste}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Sub Caste</td>
// //                 <td>{personal.sub_caste}</td>
// //                 <td class="para-head">Place of Birth</td>
// //                 <td>{personal.place_of_birth}</td>
//
// //               </tr>
//
// //               <tr>
// //                 <td class="para-head">Student Email ID</td>
// //                 <td>{email}</td>
// //                 <td class="para-head">Student Mobile No</td>
// //                 <td>{personal.contact}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Student Bank A/C No.</td>
// //                 <td>{personal.bank_account_number}</td>
// //                 <td class="para-head">Bank Name</td>
// //                 <td>{personal.bank_name}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Last Attended College Name</td>
// //                 <td>{personal.last_college_attended}</td>
// //                 <td class="para-head">Married/Single</td>
// //                 <td>
// //                   {personal.married_status == 0 ? <>Single</> : <>Married</>}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td class="para-head">Pan Number</td>
// //                 <td>{personal.pan}</td>
// //                 <td class="para-head">Adhar Card Number</td>
// //                 <td>{personal.aadhar_number}</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //           <br />
// //           <table class="GeneratedTable">
// //             <tbody>
// //               <th class="tableHead" colSpan={2}>
// //                 Address of Correspondance
// //               </th>
// //               <th class="tableHead" colSpan={2}>
//
// //               </th>
// //               <tr>
// //                 <td class="para-head">Street Name</td>
// //                 <td>{raddress.street_name}</td>
// //                 <td class="para-head">Buildng Number/Flat Number</td>
// //                 <td>{raddress.building_number}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">landmark </td>
// //                 <td>{raddress.landmark}</td>
// //                 <td class="para-head">City</td>
// //                 <td>{raddress.city}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">State</td>
// //                 <td>{raddress.state}</td>
// //                 <td class="para-head">Pincode</td>
// //                 <td>{raddress.pincode}</td>
// //               </tr>
// //               <tr></tr>
// //             </tbody>
// //           </table>
// //           <br />
// //           <table class="GeneratedTable">
// //             <tbody>
// //               <th class="tableHead" colSpan={2}>
// //                 Permanent Address
// //               </th>
// //               <th class="tableHead" colSpan={2}>
//
// //               </th>
// //               <tr>
// //                 <td class="para-head">Street Name</td>
// //                 <td>{paddress.street_name}</td>
// //                 <td class="para-head">Buildng Number/Flat Number</td>
// //                 <td>{paddress.building_number}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">landmark </td>
// //                 <td>{paddress.landmark}</td>
// //                 <td class="para-head">City</td>
// //                 <td>{paddress.city}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">State</td>
// //                 <td>{paddress.state}</td>
// //                 <td class="para-head">Pincode</td>
// //                 <td>{paddress.pincode}</td>
// //               </tr>
// //               <tr></tr>
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="pagebreak"></div>
// //         <br />
// //         <br />
// //         <div class="academic card">
// //           <table class="GeneratedTable TableBorder">
// //             <tbody>
// //               <th class="tableHead">Academic Details</th>
//
// //               {tableItem}
// //             </tbody>
// //           </table>
// //         </div>
// //         <br />
// //         <div className="pagebreak"></div>
// //         <br />
// //         <div class="parents card">
// //           <table class="GeneratedTable">
// //             <tbody>
// //               <th class="tableHead">Parent/Guardian Information</th>
// //               <tr>
// //                 <td class="para-head">Father Name</td>
// //                 <td>{parents[0]["fullname"].toLocaleUpperCase()}</td>
// //                 <td class="para-head">Email id</td>
// //                 <td>{parents[0].email}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Contact No</td>
// //                 <td>{parents[0].contact}</td>
// //                 <td class="para-head">Occupation</td>
// //                 <td>{parents[0].occupation}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Designation</td>
// //                 <td>{parents[0].designation}</td>
// //               </tr>
//
// //               <tr>
// //                 <td class="para-head">Mother Name</td>
// //                 <td>{parents[1].fullname.toLocaleUpperCase()}</td>
// //                 <td class="para-head">Email id</td>
// //                 <td>{parents[1].email}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Contact No</td>
// //                 <td>{parents[1].contact}</td>
// //                 <td class="para-head">Occupation</td>
// //                 <td>{parents[1].occupation}</td>
// //               </tr>
// //               <tr>
// //                 <td class="para-head">Designation</td>
// //                 <td>{parents[1].designation}</td>
// //               </tr>
//
// //               {parents.length > 2 ? (
// //                 <>
// //                   <tr>
// //                     <td class="para-head">Guardian Name</td>
// //                     <td>{parents[2].fullname}</td>
// //                     <td class="para-head">Email id</td>
// //                     <td>{parents[2].email}</td>
// //                   </tr>
// //                   <tr>
// //                     <td class="para-head">Contact No</td>
// //                     <td>{parents[2].contact}</td>
// //                     <td class="para-head">Occupation</td>
// //                     <td>{parents[2].occupation}</td>
// //                   </tr>
// //                   <tr>
// //                     <td class="para-head">Designation</td>
// //                     <td>{parents[2].designation}</td>
// //                   </tr>
// //                 </>
// //               ) : (
// //                 <></>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //         <br />
// //         <div class="documents card">
// //           <table className="GeneratedTable">
// //             <tbody>
// //               <th className="tableHead">Documents Submitted</th>
//
// //               <tr>
// //                 <td>Cap Allotment Letter</td>
// //                 <td>
// //                   {docs.cap_allotment_letter ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.cap_allotment_letter)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>FC Verification Letter</td>
// //                 <td>
// //                   {docs.fc_center_varification ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.fc_center_varification)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>SSC Marksheet</td>
// //                 <td>
// //                   {docs.ssc_marksheet ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.ssc_marksheet)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>HSC Marksheet</td>
// //                 <td>
// //                   {docs.hsc_marksheet ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.hsc_marksheet)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Leaving Certificate</td>
// //                 <td>
// //                   {docs.lc ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.lc)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>MHTCET Marksheet</td>
// //                 <td>
// //                   {docs.mht_cet_score_card ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.mht_cet_score_card)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Domicle</td>
// //                 <td>
// //                   {docs.domicile ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.domicile)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Aadhar Card</td>
// //                 <td>
// //                   {docs.aadhar_card ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.aadhar_card)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Ration card</td>
// //                 <td>
// //                   {docs.ration_card ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.ration_card)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Bank Passbook</td>
// //                 <td>
// //                   {docs.back_passbook ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.back_passbook)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Jee Score card</td>
// //                 <td>
// //                   {docs.jee_score_card ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.jee_score_card)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>Results</td>
// //                 <td>
// //                   {docs.fee_reciept ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.fee_reciept)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               <tr>
// //                 <td>College Admission Letter</td>
// //                 <td>
// //                   {docs.college_admission_letter ? (
// //                     <button style={{ padding: '2px' }}>
// //                       <a
// //                         style={{ textDecoration: 'none' }}
// //                         href={formatLink(docs.college_admission_letter)}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                       >
// //                         Yes
// //                       </a>
// //                     </button>
// //                   ) : (
// //                     <>No</>
// //                   )}
// //                 </td>
// //               </tr>
//
// //               {(cat.toLocaleLowerCase().includes('obc') ||
// //                 cat.toLocaleLowerCase().includes('sc') ||
// //                 cat.toLocaleLowerCase().includes('st') ||
// //                 cat.toLocaleLowerCase().includes('nt') ||
// //                 cat.toLocaleLowerCase().includes('vj') ||
// //                 cat.toLocaleLowerCase().includes('dt') ||
// //                 cat.toLocaleLowerCase().includes('sbc')) && (
// //                 <>
// //                   <tr>
// //                     <td>Caste Certificate</td>
// //                     <td>
// //                       {docs.caste_certificate ? (
// //                         <button style={{ padding: '2px' }}>
// //                           <a
// //                             style={{ textDecoration: 'none' }}
// //                             href={formatLink(docs.caste_certificate)}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                           >
// //                             Yes
// //                           </a>
// //                         </button>
// //                       ) : (
// //                         <>No</>
// //                       )}
// //                     </td>
// //                   </tr>
// //                   <tr>
// //                     <td>Caste Validation</td>
// //                     <td>
// //                       {docs.caste_validation ? (
// //                         <button style={{ padding: '2px' }}>
// //                           <a
// //                             style={{ textDecoration: 'none' }}
// //                             href={formatLink(docs.caste_validation)}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                           >
// //                             Yes
// //                           </a>
// //                         </button>
// //                       ) : (
// //                         <>No</>
// //                       )}
// //                     </td>
// //                   </tr>
// //                   {!cat.toLocaleLowerCase().includes('sc') &&
// //                     !cat.toLocaleLowerCase().includes('st') && (
// //                       <tr>
// //                         <td>Non Creamy Layer Certificate</td>
// //                         <td>
// //                           {docs.nonCreamy ? (
// //                             <button style={{ padding: '2px' }}>
// //                               <a
// //                                 style={{ textDecoration: 'none' }}
// //                                 href={formatLink(docs.nonCreamy)}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 Yes
// //                               </a>
// //                             </button>
// //                           ) : (
// //                             <>No</>
// //                           )}
// //                         </td>
// //                       </tr>
// //                     )}
// //                 </>
// //               )}
//
// //               {cat.toLocaleLowerCase().includes('ews') && (
// //                 <tr>
// //                   <td>EWS Certificate</td>
// //                   <td>
// //                     {docs.ews_pro ? (
// //                       <button style={{ padding: '2px' }}>
// //                         <a
// //                           style={{ textDecoration: 'none' }}
// //                           href={formatLink(docs.ews_pro)}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                         >
// //                           Yes
// //                         </a>
// //                       </button>
// //                     ) : (
// //                       <>No</>
// //                     )}
// //                   </td>
// //                 </tr>
// //               )}
//
// //               {!cat.toLocaleLowerCase().includes('open') && (
// //                 <tr>
// //                   <td>Income Certificate</td>
// //                   <td>
// //                     {docs.income_certificate ? (
// //                       <button style={{ padding: '2px' }}>
// //                         <a
// //                           style={{ textDecoration: 'none' }}
// //                           href={formatLink(docs.income_certificate)}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                         >
// //                           Yes
// //                         </a>
// //                       </button>
// //                     ) : (
// //                       <>No</>
// //                     )}
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="pagebreak"></div>
// //         <br />
//
// //         <div class="documents card">
// //           <table class="GeneratedTable" style={{ fontSize: "10px" }}>
// //             <tbody>
// //               <center>
// //                 {" "}
// //                 <b>
// //                   <th className="tableHead">Undertaking </th>
// //                 </b>
// //               </center>
//
// //               <tr>
// //                 <td>
// //                 I  Mr/Mrs. {personal.name} hereby  declare that I am seeking admission in the SECOND YEAR/THIRD YEAR/FINAL YEAR {program} {branch} course in Vasantdada  Patil  Pratishthan's College of Engineering And Visual Arts on my own.
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //           <ol style={{ fontSize: "9px" }}>
// //             <li>
// //             I have read all the rules and regulations of admission declared by University for the year 2024-25 and undertake to abide the same.
// //             </li>
// //             <li>
// //                 The information given by me in my application is true to the best of my knowledge and belief.
// //             </li>
// //             <li>
// //             I have not been debarred from appearing at any examination held by Govt., University, College or any statutory body in India.
// //             </li>
// //             <li>
// //             I hereby agree to conform to any rules, acts and laws enforced by Govt. and I hereby undertake that so long as I remain student of the college, I will do nothing either inside or outside the college which may result in disciplinary action against me under the rules, acts and laws.
// //             </li>
// //             <li>
// //             I fully understand that the Principal of Vasantdada Patil Pratishthan's College of Engineering And Visual Arts,  Sion,  Mumbai will have full authority to expel me from the college for any infringement of the rules of conduct and discipline.
// //             </li>
// //             <li>
// //               I am aware that there is likely to be change in fee structure and
// //               I undertake to pay fee, whatsoever approved by the Fee Regulating
// //               Authority.
// //             </li>
// //             <li>
// //                 I am aware that there is likely to be a change in fee structure and I undertake to pay fee, whatsoever approved by the Fee Regulating Authority.
// //             </li>
// //             <li>
// //                 I shall not ask for a transfer from this college to any other college.
// //             </li>
// //             <li>
// //                 I am aware that, I will not be allowed to appear for the examination if I do not attend 75% classes in theory and 100% practicals.
// //             </li>
// //             <li>
// //                 I am aware that, I will not be allowed to benefit for the Govt. Scholarship/Freeship if I do not attend 75% classes in theory and 100% practicals.
// //             </li>
// //             <li>
// //               {" "}
// //               I also know that, I will not be allowed to appear for the examinations if I fail to submit the satisfactorily all the assignment, jobs, journals, drawing,repon as specified by the norms of University within stipulated time.
// //             </li>
// //             <li>
// //               {" "}
// //               I am aware that if I indulge in Anti-National Activities contrary to the provisions of acts and laws enforced by the Govt. and any such activity contrary to rules and disciplinary norms as stated above may result in disciplinary action without prior notice from Principal and that I may expelled from thecollege due to the same.{" "}
// //             </li>
// //             <li>
// //               {" "}
// //               I know that according to Maharashtra Prohibition of ragging Act 1999, ragging of any kind Physical or Mental within or outside the campus is strictlyprohibited by law. A student found and proved accused in the same will be debarred from the course and shall not be admitted in any educational institution for a period of 5 years from the date of his dismissal. Convicted student may be punished with imprisonment for a term upto 2 years/or penalty which may extend upto Ten Thousand Rupees.
// //             </li>
// //             <li>
// //             1 have also read all the Anti Ragging Rules Regulations of AICTE and UGC and I hereby undertake to abide by all these rules and regulations and to give anti ragging undertaking to the Institute.
// //             </li>
// //             <li>
// //             I am aware that it is mandatory to fill-in the online E-Scholarship Form for the Reserved Category (EBC/EWS/SC/ST/DT/NT/OBC/SBC/SEBC) at https/mahadbtmahait gov.in  and submit duly filled-in print copy with required documents to the Students Section (Principal Office) within 15 days from the date of admission. Failing to do so, I am liable to pay the entire fees.
// //             </li>
// //             <li>
// //               {" "}
// //               I shall open a Saving Bank Account in Union Bank of India, Sion branch and furnish the details of the Account Number, MICR CODE, NEFT CODE within 15 days from the date of admission.
// //             </li>
// //             <li>
// //               {" "}
// //               Have you enrolled your name in voters list: Yes / No<br/><br />
// //               If yes please give Voter ID No._________________
// //               <br />
// //               If No Then I hereby undertake to enroll my name in voter list as per the norms of Election Commission of India
// //             </li>
// //           </ol>
// //           <div class="signature" onLoad={window.print}>
// //             <div className="student_sign">
// //               <br />
// //               <h4 style={{ fontSize: "16px" }}>Signature of Student</h4>
// //             </div>
// //             <div className="parent_sign" style={{ fontSize: "14px" }}>
// //               <br />
// //               <h4 style={{ fontSize: "16px" }}>Signature of Parent/Guardian</h4>
// //             </div>
// //           </div>
// //           <h4 style={{ fontSize: "16px" }}>Date</h4>
// //         </div>
//
// //         <div className="line"></div>
// //         <div class="office">
// //           <center>
// //             <b>
// //               <h4 className="para-head" style={{ fontSize: "14px" }}>
// //                 For Office Use Only
// //               </h4>
// //             </b>
// //           </center>
//
// //           <table style={{ fontSize: "12px" }}>
// //             <tbody>
// //               <tr>
// //                 <td>College Fee Receipt No.</td>
// //                 <td> &nbsp;{receipt} &nbsp;</td>
// //                 <td>Paid Amount</td>
// //                 <td>&nbsp; {fee}&nbsp; </td>
// //                 <td>Due Amount</td>
// //                 <td> &nbsp;{(total - fee)==0?'':total - fee} &nbsp;</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //           <td className="para-head" style={{ fontSize: "14px" }}>
// //             Remark:
// //           </td>
// //           <table className="GeneratedTable TableBorder">
// //             <tbody>
// //               {localStorage.getItem("program") > 2 ? (
// //                 <tr>
// //                   <td
// //                     className="para-head"
// //                     style={{ height: "20px", textAlign: "center" }}
// //                   >
// //                     Account Section
// //                   </td>
// //                   <td
// //                     className="para-head"
// //                     style={{ height: "20px", textAlign: "center" }}
// //                   >
// //                     Exam Section
// //                   </td>
// //                   <td
// //                     className="para-head"
// //                     style={{ height: "20px", textAlign: "center" }}
// //                   >
// //                     Student Section
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 <></>
// //               )}
//
// //               <tr>
// //                 <td style={{ height: "50px" }}></td>
// //                 <td style={{ height: "50px" }}></td>
// //                 <td style={{ height: "50px" }}></td>
// //               </tr>
// //             </tbody>
// //           </table>
//
// //           <table className="GeneratedTable" style={{ fontSize: "12px" }}>
// //             <br />
// //             <br />
// //             <br />
// //             <br />
// //             <tbody>
// //               <tr>
// //                 {localStorage.getItem("program") <= 2 ? (
// //                   <>
// //                     {" "}
// //                     <td className="para-head">Converner Admission Committee</td>
// //                     <td className="para-head">
// //                       Document Verification Committee Member
// //                     </td>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <td className="para-head">Exam Section</td>
// //                   </>
// //                 )}
// //                 <td className="para-head">Student Section</td>
// //                 <td className="para-head">Scholership Section</td>
// //                 <td className="para-head">Account Section</td>
// //                 <td className="para-head">Registrar</td>
// //                 <td className="para-head">Principal</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
//
// // export default AdmssionPrint;
//
//
// // import api from "api";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import api from "../../../api";
//
// function AdmssionPrint() {
//   const [student, setStudent] = useState([]);
//   const [personal, setPersonal] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [entrance, setEntr] = useState([1, 2]);
//   const [raddress, setrAdd] = useState([{ address: "" }, { address: "" }]);
//   const [paddress, setpAdd] = useState([{ address: "" }, { address: "" }]);
//   const [parents, setParents] = useState([
//     { fullname: "", email: "" },
//     { fullname: "", email: "" },
//     { fullname: "", email: "" },
//   ]);
//   const [email, setEmail] = useState("");
//   const [docs, setDocs] = useState("");
//   const [cat, setCat] = useState("");
//   const [branch, setBranch] = useState("");
//   const [program, setProgram] = useState("");
//   const [Semester, setSemester] = useState("");
//   const [round, setRound] = useState("");
//   const [fee, setfee] = useState("");
//   const [receipt, setReceipt] = useState("");
//   const [total, setTotal] = useState("");
//   const [seat_type, setSeat_type] = useState("");
//   const [name, setName] = useState("");
//   const location = new useLocation();
//   const searchQuery = new URLSearchParams(location.search);
//
//   useEffect(() => {
//     if (
//       localStorage.getItem("user_type") == 4 ||
//       localStorage.getItem("user_type") == 2
//     ) {
//       fetchData(localStorage.getItem("uid"));
//       fetchFee(localStorage.getItem("uid"));
//     } else {
//       fetchData(searchQuery.get("id"));
//       fetchFee(searchQuery.get("id"));
//     }
//     alert("Please Visit the account section to pay your FEE. Thank You!");
//   }, []);
//
//   const fetchData = (id) => {
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/printApplication?uid=${id}`
//       )
//       .then((res) => {
//         setStudent(res.data["student"][0]);
//         if (res.data["address"].length < 2) {
//           setrAdd(res.data["address"][0]);
//           setpAdd(res.data["address"][0]);
//         } else {
//           setrAdd(res.data["address"][0]);
//           setpAdd(res.data["address"][1]);
//         }
//         setEducation(res.data["education"][0]);
//         setParents(res.data["parents"]);
//         setPersonal(res.data["personal"][0]);
//         setEmail(res.data["email"]);
//         setDocs(res.data["docs"][0]);
//         setEntr(res.data["entrence"]);
//         setBranch(res.data["branch"][0].bname);
//         setProgram(res.data["program"][0].programm_name);
//         setSemester(res.data["sem"]);
//         setRound(res.data["allowed_application"][0].round);
//         setCat(res.data["allowed_application"][0].cat_id);
//         setSeat_type(res.data["allowed_application"][0].seat_type);
//         setName(res.data["allowed_application"][0].name);
//       })
//       .catch((err) => {
//       });
//   };
//
//   const fetchFee = (id) => {
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/feeBalanceStud?uid=${id}`
//       )
//       .then((res) => {
//         setfee(res.data.total_paid);
//         setTotal(res.data.total);
//         setReceipt(res.data.receipt);
//       })
//       .catch((err) => {
//       });
//   };
//
//   let tableItem = [];
//
//   if (entrance.length > 0) {
//     for (let i = 0; i < entrance.length; i++) {
//       tableItem.push(
//         <>
//           <tr>
//             <td class="para-head">Entrance Exam Name</td>
//             <td>{entrance[i].entrance_name}</td>
//             <td class="para-head">Score</td>
//             <td>{entrance[i].overall_per}</td>
//           </tr>
//
//           <tr>
//             <td class="para-head">Roll No</td>
//             <td>{entrance[i].roll_number}</td>
//             <td class="para-head">Application No</td>
//             <td>{entrance[i].app_number}</td>
//           </tr>
//
//           <tr>
//             <td class="para-head">Physics Score</td>
//             <td>{entrance[i].phy_per}</td>
//             <td class="para-head">Chemistry Score </td>
//             <td>{entrance[i].che_per}</td>
//           </tr>
//           <tr>
//             <td class="para-head">Maths Score </td>
//             <td colSpan={3}>{entrance[i].maths_per}</td>
//           </tr>
//           <br />
//         </>
//       );
//     }
//   }
//
//   tableItem.push(
//     <>
//       <tr>
//         <td class="para-head">SSC Passing Year</td>
//         <td>{education.ssc_passing_year}</td>
//         <td class="para-head">Board Name</td>
//         <td>{education.ssc_name_of_board}</td>
//       </tr>
//
//       <tr>
//         <td class="para-head">Seat Number</td>
//         <td>{education.ssc_seat_number}</td>
//         <td class="para-head">SSC Percentage</td>
//         <td>{education.ssc_percentage}</td>
//       </tr>
//
//       <tr>
//         <td class="para-head">SSC Marks</td>
//         <td>{education.ssc_marks}</td>
//         <td class="para-head">Out off </td>
//         <td>500</td>
//       </tr>
//       <br />
//     </>
//   );
//
//   var max = 0;
//   if (
//     education.chemistry_score_in_hsc > education.bio_marks &&
//     education.chemistry_score_in_hsc > education.vocational_total_score_hsc
//   ) {
//     max = education.chemistry_score_in_hsc;
//   } else if (
//     education.chemistry_score_in_hsc < education.bio_marks &&
//     education.bio_marks > education.vocational_total_score_hsc
//   ) {
//     max = education.bio_marks;
//   } else {
//     max = education.vocational_total_score_hsc;
//   }
//
//   if (education.hsc_passing_year != null) {
//     tableItem.push(
//       <>
//         <tr>
//           <td class="para-head">HSC Passing Year</td>
//           <td>{education.hsc_passing_year}</td>
//           <td class="para-head">Board Name</td>
//           <td>{education.hsc_name_of_board}</td>
//         </tr>
//
//         <tr>
//           <td class="para-head">Seat Number</td>
//           <td>{education.hsc_seat_year}</td>
//           <td class="para-head">HSC Percentage</td>
//           <td>{education.hsc_percentage}</td>
//         </tr>
//
//         <tr>
//           <td class="para-head">HSC Marks Obtained</td>
//           <td>{education.hsc_marks}</td>
//           <td class="para-head">Out off </td>
//           <td>650</td>
//         </tr>
//         <tr>
//           <td class="para-head">Physics Marks</td>
//           <td>{education.physics_score_in_hsc}</td>
//           <td class="para-head">Chemistry Marks </td>
//           <td>{education.chemistry_score_in_hsc}</td>
//         </tr>
//         <tr>
//           <td class="para-head">Maths Marks</td>
//           <td>{education.maths_score_hsc}</td>
//           <td class="para-head">Biology Marks</td>
//           <td>{education.bio_marks}</td>
//         </tr>
//         <tr>
//           <td class="para-head">
//             Vocational Subject-{education.vocational_subject}
//           </td>
//           <td>{education.vocational_total_score_hsc}</td>
//           <td class="para-head">Percentage</td>
//           <td>
//             {(Number(education.physics_score_in_hsc) +
//               Number(max) +
//               Number(education.maths_score_hsc)) /
//               3}
//           </td>
//         </tr>
//         <br />
//       </>
//     );
//   }
//
//   if (education.dep_passing_year != null) {
//     tableItem.push(
//       <>
//         <tr>
//           <td class="para-head">Diploma Passing Year</td>
//           <td>{education.dep_passing_year}</td>
//           <td class="para-head">College Name</td>
//           <td>{education.dep_clg_name}</td>
//         </tr>
//
//         <tr>
//           <td class="para-head">Seat Number</td>
//           <td>{education.dep_seat}</td>
//           <td class="para-head">Percentage</td>
//           <td>{education.dep_per}</td>
//         </tr>
//
//         <tr>
//           <td class="para-head">Marks Obtained</td>
//           <td>{education.dep_marks}</td>
//           <td class="para-head">CGPI </td>
//           <td>{education.dep_cgpi}</td>
//         </tr>
//
//         <br />
//       </>
//     );
//   }
//
//   if (Semester.length > 0) {
//     for (let i = 0; i < Semester.length; i++) {
//       tableItem.push(
//         <>
//           <tr>
//             <td class="para-head" colSpan={2}>
//               <strong>Semester - {Semester[i].sem_number}</strong>
//             </td>
//             <td class="para">SGPA</td>
//             <td>{Semester[i].grade_obtained}</td>
//           </tr>
//           <tr>
//             <td class="para">Total Number of Internal K.T.</td>
//             <td>{Semester[i].internal_kt}</td>
//             <td class="para">Total Number of External K.T.</td>
//             <td>{Semester[i].external_kt}</td>
//           </tr>
//           <tr>
//             <td class="para">Total Number of K.T</td>
//             <td>{Semester[i].total_kt}</td>
//             <td class="para">Aggregate CGPA</td>
//             <td>{Semester[i].aggregated_score}</td>
//           </tr>
//         </>
//       );
//     }
//   }
//
//   var hdgreeItem = [];
//   if (student.HDegree != null) {
//     <tr>
//       <td class="para">Do you Want To apply For Hounors Degree</td>
//       <td>Yes</td>
//       <td class="para">Subject</td>
//       <td>{student.HDegree}</td>
//     </tr>;
//   }
//
//   const formatLink = (link) => {
//     return String(link).substring(0, 4) === 'http' ? link : 'https://vppcoe-va.getflytechnologies.com/api/security/view/' + link;
//   };
//
//   return (
//     <div className="containers">
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
//                 margin: 0;
//                 padding: 0;
//                 box-sizing: border-box;
//
//               }
//             body{
//               font-family: 'Inter', sans-serif;
//             }
//
//             .containers{
//                 width: 90%;
//                 margin: auto;
//             }
//             h2{
//                 font-size:25px;
//             }
//             .header{
//                 display: flex;
//             }
//             .header-left{
//                 flex: 3;
//                 line-height:1.5;
//                 // text-align: center;
//             }
//
//             table.GeneratedTable {
//                 width: 100%;
//                 margin: auto;
//                 font-size:.8rem;
//                 background-color: #ffffff;
//                 border-collapse: collapse;
//                 /* border: none; */
//                 color: #000000;
//             }
//
//             table.GeneratedTable td,
//             table.GeneratedTable th {
//                 padding: 5px;
//             }
//
//             table.GeneratedTable thead {
//                 background-color: #ffffff;
//             }
//             .main{
//                 display: flex;
//                 flex-direction: column;
//                 gap: 2px;
//                 width: 100%;
//             }
//             .card{
//                 border: 1px solid #000;
//                 padding: 1rem;
//             }
//             .para-head{
//                 font-weight: bolder;
//             }
//             .tableHead{
//                 text-align: start;
//                 font-size: 1.3rem;
//                 font-weight: bolder;
//                 text-decoration:underline;
//               }
//             table.TableBorder {
//                 width:100%
//                 margin: 0;
//             }
//
//             table.TableBorder td, table.SSC th, table.SSC td{
//                border-width: 1px;
//                border-color: #000000;
//                border-style: solid;
//                border-collapse: collapse;
//             }
//
//                 .signature{
//                     display:flex;
//                     justify-content:space-between;
//                 }
//
//                 @media print{
//                     .pagebreak{
//                         page-break-after:always;
//                     }
//                 }
//
//                 `}
//       </style>
//       <center>
//         <button
//           onClick={(e) => {
//             e.target.style.display = "none";
//             window.print();
//           }}
//         >
//           Print
//         </button>
//       </center>
//
//       <img
//         src="/images/header.png"
//         style={{ width: "100%", marginBottom: "1rem" }}
//         alt=""
//       />
//       <div
//         class="header"
//         style={{ height: "auto", width: "100%", fontSize: "16px" }}
//       >
//         <br />
//         <div class="header-left">
//           <center>
//             <h2 style={{ fontSize: "20px" }}>
//               Application For Admission A.Y. 2024-25
//             </h2>
//             <h2 style={{ fontSize: "20px" }}>{program}</h2>
//             <h2 style={{ fontSize: "20px" }}>{branch}</h2>
//             <h2 style={{ fontSize: "20px" }}>{seat_type}</h2>
//           </center>
//         </div>
//         <div
//           class="header-right"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <img
//             src={String(docs.photo).substring(0, 4) == 'http' ? docs.photo : 'https://vppcoe-va.getflytechnologies.com/api/security/view/' + docs.photo}
//             style={{ width: "100px", height: "100px" }}
//             alt="Applicant's Image"
//           />
//           <img
//             src={String(docs.signature).substring(0, 4) == 'http' ? docs.signature : 'https://vppcoe-va.getflytechnologies.com/api/security/view/' + docs.signature}
//             style={{ width: "100px", height: "50px" }}
//             alt="Applicant's Image"
//           />
//         </div>
//       </div>
//       <br />
//       <div class="main">
//         <div class="details card">
//           <table class="GeneratedTable">
//             <tbody>
//               <th class="tableHead">Details of Admission</th>
//               <tr>
//                 <td class="para-head">Student ID No.</td>
//                 <td>{student.stud_clg_id}</td>
//                 <td class="para-head">Allotment</td>
//                 <td>
//                   {seat_type}-{round}
//                 </td>
//               </tr>
//               <tr>
//                 <td class="para-head">Selected Program</td>
//                 <td>{program}</td>
//                 <td class="para-head">Branch</td>
//                 <td>{branch}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Seat Type</td>
//                 <td>{cat}</td>
//                 <td class="para-head">GR. No.</td>
//                 <td>{student.gr_number}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <br />
//         <div class="personal card">
//           <table class="GeneratedTable">
//             <tbody>
//               <th class="tableHead">Personal Details</th>
//               <tr>
//                 <td class="para-head">Name</td>
//                 <td>{name}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Gender</td>
//                 <td>{personal.gender_id == 0 ? <>Male</> : <>Female</>}</td>
//                 <td class="para-head">Birth Date</td>
//                 <td>
//                   {new Date(personal.dob).toLocaleDateString("en-NZ")}
//                 </td>{" "}
//               </tr>
//               <tr>
//                 <td class="para-head">Religion</td>
//                 <td>{personal.religion}</td>
//                 <td class="para-head">Community</td>
//                 <td>{personal.communitee}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Minority</td>
//                 <td>{personal.minority}</td>
//                 <td class="para-head">Caste</td>
//                 <td>{personal.caste}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Sub Caste</td>
//                 <td>{personal.sub_caste}</td>
//                 <td class="para-head">Place of Birth</td>
//                 <td>{personal.place_of_birth}</td>
//
//               </tr>
//
//               <tr>
//                 <td class="para-head">Student Email ID</td>
//                 <td>{email}</td>
//                 <td class="para-head">Student Mobile No</td>
//                 <td>{personal.contact}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Student Bank A/C No.</td>
//                 <td>{personal.bank_account_number}</td>
//                 <td class="para-head">Bank Name</td>
//                 <td>{personal.bank_name}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Last Attended College Name</td>
//                 <td>{personal.last_college_attended}</td>
//                 <td class="para-head">Married/Single</td>
//                 <td>
//                   {personal.married_status == 0 ? <>Single</> : <>Married</>}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td class="para-head">Pan Number</td>
//                 <td>{personal.pan}</td>
//                 <td class="para-head">Adhar Card Number</td>
//                 <td>{personal.aadhar_number}</td>
//               </tr>
//             </tbody>
//           </table>
//           <br />
//           <table class="GeneratedTable">
//             <tbody>
//               <th class="tableHead" colSpan={2}>
//                 Address of Correspondance
//               </th>
//               <th class="tableHead" colSpan={2}>
//
//               </th>
//               <tr>
//                 <td class="para-head">Street Name</td>
//                 <td>{raddress.street_name}</td>
//                 <td class="para-head">Buildng Number/Flat Number</td>
//                 <td>{raddress.building_number}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">landmark </td>
//                 <td>{raddress.landmark}</td>
//                 <td class="para-head">City</td>
//                 <td>{raddress.city}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">State</td>
//                 <td>{raddress.state}</td>
//                 <td class="para-head">Pincode</td>
//                 <td>{raddress.pincode}</td>
//               </tr>
//               <tr></tr>
//             </tbody>
//           </table>
//           <br />
//           <table class="GeneratedTable">
//             <tbody>
//               <th class="tableHead" colSpan={2}>
//                 Permanent Address
//               </th>
//               <th class="tableHead" colSpan={2}>
//
//               </th>
//               <tr>
//                 <td class="para-head">Street Name</td>
//                 <td>{paddress.street_name}</td>
//                 <td class="para-head">Buildng Number/Flat Number</td>
//                 <td>{paddress.building_number}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">landmark </td>
//                 <td>{paddress.landmark}</td>
//                 <td class="para-head">City</td>
//                 <td>{paddress.city}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">State</td>
//                 <td>{paddress.state}</td>
//                 <td class="para-head">Pincode</td>
//                 <td>{paddress.pincode}</td>
//               </tr>
//               <tr></tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="pagebreak"></div>
//         <br />
//         <br />
//         <div class="academic card">
//           <table class="GeneratedTable TableBorder">
//             <tbody>
//               <th class="tableHead">Academic Details</th>
//
//               {tableItem}
//             </tbody>
//           </table>
//         </div>
//         <br />
//         <div className="pagebreak"></div>
//         <br />
//         <div class="parents card">
//           <table class="GeneratedTable">
//             <tbody>
//               <th class="tableHead">Parent/Guardian Information</th>
//               <tr>
//                 <td class="para-head">Father Name</td>
//                 <td>{parents[0]["fullname"].toLocaleUpperCase()}</td>
//                 <td class="para-head">Email id</td>
//                 <td>{parents[0].email}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Contact No</td>
//                 <td>{parents[0].contact}</td>
//                 <td class="para-head">Occupation</td>
//                 <td>{parents[0].occupation}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Designation</td>
//                 <td>{parents[0].designation}</td>
//               </tr>
//
//               <tr>
//                 <td class="para-head">Mother Name</td>
//                 <td>{parents[1].fullname.toLocaleUpperCase()}</td>
//                 <td class="para-head">Email id</td>
//                 <td>{parents[1].email}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Contact No</td>
//                 <td>{parents[1].contact}</td>
//                 <td class="para-head">Occupation</td>
//                 <td>{parents[1].occupation}</td>
//               </tr>
//               <tr>
//                 <td class="para-head">Designation</td>
//                 <td>{parents[1].designation}</td>
//               </tr>
//
//               {parents.length > 2 ? (
//                 <>
//                   <tr>
//                     <td class="para-head">Guardian Name</td>
//                     <td>{parents[2].fullname}</td>
//                     <td class="para-head">Email id</td>
//                     <td>{parents[2].email}</td>
//                   </tr>
//                   <tr>
//                     <td class="para-head">Contact No</td>
//                     <td>{parents[2].contact}</td>
//                     <td class="para-head">Occupation</td>
//                     <td>{parents[2].occupation}</td>
//                   </tr>
//                   <tr>
//                     <td class="para-head">Designation</td>
//                     <td>{parents[2].designation}</td>
//                   </tr>
//                 </>
//               ) : (
//                 <></>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <br />
//         <div class="documents card">
//           <table className="GeneratedTable">
//             <tbody>
//               <th className="tableHead">Documents Submitted</th>
//
//               <tr>
//                 <td>Cap Allotment Letter</td>
//                 <td>
//                   {docs.cap_allotment_letter ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.cap_allotment_letter)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>FC Verification Letter</td>
//                 <td>
//                   {docs.fc_center_varification ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.fc_center_varification)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>SSC Marksheet</td>
//                 <td>
//                   {docs.ssc_marksheet ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.ssc_marksheet)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>HSC Marksheet</td>
//                 <td>
//                   {docs.hsc_marksheet ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.hsc_marksheet)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Leaving Certificate</td>
//                 <td>
//                   {docs.lc ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.lc)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>MHTCET Marksheet</td>
//                 <td>
//                   {docs.mht_cet_score_card ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.mht_cet_score_card)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Domicle</td>
//                 <td>
//                   {docs.domicile ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.domicile)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Aadhar Card</td>
//                 <td>
//                   {docs.aadhar_card ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.aadhar_card)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Ration card</td>
//                 <td>
//                   {docs.ration_card ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.ration_card)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Bank Passbook</td>
//                 <td>
//                   {docs.back_passbook ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.back_passbook)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Jee Score card</td>
//                 <td>
//                   {docs.jee_score_card ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.jee_score_card)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>Results</td>
//                 <td>
//                   {docs.fee_reciept ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.fee_reciept)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               <tr>
//                 <td>College Admission Letter</td>
//                 <td>
//                   {docs.college_admission_letter ? (
//                     <button style={{ padding: '2px' }}>
//                       <a
//                         style={{ textDecoration: 'none' }}
//                         href={formatLink(docs.college_admission_letter)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Yes
//                       </a>
//                     </button>
//                   ) : (
//                     <>No</>
//                   )}
//                 </td>
//               </tr>
//
//               {(cat.toLocaleLowerCase().includes('obc') ||
//                 cat.toLocaleLowerCase().includes('sc') ||
//                 cat.toLocaleLowerCase().includes('st') ||
//                 cat.toLocaleLowerCase().includes('nt') ||
//                 cat.toLocaleLowerCase().includes('vj') ||
//                 cat.toLocaleLowerCase().includes('dt') ||
//                 cat.toLocaleLowerCase().includes('sbc')) && (
//                   <>
//                     <tr>
//                       <td>Caste Certificate</td>
//                       <td>
//                         {docs.caste_certificate ? (
//                           <button style={{ padding: '2px' }}>
//                             <a
//                               style={{ textDecoration: 'none' }}
//                               href={formatLink(docs.caste_certificate)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               Yes
//                             </a>
//                           </button>
//                         ) : (
//                           <>No</>
//                         )}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Caste Validation</td>
//                       <td>
//                         {docs.caste_validation ? (
//                           <button style={{ padding: '2px' }}>
//                             <a
//                               style={{ textDecoration: 'none' }}
//                               href={formatLink(docs.caste_validation)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               Yes
//                             </a>
//                           </button>
//                         ) : (
//                           <>No</>
//                         )}
//                       </td>
//                     </tr>
//                     {!cat.toLocaleLowerCase().includes('sc') &&
//                       !cat.toLocaleLowerCase().includes('st') && (
//                         <tr>
//                           <td>Non Creamy Layer Certificate</td>
//                           <td>
//                             {docs.nonCreamy ? (
//                               <button style={{ padding: '2px' }}>
//                                 <a
//                                   style={{ textDecoration: 'none' }}
//                                   href={formatLink(docs.nonCreamy)}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   Yes
//                                 </a>
//                               </button>
//                             ) : (
//                               <>No</>
//                             )}
//                           </td>
//                         </tr>
//                       )}
//                   </>
//                 )}
//
//               {cat.toLocaleLowerCase().includes('ews') && (
//                 <tr>
//                   <td>EWS Certificate</td>
//                   <td>
//                     {docs.ews_pro ? (
//                       <button style={{ padding: '2px' }}>
//                         <a
//                           style={{ textDecoration: 'none' }}
//                           href={formatLink(docs.ews_pro)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Yes
//                         </a>
//                       </button>
//                     ) : (
//                       <>No</>
//                     )}
//                   </td>
//                 </tr>
//               )}
//
//               {!cat.toLocaleLowerCase().includes('open') && (
//                 <tr>
//                   <td>Income Certificate</td>
//                   <td>
//                     {docs.income_certificate ? (
//                       <button style={{ padding: '2px' }}>
//                         <a
//                           style={{ textDecoration: 'none' }}
//                           href={formatLink(docs.income_certificate)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Yes
//                         </a>
//                       </button>
//                     ) : (
//                       <>No</>
//                     )}
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <div className="pagebreak"></div>
//         <br />
//
//         <div class="documents card">
//           {
//             !(String(program).includes("First") || String(program).includes("Direct")) ?
//               <>
//                 <table class="GeneratedTable" style={{ fontSize: "10px" }}>
//                   <tbody>
//                     <center>
//                       {" "}
//                       <b>
//                         <th className="tableHead">Undertaking </th>
//                       </b>
//                     </center>
//
//                     <tr>
//                       <td>
//                         I  Mr/Mrs.<strong> {personal.name} </strong>hereby  declare that I am seeking admission in the <strong>{program} {branch}</strong> course in Vasantdada  Patil  Pratishthan's College of Engineering And Visual Arts on my own.
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <ol style={{ fontSize: "9px" }}>
//                   <li>
//                     I have read all the rules and regulations of admission declared by University for the year 2024-25 and undertake to abide the same.
//                   </li>
//                   <li>
//                     The information given by me in my application is true to the best of my knowledge and belief.
//                   </li>
//                   <li>
//                     I have not been debarred from appearing at any examination held by Govt., University, College or any statutory body in India.
//                   </li>
//                   <li>
//                     I hereby agree to conform to any rules, acts and laws enforced by Govt. and I hereby undertake that so long as I remain student of the college, I will do nothing either inside or outside the college which may result in disciplinary action against me under the rules, acts and laws.
//                   </li>
//                   <li>
//                     I fully understand that the Principal of Vasantdada Patil Pratishthan's College of Engineering And Visual Arts,  Sion,  Mumbai will have full authority to expel me from the college for any infringement of the rules of conduct and discipline.
//                   </li>
//                   <li>
//                     I am aware that there is likely to be change in fee structure and
//                     I undertake to pay fee, whatsoever approved by the Fee Regulating
//                     Authority.
//                   </li>
//                   <li>
//                     I am aware that there is likely to be a change in fee structure and I undertake to pay fee, whatsoever approved by the Fee Regulating Authority.
//                   </li>
//                   <li>
//                     I shall not ask for a transfer from this college to any other college.
//                   </li>
//                   <li>
//                     I am aware that, I will not be allowed to appear for the examination if I do not attend 75% classes in theory and 100% practicals.
//                   </li>
//                   <li>
//                     I am aware that, I will not be allowed to benefit for the Govt. Scholarship/Freeship if I do not attend 75% classes in theory and 100% practicals.
//                   </li>
//                   <li>
//                     {" "}
//                     I also know that, I will not be allowed to appear for the examinations if I fail to submit the satisfactorily all the assignment, jobs, journals, drawing,repon as specified by the norms of University within stipulated time.
//                   </li>
//                   <li>
//                     {" "}
//                     I am aware that if I indulge in Anti-National Activities contrary to the provisions of acts and laws enforced by the Govt. and any such activity contrary to rules and disciplinary norms as stated above may result in disciplinary action without prior notice from Principal and that I may expelled from thecollege due to the same.{" "}
//                   </li>
//                   <li>
//                     {" "}
//                     I know that according to Maharashtra Prohibition of ragging Act 1999, ragging of any kind Physical or Mental within or outside the campus is strictlyprohibited by law. A student found and proved accused in the same will be debarred from the course and shall not be admitted in any educational institution for a period of 5 years from the date of his dismissal. Convicted student may be punished with imprisonment for a term upto 2 years/or penalty which may extend upto Ten Thousand Rupees.
//                   </li>
//                   <li>
//                     1 have also read all the Anti Ragging Rules Regulations of AICTE and UGC and I hereby undertake to abide by all these rules and regulations and to give anti ragging undertaking to the Institute.
//                   </li>
//                   <li>
//                     I am aware that it is mandatory to fill-in the online E-Scholarship Form for the Reserved Category (EBC/EWS/SC/ST/DT/NT/OBC/SBC/SEBC) at https/mahadbtmahait gov.in  and submit duly filled-in print copy with required documents to the Students Section (Principal Office) within 15 days from the date of admission. Failing to do so, I am liable to pay the entire fees.
//                   </li>
//                   <li>
//                     {" "}
//                     I shall open a Saving Bank Account in Union Bank of India, Sion branch and furnish the details of the Account Number, MICR CODE, NEFT CODE within 15 days from the date of admission.
//                   </li>
//                   <li>
//                     {" "}
//                     Have you enrolled your name in voters list: Yes / No<br /><br />
//                     If yes please give Voter ID No._________________
//                     <br />
//                     If No Then I hereby undertake to enroll my name in voter list as per the norms of Election Commission of India
//                   </li>
//                 </ol>
//               </> :
//               <>
//                 <table class="GeneratedTable" style={{ fontSize: "10px" }}>
//                   <tbody>
//                     <center>
//                       {" "}
//                       <b>
//                         <th className="tableHead">Undertaking </th>
//                       </b>
//                     </center>
//
//                     <tr>
//                       <td>
//                         I  Mr/Mrs.<strong> {personal.name} </strong>hereby  declare that I am seeking admission in the <strong>{program} {branch}</strong> course in Vasantdada  Patil  Pratishthan's College of Engineering And Visual Arts on my own.
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <ol style={{ fontSize: "9px" }}>
//                   <li>I have read all the rules and regulation of admission declared by State CET Cell/ARA/DTE/University/AICTE for the year 2024 2025 and undertake to abide the same.
//                   </li><li>The information given by me in my application is true to the best of my knowledge and belief.
//                   </li><li>I have not been debarred from appearing at any examination held by Govt, University, College or any statutory body in India
//                   </li><li>I hereby agree to conform to any rules, acts and laws enforced by Govt. and I hereby undertake that so long as I remain student of the college, I will do nothing either inside or outside the college which may result in disciplinary action against me under the rules, acts and laws
//                   </li><li>I fully understand that the Principal of Vasantdada Patil Pratishthan's College of Engineering & Visual Arts, Sion- Mumbai will have full authority te expel me from the college for any infringement of the rules of conduct and discipline.
//                   </li><li> I am aware that there is likely to be a change in fee structure and I undertake to pay fee, whatsoever approved by the Fee Regulating Authority
//                   </li><li>I am aware that, I will not be allowed to appear for the examination if i do not attend 75% classes in theory and 100% practicals.
//                   </li><li>I am aware that, I will not be allowed to benefit for the Govt. Scholarship/Freeship if I do not attend 75% classes in theory and 100% practicals
//                   </li><li>I also know that, I will not be allowed to appear for the examinations if I fail to subenit the satisfactorily all the assignment, jobs, joumals, drawing, report as specified by the norms of University within stipulated time
//                   </li><li>I am aware that if I indulge in Anti-National Activities contrary to the provisions of acts and laws enforced by the Govt, and any such activity contrary to rules and disciplinary norms as stated above may result in disciplinary action without prior notice from Principal and that I may expelled from the college due to the same.
//                   </li><li>I know that according to Maharashtra. Prohibition of ragging Act 1999, ragging of any kind Physical or Mental within or outside the campus is strictly prohibited by law. A student found and proved accused in the same will be deharred from the course and shall not be admitted in any educational institution for a period of 5 years from the date of his dismissal. Convicted student may be punished with imprisonment for a term upto 2 years/or perialty which may extend upto Ten Thousand Rupees
//                   </li><li>I have also read all the Anti Ragging Rules Regulations of AICTE and UGC and I hereby undertake to abide by all these rules and regulations and to give unti ragging undertaking to the Institute
//                   </li><li>I am aware that it is to fill-in the online E-Scholarship Form for the Reserved Category  (EBC/EWS/OPEN/SC/ST/DT/NT/OBC/SBC/EBC/EWS) at https://mahadbtmabait.gov.in Failing to do so, I am liable to pay the entire fees mandatory
//                   </li><li>I shall open a Aadhar Link Saving Bank Account in Union Bank of India OR India Post Payment Bank, Sion branch and furnish the details of the Account Number, MICR CODE, NEFT CODE within 15 days from the date of admission.
//                   </li><li>I am also aware that I will submit all the requisite documents to the Institute which are required as per norms for the confirmation of my admission from the competent authority Commissioner for State Common Entrance Test Cell & Admission Regulating Authority & University of Mumbai failing to do so I will be solely responsible for any action initiated against me by the competent authority and Institute will not be liable for the same.
//                   </li><li> I am aware that it is mandatory to do the online registration on the University of Mumbai digital university site and also to fill the correct form for the online enrolment and submit the same to the Institute within the stipulated time and failing to do so I will be solely responsible for the action taken by the University of Mumbai regarding my enrolment and Institute will not be liable for the same,
//                     The documents submitted at the time of confirmation of my admission in this institute are true and original and all the documents are obtained from competent authority through proper channel and procedure. The documents submitted by me are not fake and fabricated if the documents submitted by me are found to be fake or fabricated then I will be solemnly responsible for any action and punishment under IPC Section 199 & 200. 18.</li>
//                   <li>
//                     {" "}
//                     Have you enrolled your name in voters list: Yes / No<br /><br />
//                     If yes please give Voter ID No._________________
//                     <br />
//                     If No Then I hereby undertake to enroll my name in voter list as per the norms of Election Commission of India
//                   </li>
//                 </ol>
//               </>
//           }
//
//           <div class="signature" onLoad={window.print}>
//             <div className="student_sign">
//               <br />
//               <h4 style={{ fontSize: "16px" }}>Signature of Student</h4>
//             </div>
//             <div className="parent_sign" style={{ fontSize: "14px" }}>
//               <br />
//               <h4 style={{ fontSize: "16px" }}>Signature of Parent/Guardian</h4>
//             </div>
//           </div>
//           <h4 style={{ fontSize: "16px" }}>Date</h4>
//         </div>
//
//         <div className="line"></div>
//         <div class="office">
//           <center>
//             <b>
//               <h4 className="para-head" style={{ fontSize: "14px" }}>
//                 For Office Use Only
//               </h4>
//             </b>
//           </center>
//
//           <table style={{ fontSize: "12px" }}>
//             <tbody>
//               <tr>
//                 <td>College Fee Receipt No.</td>
//                 <td> &nbsp;{receipt} &nbsp;</td>
//                 <td>Paid Amount</td>
//                 <td>&nbsp; {fee}&nbsp; </td>
//                 <td>Due Amount</td>
//                 <td> &nbsp;{(total - fee) == 0 ? '' : total - fee} &nbsp;</td>
//               </tr>
//             </tbody>
//           </table>
//           <td className="para-head" style={{ fontSize: "14px" }}>
//             Remark:
//           </td>
//           <table className="GeneratedTable TableBorder">
//             <tbody>
//               {localStorage.getItem("program") > 2 ? (
//                 <tr>
//                   <td
//                     className="para-head"
//                     style={{ height: "20px", textAlign: "center" }}
//                   >
//                     Account Section
//                   </td>
//                   <td
//                     className="para-head"
//                     style={{ height: "20px", textAlign: "center" }}
//                   >
//                     Exam Section
//                   </td>
//                   <td
//                     className="para-head"
//                     style={{ height: "20px", textAlign: "center" }}
//                   >
//                     Student Section
//                   </td>
//                 </tr>
//               ) : (
//                 <></>
//               )}
//
//               <tr>
//                 <td style={{ height: "50px" }}></td>
//                 <td style={{ height: "50px" }}></td>
//                 <td style={{ height: "50px" }}></td>
//               </tr>
//             </tbody>
//           </table>
//
//           <table className="GeneratedTable" style={{ fontSize: "12px" }}>
//             <br />
//             <br />
//             <br />
//             <br />
//             <tbody>
//               <tr>
//                 {localStorage.getItem("program") <= 2 ? (
//                   <>
//                     {" "}
//                     <td className="para-head">Converner Admission Committee</td>
//                     <td className="para-head">
//                       Document Verification Committee Member
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td className="para-head">Exam Section</td>
//                   </>
//                 )}
//                 <td className="para-head">Student Section</td>
//                 <td className="para-head">Scholership Section</td>
//                 <td className="para-head">Account Section</td>
//                 <td className="para-head">Registrar</td>
//                 <td className="para-head">Principal</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default AdmssionPrint;
