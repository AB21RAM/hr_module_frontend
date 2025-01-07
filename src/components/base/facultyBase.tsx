// import React, { useState, useEffect } from "react";
// import "./Base.css";
// import Header from "../Header/Header";
// import Navigation from "../navigation/navigation";
// import ApprovedLeave from "../hr_modul/ApprovedLeave/ApprovedLeave";
// import LeaveAproval from "../hr_modul/LeaveApproval/LeaveAproval";
// import {
//   // BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Logout from "../logout";
// import ApplyForLeave from "../hr_modul/ApplyLeave/applyLeave";
// import FacultyDashboard from "../dashboard/FacultyDashboard";
// import MyPunchRecord from "../hr_modul/MyPunchRecord/MyPunchRecord";
// import Leave_history from "../hr_modul/MyPunchRecord/leave_history";
// import ForgetPass from "../Header/ForgetPass";
// import FacultyCancelledLeave from "../hr_modul/CancelledLeave/FacultyCancelledleave";
// import api from "../../api";
//
// const FacBase: React.FC = () => {
//   const [user, setUser] = useState<{ name: string; role: number }>({
//     name: "",
//     role: 0,
//   });
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get(
//             `${process.env.REACT_APP_BASE_URL}/base_data?uid=` +
//             localStorage.getItem("uid")
//         );
//         setUser(response.data["user"]);
//         localStorage.setItem("role", response.data["user"].role.toString());
//       } catch (error) {
//         console.error(error);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   const currentDate = new Date();
//   const formattedDate = currentDate.toDateString();
//
//   return (
//       <div>
//         <Header />
//
//         <section className="rootf containers">
//           <Navigation />
//           <div className="dynamic">
//             <h2 className="greet">Hello, {user.name}</h2>
//             <p className="greet">{formattedDate}</p>
//             <hr />
//
//             <main className="change">
//               <div className="box-c">
//                 <Routes>
//                   <Route path="/" element={<FacultyDashboard />} />
//                   <Route path="/Dashboard" element={<FacultyDashboard />} />
//                   <Route
//                       path="/leaveApproval"
//                       element={
//                         user.role <= 2 ? <LeaveAproval /> : <Navigate to="*" />
//                       }
//                   />
//                   <Route
//                       path="/AprovedLeaves"
//                       element={
//                         user.role <= 2 ? <ApprovedLeave /> : <Navigate to="*" />
//                       }
//                   />
//                   <Route path="/ApplyForLeave" element={<ApplyForLeave />} />
//                   <Route
//                       path="/faculty_cancelled_leave"
//                       element={<FacultyCancelledLeave />}
//                   />
//                   <Route path="/MyPunchRecord" element={<MyPunchRecord />} />
//                   <Route path="/myleaves" element={<Leave_history />} />
//                   <Route path="/resetpass" element={<ForgetPass />} />
//                   <Route path="/logout" element={<Logout />} />
//                   <Route
//                       path="*"
//                       element={
//                         <div>
//                           <h4 className="fw-bolder error">403: Forbidden</h4>
//                           <p>
//                             Oops! It seems you don't have the necessary
//                             authorization to access this section of the website.
//                           </p>
//                         </div>
//                       }
//                   />
//                 </Routes>
//               </div>
//             </main>
//           </div>
//         </section>
//       </div>
//   );
// };
//
// export default FacBase;