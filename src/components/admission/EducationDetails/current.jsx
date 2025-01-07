// import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
// import EducationD from '../EducationD';
// import api from '../../../api';
//
//
//
// const PresentD = () => {
//   const [isDone,setDone] = useState(false);
//   const [data, setData] = useState({stud_clg_id:''});
//   const [brach, setBrach] = useState([]);
//   const [category, setCat] = useState([]);
//   const [brach_id, setBrach_id] = useState([]);
//   const [seatType, setSeat] = useState([]);
//   const [seatType_id, setSeat_id] = useState([]);
//   const [program, setProgram] = useState([]);
//   const [program_id, setProgram_id] = useState([]);
//   const [stud_id, setStud_id] = useState([]);
//   const [gr_number, setgr] = useState([]);
//   const [code, setCode] = useState(null);
//
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = () => {
//     api
//       .get(`${process.env.REACT_APP_BASE_URL}/admission/currentEducation_per?uid=`+localStorage.getItem('uid'))
//       .then((response) => {
//         setData(response.data['data'][0]);
//         setStud_id(response.data['data'][0].stud_clg_id);
//         setgr(response.data['data'][0].gr_number)
//         setCat(response.data['category'])
//       })
//       .catch((error) => {
//       });
//
//       api.get(`${process.env.REACT_APP_BASE_URL}/admission/signup`).then((res)=>{
//         setSeat(res.data['seat_type'])
//         setBrach(res.data['branch'])
//         setProgram(res.data['programms'])
//       }).catch((err)=>{
//       })
//   };
//
//
//     const branchItems = [];
//     const programmItems = [];
//     const seatItems = [];
//
//     try{
//       for (let i = 0; i < brach.length; i++) {
//         if(data.branch_id != brach[i].branch_id){
//         branchItems.push(<option value={brach[i].branch_id} >{brach[i].bname}</option>);
//         }else{
//         branchItems.push(<option value={brach[i].branch_id} selected>{brach[i].bname}</option>);
//         }
//       }
//
//       for (let i = 0; i < program.length; i++) {
//         if(data.programm_id != program[i].programm_id){
//         programmItems.push(<option value={program[i].programm_id}>{program[i].programm_name}</option>);
//       }
//       else{
//         programmItems.push(<option value={program[i].programm_id} selected>{program[i].programm_name}</option>);
//       }
//     }
//
//       for (let i = 0; i < seatType.length; i++) {
//         if(data.seat_type_id != seatType[i].seat_type_id){
//             seatItems.push(<option value={seatType[i].seat_type_id}>{seatType[i].seat_name}</option>);
//       }
//       else{
//         seatItems.push(<option value={seatType[i].seat_type_id} selected>{seatType[i].seat_name}</option>);
//       }
//       }
//     }catch(err){}
//
//   return (
//     <section className='personalForm'>
//       <EducationD />{isDone==true && <Navigate to='/EducationD/PreviousD'></Navigate>}
//
//       <form>
//         <center><p style={{color:'red'}}>Note: Student Id , Gr number will be alloted to you by the college.</p></center>
//         <div className="first">
//
//           <div className="s-name">
//             <label for="fullName" className='form-label'>Student Id</label>
//             <br />
//             <input type="text" name="stud_clg_id" value={stud_id} disabled/>
//           </div>
//
//             <div className="s_program">
//               <label for="cont" className='form-label'>Selected Program</label>
//               <br />
//               <select class="form-select" aria-label="Program Taken" name='selected_program' disabled>
//               <option>Select Option</option>
//
//                {programmItems}
//               </select>
//             </div>
//
//             <div className="s_program">
//               <label for="cont" className='form-label'>Selected Branch</label>
//               <br />
//               <select class="form-select" aria-label="Program Taken" name='selected_program' disabled>
//                 <option>Select Option</option>
//                 {branchItems}
//               </select>
//             </div>
//
//             <div className="s_type">
//               <label for="cont" className='form-label'>Seat Type</label>
//               <br />
//               <select class="form-select" aria-label="Choose Seat Type" name='seat_type' disabled>
//               <option>Select Option</option>
//
//                 {seatItems}
//               </select>
//             </div>
//
//           <div className="s_gr">
//             <label for="cont" className='form-label'>Gr Number</label>
//             <br />
//             <input type="number" name='gr_number' value={gr_number} disabled/>
//           </div>
//
//           <div className="s_gr">
//             <label for="cont" className='form-label'>Category</label>
//             <br />
//             <input type="text" name='gr_number' value={category} disabled/>
//           </div>
//
//           </div>
//
//       </form>
//
//       <div className="line"></div>
//
//
//
//       <div className='btns'>
//           <button type='submit'>
//            <Link to='/UploadD'>Next</Link>
//           </button>
//       </div>
//
//     </section>
//   );
// };
//
// export default PresentD;
