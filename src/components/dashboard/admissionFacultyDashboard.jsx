// // import React, { Component } from "react";
// // import api from "api";
// // import { Link } from "react-router-dom";
// // import "./style.css";
//
// // class AdmissionFacultyDashboard extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       alternate_list: [],
// //       record: [{ hello: 0 }],
// //       count_1: 0,
// //       count_2: 0,
// //       count_3: 0,
// //       count_4: 0,
// //       count_5: 0,
// //       complete: [],
// //       it: 0,
// //       cs: 0,
// //       extc: 0,
// //       aids: 0,
// //       used: 0,
// //       ecse:0,
// //       mech:0
// //     };
// //   }
//
// //   componentDidMount() {
// //     this.fetchData();
// //   }
//
// //   fetchData = async () => {
// //     if (localStorage.getItem("isLogin") == undefined) {
// //       window.location.reload();
// //     } else {
// //       try {
// //         const response = await api.get(
// //           // 'http://localhost:5000/api/faculty/dashboard?uid='+localStorage.getItem('uid')
// //           `${process.env.REACT_APP_BASE_URL}/admission/facultDashboard`
// //         );
// //         this.setState({
// //           count_1: response.data["count_1"],
// //           count_2: response.data["count_2"],
// //           count_3: response.data["count_3"],
// //           count_4: response.data["count_4"],
// //           count_5: response.data["count_5"],
// //           cs: response.data.cs,
// //           it: response.data.it,
// //           extc: response.data.extc,
// //           aids: response.data.aids,
// //           mech:response.data.mech,
// //           ecse:response.data.ecse
// //         });
// //       } catch (error) {
// //       }
//
// //       try {
// //         const response = await api.get(
// //           // 'http://localhost:5000/api/faculty/dashboard?uid='+localStorage.getItem('uid')
// //           `${process.env.REACT_APP_BASE_URL}/admission/pendingApp`
// //         );
// //         this.setState({ complete: response.data });
// //       } catch (error) {
// //       }
// //     }
// //   };
//
// //   download = async (b) => {
// //     api
// //       .get(`${process.env.REACT_APP_BASE_URL}/admission/pendingAppD?brach=${b}`)
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
// //   render() {
// //     return (
// //       <div className="dynamic">
// //         <div className="row">
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>First Year Applications Completed</h4>
// //             <h2>{this.state.count_1}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Direct Second Year Applications</h4>
// //             <h2>{this.state.count_2}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Second Year Applications</h4>
// //             <h2>{this.state.count_3}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Third Year Applications</h4>
// //             <h2>{this.state.count_4}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Final Year Applications</h4>
// //             <h2>{this.state.count_5}</h2>
// //           </div>
//
// //           {this.state.complete.length > 0 && (
// //             <>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(1)}
// //               >
// //                 <h4>Computer</h4>
// //                 <h2>Total: {this.state.cs}</h2>
// //                 <h4>Completed: {this.state.complete[0].pcs}</h4>
// //                 <h4>Pending: {this.state.cs - this.state.complete[0].pcs}</h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(4)}
// //               >
// //                 <h4>Information Technology</h4>
// //                 <h2>Total: {this.state.it}</h2>
// //                 <h4>Completed: {this.state.complete[0].pit}</h4>
// //                 <h4>Pending: {this.state.it - this.state.complete[0].pit}</h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(2)}
// //               >
// //                 <h4>AI & DS</h4>
// //                 <h2>Total: {this.state.aids}</h2>
// //                 <h4>
// //                   Completed: {this.state.complete[0].paids}
// //                 </h4>
// //                 <h4>
// //                   Pending: {this.state.aids - this.state.complete[0].paids}
// //                 </h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(3)}
// //               >
// //                 <h4>Mechatronics</h4>
// //                 <h2>Total: {this.state.mech}</h2>
// //                 <h4>
// //                   Completed: {this.state.complete[0].pmech}
// //                 </h4>
// //                 <h4>
// //                   Pending: {this.state.mech - this.state.complete[0].pmech}
// //                 </h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(3)}
// //               >
// //                 <h2>Total: {this.state.ecse}</h2>
// //                 <h4>
// //                   Completed: {this.state.complete[0].pec}
// //                 </h4>
// //                 <h4>
// //                   Pending: {this.state.ecse - this.state.complete[0].pec}
// //                 </h4>
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   }
// // }
//
// // export default AdmissionFacultyDashboard;
//
// // <table className="table">
// //       <tr>
// //         <th>Year</th>
// //         <th colspan="4">Total Students</th>
// //         <th colspan="4">Admitted Students</th>
// //         <th colspan="4">Pending Students</th>
// //       </tr>
// //       <tr>
// //         <th></th>
// //         <th>Comps</th>
// //         <th>IT</th>
// //         <th>AIDS</th>
// //         <th>EXTC</th>
// //         <th>Comps</th>
// //         <th>IT</th>
// //         <th>AIDS</th>
// //         <th>EXTC</th>
// //         <th>Comps</th>
// //         <th>IT</th>
// //         <th>AIDS</th>
// //         <th>EXTC</th>
// //       </tr>
// //       <tr>
// //         <td>FE</td>
// //         <td>Row 1, Col 1</td>
// //         <td>Row 1, Col 2</td>
// //         <td>Row 1, Col 3</td>
// //         <td>Row 1, Col 4</td>
// //         <td>Row 1, Col 5</td>
// //         <td>Row 1, Col 6</td>
// //         <td>Row 1, Col 7</td>
// //         <td>Row 1, Col 8</td>
// //         <td>Row 1, Col 9</td>
// //         <td>Row 1, Col 10</td>
// //         <td>Row 1, Col 11</td>
// //         <td>Row 1, Col 12</td>
// //       </tr>
// //       <tr>
// //         <td>SE</td>
//
// //         <td>Row 2, Col 1</td>
// //         <td>Row 2, Col 2</td>
// //         <td>Row 2, Col 3</td>
// //         <td>Row 2, Col 4</td>
// //         <td>Row 2, Col 5</td>
// //         <td>Row 2, Col 6</td>
// //         <td>Row 2, Col 7</td>
// //         <td>Row 2, Col 8</td>
// //         <td>Row 2, Col 9</td>
// //         <td>Row 2, Col 10</td>
// //         <td>Row 2, Col 11</td>
// //         <td>Row 2, Col 12</td>
// //       </tr>
// //       <tr>
// //         <td>TE</td>
//
// //         <td>Row 3, Col 1</td>
// //         <td>Row 3, Col 2</td>
// //         <td>Row 3, Col 3</td>
// //         <td>Row 3, Col 4</td>
// //         <td>Row 3, Col 5</td>
// //         <td>Row 3, Col 6</td>
// //         <td>Row 3, Col 7</td>
// //         <td>Row 3, Col 8</td>
// //         <td>Row 3, Col 9</td>
// //         <td>Row 3, Col 10</td>
// //         <td>Row 3, Col 11</td>
// //         <td>Row 3, Col 12</td>
// //       </tr>
// //       <tr>
// //         <td>BE</td>
//
// //         <td>Row 4, Col 1</td>
// //         <td>Row 4, Col 2</td>
// //         <td>Row 4, Col 3</td>
// //         <td>Row 4, Col 4</td>
// //         <td>Row 4, Col 5</td>
// //         <td>Row 4, Col 6</td>
// //         <td>Row 4, Col 7</td>
// //         <td>Row 4, Col 8</td>
// //         <td>Row 4, Col 9</td>
// //         <td>Row 4, Col 10</td>
// //         <td>Row 4, Col 11</td>
// //         <td>Row 4, Col 12</td>
// //       </tr>
// //     </table>
//
//
// // import React, { Component } from "react";
// // import api from "api";
// // import { Link } from "react-router-dom";
// // import "./style.css";
//
// // class AdmissionFacultyDashboard extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       alternate_list: [],
// //       record: [{ hello: 0 }],
// //       count_1: 0,
// //       count_2: 0,
// //       count_3: 0,
// //       count_4: 0,
// //       count_5: 0,
// //       complete: [],
// //       it: 0,
// //       cs: 0,
// //       extc: 0,
// //       aids: 0,
// //       used: 0,
// //       ecse:0,
// //       mech:0
// //     };
// //   }
//
// //   componentDidMount() {
// //     this.fetchData();
// //   }
//
// //   fetchData = async () => {
// //     if (localStorage.getItem("isLogin") == undefined) {
// //       window.location.reload();
// //     } else {
// //       try {
// //         const response = await api.get(
// //           // 'http://localhost:5000/api/faculty/dashboard?uid='+localStorage.getItem('uid')
// //           `${process.env.REACT_APP_BASE_URL}/admission/facultDashboard`
// //         );
// //         this.setState({
// //           count_1: response.data["count_1"],
// //           count_2: response.data["count_2"],
// //           count_3: response.data["count_3"],
// //           count_4: response.data["count_4"],
// //           count_5: response.data["count_5"],
// //           cs: response.data.cs,
// //           it: response.data.it,
// //           extc: response.data.extc,
// //           aids: response.data.aids,
// //           mech:response.data.mech,
// //           ecse:response.data.ecse
// //         });
// //       } catch (error) {
// //       }
//
// //       try {
// //         const response = await api.get(
// //           // 'http://localhost:5000/api/faculty/dashboard?uid='+localStorage.getItem('uid')
// //           `${process.env.REACT_APP_BASE_URL}/admission/pendingApp`
// //         );
// //         this.setState({ complete: response.data });
// //       } catch (error) {
// //       }
// //     }
// //   };
//
// //   download = async (b) => {
// //     api
// //       .get(`${process.env.REACT_APP_BASE_URL}/admission/pendingAppD?brach=${b}`)
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
// //   render() {
// //     return (
// //       <div className="dynamic">
// //         <div className="row">
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>First Year Applications Completed</h4>
// //             <h2>{this.state.count_1}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Direct Second Year Applications</h4>
// //             <h2>{this.state.count_2}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Second Year Applications</h4>
// //             <h2>{this.state.count_3}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Third Year Applications</h4>
// //             <h2>{this.state.count_4}</h2>
// //           </div>
// //           <div className="col-lg-4 m-2 rectangle">
// //             <h4>Final Year Applications</h4>
// //             <h2>{this.state.count_5}</h2>
// //           </div>
//
// //           {this.state.complete.length > 0 && (
// //             <>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(1)}
// //               >
// //                 <h4>Computer</h4>
// //                 <h2>Total: {this.state.cs}</h2>
// //                 <h4>Completed: {this.state.complete[0].pcs}</h4>
// //                 <h4>Pending: {this.state.cs - this.state.complete[0].pcs}</h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(4)}
// //               >
// //                 <h4>Information Technology</h4>
// //                 <h2>Total: {this.state.it}</h2>
// //                 <h4>Completed: {this.state.complete[0].pit}</h4>
// //                 <h4>Pending: {this.state.it - this.state.complete[0].pit}</h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(2)}
// //               >
// //                 <h4>AI & DS</h4>
// //                 <h2>Total: {this.state.aids}</h2>
// //                 <h4>
// //                   Completed: {this.state.complete[0].paids}
// //                 </h4>
// //                 <h4>
// //                   Pending: {this.state.aids - this.state.complete[0].paids}
// //                 </h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(3)}
// //               >
// //                 <h4>Mechatronics</h4>
// //                 <h2>Total: {this.state.mech}</h2>
// //                 <h4>
// //                   Completed: {this.state.complete[0].pmech}
// //                 </h4>
// //                 <h4>
// //                   Pending: {this.state.mech - this.state.complete[0].pmech}
// //                 </h4>
// //               </div>
// //               <div
// //                 className="col-lg-4 m-2 rectangle"
// //                 onClick={() => this.download(3)}
// //               >
// //                 <h2>Total: {this.state.ecse}</h2>
// //                 <h4>
// //                   Completed: {this.state.complete[0].pec}
// //                 </h4>
// //                 <h4>
// //                   Pending: {this.state.ecse - this.state.complete[0].pec}
// //                 </h4>
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   }
// // }
//
// import React, { Component } from "react";
// // import api from "api";÷÷
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./style.css";
// import api from "../../api";
//
// // Register the components with Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
//
// class AdmissionFacultyDashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       alternate_list: [],
//       allBranches:[],
//       year_dep:[],
//       record: [{ hello: 0 }],
//       count_1: 0,
//       count_2: 0,
//       count_3: 0,
//       count_4: 0,
//       count_5: 0,
//       complete: [],
//       it: 0,
//       cs: 0,
//       extc: 0,
//       aids: 0,
//       mech: 0,
//       ecse: 0,
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     if (localStorage.getItem("isLogin") === undefined) {
//       window.location.reload();
//     } else {
//       try {
//         const response = await api.get(
//           `${process.env.REACT_APP_BASE_URL}/admission/facultDashboard`
//         );
//         this.setState({
//           count_1: response.data["count_1"],
//           count_2: response.data["count_2"],
//           count_3: response.data["count_3"],
//           count_4: response.data["count_4"],
//           count_5: response.data["count_5"],
//           cs: response.data.cs,
//           it: response.data.it,
//           extc: response.data.extc,
//           aids: response.data.aids,
//           mech: response.data.mech,
//           ecse: response.data.ecse,
//         });
//       } catch (error) {
//       }
//
//       try {
//         const response = await api.get(
//           `${process.env.REACT_APP_BASE_URL}/admission/pendingApp`
//         );
//         this.setState({ complete: response.data });
//       } catch (error) {
//       }
//
//       try {
//         const response = await api.get(
//           `${process.env.REACT_APP_BASE_URL}/admission/year_dep`
//         );
//         this.setState({ year_dep: response.data.data });
//       } catch (error) {
//       }
//
//       try {
//         const response = await api.get(
//           `${process.env.REACT_APP_BASE_URL}/admission/signUp`
//         );
//         this.setState({ allBranches: response.data["branch"] });
//       } catch (error) {
//       }
//
//     }
//   };
//
//   download = async (b) => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/pendingAppD?brach=${b}`)
//       .then((res) => {
//         const blob = new Blob([res.data], { type: "text/csv" });
//         const csvURL = URL.createObjectURL(blob);
//         const downloadLink = document.createElement("a");
//         downloadLink.href = csvURL;
//         downloadLink.download = "data.csv";
//         downloadLink.click();
//         URL.revokeObjectURL(csvURL);
//         downloadLink.remove();
//       })
//       .catch((err) => {
//       });
//   };
//
//   render() {
//     const barData = {
//       labels: ["CS", "IT", "EXTC", "AI & DS", "Mech", "ECSE"], // Branch names
//       datasets: [
//         {
//           label: "Total Applications",
//           backgroundColor: "rgba(75,192,192,0.6)",
//           borderColor: "rgba(75,192,192,1)",
//           borderWidth: 1,
//           hoverBackgroundColor: "rgba(75,192,192,0.8)",
//           hoverBorderColor: "rgba(75,192,192,1)",
//           data: [
//             this.state.cs,
//             this.state.it,
//             this.state.extc,
//             this.state.aids,
//             this.state.mech,
//             this.state.ecse,
//           ], // Corresponding data
//         },
//         {
//           label: "Completed Applications",
//           backgroundColor: "rgba(54,162,235,0.6)",
//           borderColor: "rgba(54,162,235,1)",
//           borderWidth: 1,
//           hoverBackgroundColor: "rgba(54,162,235,0.8)",
//           hoverBorderColor: "rgba(54,162,235,1)",
//           data: [
//             this.state.complete[0]?.pcs || 0,
//             this.state.complete[0]?.pit || 0,
//             this.state.complete[0]?.pextc || 0,
//             this.state.complete[0]?.paids || 0,
//             this.state.complete[0]?.pmech || 0,
//             this.state.complete[0]?.pec || 0,
//           ], // Completed data
//         },
//         {
//           label: "Pending Applications",
//           backgroundColor: "rgba(255,99,132,0.6)",
//           borderColor: "rgba(255,99,132,1)",
//           borderWidth: 1,
//           hoverBackgroundColor: "rgba(255,99,132,0.8)",
//           hoverBorderColor: "rgba(255,99,132,1)",
//           data: [
//             this.state.cs - (this.state.complete[0]?.pcs || 0),
//             this.state.it - (this.state.complete[0]?.pit || 0),
//             this.state.extc - (this.state.complete[0]?.pextc || 0),
//             this.state.aids - (this.state.complete[0]?.paids || 0),
//             this.state.mech - (this.state.complete[0]?.pmech || 0),
//             this.state.ecse - (this.state.complete[0]?.pec || 0),
//           ], // Pending data
//         },
//       ],
//     };
//
//     const barOptions = {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };
//
//     const yearBardata = {
//       labels:['First Year','Direct Second Year','Second Year','Third Year','Final Year'],
//       datasets:[
//         {
//           label:"Total Applications",
//           backgroundColor: "rgba(255,99,132,0.6)",
//           borderColor: "rgba(255,99,132,1)",
//           borderWidth: 1,
//           hoverBackgroundColor: "rgba(255,99,132,0.8)",
//           hoverBorderColor: "rgba(255,99,132,1)",
//           data:[
//             this.state.count_1 || 0,
//             this.state.count_2 || 0,
//             this.state.count_3 || 0,
//             this.state.count_4 || 0,
//             this.state.count_5 || 0
//           ]
//         }
//       ]
//     }
//
//     const yearBarOption = {
//       scales:{
//         y:{
//           beginAtZero:true
//         }
//       }
//     }
//
//     const yearwiseBranchData = this.state.allBranches.map((branch) => {
//       const yearData = [0, 0, 0, 0, 0]; // Initialize with zeros for 5 years
//
//       this.state.year_dep.forEach((record) => {
//         if (record.branch_id === branch.branch_id) {
//           // Use programm_id to determine which year it corresponds to
//           switch (record.programm_id) {
//             case 1:
//               yearData[0] = record.c; // First Year
//               break;
//             case 2:
//               yearData[1] = record.c; // Direct Second Year
//               break;
//             case 3:
//               yearData[2] = record.c; // Second Year
//               break;
//             case 4:
//               yearData[3] = record.c; // Third Year
//               break;
//             case 5:
//               yearData[4] = record.c; // Final Year
//               break;
//             default:
//               break;
//           }
//         }
//       });
//
//       return {
//         label: branch.bname, // Branch name
//         backgroundColor: this.getRandomColor(),
//         borderColor: this.getRandomColor(),
//         borderWidth: 1,
//         hoverBackgroundColor: this.getRandomColor(),
//         hoverBorderColor: this.getRandomColor(),
//         data: yearData,
//       };
//     });
//
//
//
//     const yearwiseBraanchBardata = {
//       labels: [
//         "First Year",
//         "Direct Second Year",
//         "Second Year",
//         "Third Year",
//         "Final Year",
//       ],
//       datasets: yearwiseBranchData, // Add processed datasets
//     };
//
//     const yearBarOptions = {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };
//
//     return (
//       <div className="dynamic">
//         <div className="row">
//           {this.state.complete.length > 0 && (
//             <>
//               <div className="col-lg-5">
//                 <Bar data={yearBardata} options={yearBarOption} />
//               </div>
//               <div className="col-lg-5">
//                 <Bar data={barData} options={barOptions} />
//               </div>
//               <hr className="col-lg-9 m-3"/>
//               <div className="col-lg-9 mt-3">
//                 <Bar data={yearwiseBraanchBardata} options={yearBarOptions} />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }
//
//   getRandomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
// }
//
// export default AdmissionFacultyDashboard;
