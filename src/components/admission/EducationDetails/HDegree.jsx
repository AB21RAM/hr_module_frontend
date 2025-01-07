// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
// import BasicD from '../BasicD';
// import api from '../../../api';
//
//
//
// const HDegree = () => {
//   const [code, setCode] = useState(null);
//   const [Subject, setSubject] = useState(null);
//   const [isDone,setDone] = useState(false);
//   const [radd, setRadd] = useState({Address:'',domicile_number:''});
//   const [padd, setPadd] = useState({Address:'',domicile_number:''});
//   const [temadd, setTem] = useState('');
//   const [tempadd, setTemp] = useState('');
//   const [isChecked, setChecked] = useState(false);
//   const [isSubmitted, setIsSubmited] = useState(false);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = () => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/HDegree?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//        setSubject(response.data.subject)
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
//     formData.append('uid',localStorage.getItem('uid'));
//     formData.append('checked',isChecked)
//
//           api.post(`${process.env.REACT_APP_BASE_URL}/admission/HDegree`, Object.fromEntries(formData))
//             .then((response) => {
//               alert(response.data['message']);
//               setDone(true);
//             })
//             .catch((error) => {
//               alert(error.response.data['message']);
//             });
//
//
//   };
//
//
//   return (
//     <>
//      {isDone==true && <Navigate to='/EducationD'></Navigate>}
//         <form onSubmit={handleSubmit}>
//           <label className='form-label'>Do You want to Apply For Honours Degree?</label><br />
//
//
//             <div className="m-name">
//               <input type="radio" id='r1' name="percheck" value='1' onChange={(e)=>{setChecked(true);}}/> &nbsp;
//               <label for="fullName" className='form-label'>Yes</label>
//               <br />
//               <input type="radio" id='r1' name="percheck" value='0' onChange={(e)=>{setChecked(false);setTemp('')}}/> &nbsp;
//               <label for="fullName" className='form-label'>No</label>
//             </div>
//
//             {
//                 isChecked==true ?   <div className="first">
//                <div className="s_type">
//               <label for="cont" className='form-label'>Select Subject</label>
//               <br />
//               <select class="form-select" aria-label="Choose Seat Type" defaultValue={Subject} name='Subject' placeholder={Subject}>
//               <option>{(Subject==undefined || Subject==null)?"Select Subject" : Subject}</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Block Chain">Block Chain</option>
//               <option value="AI & ML">AI & ML</option>
//               <option value="Cyber Security and Law">Cyber Security and Law</option>
//               </select>
//             </div>
//             </div>:
//                 <></>
//             }
//
//           <div className='btns'>
//           {
//           isSubmitted == false ?
//           <button type='submit'>
//            Submit
//           </button> : <></>
// }
//         </div>
//         <br />
//
//         </form>
//
//
//     </>
//   );
// };
//
// export default HDegree;
