// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
// import EducationD from '../EducationD';
//
// import Validation from '../validartions';
// import api from '../../../api';
//
// const EntranceD = () => {
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
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/entrance?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//           setData(response.data['entrance']);
//       })
//       .catch((error) => {
//       });
//
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
//       const formEntry = Object.fromEntries(formData);
//
//
//       let isValid = true;
//       for (let [name, values] of formData.entries()) {
//         if (!Validation.isRequired(values)) {
//           alert(`All Fields Are required.`);
//           return;
//         }
//       }
//
//       if(!Validation.isText(formEntry.entrance_name)){
//         alert("Entrance Name Should Only Contain Text.");
//         return;
//       }
//
//       if(!Validation.isPer(formEntry.phy_per)){
//         alert("Marks Should Only Contain Number.");
//         return;
//       }
//
//       if(!Validation.isPer(formEntry.che_per)){
//         alert("Marks Should Only Contain Number.");
//         return;
//       }
//
//       if(!Validation.isPer(formEntry.maths_per)){
//         alert("Marks Should Only Contain Number.");
//         return;
//       }
//
//       if(!Validation.isPer(formEntry.overall_per)){
//         alert("Marks Should Only Contain Number.");
//         return;
//       }
//
//     formData.append('uid',localStorage.getItem('uid'));
//
//     api.post(`${process.env.REACT_APP_BASE_URL}/admission/entrance`, Object.fromEntries(formData))
//         .then((response) => {
//           alert(response.data['message']);
//           window.location.reload();
//         })
//         .catch((error) => {
//           alert(error.response.data['message']);
//         });
//     };
//
//
//     const handleDelete = async(id) => {
//         api.post(`${process.env.REACT_APP_BASE_URL}/admission/deleteentrance`, {'e_id':id})
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
//             <td>{data[i].entrance_name}</td>
//             <td>{data[i].roll_number}</td>
//             <td>{data[i].app_number}</td>
//             <td>{data[i].phy_per}</td>
//             <td>{data[i].che_per}</td>
//             <td>{data[i].maths_per}</td>
//             <td>{data[i].overall_per}</td>
//             <td><div className="btns">
//             {
//           isSubmitted==false ?
//           <button onClick={()=>handleDelete(data[i].entrance_id)}>Click Here</button>:<></>
//         }
//
//               </div></td>
//           </tr>);
//       }
//     }
//
//
//     return (
//         <section className='personalForm'>
//             <EducationD />
//             <p style={{color:'red'}}>Note:
//       <ol>
//         <li>
//         If you have secured the admission throught JEE then enter JEE details.
//         </li>
//         <li>
//         Else you have secured the admission throught CET then enter CET details.
//         </li>
//       </ol>
//
//       <div className="line"></div>
//
//       </p>
//
//              <form onSubmit={handleSubmit}>
//                 <div className="first">
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Entrance Exam Name</label>
//                         <br />
//                         <input type="text" name="entrance_name"/>
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Roll No</label>
//                         <br />
//                         <input type="text" name="roll_number"/>
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Application Number</label>
//                         <br />
//                         <input type="text" name="app_number" />
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Physics Percentile</label>
//                         <br />
//                         <input type="text" name="phy_per"/>
//                     </div>
//
//                     <div className="hsc-p">
//                         <label for="fullName" className='form-label'>Chemistry Percentile</label>
//                         <br />
//                         <input type="text" name="che_per"/>
//                     </div>
//
//                     <div className="hsc-chem">
//                         <label for="fullName" className='form-label'>Maths Percentile</label>
//                         <br />
//                         <input type="text" name="maths_per"/>
//                     </div>
//                     <div className="hsc-phy">
//                         <label for="fullName" className='form-label'>Overall Percentile</label>
//                         <br />
//                         <input type="text" name="overall_per"/>
//                     </div>
//                     <div className='btns'>
//                     {
//           isSubmitted==false ?
//           data.length==0?<button type='submit'>
//           Add Details
//          </button>:<></>
//          :<></>
//         }
//                     </div>
//                 </div>
//
//
//             </form>
//
//             <div className="line"></div>
//                     <div className='btns'>
//                       <button style={{color:'white'}}>
//                           <Link to='/EducationD/CurrentD'>Next</Link>
//                       </button>
//                     </div>
//                     <br />
//
//             {data.length>0 ?
//              <div className="table">
//              <table className="table table-bordered">
//                      <tr>
//                                      <th>Entrance Name</th>
//                                      <th>Roll Number</th>
//                                      <th>Application Number</th>
//                                      <th>Physics Percentile</th>
//                                      <th>Chemistry Percentile</th>
//                                      <th>Maths Percentile</th>
//                                      <th>Overall Percentile</th>
//                                      <th>Delete</th>
//                                  </tr>
//                                  {pendingItems}
//                              </table>
//
//
//                          </div> : <></>
//             }
//
//
//
//         </section>
//     );
// };
//
// export default EntranceD;
