// import "./admssion.css";
// import Header from "../admission/Header/Header";
// import Navigation from "../admission/navigation/navigation";
// import React from "react";
// import { Route, Routes, Link, Navigate } from "react-router-dom";
// import BasicD from "../admission/BasicD";
// import Logout from "../logout";
// import AdmissionFacultyDashboard from "../dashboard/admissionFacultyDashboard";
// import FacultyAdmin from "../admission/Admission_recors/Admission_recors";
// import AddCapApp from "../admission/AddCapApplications/AddCapApp";
// import AdmssionPrint from "../admission/printApplication/Admission_print";
// import EditApplication from "../admission/printApplication/EditApplication";
// import ForgetPass from "../Header/ForgetPass";
// import Cancelled_apps from "../admission/CancelledApps/Cancelled_apps";
// import ReportGenerator from "../admission/customeReport/CustomReport";
//
// class Admission_facBase extends React.Component {
//   render() {
//     return (
//       <div>
//         <Routes>
//           <Route path="/printApplication" element={<AdmssionPrint />} />
//           <Route path="/editApplication" element={<EditApplication />} />
//         </Routes>
//         {window.location.pathname != "/printApplication" &&
//         window.location.pathname != "/editApplication" ? (
//           <>
//             <Header />
//
//             <section className="rootf containers">
//               <Navigation />
//
//               <Routes>
//                 <Route path="/" element={<AdmissionFacultyDashboard />} />
//                 <Route path="/applications" element={<FacultyAdmin />} />
//                 <Route path="/addCapApp" element={<AddCapApp />} />
//                 <Route path="/resetpass" element={<ForgetPass />} />
//                 <Route path="/logout" element={<Logout />} />
//                 <Route path="/cancelled_applications" element={<Cancelled_apps/>}/>
//                 <Route path="/customReport" element={<ReportGenerator/>}/>
//               </Routes>
//             </section>
//           </>
//         ) : (
//           <></>
//         )}
//       </div>
//     );
//   }
// }
//
// export default Admission_facBase;
