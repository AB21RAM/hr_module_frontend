// import React, { Component } from "react";
// // import api from "api";
// import { Link } from "react-router-dom";
// import "./style.css";
// import api from "../../api";
//
// class FacultyDashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       alternate_list: [],
//       record: [{ hello: 0 }],
//       used: 0,
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     if (localStorage.getItem("isLogin") == undefined) {
//       window.location.reload();
//     } else {
//       try {
//         const response = await api.get(
//           // 'http://localhost:5000/api/faculty/dashboard?uid='+localStorage.getItem('uid')
//           `${process.env.REACT_APP_BASE_URL}/faculty/dashboard?uid=` +
//             localStorage.getItem("uid")
//         );
//         this.setState({
//           record: response.data["leave_list"],
//           used: response.data["used"],
//           alternate_list: response.data["alternate"],
//         });
//       } catch (error) {
//       }
//     }
//   };
//
//   takeCharge = async (app_id, status) => {
//     try {
//       const response = await api.post(
//         // 'http://localhost:5000/api/faculty/takeCharge'
//         `${process.env.REACT_APP_BASE_URL}/faculty/takeCharge`,
//         {
//           app_id: app_id,
//           status: status,
//         }
//       );
//       this.setState({ msg: response.data["message"], status: 0, app_id: "" });
//       window.location.reload();
//     } catch (error) {
//     }
//   };
//
//   render() {
//     var alternateItems = [];
//
//     for (let i = 0; i < this.state.alternate_list.length; i++) {
//       var end = new Date(this.state.alternate_list[i].to_date);
//       var start = new Date(this.state.alternate_list[i].from_date);
//       var applied = new Date(this.state.alternate_list[i].applied_date);
//       alternateItems.push(
//         <tr>
//           <td>{this.state.alternate_list[i].name}</td>
//           <td>{this.state.alternate_list[i].lname}</td>
//           <td>{this.state.alternate_list[i].no_of_days}</td>
//           <td>{this.state.alternate_list[i].reason}</td>
//           <td>{start.toLocaleDateString("en-GB")}</td>
//           <td>{end.toLocaleDateString("en-GB")}</td>
//           <td>{applied.toLocaleDateString("en-GB")}</td>
//           <td>
//             <div className="buttons">
//               <button
//                 className="green"
//                 onClick={(e) => {
//                   this.takeCharge(this.state.alternate_list[i].leave_app_id, 1);
//                 }}
//               >
//                 Approve
//               </button>
//               <button
//                 className="red"
//                 onClick={(e) => {
//                   this.takeCharge(this.state.alternate_list[i].leave_app_id, 2);
//                 }}
//               >
//                 Deny
//               </button>
//             </div>
//           </td>
//         </tr>
//       );
//     }
//
//     const count = [];
//     const tp = this.state.record;
//
//     Object.keys(this.state.record[0]).map((key) =>
//       count.push(
//         <div className="col-lg-3 m-3 rectangle">
//           <h4>Available {key}</h4>
//           <h2>{this.state.record[0][key]}</h2>
//         </div>
//       )
//     );
//
//     count.push(
//       <div className="col-lg-4 m-3 rectangle">
//         <h4>Total Used Earned Leaves</h4>
//         <h2>{this.state.used}</h2>
//       </div>
//     );
//     return (
//       <div className="main">
//         <div className="row">
//           {alternateItems.length != 0 && (
//             <div className="col-lg-12 table">
//               Take Charge
//               <table className="table table-bordered">
//                 <tr>
//                   <th>Faculty Name</th>
//                   <th>Number of Days</th>
//                   <th>Leave Type</th>
//                   <th>Leave Reason</th>
//                   <th>From</th>
//                   <th>To</th>
//                   <th>Applied</th>
//                   <th>Approval</th>
//                 </tr>
//                 {alternateItems}
//               </table>
//             </div>
//           )}
//           {count}
//         </div>
//       </div>
//     );
//   }
// }
//
// export default FacultyDashboard;
