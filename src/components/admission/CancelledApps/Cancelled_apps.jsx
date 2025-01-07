// // import api from "api";
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
// import { IKImage, IKContext, IKUpload } from "imagekitio-react";
// import api from "../../../api";
//
// const Cancelled_apps = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [programFilter, setProgramFiler] = useState(0);
//   const [program, setProgram] = useState([{ programm_name: "" }]);
//   const [branch, setBranch] = useState([]);
//   const [counter, setCounter] = useState(0);
//   // const [progem, setProgeam] = useState([]);
//   // const [csvData, setCsvData] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [cancelDoc, setDoc] = useState("");
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const formatDate = (dateString) => {
//     const dateObject = new Date(dateString);
//     const day = dateObject.getDate();
//     const month = dateObject.getMonth() + 1;
//     const year = dateObject.getFullYear();
//     return `${day}/${month}/${year}`;
//   };
//
//   const fetchData = async () => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/cancelled_applications`)
//       .then((res) => {
//         setData(res.data["cancelledResult"]);
//       })
//       .catch((err) => {
//       });
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/signup`)
//       .then((res) => {
//         setProgram(res.data["programms"]);
//         setBranch(res.data["branch"]);
//       })
//       .catch((err) => {
//       });
//   };
//
//   const revert_cancel = async (uid) => {
//     await api
//       .post(`${process.env.REACT_APP_BASE_URL}/admission/revert_cancel`, {
//         uid,
//       })
//       .then((res) => {
//         alert(res.data["message"]);
//         window.location.reload();
//       })
//       .catch((err) => {
//       });
//   };
//
//   const setCancelDate = async (uid, fromDate) => {
//     await api
//       .post(`${process.env.REACT_APP_BASE_URL}/admission/confirm_cancel_date`, {
//         uid,
//         fromDate,
//       })
//       .then((res) => {
//         alert(res.data["message"]);
//         window.location.reload();
//       })
//       .catch((err) => {
//       });
//   };
//
//   const setCancelDoc = async (uid, cancelDoc) => {
//     await api
//       .post(`${process.env.REACT_APP_BASE_URL}/admission/cancel_doc`, {
//         uid,
//         cancelDoc,
//       })
//       .then((res) => {
//         alert(res.data["message"]);
//         window.location.reload();
//       })
//       .catch((err) => {
//       });
//   };
//
//   const cancelReport = async () => {
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/cancelled_applications_report`
//       )
//       .then((res) => {
//         const blob = new Blob([res.data], { type: "text/csv" });
//         const csvURL = URL.createObjectURL(blob);
//         const downloadLink = document.createElement("a");
//         downloadLink.href = csvURL;
//         downloadLink.download = "cancelReport.csv";
//         downloadLink.click();
//         URL.revokeObjectURL(csvURL);
//         downloadLink.remove();
//       })
//       .catch((err) => {
//       });
//   };
//
//
//   const publicKey = "public_gWKOuQlhuPW59VhaGTXah7GGmHU=";
//   let urlEndpoint = "https://ik.imagekit.io/getflytechnologies/";
//   const authenticationEndpoint =
//     "https://vppcoe-va.getflytechnologies.com/api/faculty/upload_auth";
//
//   const pendingItems = [];
//
//   if (data.length != 0) {
//     for (let i = 0; i < data.length; i++) {
//       let p = "";
//       p = program.find((e) => e.programm_id == data[i].programm_id);
//       try {
//         var pname = p.programm_name;
//       } catch (err) {
//       }
//
//
//       if (search == "" && programFilter == 0) {
//         pendingItems.push(
//           <tr>
//             <td>{data[i].gr_number}</td>
//             <td>{data[i].stud_clg_id}</td>
//             <td>{data[i].name}</td>
//             <td>{data[i].bname}</td>
//             <td>{data[i].programm_name}</td>
//             <td>
//               <div className="btns" onClick={() => revert_cancel(data[i].uid)}>
//                 <button>Revert</button>
//               </div>
//             </td>
//             <td>
//               <div className="mb-2 my-3">
//                 <label htmlFor="jod" className="form-label fw-semibold">
//                   Cancelled Date :
//                 </label>
//                 {data[i].cancelled_app_date ? (
//                   <>
//                     <p>Cancelled Date: {formatDate(data[i].cancelled_app_date)}</p>
//                     <input
//                       type="date"
//                       className="form-control"
//                       id="jod"
//                       onChange={(e) => setFromDate(e.target.value)}
//                       value={fromDate}
//                     />
//                     <div
//                       onClick={() => setCancelDate(data[i].uid, fromDate)}
//                       className="btns"
//                     >
//                       <button>Confirm Date</button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p>Cancelled Date: Date is Not Selected</p>
//                     <input
//                       type="date"
//                       className="form-control"
//                       id="jod"
//                       onChange={(e) => setFromDate(e.target.value)}
//                       value={fromDate}
//                     />
//                     <div
//                       onClick={() => setCancelDate(data[i].uid, fromDate)}
//                       className="btns"
//                     >
//                       <button>Confirm Date</button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </td>
//             <td>
//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   Cancel Document
//                 </label>
//                 <div className="doc">
//                   <IKContext
//                     publicKey={publicKey}
//                     urlEndpoint={urlEndpoint}
//                     authenticationEndpoint={authenticationEndpoint}
//                   >
//                     <IKUpload
//                       fileName="leave_proof.jpg"
//                       tags={["tag1"]}
//                       useUniqueFileName={true}
//                       isPrivateFile={false}
//                       onSuccess={(r) => {
//                         setDoc(r.url);
//                         alert(
//                           "Document uploaded Successfully\nClick to Upload Image"
//                         );
//                       }}
//                       onError={(e) => {
//                       }}
//                     />
//                   </IKContext>
//                   <button className="viewDoc">
//                     <a target="_black" href={data[i].cancelled_app_document}>
//                       View Document
//                     </a>
//                   </button>
//                 </div>
//                 <div
//                   onClick={() => setCancelDoc(data[i].uid, cancelDoc)}
//                   className="btns"
//                 >
//                   <button>Upload Image</button>
//                 </div>
//               </div>
//
//               {/* <div class="mb-2 my-3">
//                 <label for="formFile" class="form-label">
//                   Cancel Document
//                 </label>
//                 <div className="mb-2 my-3">
//                   <IKContext
//                     publicKey={publicKey}
//                     urlEndpoint={urlEndpoint}
//                     authenticationEndpoint={authenticationEndpoint}
//                   >
//                     <IKUpload
//                       fileName="leave_proof.jpg"
//                       tags={["tag1"]}
//                       useUniqueFileName={true}
//                       isPrivateFile={false}
//                       onSuccess={(r) => {
//                         setDoc(r.url);
//                         alert("Click to Upload Image");
//                       }}
//                     />
//                   </IKContext>
//                   <div
//                     onClick={() => setCancelDoc(data[i].uid, cancelDoc)}
//                     className="btns"
//                   >
//                     <button>Upload Image</button>
//                   </div>
//                 </div>
//               </div> */}
//             </td>
//           </tr>
//         );
//       } else if (programFilter == data[i].programm_name) {
//         if (data[i].name.toLowerCase().includes(search)) {
//           pendingItems.push(
//             <tr>
//               <td>{data[i].gr_number}</td>
//               <td>{data[i].stud_clg_id}</td>
//               <td>{data[i].name}</td>
//               <td>{data[i].bname}</td>
//               <td>{data[i].programm_name}</td>
//               <td>
//                 <div
//                   className="btns"
//                   onClick={() => revert_cancel(data[i].uid)}
//                 >
//                   <button>Revert</button>
//                 </div>
//               </td>
//               <td>
//                 <div className="mb-2 my-3">
//                   <label htmlFor="jod" className="form-label fw-semibold">
//                     Cancelled Date :
//                   </label>
//                   {data[i].cancelled_app_date ? (
//                     <>
//                       <p>Cancelled Date: {formatDate(data[i].cancelled_app_date)}</p>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="jod"
//                         onChange={(e) => setFromDate(e.target.value)}
//                         value={fromDate}
//                       />
//                       <div
//                         onClick={() => setCancelDate(data[i].uid, fromDate)}
//                         className="btns"
//                       >
//                         <button>Confirm Date</button>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <p>Cancelled Date: Date is Not Selected</p>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="jod"
//                         onChange={(e) => setFromDate(e.target.value)}
//                         value={fromDate}
//                       />
//                       <div
//                         onClick={() => setCancelDate(data[i].uid, fromDate)}
//                         className="btns"
//                       >
//                         <button>Confirm Date</button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </td>
//               <td>
//                 <div class="mb-3">
//                   <label for="formFile" class="form-label">
//                     Cancel Document
//                   </label>
//                   <div className="doc">
//                     <IKContext
//                       publicKey={publicKey}
//                       urlEndpoint={urlEndpoint}
//                       authenticationEndpoint={authenticationEndpoint}
//                     >
//                       <IKUpload
//                         fileName="leave_proof.jpg"
//                         tags={["tag1"]}
//                         useUniqueFileName={true}
//                         isPrivateFile={false}
//                         onSuccess={(r) => {
//                           setDoc(r.url);
//                           alert(
//                             "Document uploaded Successfully\nClick to Upload Image"
//                           );
//                         }}
//                         onError={(e) => {
//                         }}
//                       />
//                     </IKContext>
//                     <button className="viewDoc">
//                       <a target="_black" href={data[i].cancelled_app_document}>
//                         View Document
//                       </a>
//                     </button>
//                   </div>
//                   <div
//                     onClick={() => setCancelDoc(data[i].uid, cancelDoc)}
//                     className="btns"
//                   >
//                     <button>Upload Image</button>
//                   </div>
//                 </div>
//
//                 {/* <div class="mb-2 my-3">
//                   <label for="formFile" class="form-label">
//                     Cancel Document
//                   </label>
//                   <div className="mb-2 my-3">
//                     <IKContext
//                       publicKey={publicKey}
//                       urlEndpoint={urlEndpoint}
//                       authenticationEndpoint={authenticationEndpoint}
//                     >
//                       <IKUpload
//                         fileName="leave_proof.jpg"
//                         tags={["tag1"]}
//                         useUniqueFileName={true}
//                         isPrivateFile={false}
//                         onSuccess={(r) => {
//                           setDoc(r.url);
//                           alert("Click to Upload Image");
//                         }}
//                       />
//                     </IKContext>
//                     <div
//                       onClick={() => setCancelDoc(data[i].uid, cancelDoc)}
//                       className="btns"
//                     >
//                       <button>Upload Image</button>
//                     </div>
//                   </div>
//                 </div> */}
//               </td>
//             </tr>
//           );
//         }
//       }
//     }
//   }
//
//   var proItems = [];
//   for (let i = 0; i < program.length; i++) {
//     proItems.push(
//       <option value={program[i].programm_name}>{program[i].programm_name}</option>
//     );
//   }
//
//   var total = pendingItems.length;
//   var displayItem = [];
//
//   for (let i = counter; i < counter + 10; i++) {
//     displayItem.push(pendingItems[i]);
//   }
//
//   return (
//     <>
//       <div className="dynamic">
//         <h3 className="greet fw-bolder">Student's Cancelled Applications</h3>
//         <hr />
//         <main className="change">
//           <div className="box-c">
//             <div className="btns" style={{ display: "flex" }}>
//               <div>
//                 <button onClick={cancelReport}>Download Cancel Report</button>
//               </div>
//             </div>
//             <div className="sub-main">
//               {/* <h4 className="fw-bolder">Faculty Leave Approval</h4> */}
//               <div className="report-dates">
//                 <div className="sel-program">
//                   <label for="cont" className="form-label">
//                     Selected Program
//                   </label>
//                   <br />
//                   <select
//                     name="cont"
//                     class="form-select"
//                     aria-label="Program Name"
//                     onChange={(e) => {
//                       setProgramFiler(e.target.value);
//                     }}
//                   >
//                     <option value={0} selected>
//                       Select The Program
//                     </option>
//                     {proItems}
//                   </select>
//                 </div>
//               </div>
//               <div className="search_faculty">
//                 <div className="input">
//                   <i class="material-symbols-outlined">search</i>
//                   <input
//                     type="text"
//                     placeholder="Search Student Name"
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <h4>Total Applications: {total}</h4>
//
//
//               <br />
//               {/* <div className="btns" style={{ justifyContent: "space-between" }}>
//                 {counter == 0 ? (
//                   <button className="prev" disabled>
//                     Prev
//                   </button>
//                 ) : (
//                   <button
//                     className="prev"
//                     onClick={() => setCounter(counter - 10)}
//                   >
//                     Prev
//                   </button>
//                 )}
//                 {counter >= pendingItems.length ? (
//                   <button className="next" disabled>
//                     Next
//                   </button>
//                 ) : (
//                   <button
//                     className="next"
//                     onClick={() => setCounter(counter + 10)}
//                   >
//                     Next
//                   </button>
//                 )}
//               </div> */}
//               {/* <br /> */}
//
//
//
//               <div className="table">
//                 <table className="table table-bordered">
//                   <tr>
//                     <th>Gr No.</th>
//                     <th>College ID</th>
//                     <th>Full Name</th>
//                     <th>Branch</th>
//                     <th>Selected Program</th>
//                     <th></th>
//                     <th>Cancel Date</th>
//                     <th>Upload Document</th>
//                   </tr>
//                   {pendingItems}
//                 </table>
//               </div>
//               {/* <h3 className=Cancelled_appssage">
//                 <i class="material-icons tick">check_circle</i>
//               </h3> */}
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };
//
// export default Cancelled_apps;
