// // // import api from "api";
// // import jsPDF from "jspdf";
// // import "jspdf-autotable";
// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
// // import api from "../../../api";
//
// // const FacultyAdmin = () => {
// //   const [data, setData] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [programFilter, setProgramFiler] = useState(0);
// //   const [program, setProgram] = useState([{ programm_name: "" }]);
// //   const [branch, setBranch] = useState([]);
// //   const [counter, setCounter] = useState(0);
// //   // const [progem, setProgeam] = useState([]);
// //   const [csvData, setCsvData] = useState("");
// //   const [Rp,setRp] = useState("");
// //   const [rB,setRB] = useState("");
//
// //   useEffect(() => {
// //     fetchData();
// //   }, []);
//
// //   const handleCsvChange = (event: any) => {
// //     setCsvData(event.target.value);
// //   };
//
// //   const fetchData = async () => {
// //     api
// //       .get(`${process.env.REACT_APP_BASE_URL}/admission/applications`)
// //       .then((res) => {
// //         setData(res.data["applications"]);
// //       })
// //       .catch((err) => {
// //       });
// //     api
// //       .get(`${process.env.REACT_APP_BASE_URL}/admission/signup`)
// //       .then((res) => {
// //         setProgram(res.data["programms"]);
// //         setBranch(res.data["branch"]);
// //       })
// //       .catch((err) => {});
//
// //   };
//
// //   const download = async () => {
// //     api
// //       .get(`${process.env.REACT_APP_BASE_URL}/admission/departmentAdmission`)
// //       .then((res) => {
// //         const blob = new Blob([res.data], { type: "text/csv" });
// //         const csvURL = URL.createObjectURL(blob);
// //         const downloadLink = document.createElement("a");
// //         downloadLink.href = csvURL;
// //         downloadLink.download = "data.csv";
// //         downloadLink.click();
// //         URL.revokeObjectURL(csvURL);
// //         downloadLink.remove();
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const downloadDepartYearmetWise = async (brach) => {
// //     api
// //       .get(
// //         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionComputer?brach=${brach}`
// //       )
// //       .then((res) => {
// //         const blob = new Blob([res.data], { type: "text/csv" });
// //         const csvURL = URL.createObjectURL(blob);
// //         const downloadLink = document.createElement("a");
// //         downloadLink.href = csvURL;
// //         downloadLink.download = "data.csv";
// //         downloadLink.click();
// //         URL.revokeObjectURL(csvURL);
// //         downloadLink.remove();
//
// //         const lines = res.data.split("\n");
// //         const data = lines.map((line) => line.split(","));
//
// //         const doc = new jsPDF("landscape");
// //         const tableOptions = {
// //           startY: 20, // Adjust the starting Y-coordinate of the table
// //           body: data,
// //           // headStyles: {  cellWidth: "wrap",fontSize: 1,minCellWidth: 3}, // Increase font size for table header
// //           bodyStyles: {
// //             fontSize: 50,
// //             cellWidth: 30,
// //             rowHeight: 18,
// //             // Enable text wrapping for body cells
// //           },
// //         };
//
// //         // Calculate the maximum table height that fits the page
// //         const pageSize = doc.internal.pageSize;
// //         const maxTableHeight = pageSize.height - 20; // 40 is a buffer for margins
//
// //         const tableContentHeight = tableOptions.body.length;
//
// //         if (tableContentHeight > maxTableHeight) {
// //           // Scale down the table if it's too large
// //           const scale = maxTableHeight / tableContentHeight;
// //           tableOptions.headStyles = { fontSize: 80 * scale };
// //           tableOptions.bodyStyles = { fontSize: 40 * scale };
// //         }
//
// //         doc.autoTable(tableOptions);
//
// //         const pdfBlob = doc.output("blob");
//
// //         const pdfURL = URL.createObjectURL(pdfBlob);
// //         const downloadpdfLink = document.createElement("a");
// //         downloadpdfLink.href = pdfURL;
// //         downloadpdfLink.download = "data.pdf";
// //         downloadpdfLink.click();
// //         URL.revokeObjectURL(pdfURL);
// //         downloadpdfLink.remove();
//
// //         // const pdfBlob = new Blob([res.data], { type: "application/pdf" });
// //         // const blobUrl = URL.createObjectURL(pdfBlob);
// //         // const link = document.createElement("a");
// //         // link.href = blobUrl;
// //         // link.download = "data.pdf";
// //         // link.click();
// //         // URL.revokeObjectURL(blobUrl);
// //         // link.remove();
// //         // downloadLink.href = csvURL;
// //         // downloadLink.download = "data.csv";
// //         // downloadLink.click();
// //         // URL.revokeObjectURL(csvURL);
// //         // downloadLink.remove();
// //       })
// //       .catch((err) => {
// //       });
// //   };
// //   const downloadCOMP = async () => {
// //     api
// //       .post(
// //         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionComputer`,
// //         {
// //           brach:rB,
// //           program:Rp
// //         }
// //       )
// //       .then((res) => {
// //         const blob = new Blob([res.data], { type: "text/csv" });
// //         const csvURL = URL.createObjectURL(blob);
// //         const downloadLink = document.createElement("a");
// //         downloadLink.href = csvURL;
// //         downloadLink.download = "data.csv";
// //         downloadLink.click();
// //         URL.revokeObjectURL(csvURL);
// //         downloadLink.remove();
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const downloadBYwise = async (b, y) => {
// //     api
// //       .get(
// //         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionIT?brach=${b}&year=${y}`
// //       )
// //       .then((res) => {
// //         const blob = new Blob([res.data], { type: "text/csv" });
// //         const csvURL = URL.createObjectURL(blob);
// //         const downloadLink = document.createElement("a");
// //         downloadLink.href = csvURL;
// //         downloadLink.download = "data.csv";
// //         downloadLink.click();
// //         URL.revokeObjectURL(csvURL);
// //         downloadLink.remove();
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const downloadEXTC = async () => {
// //     api
// //       .get(
// //         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionEXTC`
// //       )
// //       .then((res) => {
// //         const blob = new Blob([res.data], { type: "text/csv" });
// //         const csvURL = URL.createObjectURL(blob);
// //         const downloadLink = document.createElement("a");
// //         downloadLink.href = csvURL;
// //         downloadLink.download = "data.csv";
// //         downloadLink.click();
// //         URL.revokeObjectURL(csvURL);
// //         downloadLink.remove();
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const downloadAIDS = async () => {
// //     api
// //       .get(
// //         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionAIDS`
// //       )
// //       .then((res) => {
// //         const blob = new Blob([res.data], { type: "text/csv" });
// //         const csvURL = URL.createObjectURL(blob);
// //         const downloadLink = document.createElement("a");
// //         downloadLink.href = csvURL;
// //         downloadLink.download = "data.csv";
// //         downloadLink.click();
// //         URL.revokeObjectURL(csvURL);
// //         downloadLink.remove();
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const allow_partpayment = async (e, uid) => {
// //     e.preventDefault();
// //     var formData = new FormData(e.target);
// //     formData.append("uid", uid);
//
// //     api
// //       .post(
// //         `${process.env.REACT_APP_BASE_URL}/admission/allow_part_payment`,
// //         Object.fromEntries(formData)
// //       )
// //       .then((res) => {
// //         alert(res.data["message"]);
// //       })
// //       .catch((err) => {});
// //   };
//
// //   const set_cancel = async (uid) => {
// //     await api
// //       .post(
// //         `${process.env.REACT_APP_BASE_URL}/admission/set_cancelled_applications`,
// //         { uid }
// //       )
// //       .then((res) => {
// //         alert(res.data["message"]);
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
//
// //   const revertClick = async (uid) => {
// //     await api
// //       .post(
// //         `${process.env.REACT_APP_BASE_URL}/admission/finlaRevertSubmit`,
// //         { uid }
// //       )
// //       .then((res) => {
// //         alert(res.data["message"]);
// //       })
// //       .catch((err) => {
// //       });
// //   };
//
// //   const pendingItems = [];
//
// //   if (data.length != 0) {
// //     for (let i = 0; i < data.length; i++) {
// //       let p = "";
// //       p = program.find((e) => e.programm_id == data[i].programm_id);
// //       try {
// //         var pname = p.programm_name;
// //       } catch (err) {}
//
// //       if (search == "" && programFilter == 0) {
// //         pendingItems.push(
// //           <tr>
// //             <td>{data[i].gr_number}</td>
// //             <td>{data[i].stud_clg_id}</td>
// //             <td>{data[i].name}</td>
// //             <td>{data[i].bname}</td>
// //             <td>{pname}</td>
// //             <td>
// //               <div className="btns">
// //                 <Link
// //                   to={`/printApplication?id=${data[i].uid}`}
// //                   style={{ color: "black" }}
// //                   target="_blank"
// //                 >
// //                   View
// //                 </Link>
// //               </div>
// //             </td>
// //             <td>
// //               <div className="btns">
// //                 <Link
// //                   to={`/editApplication?id=${data[i].uid}`}
// //                   style={{ color: "black" }}
// //                   target="_blank"
// //                 >
// //                   View
// //                 </Link>
// //               </div>
// //             </td>
// //             <td>
// //                 <div className="btns">
// //                   <button className="btn" onClick={(e)=>revertClick(data[i].stud_clg_id)}>Revert</button>
// //                 </div>
// //               </td>
// //             <td>
// //               {data[i].cancelled_app == 1 ? (
// //                 <div className="cancelled" onClick={() => set_cancel(data[i].uid)}>
// //                   <button disabled>
// //                     Cancelled
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <div className="btns" onClick={() => set_cancel(data[i].uid)}>
// //                   <button>Cancel</button>
// //                 </div>
// //               )}
// //             </td>
// //           </tr>
// //         );
// //       } else if (programFilter == data[i].programm_id) {
// //         if (data[i].name.toLowerCase().includes(search)) {
// //           pendingItems.push(
// //             <tr>
// //               <td>{data[i].gr_number}</td>
// //               <td>{data[i].stud_clg_id}</td>
// //               <td>{data[i].name}</td>
// //               <td>{data[i].bname}</td>
// //               <td>{pname}</td>
// //               <td>
// //                 <div className="btns">
// //                   <Link
// //                     to={`/printApplication?id=${data[i].uid}`}
// //                     style={{ color: "black" }}
// //                     target="_blank"
// //                   >
// //                     View
// //                   </Link>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="btns">
// //                   <Link
// //                     to={`/editApplication?id=${data[i].uid}`}
// //                     style={{ color: "black" }}
// //                     target="_blank"
// //                   >
// //                     View
// //                   </Link>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="btns">
// //                   <button className="btn" onClick={(e)=>revertClick(data[i].stud_clg_id)}>Revert</button>
// //                 </div>
// //               </td>
// //               <td>
// //                 {data[i].cancelled_app == 1 ? (
// //                   <div className="cancelled" onClick={() => set_cancel(data[i].uid)}>
// //                     <button disabled >
// //                       Cancelled
// //                     </button>
// //                   </div>
// //                 ) : (
// //                   <div className="btns" onClick={() => set_cancel(data[i].uid)}>
// //                     <button>Cancel</button>
// //                   </div>
// //                 )}
// //               </td>
// //             </tr>
// //           );
// //         }
// //       }
// //     }
// //   }
//
// //   var proItems = [];
// //   var brachList = [];
// //   branch.forEach(e=>{
// //     brachList.push(
// //       <option value={e.branch_id}>{e.bname}</option>
// //     )
// //   })
// //   for (let i = 0; i < program.length; i++) {
// //     proItems.push(
// //       <option value={program[i].programm_id}>{program[i].programm_name}</option>
// //     );
// //   }
//
// //   var total = pendingItems.length;
// //   var displayItem = [];
//
// //   for (let i = counter; i < counter + 10; i++) {
// //     displayItem.push(pendingItems[i]);
// //   }
//
// //   return (
// //     <>
// //       <div className="dynamic">
// //         <h3 className="greet fw-bolder">Student Admission Details</h3>
// //         <hr />
//
// //         <main className="change">
// //           <div className="box-c">
// //             <div className="flex">
// //                   <div className="sel-program">
// //                     <label for="cont" className="form-label">
// //                       Selected Program
// //                     </label>
// //                     <br />
// //                     <select
// //                       class="form-select"
// //                       aria-label="Program Name"
// //                       onChange={(e) => {
// //                         setRp(e.target.value);
// //                       }}
// //                     >
// //                       <option value={0} selected>
// //                         Select The Program
// //                       </option>
// //                       {proItems}
// //                     </select>
// //                   </div>
// //                   <div className="sel-program">
// //                     <label for="cont" className="form-label">
// //                       Selected Branch
// //                     </label>
// //                     <br />
// //                     <select
// //                       class="form-select"
// //                       aria-label="Program Name"
// //                       onChange={(e) => {
// //                         setRB(e.target.value);
// //                       }}
// //                     >
// //                       <option value={0} selected>
// //                         Select The Branch
// //                       </option>
// //                       {brachList}
// //                     </select>
// //                   </div>
// //                   <br />
// //                   <div className="sel-program">
// //                    <div className="btns">
// //                     <button onClick={()=>downloadCOMP()}>Generate Report</button>
// //                    </div>
// //                   </div>
// //             </div>
// //             <br />
//
//
// //             <div className="sub-main">
// //               {/* <h4 className="fw-bolder">Faculty Leave Approval</h4> */}
// //               <div className="report-dates">
// //                 <div className="sel-program">
// //                   <label for="cont" className="form-label">
// //                     Selected Program
// //                   </label>
// //                   <br />
// //                   <select
// //                     class="form-select"
// //                     aria-label="Program Name"
// //                     onChange={(e) => {
// //                       setProgramFiler(e.target.value);
// //                     }}
// //                   >
// //                     <option value={0} selected>
// //                       Select The Program
// //                     </option>
// //                     {proItems}
// //                   </select>
// //                 </div>
// //               </div>
// //               <div className="search_faculty">
// //                 <div className="input">
// //                   <i class="material-symbols-outlined">search</i>
// //                   <input
// //                     type="text"
// //                     placeholder="Search Student Name"
// //                     onChange={(e) => setSearch(e.target.value)}
// //                   />
// //                 </div>
// //                 {/* <div className="button">
// //                                     <button>
// //                                         <Link to="">Export to CSV</Link>
// //                                     </button>
// //                                 </div> */}
// //               </div>
// //               <h4>Total Applications: {total}</h4>
// //               <br />
// //               <div className="btns" style={{ justifyContent: "space-between" }}>
// //                 {counter == 0 ? (
// //                   <button className="prev" disabled>
// //                     Prev
// //                   </button>
// //                 ) : (
// //                   <button
// //                     className="prev"
// //                     onClick={() => setCounter(counter - 10)}
// //                   >
// //                     Prev
// //                   </button>
// //                 )}
// //                 {counter >= pendingItems.length ? (
// //                   <button className="next" disabled>
// //                     Next
// //                   </button>
// //                 ) : (
// //                   <button
// //                     className="next"
// //                     onClick={() => setCounter(counter + 10)}
// //                   >
// //                     Next
// //                   </button>
// //                 )}
// //               </div>{" "}
// //               <br />
// //               <div className="table">
// //                 <table className="table table-bordered">
// //                   <tr>
// //                     <th>Gr No.</th>
// //                     <th>College ID</th>
// //                     <th>Full Name</th>
// //                     <th>Branch</th>
// //                     <th>Selected Program</th>
// //                     <th>Detailed Application</th>
// //                     <th>Edit</th>
// //                     <th>Revert</th>
// //                     <th>Cancelled Applications</th>
// //                   </tr>
// //                   {displayItem}
// //                 </table>
// //               </div>
// //               {/* <h3 className="success-message">
// //                                 <i class="material-icons tick">check_circle</i>
//
// //                             </h3> */}
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </>
// //   );
// // };
//
// // export default FacultyAdmin;
//
//
//
// import jsPDF from "jspdf";
// import { UserOptions } from "jspdf-autotable";
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
// import api from "../../../api";
//
// interface jsPDFWithAutoTable extends jsPDF {
//   autoTable: (options: UserOptions) => jsPDF;
// }
//
// interface Program {
//   programm_id: number;
//   programm_name: string;
// }
//
// interface Branch {
//   branch_id: number;
//   bname: string;
// }
//
// interface Application {
//   uid: string;
//   gr_number: string;
//   stud_clg_id: string;
//   name: string;
//   bname: string;
//   programm_id: number;
//   cancelled_app: number;
// }
//
// const FacultyAdmin: React.FC = () => {
//   const [data, setData] = useState<Application[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [programFilter, setProgramFiler] = useState<number>(0);
//   const [program, setProgram] = useState<Program[]>([{ programm_id: 0, programm_name: "" }]);
//   const [branch, setBranch] = useState<Branch[]>([]);
//   const [counter, setCounter] = useState<number>(0);
//   const [csvData, setCsvData] = useState<string>("");
//   const [Rp, setRp] = useState<string>("");
//   const [rB, setRB] = useState<string>("");
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const handleCsvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCsvData(event.target.value);
//   };
//
//   const fetchData = async () => {
//     try {
//       const applicationsRes = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/applications`);
//       setData(applicationsRes.data["applications"]);
//
//       const signupRes = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/signup`);
//       setProgram(signupRes.data["programms"]);
//       setBranch(signupRes.data["branch"]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const download = async () => {
//     try {
//       const res = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/departmentAdmission`);
//       downloadFile(res.data, "data.csv", "text/csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const downloadDepartYearmetWise = async (brach: string) => {
//     try {
//       const res = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionComputer?brach=${brach}`
//       );
//
//       // Download CSV
//       downloadFile(res.data, "data.csv", "text/csv");
//
//       // Generate PDF
//       const lines = res.data.split("\n");
//       const data = lines.map((line: string) => line.split(","));
//
//       // const doc = new jsPDF("landscape");
//       const doc = new jsPDF("landscape") as jsPDFWithAutoTable;
//       const tableOptions = {
//         startY: 20,
//         body: data,
//         bodyStyles: {
//           fontSize: 50,
//           cellWidth: 30,
//           rowHeight: 18,
//         },
//       };
//
//       const pageSize = doc.internal.pageSize;
//       const maxTableHeight = pageSize.height - 20;
//       const tableContentHeight = tableOptions.body.length;
//
//       if (tableContentHeight > maxTableHeight) {
//         const scale = maxTableHeight / tableContentHeight;
//         // tableOptions.headStyles = { fontSize: 80 * scale };
//         tableOptions.bodyStyles.fontSize = 40 * scale;
//         // { fontSize: 40 * scale };
//       }
//
//       doc.autoTable(tableOptions);
//       const pdfBlob = doc.output("blob");
//       downloadFile(pdfBlob, "data.pdf", "application/pdf");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const downloadCOMP = async () => {
//     try {
//       const res = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionComputer`,
//         { brach: rB, program: Rp }
//       );
//       downloadFile(res.data, "data.csv", "text/csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const downloadBYwise = async (b: string, y: string) => {
//     try {
//       const res = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionIT?brach=${b}&year=${y}`
//       );
//       downloadFile(res.data, "data.csv", "text/csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const downloadEXTC = async () => {
//     try {
//       const res = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionEXTC`);
//       downloadFile(res.data, "data.csv", "text/csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const downloadAIDS = async () => {
//     try {
//       const res = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/departmentAdmissionAIDS`);
//       downloadFile(res.data, "data.csv", "text/csv");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const downloadFile = (data: any, filename: string, type: string) => {
//     const blob = new Blob([data], { type });
//     const url = URL.createObjectURL(blob);
//     const downloadLink = document.createElement("a");
//     downloadLink.href = url;
//     downloadLink.download = filename;
//     downloadLink.click();
//     URL.revokeObjectURL(url);
//     downloadLink.remove();
//   };
//
//   const allow_partpayment = async (e: React.FormEvent<HTMLFormElement>, uid: string) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     formData.append("uid", uid);
//
//     try {
//       const res = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/admission/allow_part_payment`,
//         Object.fromEntries(formData)
//       );
//       alert(res.data["message"]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const set_cancel = async (uid: string) => {
//     try {
//       const res = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/admission/set_cancelled_applications`,
//         { uid }
//       );
//       alert(res.data["message"]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const revertClick = async (uid: string) => {
//     try {
//       const res = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/admission/finlaRevertSubmit`,
//         { uid }
//       );
//       alert(res.data["message"]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   const renderTableRows = () => {
//     const pendingItems: JSX.Element[] = [];
//
//     if (data.length !== 0) {
//       data.forEach((item) => {
//         const p = program.find((e) => e.programm_id === item.programm_id);
//         const pname = p?.programm_name || "";
//
//         if ((search === "" && programFilter === 0) ||
//             (programFilter === item.programm_id &&
//              item.name.toLowerCase().includes(search.toLowerCase()))) {
//           pendingItems.push(
//             <tr key={item.uid}>
//               <td>{item.gr_number}</td>
//               <td>{item.stud_clg_id}</td>
//               <td>{item.name}</td>
//               <td>{item.bname}</td>
//               <td>{pname}</td>
//               <td>
//                 <div className="btns">
//                   <Link to={`/printApplication?id=${item.uid}`} style={{ color: "black" }} target="_blank">
//                     View
//                   </Link>
//                 </div>
//               </td>
//               <td>
//                 <div className="btns">
//                   <Link to={`/editApplication?id=${item.uid}`} style={{ color: "black" }} target="_blank">
//                     View
//                   </Link>
//                 </div>
//               </td>
//               <td>
//                 <div className="btns">
//                   <button className="btn" onClick={() => revertClick(item.stud_clg_id)}>
//                     Revert
//                   </button>
//                 </div>
//               </td>
//               <td>
//                 {item.cancelled_app === 1 ? (
//                   <div className="cancelled">
//                     <button disabled>Cancelled</button>
//                   </div>
//                 ) : (
//                   <div className="btns" onClick={() => set_cancel(item.uid)}>
//                     <button>Cancel</button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           );
//         }
//       });
//     }
//
//     return pendingItems.slice(counter, counter + 10);
//   };
//
//   return (
//     <div className="dynamic">
//       <h3 className="greet fw-bolder">Student Admission Details</h3>
//       <hr />
//
//       <main className="change">
//         <div className="box-c">
//           <div className="flex">
//             <div className="sel-program">
//               <label htmlFor="program" className="form-label">Selected Program</label>
//               <select
//                 className="form-select"
//                 value={Rp}
//                 onChange={(e) => setRp(e.target.value)}
//               >
//                 <option value="0">Select The Program</option>
//                 {program.map((p) => (
//                   <option key={p.programm_id} value={p.programm_id}>{p.programm_name}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="sel-program">
//               <label htmlFor="branch" className="form-label">Selected Branch</label>
//               <select
//                 className="form-select"
//                 value={rB}
//                 onChange={(e) => setRB(e.target.value)}
//               >
//                 <option value="0">Select The Branch</option>
//                 {branch.map((b) => (
//                   <option key={b.branch_id} value={b.branch_id}>{b.bname}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="sel-program">
//               <div className="btns">
//                 <button onClick={downloadCOMP}>Generate Report</button>
//               </div>
//             </div>
//           </div>
//
//           <div className="sub-main">
//             <div className="report-dates">
//               <div className="sel-program">
//                 <label htmlFor="filter" className="form-label">Selected Program</label>
//                 <select
//                   className="form-select"
//                   value={programFilter}
//                   onChange={(e) => setProgramFiler(Number(e.target.value))}
//                 >
//                   <option value={0}>Select The Program</option>
//                   {program.map((p) => (
//                     <option key={p.programm_id} value={p.programm_id}>{p.programm_name}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//
//             <div className="search_faculty">
//               <div className="input">
//                 <i className="material-symbols-outlined">search</i>
//                 <input
//                   type="text"
//                   placeholder="Search Student Name"
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//             </div>
//
//             <h4>Total Applications: {data.length}</h4>
//             <br />
//
//             <div className="btns" style={{ justifyContent: "space-between" }}>
//               <button
//                 className="prev"
//                 disabled={counter === 0}
//                 onClick={() => setCounter(c => Math.max(0, c - 10))}
//               >
//                 Prev
//               </button>
//               <button
//                 className="next"
//                 disabled={counter >= data.length - 10}
//                 onClick={() => setCounter(c => c + 10)}
//               >
//                 Next
//               </button>
//             </div>
//
//             <br />
//
//             <div className="table">
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Gr No.</th>
//                     <th>College ID</th>
//                     <th>Full Name</th>
//                     <th>Branch</th>
//                     <th>Selected Program</th>
//                     <th>Detailed Application</th>
//                     <th>Edit</th>
//                     <th>Revert</th>
//                     <th>Cancelled Applications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {renderTableRows()}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
//
// export default FacultyAdmin;