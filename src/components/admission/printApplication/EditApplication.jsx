//
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import api from '../../../api';
//
// function EditApplication() {
//     const [student, setStudent] = useState([]);
//     const [personal, setPersonal] = useState([]);
//     const [education, setEducation] = useState([]);
//     const [entrance, setEntr] = useState([1, 2]);
//     const [raddress, setrAdd] = useState([{ address: '' }, { address: '' }]);
//     const [paddress, setpAdd] = useState([{ address: '' }, { address: '' }]);
//     const [parents, setParents] = useState([{ fullname: '', email: '' }, { fullname: '', email: '' }, { fullname: '', email: '' },]);
//     const [email, setEmail] = useState('')
//     const [docs, setDocs] = useState('')
//     const [cat, setCat] = useState('')
//     const [branch, setBranch] = useState('')
//     const [program, setProgram] = useState('')
//     const [Semester, setSemester] = useState('');
//     const [round, setRound] = useState('');
//     const [fee, setfee] = useState('');
//     const [receipt, setReceipt] = useState('');
//     const [total, setTotal] = useState('');
//     const [seat_type, setSeat_type] = useState('');
//     const [name, setName] = useState('');
//     const location = new useLocation();
//     const searchQuery = new URLSearchParams(location.search)
//
//     useEffect(() => {
//         if(localStorage.getItem('user_type')==4 || localStorage.getItem('user_type')==2){
//             fetchData(localStorage.getItem('uid'));
//             fetchFee(localStorage.getItem('uid'))
//         }else{
//             fetchData(searchQuery.get('id'));
//             fetchFee(searchQuery.get('id'));
//         }
//     }, []);
//
//     const fetchData = (id) => {
//         api.get(`${process.env.REACT_APP_BASE_URL}/admission/printApplication?uid=${id}`).then((res) => {
//             setStudent(res.data['student'][0])
//             if (res.data['address'].length != 2) {
//                 setrAdd(res.data['address'][0])
//                 setpAdd(res.data['address'][0])
//             } else {
//                 setrAdd(res.data['address'][0])
//                 setpAdd(res.data['address'][1])
//             }
//             setEducation(res.data['education'][0])
//             setParents(res.data['parents'])
//             setPersonal(res.data['personal'][0])
//             setEmail(res.data['email'])
//             setDocs(res.data['docs'][0])
//             setEntr(res.data['entrence'])
//             setBranch(res.data['branch'][0].bname)
//             setProgram(res.data['program'][0].programm_name)
//             setSemester(res.data['sem'])
//             setRound(res.data['allowed_application'][0].round)
//             setCat(res.data['allowed_application'][0].cat_id)
//             setSeat_type(res.data['allowed_application'][0].seat_type)
//             setName(res.data['allowed_application'][0].name)
//         }).catch((err) => {
//         })
//
//     }
//
//
//     const fetchFee = (id) =>{
//         api.get(`${process.env.REACT_APP_BASE_URL}/admission/feeBalanceStud?uid=${id}`).then((res) => {
//             setfee(res.data.total_paid);
//             setTotal(res.data.total)
//             setReceipt(res.data.receipt)
//         }).catch((err) => {
//         })
//
//     }
//
//     const uodate_admission_details = async(e)=>{
//         e.preventDefault();
//
//         var formData = new FormData(e.target);
//         formData.append('uid',searchQuery.get('id'))
//     }
//
//     const uodate_personal_details = async(e)=>{
//         e.preventDefault();
//
//         var formData = new FormData(e.target);
//         formData.append('uid',searchQuery.get('id'))
//     }
//
//     const update_address_details = async(e)=>{
//         e.preventDefault();
//
//         var formData = new FormData(e.target);
//         formData.append('uid',searchQuery.get('id'))
//     }
//
//     const update_ssc_details = async(e)=>{
//         e.preventDefault();
//
//         var formData = new FormData(e.target);
//         formData.append('uid',searchQuery.get('id'))
//     }
//
//     const update_hsc_details = async(e)=>{
//         e.preventDefault();
//
//         var formData = new FormData(e.target);
//         formData.append('uid',searchQuery.get('id'))
//     }
//
//     const update_dip_details = async(e)=>{
//         e.preventDefault();
//
//         var formData = new FormData(e.target);
//         formData.append('uid',searchQuery.get('id'))
//     }
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
//
//          formData.append('uid',searchQuery.get('id'));
//
//         api.post(`${process.env.REACT_APP_BASE_URL}/admission/entrance`, Object.fromEntries(formData))
//           .then((response) => {
//             alert(response.data['message']);
//             window.location.reload();
//           })
//           .catch((error) => {
//             alert(error.response.data['message']);
//           });
//       };
//
//       const handleDelete = async(id) => {
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
//     const handleSubmitSem = (event) => {
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
//
//          formData.append('uid',searchQuery.get('id'));
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
//     const handleDeleteSem = async(id) => {
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
//     let tableItem = []
//
//     tableItem.push(
//         <form onSubmit={handleSubmit}>
//         <div className="first">
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Entrance Exam Name</label>
//                 <br />
//                 <input type="text" name="entrance_name"/>
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Roll No</label>
//                 <br />
//                 <input type="text" name="roll_number"/>
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Application Number</label>
//                 <br />
//                 <input type="text" name="app_number" />
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Physics Score</label>
//                 <br />
//                 <input type="text" name="phy_per"/>
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Chemistry Score</label>
//                 <br />
//                 <input type="text" name="che_per"/>
//             </div>
//
//             <div className="hsc-chem">
//                 <label for="fullName" className='form-label'>Maths Score</label>
//                 <br />
//                 <input type="text" name="maths_per"/>
//             </div>
//             <div className="hsc-phy">
//                 <label for="fullName" className='form-label'>Overall Score</label>
//                 <br />
//                 <input type="text" name="overall_per"/>
//             </div>
//             <div className='btns'>
//             <button type='submit'>
//             Add Details
//             </button>
//             </div>
//         </div>
//         <br />
//     </form>
//     );
//     if (entrance.length > 0) {
//         for (let i = 0; i < entrance.length; i++) {
//             tableItem.push(
//                 <>
//                         <table class="GeneratedTable TableBorder">
//                         <tbody>
//                     <tr>
//                         <td class="para-head">Entrance Exam Name</td>
//                         <td >{entrance[i].entrance_name}</td>
//                         <td class="para-head">Score</td>
//                         <td >{entrance[i].overall_per}</td>
//                     </tr>
//
//                     <tr>
//                         <td class="para-head">Roll No</td>
//                         <td>{entrance[i].roll_number}</td>
//                         <td class="para-head">Application No</td>
//                         <td>{entrance[i].app_number}</td>
//                     </tr>
//
//                     <tr>
//                         <td class="para-head">Physics Score</td>
//                         <td>{entrance[i].phy_per}</td>
//                         <td class="para-head">Chemistry Score </td>
//                         <td>{entrance[i].che_per}</td>
//                     </tr>
//                     <tr>
//                         <td class="para-head">Maths Score </td>
//                         <td colSpan={2}>{entrance[i].maths_per}</td>
//                         <td className='btns'>
//                         <button onClick={()=>handleDelete(entrance[i].entrance_id)}>Click Here</button>
//                         </td>
//                     </tr>
//                     <br />
//                     </tbody>
//                     </table>
//                 </>
//             );
//         }
//
//     }
//
//     tableItem.push(
//         <>
//        <form onSubmit={update_ssc_details}>
//                         <table class="GeneratedTable TableBorder">
//                         <tbody>
//             <tr>
//                 <td class="para-head">SSC Passing Year</td>
//                     <td><input type='month' name ='ssc_passing_year' value={education.ssc_passing_year} onChange={(e)=>setEducation((er)=>({...er,ssc_passing_year:e.target.value }))}/></td>
//                 {/* <td >{education.ssc_passing_year}</td> */}
//                 <td class="para-head">Board Name</td>
//                     <td><input type='text' name ='ssc_name_of_board' value={education.ssc_name_of_board} onChange={(e)=>setEducation((er)=>({...er,ssc_name_of_board:e.target.value }))}/></td>
//                 {/* <td >{education.ssc_name_of_board}</td> */}
//             </tr>
//
//             <tr>
//                 <td class="para-head">Seat Number</td>
//                     <td><input type='text' name ='ssc_seat_number' value={education.ssc_seat_number} onChange={(e)=>setEducation((er)=>({...er,ssc_seat_number:e.target.value }))}/></td>
//                 {/* <td>{education.ssc_seat_number}</td> */}
//                 <td class="para-head">SSC Percentage</td>
//                     <td><input type='text' name ='ssc_percentage' value={education.ssc_percentage} onChange={(e)=>setEducation((er)=>({...er,ssc_percentage:e.target.value }))}/></td>
//                 {/* <td>{education.ssc_percentage}</td> */}
//
//             </tr>
//
//             <tr>
//                 <td class="para-head">SSC Marks</td>
//                     <td><input type='text' name ='ssc_marks' value={education.ssc_marks} onChange={(e)=>setEducation((er)=>({...er,ssc_marks:e.target.value }))}/></td>
//                 <td>{education.ssc_marks}</td>
//                 <td class="para-head">Out off </td>
//                 <td>500</td>
//             </tr>
//             <tr><td className='btns'><button>Submit These Details</button></td></tr>
//
//             <br />
//             </tbody>
//                     </table>
//                 </form>
//         </>
//     );
//
//     var max = 0;
//     if(education.chemistry_score_in_hsc>education.bio_marks && education.chemistry_score_in_hsc>education.vocational_total_score_hsc){
//         max=education.chemistry_score_in_hsc;
//     }else if(education.chemistry_score_in_hsc<education.bio_marks && education.bio_marks>education.vocational_total_score_hsc){
//         max = education.bio_marks
//     }else {
//         max = education.vocational_total_score_hsc
//     }
//
//     if (education.hsc_passing_year != null) {
//         tableItem.push(
//             <>
//             <form onSubmit={update_hsc_details}>
//                         <table class="GeneratedTable TableBorder">
//                         <tbody>
//
//
//
//                 <tr>
//                     <td class="para-head">HSC Passing Year</td>
//                     <td><input type='month' name ='hsc_passing_year' value={education.hsc_passing_year} onChange={(e)=>setEducation((er)=>({...er,hsc_passing_year:e.target.value }))}/></td>
//                     {/* <td >{education.hsc_passing_year}</td> */}
//                     <td class="para-head">Board Name</td>
//                     <td><input type='text' name ='hsc_name_of_board' value={education.hsc_name_of_board} onChange={(e)=>setEducation((er)=>({...er,hsc_name_of_board:e.target.value }))}/></td>
//                     {/* <td >{education.hsc_name_of_board}</td> */}
//                 </tr>
//
//                 <tr>
//                     <td class="para-head">Seat Number</td>
//                     <td><input type='text' name ='hsc_seat_year' value={education.hsc_seat_year} onChange={(e)=>setEducation((er)=>({...er,hsc_seat_year:e.target.value }))}/></td>
//                     {/* <td>{education.hsc_seat_year}</td> */}
//                     <td class="para-head">HSC Percentage</td>
//                     <td><input type='text' name ='hsc_percentage' value={education.hsc_percentage} onChange={(e)=>setEducation((er)=>({...er,hsc_percentage:e.target.value }))}/></td>
//                     {/* <td>{education.hsc_percentage}</td> */}
//
//                 </tr>
//
//                 <tr>
//                     <td class="para-head">HSC Marks Obtained</td>
//                     <td><input type='text' name ='hsc_marks' value={education.hsc_marks} onChange={(e)=>setEducation((er)=>({...er,hsc_marks:e.target.value }))}/></td>
//                     {/* <td>{education.hsc_marks}</td> */}
//                     <td class="para-head">Out off </td>
//                     <td>650</td>
//                 </tr>
//                 <tr>
//                     <td class="para-head">Physics Marks</td>
//                     <td><input type='text' name ='physics_score_in_hsc' value={education.physics_score_in_hsc} onChange={(e)=>setEducation((er)=>({...er,physics_score_in_hsc:e.target.value }))}/></td>
//                     {/* <td>{education.physics_score_in_hsc}</td> */}
//                     <td class="para-head">Chemistry Marks </td>
//                     <td><input type='text' name ='chemistry_score_in_hsc' value={education.chemistry_score_in_hsc} onChange={(e)=>setEducation((er)=>({...er,chemistry_score_in_hsc:e.target.value }))}/></td>
//                     {/* <td>{education.chemistry_score_in_hsc}</td> */}
//                 </tr>
//                 <tr>
//                     <td class="para-head">Maths Marks</td>
//                     <td><input type='text' name ='maths_score_hsc' value={education.maths_score_hsc} onChange={(e)=>setEducation((er)=>({...er,maths_score_hsc:e.target.value }))}/></td>
//                     {/* <td >{education.maths_score_hsc}</td> */}
//                     <td class="para-head">Biology Marks</td>
//                     <td><input type='text' name ='bio_marks' value={education.bio_marks} onChange={(e)=>setEducation((er)=>({...er,bio_marks:e.target.value }))}/></td>
//                     {/* <td >{education.bio_marks}</td> */}
//
//                 </tr>
//                 <tr>
//                     <td class="para-head">Vocational Subject-{education.vocational_subject}</td>
//                     <td><input type='text' name ='vocational_total_score_hsc' value={education.vocational_total_score_hsc} onChange={(e)=>setEducation((er)=>({...er,vocational_total_score_hsc:e.target.value }))}/></td>
//                     {/* <td >{education.vocational_total_score_hsc}</td> */}
//                     <td class="para-head">Percentage</td>
//                     <td >{(Number(education.physics_score_in_hsc)+Number(max)+Number(education.maths_score_hsc))/3}</td>
//                 </tr>
//                 <tr><td className='btns'><button>Submit These Details</button></td></tr>
//                 <br />
//                 </tbody>
//                     </table>
//                 </form>
//
//             </>
//         );
//
//
//     }
//
//     if (education.dep_passing_year != null) {
//         tableItem.push(
//             <>
//              <form onSubmit={update_dip_details}>
//                         <table class="GeneratedTable TableBorder">
//                         <tbody>
//                 <tr>
//                     <td class="para-head">Diploma Passing Year</td>
//                     <td><input type='month' name ='dep_passing_year' value={education.dep_passing_year} onChange={(e)=>setEducation((er)=>({...er,dep_passing_year:e.target.value }))}/></td>
//                     {/* <td >{education.dep_passing_year}</td> */}
//                     <td class="para-head">College Name</td>
//                     <td><input type='text' name ='dep_clg_name' value={education.dep_clg_name} onChange={(e)=>setEducation((er)=>({...er,dep_clg_name:e.target.value }))}/></td>
//                     {/* <td >{education.dep_clg_name}</td> */}
//                 </tr>
//
//                 <tr>
//                     <td class="para-head">Seat Number</td>
//                     <td><input type='text' name ='dep_seat' value={education.dep_seat} onChange={(e)=>setEducation((er)=>({...er,dep_seat:e.target.value }))}/></td>
//                     {/* <td>{education.dep_seat}</td> */}
//                     <td class="para-head">Percentage</td>
//                     <td><input type='text' name ='dep_per' value={education.dep_per} onChange={(e)=>setEducation((er)=>({...er,dep_per:e.target.value }))}/></td>
//                     {/* <td>{education.dep_per}</td> */}
//
//                 </tr>
//
//                 <tr>
//                     <td class="para-head">Marks Obtained</td>
//                     <td><input type='text' name ='dep_marks' value={education.dep_marks} onChange={(e)=>setEducation((er)=>({...er,dep_marks:e.target.value }))}/></td>
//                     {/* <td>{education.dep_marks}</td> */}
//                     <td class="para-head">CGPI </td>
//                     <td><input type='text' name ='dep_cgpi' value={education.dep_cgpi} onChange={(e)=>setEducation((er)=>({...er,dep_cgpi:e.target.value }))}/></td>
//                     {/* <td>{education.dep_cgpi}</td> */}
//                 </tr>
//                 <tr><td className='btns'><button>Submit These Details</button></td></tr>
//                 </tbody>
//                     </table>
//                 </form>
//                 <br />
//             </>
//         );
//
//
//     }
//
//     tableItem.push(
//         <form onSubmit={handleSubmitSem}>
//         <div className="first">
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Semester (Ex. 1,2)</label>
//                 <br />
//                 <input type="number" min={1} max={8} name="sem"/>
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Grade Obtained</label>
//                 <br />
//                 <input type="text" name="grade"/>
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Total No. of Internal K.T.</label>
//                 <br />
//                 <input type="text" name="internal_kt" />
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Total No. of External K.T.</label>
//                 <br />
//                 <input type="text" name="external_kt"/>
//             </div>
//
//             <div className="hsc-p">
//                 <label for="fullName" className='form-label'>Total No. Internal and External K.T.</label>
//                 <br />
//                 <input type="text" name="total_kt"/>
//             </div>
//
//             <div className="hsc-chem">
//                 <label for="fullName" className='form-label'>Aggregate Score (Ex. sum of grade/no.of sem)</label>
//                 <br />
//                 <input type="text" name="aggregate"/>
//             </div>
//
//             <div className='btns'>
//             <button type='submit'>
//                 Add Details
//                 </button>
//             </div>
//         </div>
//     </form>
//     )
//
//     if (Semester.length > 0) {
//         for (let i = 0; i < Semester.length; i++) {
//             tableItem.push(
//                 <>
//                  <form onSubmit={()=>handleDeleteSem(Semester[i].sem_id)}>
//                         <table class="GeneratedTable TableBorder">
//                         <tbody>
//                     <tr>
//                        <td class="para-head" colSpan={2}><strong>Semester - {Semester[i].sem_number}</strong></td>
//                         <td class="para">SGPA</td>
//                         {/* <td><input type='text' name ='grade_obtained' value={Semester[i].grade_obtained} /></td> */}
//                         <td >{Semester[i].grade_obtained}</td>
//                     </tr>
//                     <tr>
//                         <td class="para">Total Number of Internal K.T.</td>
//                         {/* <td><input type='text' name ='internal_kt' value={Semester[i].internal_kt} /></td> */}
//                         <td>{Semester[i].internal_kt}</td>
//                         <td class="para">Total Number of External K.T.</td>
//                         {/* <td><input type='text' name ='external_kt' value={Semester[i].external_kt} /></td> */}
//                         <td>{Semester[i].external_kt}</td>
//                     </tr>
//                     <tr>
//                         <td class="para">Total Number of K.T</td>
//                         {/* <td><input type='text' name ='total_kt' value={Semester[i].total_kt} /></td> */}
//                         <td>{Semester[i].total_kt}</td>
//                         <td class="para">Aggregate CGPA</td>
//                         {/* <td><input type='text' name ='aggregated_score' value={Semester[i].aggregated_score} /></td> */}
//                         <td>{Semester[i].aggregated_score}</td>
//                     </tr>
//                     <tr><td className='btns'><button>Delete</button></td></tr>
//                     </tbody>
//                     </table>
//                 </form>
//
//                 </>
//             );
//         }
//
//     }
//
//     var hdgreeItem = []
//      if(student.HDegree!=null){
//         <tr>
//         <td class="para">Do you Want To apply For Hounors Degree</td>
//         <td>Yes</td>
//         <td class="para">Subject</td>
//         <td>{student.HDegree}</td>
//     </tr>
//      }
//
//
//
//     return (
//         <div className="containers">
//             <style>
//                 {
//                 `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
//                 margin: 0;
//                 padding: 0;
//                 box-sizing: border-box;
//
//               }
//             body{
//               font-family: 'Inter', sans-serif;
//             }
//
//             .containers{
//                 width: 90%;
//                 margin: auto;
//             }
//             h2{
//                 font-size:25px;
//             }
//             .header{
//                 display: flex;
//             }
//             .header-left{
//                 flex: 3;
//                 line-height:1.5;
//                 // text-align: center;
//             }
//
//             table.GeneratedTable {
//                 width: 100%;
//                 margin: auto;
//                 font-size:.8rem;
//                 background-color: #ffffff;
//                 border-collapse: collapse;
//                 /* border: none; */
//                 color: #000000;
//             }
//
//             table.GeneratedTable td,
//             table.GeneratedTable th {
//                 padding: 5px;
//             }
//
//             table.GeneratedTable thead {
//                 background-color: #ffffff;
//             }
//             .main{
//                 display: flex;
//                 flex-direction: column;
//                 gap: 2px;
//                 width: 100%;
//             }
//             .card{
//                 border: 1px solid #000;
//                 padding: 1rem;
//             }
//             .para-head{
//                 font-weight: bolder;
//             }
//             .tableHead{
//                 text-align: start;
//                 font-size: 1.3rem;
//                 font-weight: bolder;
//                 text-decoration:underline;
//               }
//             table.TableBorder {
//                 width:100%
//                 margin: 0;
//             }
//
//             table.TableBorder td, table.SSC th, table.SSC td{
//                border-width: 1px;
//                border-color: #000000;
//                border-style: solid;
//                border-collapse: collapse;
//             }
//
//                 .signature{
//                     display:flex;
//                     justify-content:space-between;
//                 }
//
//                 @media print{
//                     .pagebreak{
//                         page-break-after:always;
//                     }
//                 }
//
//                 `
//                 }
//             </style>
//             <center><button onClick={(e)=>{e.target.style.display='none';window.print()}}>Print</button></center>
//
//             <img src='/images/header.png' style={{ width: '100%', marginBottom: '1rem' }} alt="" />
//             <div class="header" style={{height:"auto",width:"100%", fontSize:'16px'}}>
//                 <br />
//                 <div class="header-left">
//                     <center>
//                     <h2 style={{fontSize:'20px'}}>Application For Admission A.Y. 2023-24
//                         </h2>
//                     <h2 style={{fontSize:'20px'}}>{program}</h2>
//                     <h2 style={{fontSize:'20px'}}>{branch}</h2>
//                     <h2 style={{fontSize:'20px'}}>{seat_type}</h2>
//                     </center>
//
//                 </div>
//                 <div class="header-right" style={{display:'flex',flexDirection:'column'}}>
//                     <img src={docs.photo} style={{ width: '100px', height: '100px' }} alt="Applicant's Image" />
//                     <img src={docs.signature} style={{ width: '100px', height: '50px' }} alt="Applicant's Image"/>
//                 </div>
//             </div>
//             <br />
//             <div class="main">
//                 <div class="details card">
//                     <form onSubmit={uodate_admission_details}>
//                     <table class="GeneratedTable">
//                         <tbody>
//                             <th class="tableHead">Details of Admission</th>
//                             <tr>
//                                 <td class="para-head">Student ID No.</td>
//                                 <td><input type='text' name ='stud_clg_id' value={student.stud_clg_id} onChange={(e)=>{setStudent((el)=>({...el, stud_clg_id:e.target.value}))}}/></td>
//                                 <td class="para-head">Allotment</td>
//                                 <td>{seat_type}-{round}</td>
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Selected Program</td>
//                                 <td>{program}</td>
//                                 <td class="para-head">Branch</td>
//                                 <td>{branch}</td>
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Seat Type</td>
//                                 <td>{cat}</td>
//                                 <td class="para-head">GR. No.</td>
//                                 <td><input type='text' name ='gr_number' value={student.gr_number} onChange={(e)=>{setStudent((el)=>({...el, gr_number:e.target.value}))}}/></td>
//                             </tr>
//                             <tr><td className='btns'><button>Submit These Details</button></td></tr>
//                         </tbody>
//                     </table>
//                     </form>
//                 </div>
//                 <br />
//                 <div class="personal card">
//                     <form onSubmit={uodate_personal_details}>
//                     <table class="GeneratedTable">
//
//                         <tbody>
//                             <th class="tableHead">Personal Details</th>
//                             <tr>
//                                 <td class="para-head">Name</td>
//                                 <td><input type='text' name ='name' value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
//                                 {/* <td>{name}</td> */}
//                             </tr>
//                             <tr>
//                                  <td class="para-head">Gender</td>
//                                 <td>{personal.gender_id==0 ? <>Male</> : <>Female</>}</td>
//                                 <td class="para-head">Birth Date</td>
//                                 <td><input type='date' name ='dob'/></td>
//                                 {/* <td>{new Date(personal.dob).toLocaleDateString('en-NZ')}</td>    */}
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Religion</td>
//                                 <td><input type='text' name ='religion' value={personal.religion} onChange={(e)=>{setPersonal((el)=>({...el, religion:e.target.value}))}}/></td>
//                                 {/* <td>{personal.religion}</td> */}
//                                 <td class="para-head">Community</td>
//                                 <td><input type='text' name ='communitee' value={personal.communitee} onChange={(e)=>{setPersonal((el)=>({...el, communitee:e.target.value}))}}/></td>
//                                 {/* <td>{personal.communitee}</td> */}
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Minority</td>
//                                 <td><input type='text' name ='minority' value={personal.minority} onChange={(e)=>{setPersonal((el)=>({...el, minority:e.target.value}))}}/></td>
//                                 <td>{personal.minority}</td>
//                                 <td class="para-head">Caste</td>
//                                 <td><input type='text' name ='caste' value={personal.caste} onChange={(e)=>{setPersonal((el)=>({...el, caste:e.target.value}))}}/></td>
//                                 {/* <td>{personal.caste}</td> */}
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Place of Birth</td>
//                                 <td><input type='text' name ='place_of_birth' value={personal.place_of_birth} onChange={(e)=>{setPersonal((el)=>({...el, place_of_birth:e.target.value}))}}/></td>
//                                 {/* <td>{personal.place_of_birth}</td> */}
//                                 <td class="para-head">Child Number</td>
//                                 <td><input type='text' name ='child_number' value={personal.child_number} onChange={(e)=>{setPersonal((el)=>({...el, child_number:e.target.value}))}}/></td>
//                                 {/* <td>{personal.child_number}</td> */}
//                             </tr>
//                             <tr>
//                                  <td class="para-head">Student Email ID</td>
//                                 <td><input type='text' name ='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/></td>
//                                 {/* <td>{email}</td> */}
//                                 <td class="para-head">Student Mobile No</td>
//                                 <td><input type='text' name ='contact' value={personal.contact} onChange={(e)=>{setPersonal((el)=>({...el, contact:e.target.value}))}}/></td>
//                                 {/* <td>{personal.contact}</td> */}
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Student Bank A/C No.</td>
//                                 <td><input type='text' name ='bank_account_number' value={personal.bank_account_number} onChange={(e)=>{setPersonal((el)=>({...el, bank_account_number:e.target.value}))}}/></td>
//                                 {/* <td>{personal.bank_account_number}</td> */}
//                                 <td class="para-head">Bank Name</td>
//                                 <td><input type='text' name ='bank_name' value={personal.bank_name} onChange={(e)=>{setPersonal((el)=>({...el, bank_name:e.target.value}))}}/></td>
//                                 {/* <td>{personal.bank_name}</td> */}
//                             </tr>
//                             <tr>
//                                 <td class="para-head">Last Attended College Name</td>
//                                 <td><input type='text' name ='last_college_attended' value={personal.last_college_attended} onChange={(e)=>{setPersonal((el)=>({...el, last_college_attended:e.target.value}))}}/></td>
//                                 <td>{personal.last_college_attended}</td>
//                                 <td class="para-head">Married/Single</td>
//                                 <td>{personal.married_status==0 ? <>Single</> : <>Married</>}</td>
//                             </tr>
//
//                             <tr><td className='btns'><button>Submit These Details</button></td></tr>
//                         </tbody>
//                     </table>
//                     </form>
//                     <br />
//                     <form onSubmit={update_address_details}>
//                     <table class="GeneratedTable">
//                         <tbody>
//                             <th class="tableHead" colSpan={2}>Address of Correspondance</th>
//                             <th class="tableHead" colSpan={2}>Permanent Address</th>
//                             <tr>
//                                 <td class="para-head">Address</td>
//                                 <td><textarea type='text' name ='raddress' placeholder={raddress.address}/></td>
//                                 {/* <td>{raddress[0].address}</td> */}
//                                 <td class="para-head">Address</td>
//                                 <td><textarea type='text' name ='paddress' placeholder={paddress.address}/></td>
//                                 {/* <td>{paddress[0].address}</td> */}
//                             </tr>
//                             <tr><td className='btns'><button>Submit These Details</button></td></tr>
//                         </tbody>
//
//                     </table>
//                     </form>
//
//
//                 </div>
//                 <div className="pagebreak"></div>
//                 <br /><br />
//                 <div class="academic card">
//
//
//
//                             {tableItem}
//
//
//
//
//
//                 </div><br />
//                 <div className="pagebreak"></div>
//                 <br />
//
//
//                 <br />
//
//
//
//
//
//             </div>
//
//         </div>
//     );
// }
//
// export default EditApplication;
//
//
//
//
