// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate, useNavigate } from 'react-router-dom';
// import BasicD from '../BasicD';
//
// import { Helmet } from 'react-helmet'
// import { IKImage, IKContext, IKUpload } from "imagekitio-react";
// import api from '../../../api';
//
//
// const FinalSubmit = () => {
//   const [feeStructure, setFeeStructure] = useState([])
//   const [allFee, setallFee] = useState([{ head_name: '' }])
//   const [isDone, setisDone] = useState([])
//   const [isChecked, setChecked] = useState(false);
//   const [isCheckedn, setCheckedn] = useState(false);
//   const [ddlink, setDDlink] = useState(false);
//   const [wantTopay, setWantToPay] = useState(0)
//   useEffect(() => {
//     FetchFeeStructure();
//     FetchAllFh();
//   }, []);
//
//   const FetchAllFh = async () => {
//
//     try {
//       const { data } = await api.get(`${process.env.REACT_APP_BASE_URL}/account/fetchAllFh`);
//       if (!data.found) console.log(data.error);
//       else {
//         setallFee(data.result);
//       }
//     } catch (error) {
//     }
//   };
//
//   const FetchFeeStructure = async () => {
//     try {
//       const response = await api.post(`https://account.vppcoe.getflytechnologies.com/auth/getFeeStructure`,{
//         ay:'2024-25',
//         uid:localStorage.getItem('uid')
//       });
//       const data = await response.data;
//
//         setFeeStructure(data.details);
//         setWantToPay(data.details.payable)
//         setisDone(data.final_submit)
//
//     } catch (error) {
//     }
//   }
//   var sum = 0;
//
//   for (let i = 0; i < feeStructure.length; i++) {
//     sum = sum + feeStructure[i].amount;
//   }
//
//   var feeStructureItems = []
//   try {
//     {
//       feeStructure.map((data, index) => feeStructureItems.push(
//         <tr key={index}>
//           <td style={styles.tableCell}>{allFee.find(e => e.fh_id == data.fh_id).head_name}</td>
//           <td style={styles.tableCell}>{data.amount}</td>
//         </tr>
//       ))
//     }
//   }
//   catch (err) {
//   }
//
//   const ddsubmission = async (e) => {
//     e.preventDefault();
//     var formData = new FormData(e.target);
//     let isValid = true;
//     for (let [name, value] of formData.entries()) {
//       if (value.trim() === '') {
//         isValid = false;
//         break;
//       }
//     }
//
//     if (!isValid || ddlink == false) {
//       alert('Please fill in all the fields.');
//       return;
//     }
//
//     formData.append("dd_link", ddlink);
//     formData.append("uid", localStorage.getItem('uid'))
//
//     const response = await api.post(`${process.env.REACT_APP_BASE_URL}/admission/dd_info`, Object.fromEntries(formData));
//     const data = await response.data;
//     alert(data.message)
//   }
//
//   const NEFTsubmission = async (e) => {
//     e.preventDefault();
//     var formData = new FormData(e.target);
//     let isValid = true;
//     for (let [name, value] of formData.entries()) {
//       if (value.trim() === '') {
//         isValid = false;
//         break;
//       }
//     }
//
//     // if (!isValid || ddlink == false) {
//     //   alert('Please fill in all the fields.');
//     //   return;
//     // }
//
//     formData.append("dd_link", ddlink);
//     formData.append("uid", localStorage.getItem('uid'))
//
//     const response = await api.post(`${process.env.REACT_APP_BASE_URL}/admission/neft_info`, Object.fromEntries(formData));
//     const data = await response.data;
//     alert(data.message)
//   }
//
//
//   return (
//     <>
//       {isDone == 1 ? <Navigate to='/'></Navigate> : <></>}
//       <div className="btns" style={{ flexDirection: 'column', width: '100%' }}>
//         <div className="center" style={{ textAlign: 'center', width: '100%' }}>
//           <center>
//             <h4 className='para-head'>Fee Structure</h4>
//             {feeStructure && (
//               <div style={styles.tableContainer}>
//               <table style={styles.table}>
//                 <thead>
//                   <tr>
//                     <th
//                       style={{
//                         ...styles.tableCell,
//                         background: "#f6f6f6",
//                         textAlign: "left",
//                       }}
//                     >
//                       Description
//                     </th>
//                     <th
//                       style={{
//                         ...styles.tableCell,
//                         background: "#f6f6f6",
//                         textAlign: "left",
//                       }}
//                     >
//                       Amount
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th style={styles.tableCell}>
//                       Total Fee
//                     </th>
//                     <td style={styles.tableCell}>
//                   {feeStructure.total_fee}
//                     </td>
//                   </tr>
//                   <tr>
//                     <th style={styles.tableCell}>
//                       Scholership
//                     </th>
//                     <td style={styles.tableCell}>
//                   {feeStructure.scholership}
//                     </td>
//                   </tr>
//                   <tr>
//                     <th style={styles.tableCell}>
//                       Amount To Pay
//                     </th>
//                     <td style={styles.tableCell}>
//                     {feeStructure.amt_afterscholership}
//                     </td>
//                   </tr>
//
//                   <tr>
//                     <th style={styles.tableCell}>
//                       Total Paid
//                     </th>
//                     <td style={styles.tableCell}>
//                     {feeStructure.total_paid}
//                     </td>
//                   </tr>
//
//                   <tr>
//                     <th style={styles.tableCell}>
//                       Balance
//                     </th>
//                     <td style={styles.tableCell}>
//                     {feeStructure.payable}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             )}
//           </center>
//           {
//             isChecked != true ? <>
//               <form className='' action='https://vppcoe-va.getflytechnologies.com/payment/initiate_payment' method='POST' id='integration' >
//                 <input className='m-2' type="text" name='amount' value={wantTopay} onChange={(e)=>{setWantToPay(e.target.value)}} />
//                 <button name='id' value={localStorage.getItem('uid')}>
//                   Pay Fees
//                 </button>
//                 <br />
//               </form>
//               <br />
//               <button style={{color:'white'}}>
//                   <Link to='/printApplication' target='_blank'>Print Application</Link>
//               </button>
//             </> : <></>
//           }
//           {/* <form action='http://vppcoe-va.getflytechnologies.com/payment/initiate_payment' method='POST' id='integration' > */}
//           <br />
//         </div>
//
//       </div>
//
//
//
//
//     </>
//   );
// };
//
// export default FinalSubmit;
//
// const styles = {
//   mainContent: {
//     flex: 1,
//     padding: "20px",
//   },
//
//   formContainer: {
//     padding: "20px",
//     borderRadius: "4px",
//     flex: "none",
//   },
//
//   inputGroup: {
//     fontWeight: "bold",
//   },
//   label: {
//     marginRight: "10px",
//     padding: "10px",
//     marginBottom: "20px",
//     marginTop: "20px",
//   },
//   input: {
//     flex: "0 0 60px",
//     border: "1px solid #ccc",
//     transition: "border-color 0.3s ease",
//     padding: "8px",
//     marginRight: "30px",
//     marginBottom: "20px",
//     marginLeft: "20px",
//     marginTop: "20px",
//     borderRadius: "4px",
//     borderColor: "#4d4d4d",
//   },
//   buttonContainer: {
//     display: "flex",
//   },
//   submitButton: {
//     padding: "10px 20px",
//     backgroundColor: "#00b695",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginRight: "70px",
//     marginBottom: "30px",
//   },
//
//   tableContainer: {
//     maxHeight: "400px",
//     border: "0.5px solid #e6e6e6",
//     maxWidth: "40%",
//     background: "white",
//     borderRadius: "4px",
//     overflow: "hidden",
//     margin: "10px 0", // Increase the margin to create a bigger cell gap
//   },
//
//   table: {
//     borderCollapse: "collapse",
//     width: "100%",
//   },
//
//   tableCell: {
//     border: "1px solid #e6e6e6",
//     padding: "8px",
//     height: "40px", // Adjust the height as needed
//     verticalAlign: "middle",
//   },
// };
//
