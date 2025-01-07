// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
// import BasicD from "../BasicD";
// import Validation from "../validartions";
// import api from "../../../api";
//
// const ParentD = (props) => {
//   const [isDone, setDone] = useState(false);
//   const [data, setData] = useState([
//     { fullname: "" },
//     { fullname: "" },
//     { fullname: "" },
//   ]);
//   const [code, setCode] = useState(null);
//   const [isSMS_to_mother, setIsSMS_to_mother] = useState(false);
//   const [isSMS_to_father, setIsSMS_to_father] = useState(false);
//   const [father_mob, setFather_mob] = useState("");
//   const [mother_mob, setMother_mob] = useState("");
//   const [otp, setOtp] = useState("");
//   const [verifyOtp, setverifyOtp] = useState("");
//   const [isMotherV, setisMotherV] = useState(false);
//   const [isFatherV, setisFatherV] = useState(false);
//   const [isSubmitted, setIsSubmited] = useState(false);
//   const [isChecked, setChecked] = useState(false);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   const fetchData = () => {
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/parentDetails?uid=` +
//           localStorage.getItem("uid")
//       )
//       .then((response) => {
//         setCode(response.data["code"]);
//
//         if (response.data["code"] == 1) {
//           setData(response.data["radd"]);
//           setCode(response.data["code"]);
//         }
//       })
//       .catch((error) => {
//       });
//
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/isSubmmited?uid=` +
//           localStorage.getItem("uid")
//       )
//       .then((response) => {
//         setIsSubmited(response.data["isSubmmited"]);
//       })
//       .catch((error) => {
//       });
//   };
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     const formEntry = Object.fromEntries(formData);
//
//     for (let [name, value] of formData.entries()) {
//       if (value.trim() === "") {
//         alert(`All Fields Are required.`);
//         return;
//       }
//     }
//
//     if(!Validation.isPhoneNumber(parseInt(formEntry.father_cont))){
//       alert("Invalid Contact Number of Father");
//       return;
//     }
//
//     if(!Validation.isPhoneNumber(parseInt(formEntry.mother_cont))){
//       alert("Invalid Contact Number of Mother");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.father_fullName)){
//       alert("Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.mother_fullName)){
//       alert("Name Should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.father_occupation)){
//       alert("Occupation should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.mother_occupation)){
//       alert("Occupation should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.father_designation)){
//       alert("Designation should Only Contain Text.");
//       return;
//     }
//
//     if(!Validation.isText(formEntry.mother_designation)){
//       alert("Designation should Only Contain Text.");
//       return;
//     }
//
//     if(isChecked){
//       if(!Validation.isText(formEntry.guardian_occupation)){
//         alert("Occupation should Only Contain Text.");
//         return;
//       }
//
//       if(!Validation.isText(formEntry.guardian_fullname)){
//         alert("Name Should Only Contain Text.");
//         return;
//       }
//
//       if(!Validation.isText(formEntry.guardian_designation)){
//         alert("Designation should Only Contain Text.");
//         return;
//       }
//
//       if(!Validation.isPhoneNumber(parseInt(formEntry.guardian_cont))){
//         alert("Invalid Contact Number of Guardian");
//         return;
//       }
//     }
//
//     if ((isFatherV == false) && code == 0) {
//       alert("Please Verify the numbers");
//     } else {
//
//       formData.append("uid", localStorage.getItem("uid"));
//
//       api
//         .post(
//           `${process.env.REACT_APP_BASE_URL}/admission/parentDetails`,
//           Object.fromEntries(formData)
//         )
//         .then((response) => {
//           alert(response.data["message"]);
//           setDone(true);
//         })
//         .catch((error) => {
//           alert(error.response.data["message"]);
//         });
//     }
//   };
//
//   const sendOtp = async (rel) => {
//
//     if (rel == 1) {
//       if (
//         father_mob == "" ||
//         father_mob.length < 10 ||
//         !(!isNaN(parseFloat(father_mob)) && isFinite(father_mob))
//       ) {
//         alert("Please Enter Valid Mobile Number");
//       } else {
//         api
//           .get(
//             `${process.env.REACT_APP_BASE_URL}/admission/sendotp?phone=${father_mob}`
//           )
//           .then((response) => {
//             setIsSMS_to_father(true);
//             alert(response.data["message"]);
//             setOtp(response.data["otp"]);
//           })
//           .catch((err) => alert(err.response.data["message"]));
//       }
//     } else {
//       if (
//         mother_mob == "" ||
//         mother_mob.length < 10 ||
//         !(!isNaN(parseFloat(mother_mob)) && isFinite(mother_mob))
//       ) {
//         alert("Please Enter Valid Mobile Number");
//       } else {
//         api
//           .get(
//             `${process.env.REACT_APP_BASE_URL}/admission/sendotp?phone=${mother_mob}`
//           )
//           .then((response) => {
//             setIsSMS_to_mother(true);
//             alert(response.data["message"]);
//             setOtp(response.data["otp"]);
//           })
//           .catch((err) => alert(err.response.data["message"]));
//       }
//     }
//   };
//
//   const Verify = (rel) => {
//     if (rel == 1) {
//       if (otp == verifyOtp) {
//         alert("Verified");
//         setisFatherV(true);
//       } else {
//         alert("Enter Valid OTP");
//       }
//     } else {
//       if (otp == verifyOtp) {
//         alert("Verified");
//         setisMotherV(true);
//       } else {
//         alert("Enter Valid OTP");
//       }
//     }
//   };
//
//   return (
//     <>
//       <section className="parentForm">
//         {isDone == true && <Navigate to="/BasicD/AddressD"></Navigate>}
//         <BasicD />
//         <form onSubmit={handleSubmit}>
//           <div className="first">
//             <div className="f-name">
//               <label for="fullName" className="form-label">
//                 Father Full Name
//               </label>
//               <br />
//               <input
//                 type="text"
//                 name="father_fullName"
//                 placeholder={data[0].fullname}
//               />
//             </div>
//
//             <div className="f-cont">
//               <label for="cont" className="form-label">
//                 Father Contact No
//               </label>
//               <br />
//               {isFatherV == false ? (
//                 <input
//                   type="text"
//                   name="father_cont"
//                   value={data[0].contact}
//                   onChange={(e) => setFather_mob(e.target.value)}
//                 />
//               ) : (
//                 <input type="text" name="father_cont" value={father_mob} />
//               )}
//             </div>
//
//             <div className="f-mail">
//               <label for="cont" className="form-label">
//                 Father Email
//               </label>
//               <br />
//               <input
//                 type="email"
//                 name="father_email"
//                 placeholder={data[0].email}
//               />
//             </div>
//
//             <div className="f-occu">
//               <label for="cont" className="form-label">
//                 Occupation
//               </label>
//               <br />
//               <input
//                 type="text"
//                 name="father_occupation"
//                 placeholder={data[0].occupation}
//               />
//             </div>
//
//             <div className="f-desig">
//               <label for="cont" className="form-label">
//                 Father Designation
//               </label>
//               <br />
//               <input
//                 type="text"
//                 name="father_designation"
//                 placeholder={data[0].designation}
//               />
//             </div>
//
//             <div className="f-income">
//               <label for="cont" className="form-label">
//                 Annual Income
//               </label>
//               <br />
//               <input
//                 type="number"
//                 name="father_income"
//                 placeholder={data[0].income}
//               />
//             </div>
//
//             {isFatherV || code != 0 ? (
//               <></>
//             ) : (
//               <>
//                 {isSMS_to_father == true ? (
//                   <div className="s-otp">
//                     <div>
//                       <label for="received-otp" className="form-label">
//                         Received OTP
//                       </label>
//                       <br />
//                       <input
//                         type="number"
//                         name="received-otp"
//                         onChange={(e) => {
//                           setverifyOtp(e.target.value);
//                         }}
//                       />
//                     </div>
//                     <h4 className="otp" onClick={(e) => Verify(1)}>
//                       Verify
//                     </h4>
//                   </div>
//                 ) : (
//                   <div className="s-otp">
//                     <h4 className="otp" onClick={(e) => sendOtp(1)}>
//                       Send OTP
//                     </h4>
//                   </div>
//                 )}
//               </>
//             )}
//
//             <div className="line"></div>
//
//             {/* Mother */}
//
//             <div className="m-name">
//               <label for="fullName" className="form-label">
//                 Mother Full Name
//               </label>
//               <br />
//               <input
//                 type="text"
//                 name="mother_fullName"
//                 placeholder={data[1].fullname}
//               />
//             </div>
//
//             <div className="m-cont">
//               <label for="cont" className="form-label">
//                 Mother Contact No
//               </label>
//               <br />
//               {isMotherV == false ? (
//                 <input
//                   type="text"
//                   name="mother_cont"
//                   value={data[1].contact}
//                   onChange={(e) => setMother_mob(e.target.value)}
//                 />
//               ) : (
//                 <input type="text" name="mother_cont" value={mother_mob} />
//               )}
//             </div>
//
//             <div className="m-mail">
//               <label for="cont" className="form-label">
//                 Mother Email Id
//               </label>
//               <br />
//               <input
//                 type="email"
//                 name="mother_email"
//                 placeholder={data[1].email}
//               />
//             </div>
//
//             <div className="m-occu">
//               <label for="cont" className="form-label">
//                 Occupation
//               </label>
//               <br />
//               <input
//                 type="text"
//                 name="mother_occupation"
//                 placeholder={data[1].occupation}
//               />
//             </div>
//
//             <div className="m-desig">
//               <label for="cont" className="form-label">
//                 Designation
//               </label>
//               <br />
//               <input
//                 type="text"
//                 name="mother_designation"
//                 placeholder={data[1].designation}
//               />
//             </div>
//
//             <div className="m-income">
//               <label for="cont" className="form-label">
//                 Annual Income
//               </label>
//               <br />
//               <input
//                 type="number"
//                 name="mother_income"
//                 placeholder={data[1].income}
//               />
//             </div>
//
//
//             <div className="line"></div>
//             {/* Guardian */}
//
//             <div className="m-name">
//               Is Guardian
//               <br />
//               <input
//                 type="radio"
//                 id="r1"
//                 name="percheck"
//                 value="1"
//                 onChange={(e) => {
//                   setChecked(true);
//                 }}
//               />{" "}
//               &nbsp;
//               <label for="fullName" className="form-label">
//                 Yes
//               </label>
//               <br />
//               <input
//                 type="radio"
//                 id="r1"
//                 name="percheck"
//                 value="0"
//                 onChange={(e) => {
//                   setChecked(false);
//                 }}
//               />{" "}
//               &nbsp;
//               <label for="fullName" className="form-label">
//                 No
//               </label>
//             </div>
//             <div className="line"></div>
//             {isChecked == true ? (
//               <>
//                 <div className="m-name">
//                   <label for="fullName" className="form-label">
//                     Guardian Full Name
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     name="guardian_fullname"
//                     placeholder={data[2].fullname}
//                   />
//                 </div>
//
//                 <div className="m-cont">
//                   <label for="cont" className="form-label">
//                     Guardian Contact No
//                   </label>
//                   <br />
//                   <input
//                     type="number"
//                     name="guardian_cont"
//                     value={data[2].contact}
//                   />
//                 </div>
//
//                 <div className="m-mail">
//                   <label for="cont" className="form-label">
//                     Guardian Email Id
//                   </label>
//                   <br />
//                   <input
//                     type="email"
//                     name="guardian_email"
//                     placeholder={data[2].email}
//                   />
//                 </div>
//
//                 <div className="m-occu">
//                   <label for="cont" className="form-label">
//                     Occupation
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     name="guardian_occupation"
//                     placeholder={data[2].occupation}
//                   />
//                 </div>
//
//                 <div className="m-desig">
//                   <label for="cont" className="form-label">
//                     Designation
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     name="guardian_designation"
//                     placeholder={data[2].designation}
//                   />
//                 </div>
//
//                 <div className="m-income">
//                   <label for="cont" className="form-label">
//                     Annual Income
//                   </label>
//                   <br />
//                   <input
//                     type="number"
//                     name="guardian_income"
//                     placeholder={data[2].income}
//                   />
//                 </div>
//               </>
//             ) : (
//               <></>
//             )}
//           </div>
//           <div className="btns">
//             {isSubmitted == false ? (
//               <button type="submit">Submit & Next</button>
//             ) : (
//               <></>
//             )}
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };
//
// export default ParentD;
