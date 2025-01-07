// import React from 'react'
// import { Route, Routes, Link } from 'react-router-dom';
//
//
//
//
// const BasicD = () => {
//
//     const styles = {
//         backgroundColor: '#fff',
//         color: '#1d2a4c',
//         padding: '4px 12px',
//         borderRadius: '4px'
//     }
//
//     return (
//         <>
//             <div className='dynamic'>
//                 <h3 className='greet fw-bolder'>Basic Details</h3>
//                 <div className="line-header"></div>
//
//                 <main className='change'>
//                     <div className='box-c'>
//
//
//                         <ul className='select-bar'>
//                             {
//                                 window.location.pathname == '/BasicD/PersonalD' ?
//                                     <><li ><a style={styles} href="/BasicD/PersonalD">Personal</a></li></> :
//                                     <><li><a href="/BasicD/PersonalD">Personal</a></li></>
//                             }
//                             {
//                                 window.location.pathname == '/BasicD/ParentD' ?
//                                     <><li><a style={styles} href="/BasicD/ParentD">Parent</a></li></> :
//                                     <><li><a href="/BasicD/ParentD">Parent</a></li></>
//                             }
//                             {
//                                 window.location.pathname == '/BasicD/AddressD' ?
//                                     <><li><a style={styles} href="/BasicD/AddressD">Address</a></li></> :
//                                     <><li><a href="/BasicD/AddressD">Address</a></li></>
//                             }
//
//                         </ul>
//
//                     </div>
//                 </main>
//
//             </div>
//         </>
//
//     );
// };
//
// export default BasicD
