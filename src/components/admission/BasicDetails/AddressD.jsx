// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
// import BasicD from '../BasicD';
// import api from '../../../api';
//
//
//
// const AddressD = () => {
//   const [code, setCode] = useState(null);
//   const [isDone,setDone] = useState(false);
//   const [radd, setRadd] = useState({address:'',domicile_number:''});
//   const [padd, setPadd] = useState({address:'',domicile_number:''});
//   const [temadd, setTem] = useState({});
//   const [tempadd, setTemp] = useState({});
//   const [isChecked, setChecked] = useState(false);
//   const [isSubmitted, setIsSubmited] = useState(false);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = () => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/addDetails?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//         setCode(response.data['code'])
//         if(response.data['radd']!=undefined){
//           setRadd(response.data['radd']);
//         setPadd(response.data['padd']);
//         setCode(response.data['code']);
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
//   const handleSubmit = (event) => {
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     let isValid = true;
//
//
//
//     if (!isValid) {
//       alert('Please fill in all the fields.');
//       return;
//     }
//
//     formData.append('uid',localStorage.getItem('uid'));
//     formData.append('checked',isChecked)
//
//     api.post(`${process.env.REACT_APP_BASE_URL}/admission/addDetails`, Object.fromEntries(formData))
//       .then((response) => {
//         alert(response.data['message']);
//         setDone(true);
//       })
//       .catch((error) => {
//         alert(error.response.data['message']);
//       });
//   };
//
//
//   return (
//     <>
//       <section className='parentForm'>
//         <BasicD/>{isDone==true && <Navigate to='/EducationD'></Navigate>}
//         <form onSubmit={handleSubmit}>
//           <div className="first">
//
//
//           <div className="m-name">
//               <label for="fullName" className='form-label'>Building Name/Building Number</label>
//               <br />
//               <input type="text" name="building_number" placeholder={radd.building_number} onChange={(e)=>setTem({...temadd,'building_number':e.target.value})} />
//             </div>
//
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>Street Name</label>
//               <br />
//               <input type="text" name="street_name" placeholder={radd.street_name} onChange={(e)=>setTem({...temadd,'street_name':e.target.value})} />
//             </div>
//
//
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>Landmark</label>
//               <br />
//               <input type="text" name="landmark" placeholder={radd.landmark} onChange={(e)=>setTem({...temadd,'landmark':e.target.value})} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>City</label>
//               <br />
//               <input type="text" name="city" placeholder={radd.city} onChange={(e)=>setTem({...temadd,'city':e.target.value})} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>State</label>
//               <br />
//               <input type="text" name="state" placeholder={radd.state} onChange={(e)=>setTem({...temadd,'state':e.target.value})} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>Pincode</label>
//               <br />
//               <input type="text" name="pincode" placeholder={radd.pincode} onChange={(e)=>setTem({...temadd,'pincode':e.target.value})} />
//             </div>
//
//           </div>
//
//           <div className="line"></div>
//           <label className='form-label'>Permanent Address Info</label><br />
//
//
//             <div className="m-name">
//               <input type="radio" id='r1' name="percheck" value='1' onChange={(e)=>{setChecked(true);setTemp(temadd)}}/> &nbsp;
//               <label for="fullName" className='form-label'>Same as the Residential Address</label>
//               <br />
//               <input type="radio" id='r1' name="percheck" value='0' onChange={(e)=>{setChecked(false);setTemp('')}}/> &nbsp;
//               <label for="fullName" className='form-label'>Different Address</label>
//             </div>
//
//           <div className="first">
//           <div className="m-name">
//               <label for="fullName" className='form-label'>Building Name/Building Number</label>
//               <br />
//               <input type="text" name="p_building_number" placeholder={padd.building_number || tempadd.building_number} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>Street Name</label>
//               <br />
//               <input type="text" name="p_street_name" placeholder={padd.street_name || tempadd.street_name} />
//             </div>
//
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>Landmark</label>
//               <br />
//               <input type="text" name="p_landmark" placeholder={padd.landmark || tempadd.landmark} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>City</label>
//               <br />
//               <input type="text" name="p_city" placeholder={padd.city || tempadd.city} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>State</label>
//               <br />
//               <input type="text" name="p_state" placeholder={padd.state || tempadd.state} />
//             </div>
//
//             <div className="m-name">
//               <label for="fullName" className='form-label'>Pincode</label>
//               <br />
//               <input type="text" name="p_pincode" placeholder={padd.pincode || tempadd.pincode} />
//             </div>
//           </div>
//
//           <div className='btns'>
//             {isSubmitted == false ?
//             <button type='submit'>
//               Submit & Next
//             </button> : <></>
//             }
//           </div>
//
//         </form>
//       </section>
//     </>
//   );
// };
//
// export default AddressD;
