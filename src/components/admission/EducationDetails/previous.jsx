// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
// import EducationD from "../EducationD";
// // import api from "api";
// import Sem from './Sem';
// import HDegree from "./HDegree";
// import Validation from "../validartions";
// import api from "../../../api";
//
// const PreviousD = () => {
//   const [sscDone, setsscDone] = useState(false);
//   const [hscDone, sethscDone] = useState(false);
//   const [dipDone, setDipdone] = useState(false);
//   const [sscYear, setsscYear] = useState(null);
//   const [hscYear, sethscYear] = useState(null);
//   const [dipYear, setdipYear] = useState(null);
//   const [sscMarks, setsscMarks] = useState('');
//   const [hscMarks, sethscMarks] = useState('');
//   const [dipMarks, setdipMarks] = useState('');
//   const [ssc_percentage, setssc_percentage] = useState('');
//   const [hsc_percentage, sethsc_percentage] = useState('');
//   const [dip_percentage, setdip_percentage] = useState('');
//   const [ssc_seat, setssc_seat] = useState('');
//   const [hsc_seat, sethsc_seat] = useState('');
//   const [dip_seat, set_dip_seat] = useState('');
//   const [ssc_name_of_board, setssc_name_of_board] = useState('');
//   const [hsc_board_name, sethsc_board_name] = useState('');
//   const [dip_college_name, setdip_college_name] = useState('');
//   const [physics_score_in_hsc, setphysics_score_in_hsc] = useState('');
//   const [chemistry_score_in_hsc, setchemistry_score_in_hsc] = useState('');
//   const [bio_marks, setBio] = useState('');
//   const [maths_score_hsc, setmaths_score_hsc] = useState('');
//   const [vocational_total_score_hsc, setvocational_total_score_hsc] = useState('');
//   const [dep_cgpi, setDepCgpi] = useState('');
//   const [dip_board, setDipB] = useState('');
//   const [vocational_subject, setVocSub] = useState('');
//   const [isSubmitted, setIsSubmited] = useState(false);
//   const [ssc_total_marks, setSScTotalMarks] = useState(false);
//
//
//
//   const [data, setData] = useState({ssc_passing_year:'',ssc_marks:''});
//
//    useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = async() => {
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/currentEducation?uid=` +
//           localStorage.getItem("uid")
//       )
//       .then((response) => {
//         const data = response.data['data'][0]
//                 setsscYear(data.ssc_passing_year);
//                 setssc_seat(data.ssc_seat_number);
//                 setsscMarks(data.ssc_marks);
//                 setssc_percentage(data.ssc_percentage)
//                 setssc_name_of_board(data.ssc_name_of_board)
//                 setSScTotalMarks(data.ssc_total_marks)
//
//                 sethscYear(data.hsc_passing_year);
//                 sethsc_seat(data.hsc_seat_year);
//                 sethscMarks(data.hsc_marks);
//                 sethsc_percentage(data.hsc_percentage)
//                 sethsc_board_name(data.hsc_name_of_board)
//                 setphysics_score_in_hsc(data.physics_score_in_hsc)
//                 setchemistry_score_in_hsc(data.chemistry_score_in_hsc)
//                 setmaths_score_hsc(data.maths_score_hsc)
//                 setvocational_total_score_hsc(data.vocational_total_score_hsc)
//                 setVocSub(data.vocational_subject)
//
//                 setdipYear(data.dep_passing_year);
//                 setdipMarks(data.dep_marks)
//                 setdip_college_name(data.dep_clg_name)
//                 setdip_percentage(data.dep_per)
//                 set_dip_seat(data.dep_seat)
//                 setDepCgpi(data.dep_cgpi)
//                 setDipB(data.dip_board)
//                 setBio(data.bio_marks)
//            }
//       )
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
//   const handlehsc = (event) => {
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     const formEntry = Object.fromEntries(formData);
//
//
//     let isValid = true;
//     for (let [name, values] of formData.entries()) {
//       if (!Validation.isRequired(values)) {
//         alert(`All Fields Are required.`);
//         return;
//       }
//     }
//
//     if(!Validation.isAlphanumeric(parseInt(formEntry.hsc_seat))){
//       alert("Enter Valid SSC Seat Number");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.hsc_board_name)){
//       alert("Board Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.hsc_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.hsc_percentage)){
//       alert("Percentage Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.phy_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.che_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.math_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.bio_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     formData.append("uid", localStorage.getItem("uid"));
//
//     api
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/admission/hsc`,
//         Object.fromEntries(formData)
//       )
//       .then((response) => {
//         alert(response.data["message"]);
//         sethscDone(true);
//       })
//       .catch((error) => {
//         alert(error.response.data["message"]);
//       });
//   };
//
//   const handleSSC = async(event) =>{
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     const formEntry = Object.fromEntries(formData);
//
//     let isValid = true;
//     for (let [name, values] of formData.entries()) {
//       if (!Validation.isRequired(values)) {
//         alert(`All Fields Are required.`);
//         return;
//       }
//     }
//
//     if(!Validation.isAlphanumeric(parseInt(formEntry.ssc_seat))){
//       alert("Enter Valid SSC Seat Number");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.board_name)){
//       alert("Board Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.ssc_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//
//     // formEntry.append('ssc_percentage',(sscMarks/ssc_total_marks)*100)
//     formData.append('ssc_percentage',(sscMarks/ssc_total_marks)*100)
//
//     // if(!Validation.isPer(formData.entries.ssc_percentage)){
//     //   alert("SSC Percentage Should Only Contain Number.");
//     //   return;
//     // }
//
//     formData.append("uid", localStorage.getItem("uid"));
//
//     api
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/admission/ssc`,
//         Object.fromEntries(formData)
//       )
//       .then((response) => {
//         alert(response.data["message"]);
//         setsscDone(true);
//       })
//       .catch((error) => {
//         alert(error.response.data["message"]);
//       });
//   }
//
//
//   const handledep = async(event) =>{
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     const formEntry = Object.fromEntries(formData);
//
//
//     let isValid = true;
//     for (let [name, values] of formData.entries()) {
//       if (!Validation.isRequired(values)) {
//         alert(`All Fields Are required.`);
//         return;
//       }
//     }
//
//     if(!Validation.isAlphanumeric(parseInt(formEntry.dip_seat))){
//       alert("Enter Valid SSC Seat Number");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.dip_college_name)){
//       alert("College Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.dip_board)){
//       alert("Board Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.dip_marks)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.dip_percentage)){
//       alert("Percentage Should Only Contain Number.");
//       return;
//     }
//
//     if(!Validation.isPer(formEntry.dip_cgpi)){
//       alert("Marks Should Only Contain Number.");
//       return;
//     }
//
//     formData.append("uid", localStorage.getItem("uid"));
//
//     api
//       .post(
//         `${process.env.REACT_APP_BASE_URL}/admission/diploma`,
//         Object.fromEntries(formData)
//       )
//       .then((response) => {
//         alert(response.data["message"]);
//         setDipdone(true);
//       })
//       .catch((error) => {
//         alert(error.response.data["message"]);
//       });
//   }
//
//   return (
//     <section className="personalForm">
//       <EducationD />
//       <p style={{color:'red'}}>Note:
//       <ol>
//         <li>
//         The Diploma Feilds are only for those students who had done diploma. Those who had only done hsc can ignore diploma section.
//         </li>
//         <li>
//           Do not mention NA in the KT fields if you don't have kt then enter 0 in the feild.
//         </li>
//       </ol>
//
//       <div className="line"></div>
//
//       </p>
//       <form onSubmit={handleSSC}>
//         <div className="first">
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               SSC Passing Year
//             </label>
//             <br />
//             {sscYear==null ? (
//               <input
//                 type="month"
//                 name="ssc_pass"
//                 selected='02/2001'
//               />
//             ) : (
//               <input type="month" value={sscYear} name="ssc_pass" onChange={(e)=>setsscYear(e.target.value)} />
//             )}
//             {/* <p className="error-field">Enter your name</p> */}
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               SSC Seat No
//             </label>
//             <br />
//             <input
//               type="text"
//               name="ssc_seat"
//               placeholder={ssc_seat}
//             />
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Name of the board
//             </label>
//             <br />
//             <input
//               type="text"
//               name="board_name"
//               placeholder={ssc_name_of_board}
//             />
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               SSC Obtained Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="ssc_marks"
//               onChange={(e)=>setsscMarks(e.target.value)}
//               placeholder={sscMarks}
//             />
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               SSC Total Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="ssc_total_marks"
//               onChange={(e)=>setSScTotalMarks(e.target.value)}
//               placeholder={ssc_total_marks}
//             />
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               SSC Percentage/CGPA
//             </label>
//             <br />
//             <input
//               type="text"
//               name="ssc_percentage"
//               placeholder={ssc_percentage}
//               value={ssc_total_marks!='' || ssc_total_marks!=0 ? (sscMarks/ssc_total_marks)*100 : 0}
//               disabled
//             />
//           </div>
//         </div>
//
//         <div className="btns">
//         {
//           isSubmitted==false ?
//           <button type='submit'>
//           Submit & Next
//          </button>:<></>
//         }
//         </div>
//       </form>
//       <form onSubmit={handlehsc}>
//         <div className="line"></div>
//         <p style={{color:'red'}}>Note:
//       <ol>
//         <li>
//         If not a Bifocal student, Select Vocational Subject as Computer Science and Enter Marks as 0.
//         </li>
//         <li>
//          If a Bifocal student, Enter Biology marks as 0.
//         </li>
//       </ol>
//       </p>
//         <div className="first">
//           {/* HSC */}
//
//           <div className="hsc-p">
//             <label for="fullName" className="form-label">
//               HSC Passing Year
//             </label>
//             <br />
//             {hscYear==null ? (
//               <input
//                 type="month"
//                 name="hsc_pass"
//               />
//             ) : (
//               <input type="month" name="hsc_pass" value={hscYear} onChange={(e)=>{sethscYear(e.target.value)}} />
//             )}
//             {/* <p className="error-field">Enter your name</p> */}
//           </div>
//
//           <div className="hsc-p">
//             <label for="fullName" className="form-label">
//               HSC Seat No
//             </label>
//             <br />
//             <input
//               type="text"
//               name="hsc_seat"
//               placeholder={hsc_seat}
//             />
//           </div>
//
//           <div className="hsc-p">
//             <label for="fullName" className="form-label">
//               Name of the board
//             </label>
//             <br />
//             <input
//               type="text"
//               name="hsc_board_name"
//               placeholder={hsc_board_name}
//             />
//           </div>
//
//           <div className="hsc-p">
//             <label for="fullName" className="form-label">
//               HSC Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="hsc_marks"
//               placeholder={hscMarks}
//             />
//           </div>
//
//           <div className="hsc-p">
//             <label for="fullName" className="form-label">
//               HSC Percentage/CGPA
//             </label>
//             <br />
//             <input
//               type="text"
//               name="hsc_percentage"
//               placeholder={hsc_percentage}
//             />
//           </div>
//
//           <div className="hsc-chem">
//             <label for="fullName" className="form-label">
//               HSC Physics Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="phy_marks"
//               placeholder={physics_score_in_hsc}
//               onChange={(e)=>setphysics_score_in_hsc(e.target.value)}
//             />
//           </div>
//           <div className="hsc-phy">
//             <label for="fullName" className="form-label">
//               HSC Chemistry Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="che_marks"
//               placeholder={chemistry_score_in_hsc}
//               onChange={(e)=>setchemistry_score_in_hsc(e.target.value)}
//             />
//           </div>
//           <div className="hsc-phy">
//             <label for="fullName" className="form-label">
//               HSC Biology Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="bio_marks"
//               placeholder={bio_marks}
//               onChange={(e)=>setBio(e.target.value)}
//             />
//           </div>
//           <div className="hsc-maths">
//             <label for="fullName" className="form-label">
//               HSC Maths Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="math_marks"
//               placeholder={maths_score_hsc}
//               onChange={(e)=>setmaths_score_hsc(e.target.value)}
//             />
//           </div>
//           <div className="hsc-voc">
//             <label for="fullName" className="form-label">
//               HSC Vocational Name
//             </label>
//             <br />
//             <select class="form-select" aria-label="Select Seat Type" name='vocational_subject'>
//                   <option selected>Select Branch</option>
//                   <option value="NO">NO</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Information Technology">Information Technology</option>
//                   <option value="Electronics">Electronics</option>
//             </select>
//
//           </div>
//
//           <div className="hsc-voc">
//             <label for="fullName" className="form-label">
//               HSC Vocational Marks
//             </label>
//             <br />
//             <input
//               type="text"
//               name="vocational_marks"
//               defaultValue={vocational_total_score_hsc=="" ? 0 : vocational_total_score_hsc}
//               placeholder={vocational_total_score_hsc}
//               onChange={(e)=>setvocational_total_score_hsc(e.target.value)}
//             />
//           </div>
//
//           <div className="hsc-voc">
//             <label for="fullName" className="form-label">
//               PCM Percentage
//             </label>
//             <br />
//             <input
//               type="text"
//               name="pcm_per"
//               value={(Number(physics_score_in_hsc)+Number(maths_score_hsc)+Math.max(Number(chemistry_score_in_hsc),Number(bio_marks),Number(vocational_total_score_hsc)))*100/300}
//               disabled
//             />
//           </div>
//
//         </div>
//         <div className="btns">
//           {
//           isSubmitted==false ?
//           <button type='submit'>
//           Submit & Next
//          </button>:<></>
//         }
//         </div>
//       </form>
//       <div className="line"></div>
//
//       <form action="" onSubmit={handledep}>
//         <div className="first">
//           {/* diploma */}
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Diploma Passing Year
//             </label>
//             <br />
//             {
//                 dipYear==null ?
//             <input type="month" name="dip_pass" />:
//             <input type="text" name="dip_pass" value={dipYear} onChange={(e)=>setdipYear(e.target.value)}/>
//             }
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Seat No
//             </label>
//             <br />
//             <input type="text" name="dip_seat" placeholder={dip_seat}/>
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Name of the College
//             </label>
//             <br />
//             <input type="text" name="dip_college_name" placeholder={dip_college_name}/>
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Name of the Board
//             </label>
//             <br />
//             <input type="text" name="dip_board" placeholder={dip_board}/>
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Diploma Marks
//             </label>
//             <br />
//             <input type="text" name="dip_marks" placeholder={dipMarks}/>
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Diploma Percentage
//             </label>
//             <br />
//             <input type="text" name="dip_percentage" placeholder={dip_percentage}/>
//           </div>
//
//           <div className="ssc-p">
//             <label for="fullName" className="form-label">
//               Diploma CGPI
//             </label>
//             <br />
//             <input type="text" name="dip_cgpi" placeholder={dep_cgpi}/>
//           </div>
//         </div>
//
//         <div className="btns">
//         {
//           isSubmitted==false ?
//           <button type='submit'>
//           Submit & Next
//          </button>:<></>
//         }
//         </div>
//       </form>
//       <div className="line"></div>
//
//       {
//                                 localStorage.getItem('program')>2 ?
//                                 <Sem/> : <></>
//                             }
//
//     {
//                                 localStorage.getItem('program')>3 ?
//                                 <HDegree/> : <></>
//       }
//       {
//         localStorage.getItem("program")<=2?
//         <div className="btns">
//         <button type="submit" style={{color:'white'}}><Link to='/EducationD/Entrance'>Next</Link></button>
//         </div>:
//          <div className="btns">
//          <button type="submit" style={{color:'white'}}><Link to='/EducationD/CurrentD'>Next</Link></button>
//          </div>
//       }
//     </section>
//   );
// };
//
// export default PreviousD;
//
//
