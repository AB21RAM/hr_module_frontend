// import './Base.css';
// import Header from '../admission/Header/Header'
// import Navigation from '../admission/navigation/navigation';
// import React from 'react';
// import { BrowserRouter, Route, Routes, Link, Navigate, Router  } from 'react-router-dom';
// import BasicD from '../admission/BasicD';
// import PersonalD from '../admission/BasicDetails/PersonalD';
// import ParentD from '../admission/BasicDetails/ParentD';
// import AddressD from '../admission/BasicDetails/AddressD';
// import EducationD from '../admission/EducationD';
// import PresentD from '../admission/EducationDetails/current';
// import PreviousD from '../admission/EducationDetails/previous';
// import UploadD from '../admission/UploadD';
// import Logout from '../logout';
// import Signup from '../admission/Sign-up/SignUp';
// import StudDash from '../dashboard/studDash';
// import AdmssionPrint from '../admission/printApplication/Admission_print';
// import EntranceD from '../admission/EducationDetails/EntranceD';
// import Sem from '../admission/EducationDetails/Sem';
// import FinalSubmit from '../admission/printApplication/FinalSubmit';
// import HDegree from '../admission/EducationDetails/HDegree';
//
//
// class StudBase extends React.Component {
//   componentDidMount(){
//     const urlParams = new URLSearchParams(window.location.search);
//     const query = urlParams.get('message');
//     if(query!=null){
//       alert(query)
//     }
//   }
//     render(){
//   return (
//         <div>
//           <Routes>
//           <Route path="/printApplication" element={<AdmssionPrint />} />
//           </Routes>
//           {
//             window.location.pathname=='/printApplication' ? <></> :
//             <>
//               <Header />
//
//               {/* Main Content which changes dynamically */}
//               <section className='rootf containers'>
//                 <Navigation />
//
//                 {/* Routing */}
//                 <Routes>
//                     <Route path="/BasicD" element={<BasicD />} />
//                     <Route path="/" element={<StudDash />} />
//                     <Route path="/BasicD/PersonalD" element={<PersonalD />} />
//                     <Route path="/BasicD/ParentD" element={<ParentD/>} />
//                     <Route path="/BasicD/AddressD" element={<AddressD/>} />
//                     <Route path="/EducationD" element={<EducationD/>} />
//                     <Route path="/EducationD/CurrentD" element={<PresentD/>} />
//                     <Route path="/EducationD/PreviousD" element={<PreviousD/>} />
//                     <Route path="/EducationD/Entrance" element={<EntranceD/>} />
//                     <Route path="/EducationD/SemesterD" element={<Sem/>} />
//                     <Route path="/UploadD" element={<UploadD/>} />
//                     <Route path="/logout" element={<Logout/>} />
//                     <Route path="/finalSubmit" element={<FinalSubmit/>} />
//                     <Route path="/EducationD/honours" element={<HDegree/>} />
//                 </Routes>
//               </section>
//             </>
//           }
//
//         </div>
//
//   );
// }}
//
// export default StudBase;
