// import React from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
//
// const EducationD = () => {
//
//     const styles = {
//         backgroundColor: '#fff',
//         color: '#1d2a4c',
//         padding: '4px 12px',
//         borderRadius: '4px'
//     }
//     console.log(window.location.pathname)
//     return (
//
//         <>
//             <div className='dynamic'>
//                 <h3 className='greet fw-bolder'>Education Details</h3>
//                 <div className="line-header"></div>
//
//                 <main className='change'>
//                     <div className='box-c'>
//
//                         <ul className='select-bar'>
//                             {
//                                 window.location.pathname == '/EducationD/PreviousD' ?
//                                     <><li><a style={styles} href="/EducationD/PreviousD">Previous Course Details</a></li></> :
//                                     <><li><a href="/EducationD/PreviousD">Previous Course Details</a></li></>
//                             }
//
//                             {
//                                 localStorage.getItem('program')<=2 ?
//                                 (window.location.pathname == '/EducationD/Entrance' ?
//                                     <><li><a style={styles} href="/EducationD/Entrance">Entrance Details</a></li></> :
//                                     <><li><a href="/EducationD/Entrance">Entrance Details</a></li></>):
//                                     <></>
//                             }
//
//                             {
//                                 window.location.pathname == '/EducationD/CurrentD' ?
//                                     <><li><a style={styles} href="/EducationD/CurrentD">Present Course Details</a></li></> :
//                                     <><li><a href="/EducationD/CurrentD">Present Course Details</a></li></>
//                             }
//
//                         </ul>
//                     </div>
//                 </main>
//
//             </div>
//         </>
//
//     );
// };
//
// export default EducationD
