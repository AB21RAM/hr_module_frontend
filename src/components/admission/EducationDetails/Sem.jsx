// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
// import EducationD from '../EducationD';
//
// import Validation from '../validartions';
// import api from '../../../api';
//
// const Sem = () => {
//     const [isDone,setDone] = useState(false);
//   const [code, setCode] = useState(null);
//   const [data, setData] = useState([]);
//   const [isSubmitted, setIsSubmited] = useState(false);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = () => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/sem?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//           setData(response.data['entrance']);
//       })
//       .catch((error) => {
//       });
//       api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/isSubmmited?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//         setIsSubmited(response.data['isSubmmited'])
//       })
//       .catch((error) => {
//       });
//   };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//
//         const formData = new FormData(event.target);
//         let isValid = true;
//
//         for (let [name, value] of formData.entries()) {
//           if (value.trim() === '') {
//             isValid = false;
//             break;
//           }
//         }
//
//         if (!isValid) {
//           alert('Please fill in all the fields.');
//           return;
//         }
//         const formEntry = Object.fromEntries(formData);
//
//         if(!Validation.isPer(formEntry.grade)){
//           alert("Grade Should Only Contain Number.");
//           return;
//         }
//
//         if(!Validation.isPer(formEntry.aggregate)){
//           alert("Grade Should Only Contain Number.");
//           return;
//         }
//
//
//          formData.append('uid',localStorage.getItem('uid'));
//
//         api.post(`${process.env.REACT_APP_BASE_URL}/admission/sem`, Object.fromEntries(formData))
//           .then((response) => {
//             alert(response.data['message']);
//             window.location.reload();
//           })
//           .catch((error) => {
//             alert(error.response.data['message']);
//           });
//       };
//
//
//     const handleDelete = async(id) => {
//         api.post(`${process.env.REACT_APP_BASE_URL}/admission/deleteSem`, {'e_id':id})
//           .then((response) => {
//             alert(response.data['message']);
//             window.location.reload();
//           })
//           .catch((error) => {
//             alert(error.response.data['message']);
//           });
//     }
//
//
//     const pendingItems = [];
//
//     if (data.length != 0) {
//       for (let i = 0; i < data.length; i++) {
//         pendingItems.push(<tr>
//             <td>{data[i].sem_number}</td>
//             <td>{data[i].grade_obtained}</td>
//             <td>{data[i].internal_kt}</td>
//             <td>{data[i].external_kt}</td>
//             <td>{data[i].total_kt}</td>
//             <td>{data[i].aggregated_score}</td>
//             <td><div className="btns"><button onClick={()=>handleDelete(data[i].sem_id)}>Click Here</button></div></td>
//           </tr>);
//       }
//     }
//
//
//     return (
//     <>
//
//     <p style={{color:'red'}}>Note:
//       <ol>
//         <li>
//         You have to submit all the semester details till the current semester.
//         </li>
//         <li>
//         Only numbers are required in the feilds given below.
//         </li>
//         <li>
//         Do not put string values such as "NA" or "Not yet announced", if don't know the grades then do not enter the details for the said semester.
//         </li>
//
//       </ol>
//
//       <div className="line"></div>
//
//       </p>
//              <form onSubmit={handleSubmit}>
//                 <div className="first">
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Semester (Ex. 1,2)</label>
//                         <br />
//                         <input type="number" min={1} max={8} name="sem"/>
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>SGPA Obtained</label>
//                         <br />
//                         <input type="text" name="grade"/>
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Total No. of Internal K.T.</label>
//                         <br />
//                         <input type="number" name="internal_kt" />
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Total No. of External K.T.</label>
//                         <br />
//                         <input type="number" name="external_kt"/>
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Total No. Internal and External K.T.</label>
//                         <br />
//                         <input type="number" name="total_kt"/>
//                     </div>
//
//                     <div className="hsc-chem">
//                         <label for="fullName" className='form-label'>CGPA (Ex. sum of grade/no.of sem)</label>
//                         <br />
//                         <input type="Text" name="aggregate"/>
//                     </div>
//
//                     <div className='btns'>
//                     {
//           isSubmitted==false ?
//           <button type='submit'>
//           Add Details
//          </button>:<></>
//         }
//                     </div>
//                 </div>
//
//
//             </form>
//
//             <div className="line"></div>
//
//                     <br />
//
//             {data.length>0 ?
//              <div className="table">
//              <table className="table table-bordered">
//                      <tr>
//                                      <th>Semester</th>
//                                      <th>Grade</th>
//                                      <th>Total Number of Internal K.T.</th>
//                                      <th>Total Number of External K.T.</th>
//                                      <th>Total Number of K.T.</th>
//                                      <th>Aggregate</th>
//                                      <th>Delete</th>
//                                  </tr>
//                                  {pendingItems}
//                              </table>
//                          </div> : <></>
//             }
//
// </>
//
//
//
//     );
// };
//
// export default Sem;
