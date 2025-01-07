// import React, { useEffect, useState } from 'react'
// import './navigation.css';
// import { Link } from 'react-router-dom';
//
//
//
// const Navigation = (props) => {
//
//   const styles = {
//     backgroundColor: '#ffffff1a',
//     borderRadius: '8px',
//     color: '#fff'
//   }
//
//   return (
//     <section className="hero">
//       <nav className="navLinks" id="navL">
//         <ul>
//           {
//             window.location.pathname == '/' ?
//               <><li style={styles}>
//                 <i class="material-symbols-outlined">dashboard</i>&nbsp;
//                 <a href="/">Dashboard</a>
//               </li>
//               </> :
//               <><li>
//                 <i class="material-symbols-outlined">dashboard</i>&nbsp;
//                 <a href="/">Dashboard</a>
//               </li></>
//           }
//
//           {localStorage.getItem('user_type') == 4 ?
//             <>
//
//               {
//                 window.location.pathname == '/BasicD/PersonalD' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">account_box</i>&nbsp;
//                     <a href="/BasicD/PersonalD">Basic Details</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">account_box</i>&nbsp;
//                     <a href="/BasicD/PersonalD">Basic Details</a>
//                   </li></>
//               }
//
//               {
//                 window.location.pathname == '/EducationD/PreviousD' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">school</i>&nbsp;
//                     <a href="/EducationD/PreviousD">Education Details</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">school</i>&nbsp;
//                     <a href="/EducationD/PreviousD">Education Details</a>
//                   </li></>
//               }
//
//               {
//                 window.location.pathname == '/UploadD' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">upload_file</i>&nbsp;
//                     <a href="/UploadD">Upload Document</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">upload_file</i>&nbsp;
//                     <a href="/UploadD">Upload Document</a>
//                   </li></>
//               }
//
//             </> :
//
//             <>
//               {
//                 window.location.pathname == '/applications' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/applications">Applications</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/applications">Applications</a>
//                   </li></>
//               }
//               {
//                 window.location.pathname == '/addCapApp' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/addCapApp">Add Cap Applications</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/addCapApp">Add Cap Applications</a>
//                   </li></>
//               }
//               {
//                 window.location.pathname == '/customReport' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/customReport">Custom Report</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/customReport">Custom Report</a>
//                   </li></>
//               }
//               {
//                 window.location.pathname == '/cancelled_applications' ?
//                   <><li style={styles}>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/cancelled_applications">Cancelled Applications</a>
//                   </li>
//                   </> :
//                   <><li>
//                     <i class="material-symbols-outlined">home_storage</i>&nbsp;
//                     <a href="/cancelled_applications">Cancelled Applications</a>
//                   </li></>
//               }
//             </>
//           }
//
//           <>
//             {
//               window.location.pathname == '/logout' ?
//                 <><li style={styles}>
//                   <i class="material-symbols-outlined">logout</i>&nbsp;
//                   <a href="/logout">Logout</a>
//                 </li>
//                 </> :
//                 <><li>
//                   <i class="material-symbols-outlined">logout</i>&nbsp;
//                   <a href="/logout">Logout</a>
//                 </li></>
//             }
//           </>
//         </ul>
//         <p>
//           Getfly Technologies
//         </p>
//       </nav>
//
//     </section >
//   );
// };
//
// export default Navigation;
