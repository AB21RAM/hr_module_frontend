// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
// import BasicD from '../BasicD';
//
// import Validation from '../validartions';
// import api from '../../../api';
//
// const PersonalD = () => {
//   const [isDone,setDone] = useState(false);
//   const [data, setData] = useState({name:''});
//   const [code, setCode] = useState(null);
//   const [isSubmitted, setIsSubmited] = useState(false);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = () => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/personalDetails?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//         if(response.data['code']==1){
//           setData(response.data['radd'][0]);
//         }
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
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     const formEntry = Object.fromEntries(formData);
//
//
//     let isValid = true;
//
//     if(!Validation.isPhoneNumber(parseInt(formEntry.contact))){
//       alert("Invalid Contact Number");
//       return;
//     }
//
//
//     if(!Validation.isText(formEntry.first_name)){
//       alert("Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.middle_name)){
//       alert("Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.last_name)){
//       alert("Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.last_college)){
//       alert("Last College Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.pob)){
//       alert("Place Of Birth Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.religion)){
//       alert("Religion Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.caste)){
//       alert("Cast Should Only Contain Text.");
//       return;
//     }
//
//
//     if(!Validation.isNumber(formEntry.aadhar_number)){
//       alert("Adhar Number Should Only Contain Number.");
//       return;
//     }
//
//
//
//     formData.append('uid',localStorage.getItem('uid'));
//
//     api.post(`${process.env.REACT_APP_BASE_URL}/admission/personalDetails`, Object.fromEntries(formData))
//       .then((response) => {
//         alert(response.data['message']);
//         setDone(true);
//       })
//       .catch((error) => {
//         alert(error.response.data['message']);
//       });
//   };
//
//   var dob = false
//   if(data.dob){
//     dob =new Date(data.dob);
//   }
//
//
//   return (
//
//     <>
//       <section className='personalForm'>
//         {isDone==true && <Navigate to='/BasicD/ParentD'></Navigate>}
//         <BasicD/>
//         <form onSubmit={handleSubmit}>
//           <div className="first">
//
//           <div className="s-name">
//             <label for="last_name" className='form-label'>Last Name</label>
//             <br />
//             <input type="text" name="last_name" defaultValue={data.last_name}/>
//           </div>
//
//           <div className="s-name">
//               <label for="first_name" className='form-label'>First Name</label>
//               <br />
//               <input type="text" name="first_name" defaultValue={data.first_name}/>
//             </div>
//
//             <div className="s-name">
//               <label for="middle_name" className='form-label'>Middle Name</label>
//               <br />
//               <input type="text" name="middle_name" defaultValue={data.middle_name}/>
//             </div>
//
//             <div className="s-name">
//               <label for="mother_name" className='form-label'>Mother Name</label>
//               <br />
//               <input type="text" name="mother_name" defaultValue={data.mother_name}/>
//             </div>
//
//             <div className="s-dob">
//               <label for="cont" className='form-label'>Date of Birth</label>
//               <br />
//                <input type="date" name="dob" defaultValue={data.dob!=undefined ?new Date(data.dob).toISOString().split('T')[0]:""}/>
//             </div>
//
//             <div className="s-pob">
//               <label for="cont" className='form-label'>Place of Birth</label>
//               <br />
//               <input type="text" name="pob" defaultValue={data.place_of_birth}/>
//             </div>
//
//             <div className="gender">
//               <label for="cont" className='form-label'>Gender</label>
//               <br />
//               <select class="form-select" aria-label="Gender Select Menu" name='gender'>
//                 <option selected>{data.gender_id==1?"Female":data.gender_id==0?"Male":"Select Gender"}</option>
//                 <option value="0">Male</option>
//                 <option value="1">Female</option>
//               </select>
//             </div>
//
//             <div className="f-rel">
//               <label for="cont" className='form-label'>Religion</label>
//               <br />
//               <input type="text" name="religion" defaultValue={data.religion}/>
//             </div>
//
//             <div className="f-caste">
//               <label for="cont" className='form-label'>Caste</label>
//               <br />
//               <input type="text" name="caste" defaultValue={data.caste}/>
//             </div>
//
//             <div className="f-caste">
//               <label for="cont" className='form-label'>Sub-Caste</label>
//               <br />
//               <input type="text" defaultValue={(data.sub_caste!="null" || data.sub_caste!=null || data.sub_caste!=undefined)?data.sub_caste:"-"}  name="sub_caste" />
//             </div>
//
//             <div className="f-caste">
//               <label for="cont" className='form-label'>Community</label>
//               <br />
//               <input type="text" defaultValue={(data.communitee!="null" || data.communitee!=null || data.communitee!=undefined)?data.communitee:"-"}  name="community"/>
//             </div>
//
//             <div className="f-caste">
//               <label for="cont" className='form-label'>Minority</label>
//               <br />
//               <input type="text" defaultValue={(data.minority!="null" || data.minority!=null || data.minority!=undefined)?data.minority:"-"}  name="minority" />
//             </div>
//
//             <div className="f-nat">
//               <label for="cont"  className='form-label'>Nationality</label>
//               <br />
//               <input type="text" defaultValue={data.nationality==null?"Indian":data.nationality} name="nationality" />
//             </div>
//
//             <div className="line"></div>
//
//             <div className="s-phone">
//               <label for="cont" className='form-label'>Mobile No</label>
//               <br />
//               <input type="number" name="contact" defaultValue={data.contact} min="1000000000"
//   max="9999999999"/>
//             </div>
//
//             <div className="marital">
//               <label for="cont" className='form-label'>Marital Status</label>
//               <br />
//               <select class="form-select" aria-label="Marital Select Menu" name='status'>
//                 <option selected>{data.married_status==1?"Married":data.married_status==0?"Single":"Select Marital Status"}</option>
//                 <option value="0">Single</option>
//                 <option value="1">Married</option>
//               </select>
//             </div>
//
//             <div className="s-bank">
//               <label for="cont" className='form-label'>PAN Number (Optional)</label>
//               <br />
//               <input type="text" name="pan" defaultValue={data.pan}/>
//             </div>
//
//             <div className="s-bank">
//               <label for="cont" className='form-label'>Bank Account Number (Optional)</label>
//               <br />
//               <input type="number" name="back_account_number" defaultValue={data.bank_account_number}/>
//             </div>
//
//             <div className="s-bname">
//               <label for="cont" className='form-label'>Bank Name (Optional)</label>
//               <br />
//               <input type="text" name="bank_name" defaultValue={data.bank_name}/>
//             </div>
//
//             <div className="s-bname">
//               <label for="cont" className='form-label'>Aadhar Card Number</label>
//               <br />
//               <input type="number" name="aadhar_number" defaultValue={data.aadhar_number}/>
//             </div>
//
//             <div className="s-bname">
//               <label for="cont" className='form-label'>Last College Attended</label>
//               <br />
//               <input type="text" name="last_college" defaultValue={data.last_college_attended}/>
//             </div>
//             </div>
//
//             <div className='btns'>
//           {/* <button>
//           <a href="">Go Back</a>
//         </button> */}
//         {
//           isSubmitted==false ?
//           <button type='submit'>
//           Submit & Next
//          </button>:<></>
//         }
//         </div>
//
//         </form>
//
//
//       </section>
//     </>
//   );
// };
//
// export default PersonalD;
