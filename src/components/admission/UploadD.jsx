// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
// import { IKImage, IKContext, IKUpload } from "imagekitio-react";
// import api from "api";

// const UploadD = () => {
//   const [done, setDone] = useState(false);
//   const [photo, setPhoto] = useState("");
//   const [signature, setSignature] = useState("");
//   const [ssc_mark, setSscmark] = useState("");
//   const [hsc_marksheet, sethscmarksheet] = useState("");
//   const [mhtcet, setmhtcet] = useState("");
//   const [jee, setjee] = useState("");
//   const [calLetter, setCapletter] = useState("");
//   const [fc, setFc] = useState("");
//   const [aadhar, setAadhar] = useState("");
//   const [rc, setrc] = useState("");
//   const [bank_pass, setBank] = useState("");
//   const [income, setIncome] = useState("");
//   const [caste, setCaste] = useState("");
//   const [Domicile, setDomicile] = useState("");
//   const [casteV, setCasteV] = useState("");
//   const [fee, setFee] = useState("");
//   const [clgAllot, setCollege] = useState("");
//   const [code, setCode] = useState("");
//   const [cat_id, setCat_id] = useState("");
//   const [nonCr, setNonCr] = useState("");
//   const [ews, setEws] = useState("");
//   const [lc, setlc] = useState("");
//   const [isSubmitted, setIsSubmited] = useState(false);
//   const [parentSignature, setPs] = useState("");
//   const [antiragging, setRagging] = useState("");
//   const [gap_cert, setGap_cert] = useState("");
//   const [admission_year, setADY] = useState("");

//   const stateSetters = {
//     photo: setPhoto,
//     signature: setSignature,
//     ssc_mark: setSscmark,
//     hsc_marksheet: sethscmarksheet,
//     mhtcet: setmhtcet,
//     jee: setjee,
//     calLetter: setCapletter,
//     fc: setFc,
//     aadhar: setAadhar,
//     rc: setrc,
//     bank_pass: setBank,
//     income: setIncome,
//     caste: setCaste,
//     Domicile: setDomicile,
//     casteV: setCasteV,
//     fee: setFee,
//     clgAllot: setCollege,
//     code: setCode,
//     cat_id: setCat_id,
//     nonCr: setNonCr,
//     ews: setEws,
//     lc: setlc,
//     parentSignature: setPs,
//     antiragging: setRagging,
//     gap_cert: setGap_cert,
//     admission_year: setADY
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     api
//       .get(
//         `${process.env.REACT_APP_BASE_URL}/admission/upload?uid=` +
//           localStorage.getItem("uid")
//       )
//       .then((response) => {
//         setCode(response.data["code"]);
//         if (response.data["code"] == 1) {
//           setCode(response.data["code"]);
//           setPhoto(response.data["docs"].photo);
//           setSignature(response.data["docs"].signature);
//           setAadhar(response.data["docs"].aadhar_card);
//           setBank(response.data["docs"].back_passbook);
//           setCapletter(response.data["docs"].cap_allotment_letter);
//           setCaste(response.data["docs"].caste_certificate);
//           setCasteV(response.data["docs"].caste_validation);
//           setCollege(response.data["docs"].college_admission_letter);
//           setDomicile(response.data["docs"].domicile);
//           setFc(response.data["docs"].fc_center_varification);
//           setFee(response.data["docs"].fee_reciept);
//           setIncome(response.data["docs"].income_certificate);
//           setSscmark(response.data["docs"].ssc_marksheet);
//           sethscmarksheet(response.data["docs"].hsc_marksheet);
//           setrc(response.data["docs"].ration_card);
//           setmhtcet(response.data["docs"].mht_cet_score_card);
//           setjee(response.data["docs"].jee_score_card);
//           setlc(response.data["docs"].lc);
//           setNonCr(response.data["docs"].nonCreamy);
//           setEws(response.data["docs"].ews_pro);
//           setPs(response.data["docs"].parentSignature);
//           setRagging(response.data["docs"].antiragging_form);
//           setGap_cert(response.data['docs'].gap_cert);
//         }
//       })
//       .catch((error) => {
//       });

//     api
//       .get(
//         `${
//           process.env.REACT_APP_BASE_URL
//         }/admission/currentEducation_per?uid=${localStorage.getItem("uid")}`
//       )
//       .then((res) => {
//         setCat_id(res.data["category"]);
//         setADY(res.data.data[0].programm_id);
//       })
//       .catch((err) => {
//       });

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

//   const publicKey = "public_gWKOuQlhuPW59VhaGTXah7GGmHU=";
//   let urlEndpoint = "https://ik.imagekit.io/getflytechnologies/";
//   const authenticationEndpoint =
//     "https://vppcoe-va.getflytechnologies.com/api/faculty/upload_auth";

//   const upload_imgs = async () => {
//     var data = {
//       photo: photo,
//       signature: signature,
//       parentSignature: parentSignature,
//       ssc_mark: ssc_mark,
//       hsc_marksheet: hsc_marksheet,
//       mhtcet: mhtcet,
//       jee: jee,
//       calLetter: calLetter,
//       fc: fc,
//       aadhar: aadhar,
//       rc: rc,
//       bank_pass: bank_pass,
//       income: income,
//       caste: caste,
//       Domicile: Domicile,
//       casteV: casteV,
//       fee: fee,
//       clgAllot: clgAllot,
//       nonCreamy: nonCr,
//       lc: lc,
//       ews: ews,
//       uid: localStorage.getItem("uid"),
//       antirangging: antiragging,
//       gap_cert:gap_cert,
//     };

//     if (antiragging == null || antiragging == "") {
//       alert("all the documents are required");
//     } else {
//       api
//         .post(`${process.env.REACT_APP_BASE_URL}/admission/upload`, data)
//         .then((response) => {
//           alert(response.data["message"]);
//           setDone(true);
//         })
//         .catch((error) => {
//         });
//     }
//     // if (admission_year > 2) {
//     //   if (antiragging == null || antiragging == "") {
//     //     alert("Antiragging document is required");
//     //   } else {
//     //     api
//     //       .post(`${process.env.REACT_APP_BASE_URL}/admission/upload`, data)
//     //       .then((response) => {
//     //         alert(response.data["message"]);
//     //         setDone(true);
//     //       })
//     //       .catch((error) => {
//     //       });
//     //   }
//     // } else {
//     //   api
//     //     .post(`${process.env.REACT_APP_BASE_URL}/admission/upload`, data)
//     //     .then((response) => {
//     //       alert(response.data["message"]);
//     //       setDone(true);
//     //     })
//     //     .catch((error) => {
//     //     });
//     // }

//   };

//   const handleFileChange = (e) => {
//       const { name, files } = e.target;

//       if (!stateSetters[name]) {
//         return;
//       }

//       // Create a FormData object and append the selected file(s)
//       const formData = new FormData();
//       formData.append("file", files[0]); // Assuming you only want to upload the first file, adjust as needed

//       // Make an AJAX request to upload the file
//       api.post(`${process.env.REACT_APP_BASE_URL}/security/upload`, formData, {
//           headers: {
//               'Content-Type': 'multipart/form-data',
//               'Authorization': localStorage.getItem('token')
//           }
//       })
//       .then(response => {
//           alert('Document Uploaded');
//           stateSetters[name](response.data.filename)
//       })
//       .catch(error => {
//       });
// }

//   const handelViewDoc=(e)=>{
//     if(String(e).substring(0,4)=='http')
//       {
//         window.open(`${e}`,'_blank')
//       }else{
//         window.open(`${process.env.REACT_APP_BASE_URL}/security/view/${e}`,'_blank')
//       }
//   }

//   const validateImg = (e) => {
//     if (
//       !String(e.name).toLocaleLowerCase().includes(".jpg") &&
//       !String(e.name).toLocaleLowerCase().includes(".png")
//     ) {
//       alert("Please Upload file with type of .jpg or .png");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   return (
//     <>
//       {done == true ? <Navigate to={"/"} /> : <></>}

//       <div className="dynamic">
//         <h3 className="greet fw-bolder">Upload Documents</h3>
//         <div className="line-header"></div>
//         <p style={{ color: "red" }}>
//           Note:
//           <ol>
//             <li>All the Documents are required for the admission process.</li>
//             <li>
//               Scan and make a pdf of all the Semester marksheets. The size of
//               Semester marksheets should be less then 5 MB.
//             </li>
//             <li>
//               All the documents should be in the valid image format except for
//               Semester Marksheet.
//             </li>
//             <li>
//               Profile photo, Signature of the student should be uploaded in jpg
//               format.
//             </li>
//           </ol>
//           <div className="line"></div>
//         </p>

//         <main className="change">
//           <div className="box-c upload">
//             <div className="upload_container">
//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   Profile Photo
//                 </label>
//                 <div className="doc">
//                   <input type="file" name="photo" onChange={async(e)=>{var a = await handleFileChange(e); setPhoto(a);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(photo)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
//               </div>
//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   Signature of Student
//                 </label>
//                 <div className="doc">
//                   <input type="file" name="signature" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(signature)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
               
//               </div>
//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   Signature of Parent/Guardian
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="parentSignature" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(parentSignature)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>

//               <div className="line"></div>

//               <div class="mb-3 ssc">
//                 <label for="formFile" class="form-label">
//                   SSC Marksheet
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="ssc_mark" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(ssc_mark)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               <div class="mb-3 hsc">
//                 <label for="formFile" class="form-label">
//                   HSC Marksheet
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="hsc_marksheet" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(hsc_marksheet)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>

//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   MHTCET Score Card
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="mhtcet" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(mhtcet)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   JEE Score Card
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="jee" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(jee)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>
//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   CAP Allotment Letter
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="calLetter" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(calLetter)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>

//               <div class="mb-3">
//                 <label for="formFile" class="form-label">
//                   FC Center Verification
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="fc" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(fc)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               <div class="mb-3 hsc">
//                 <label for="formFile" class="form-label">
//                   Anti Ragging Form
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="antiragging" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(antiragging)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   Leaving Certificate
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="lc" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(lc)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>

//               <div className="line"></div>

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   Aadhar Card
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="aadhar" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(aadhar)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
               
//               </div>

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   Ration Card
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="rc" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(rc)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
              
//               </div>

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   Bank Passbook
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="bank_pass" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(bank_pass)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

               
//               </div>

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   Domicle Certificate
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="Domicile" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(Domicile)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//               </div>

//               {cat_id.toLocaleLowerCase().includes("open") ? (
//                 <></>
//               ) : (
//                 <div class="mb-3 docs-3">
//                   <label for="formFile" class="form-label">
//                     Income Certificate
//                   </label>

//                   <div className="doc">
//                   <input type="file" name="income" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(income)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//                 </div>
//               )}

//               {cat_id.toLocaleLowerCase().includes("obc") ||
//               cat_id.toLocaleLowerCase().includes("sc") ||
//               cat_id.toLocaleLowerCase().includes("sc") ||
//               cat_id.toLocaleLowerCase().includes("nt") ||
//               cat_id.toLocaleLowerCase().includes("vj") ? (
//                 <>
//                   <div class="mb-3 docs-3">
//                     <label for="formFile" class="form-label">
//                       Caste Certificate
//                     </label>

//                     <div className="doc">
//                   <input type="file" name="caste" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(caste)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
//                   </div>

//                   <div class="mb-3 docs-3">
//                     <label for="formFile" class="form-label">
//                       Caste Validation
//                     </label>

//                     <div className="doc">
//                   <input type="file" name="casteV" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(casteV)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>


//                   </div>

//                   {!cat_id.toLocaleLowerCase().includes("sc") &&
//                   !cat_id.toLocaleLowerCase().includes("st") ? (
//                     <div class="mb-3 docs-3">
//                       <label for="formFile" class="form-label">
//                         Non Creamy Layer Certificate
//                       </label>

//                       <div className="doc">
//                   <input type="file" name="nonCr" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(nonCr)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//                     </div>
//                   ) : (
//                     <></>
//                   )}
//                 </>
//               ) : (
//                 <></>
//               )}

//               {cat_id.toLocaleLowerCase().includes("ews") ? (
//                 <div class="mb-3 docs-3">
//                   <label for="formFile" class="form-label">
//                     EWS Proforma
//                   </label>

//                   <div className="doc">
//                   <input type="file" name="ews" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(ews)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

//                 </div>
//               ) : (
//                 <></>
//               )}

//               <div className="line"></div>


//               {admission_year > 2 ? (
//                 <div class="mb-3 docs-3">
//                   <label for="formFile" class="form-label">
//                     All Sem Results
//                   </label>

//                   <div className="doc">
//                   <input type="file" name="fee" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(fee)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

                
//                 </div>
//               ) : (
//                 <></>
//               )}

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   College Allotment Letter
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="clgAllot" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(clgAllot)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>
//               </div>                
                 

//               <div class="mb-3 docs-3">
//                 <label for="formFile" class="form-label">
//                   Gap Certificate
//                 </label>

//                 <div className="doc">
//                   <input type="file" name="gap_cert" onChange={async(e)=>{handleFileChange(e);}}/>
//                   <button className="viewDoc" onClick={async()=>handelViewDoc(gap_cert)}>
//                     <span >
//                       View Document
//                     </span>
//                   </button>
//                 </div>

                
//               </div>
//             </div>

            

//             {isSubmitted == false ? (
//               <div className="btns">
//                 <button type="submit" onClick={upload_imgs}>
//                   Submit & Next
//                 </button>
//               </div>
//             ) : (
//               <></>
//             )}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default UploadD;


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import api from "../../api";
// import api from "api";

const UploadD = () => {
  const [done, setDone] = useState(false);
  const [photo, setPhoto] = useState("");
  const [signature, setSignature] = useState("");
  const [ssc_mark, setSscmark] = useState("");
  const [hsc_marksheet, sethscmarksheet] = useState("");
  const [mhtcet, setmhtcet] = useState("");
  const [jee, setjee] = useState("");
  const [calLetter, setCapletter] = useState("");
  const [fc, setFc] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [rc, setrc] = useState("");
  const [bank_pass, setBank] = useState("");
  const [income, setIncome] = useState("");
  const [caste, setCaste] = useState("");
  const [Domicile, setDomicile] = useState("");
  const [casteV, setCasteV] = useState("");
  const [fee, setFee] = useState("");
  const [clgAllot, setCollege] = useState("");
  const [code, setCode] = useState("");
  const [cat_id, setCat_id] = useState("");
  const [nonCr, setNonCr] = useState("");
  const [ews, setEws] = useState("");
  const [lc, setlc] = useState("");
  const [isSubmitted, setIsSubmited] = useState(false);
  const [parentSignature, setPs] = useState("");
  const [antiragging, setRagging] = useState("");
  const [gap_cert, setGap_cert] = useState("");
  const [admission_year, setADY] = useState("");
  const [dep_marksheet, setDep_marksheet] = useState("");
  
  const stateSetters = {
    photo: setPhoto,
    signature: setSignature,
    ssc_mark: setSscmark,
    hsc_marksheet: sethscmarksheet,
    mhtcet: setmhtcet,
    jee: setjee,
    calLetter: setCapletter,
    fc: setFc,
    aadhar: setAadhar,
    rc: setrc,
    bank_pass: setBank,
    income: setIncome,
    caste: setCaste,
    Domicile: setDomicile,
    casteV: setCasteV,
    fee: setFee,
    clgAllot: setCollege,
    code: setCode,
    cat_id: setCat_id,
    nonCr: setNonCr,
    ews: setEws,
    lc: setlc,
    parentSignature: setPs,
    antiragging: setRagging,
    gap_cert: setGap_cert,
    admission_year: setADY,
    dep_marksheet:setDep_marksheet
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    api
      .get(
        `${process.env.REACT_APP_BASE_URL}/admission/upload?uid=` +
          localStorage.getItem("uid")
      )
      .then((response) => {
        setCode(response.data["code"]);
        if (response.data["code"] == 1) {
          setCode(response.data["code"]);
          setPhoto(response.data["docs"].photo);
          setSignature(response.data["docs"].signature);
          setAadhar(response.data["docs"].aadhar_card);
          setBank(response.data["docs"].back_passbook);
          setCapletter(response.data["docs"].cap_allotment_letter);
          setCaste(response.data["docs"].caste_certificate);
          setCasteV(response.data["docs"].caste_validation);
          setCollege(response.data["docs"].college_admission_letter);
          setDomicile(response.data["docs"].domicile);
          setFc(response.data["docs"].fc_center_varification);
          setFee(response.data["docs"].fee_reciept);
          setIncome(response.data["docs"].income_certificate);
          setSscmark(response.data["docs"].ssc_marksheet);
          sethscmarksheet(response.data["docs"].hsc_marksheet);
          setrc(response.data["docs"].ration_card);
          setmhtcet(response.data["docs"].mht_cet_score_card);
          setjee(response.data["docs"].jee_score_card);
          setlc(response.data["docs"].lc);
          setNonCr(response.data["docs"].nonCreamy);
          setEws(response.data["docs"].ews_pro);
          setPs(response.data["docs"].parentSignature);
          setRagging(response.data["docs"].antiragging_form);
          setGap_cert(response.data['docs'].gap_cert);
          setDep_marksheet(response.data['docs'].dep_marksheet)
        }
      })
      .catch((error) => {
      });

    api
      .get(
        `${
          process.env.REACT_APP_BASE_URL
        }/admission/currentEducation_per?uid=${localStorage.getItem("uid")}`
      )
      .then((res) => {
        setCat_id(res.data["category"]);
        setADY(res.data.data[0].programm_id);
      })
      .catch((err) => {
      });

    api
      .get(
        `${process.env.REACT_APP_BASE_URL}/admission/isSubmmited?uid=` +
          localStorage.getItem("uid")
      )
      .then((response) => {
        setIsSubmited(response.data["isSubmmited"]);
      })
      .catch((error) => {
      });
  };

  const publicKey = "public_gWKOuQlhuPW59VhaGTXah7GGmHU=";
  let urlEndpoint = "https://ik.imagekit.io/getflytechnologies/";
  const authenticationEndpoint =
    "https://vppcoe-va.getflytechnologies.com/api/faculty/upload_auth";

  const upload_imgs = async () => {
    var data = {
      photo: photo,
      signature: signature,
      parentSignature: parentSignature,
      ssc_mark: ssc_mark,
      hsc_marksheet: hsc_marksheet,
      mhtcet: mhtcet,
      jee: jee,
      calLetter: calLetter,
      fc: fc,
      aadhar: aadhar,
      rc: rc,
      bank_pass: bank_pass,
      income: income,
      caste: caste,
      Domicile: Domicile,
      casteV: casteV,
      fee: fee,
      clgAllot: clgAllot,
      nonCreamy: nonCr,
      lc: lc,
      ews: ews,
      uid: localStorage.getItem("uid"),
      antirangging: antiragging,
      gap_cert:gap_cert,
      dep_marksheet:dep_marksheet
    };

  
      api
        .post(`${process.env.REACT_APP_BASE_URL}/admission/upload`, data)
        .then((response) => {
          alert(response.data["message"]);
          setDone(true);
        })
        .catch((error) => {
        });
    // }
    // if (admission_year > 2) {
    //   if (antiragging == null || antiragging == "") {
    //     alert("Antiragging document is required");
    //   } else {
    //     api
    //       .post(`${process.env.REACT_APP_BASE_URL}/admission/upload`, data)
    //       .then((response) => {
    //         alert(response.data["message"]);
    //         setDone(true);
    //       })
    //       .catch((error) => {
    //       });
    //   }
    // } else {
    //   api
    //     .post(`${process.env.REACT_APP_BASE_URL}/admission/upload`, data)
    //     .then((response) => {
    //       alert(response.data["message"]);
    //       setDone(true);
    //     })
    //     .catch((error) => {
    //     });
    // }

  };

  const handleFileChange = (e) => {
      const { name, files } = e.target;

      if (!stateSetters[name]) {
        return;
      }

      // Create a FormData object and append the selected file(s)
      const formData = new FormData();
      formData.append("file", files[0]); // Assuming you only want to upload the first file, adjust as needed

      // Make an AJAX request to upload the file
      api.post(`${process.env.REACT_APP_BASE_URL}/security/upload`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': localStorage.getItem('token')
          }
      })
      .then(response => {
          alert('Document Uploaded');
          stateSetters[name](response.data.filename)
      })
      .catch(error => {
      });
}

  const handelViewDoc=(e)=>{
    if(String(e).substring(0,4)=='http')
      {
        window.open(`${e}`,'_blank')
      }else{
        window.open(`${process.env.REACT_APP_BASE_URL}/security/view/${e}`,'_blank')
      }
  }

  const validateImg = (e) => {
    if (
      !String(e.name).toLocaleLowerCase().includes(".jpg") &&
      !String(e.name).toLocaleLowerCase().includes(".png")
    ) {
      alert("Please Upload file with type of .jpg or .png");
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {done == true ? <Navigate to={"/"} /> : <></>}

      <div className="dynamic">
        <h3 className="greet fw-bolder">Upload Documents</h3>
        <div className="line-header"></div>
        <p style={{ color: "red" }}>
          Note:
          <ol>
            <li>All the Documents are required for the admission process.</li>
            <li>
              Scan and make a pdf of all the Semester marksheets. The size of
              Semester marksheets should be less then 5 MB.
            </li>
            <li>
              All the documents should be in the valid image format except for
              Semester Marksheet.
            </li>
            <li>
              Profile photo, Signature of the student should be uploaded in jpg
              format.
            </li>
          </ol>
          <div className="line"></div>
        </p>

        <main className="change">
          <div className="box-c upload">
            <div className="upload_container">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Profile Photo
                </label>
                <div className="doc">
                  <input type="file" name="photo" onChange={async(e)=>{var a = await handleFileChange(e); setPhoto(a);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(photo)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Signature of Student
                </label>
                <div className="doc">
                  <input type="file" name="signature" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(signature)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
               
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Signature of Parent/Guardian
                </label>

                <div className="doc">
                  <input type="file" name="parentSignature" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(parentSignature)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

              <div className="line"></div>

              <div class="mb-3 ssc">
                <label for="formFile" class="form-label">
                  SSC Marksheet
                </label>

                <div className="doc">
                  <input type="file" name="ssc_mark" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(ssc_mark)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
              </div>

              <div class="mb-3 hsc">
                <label for="formFile" class="form-label">
                  HSC Marksheet
                </label>

                <div className="doc">
                  <input type="file" name="hsc_marksheet" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(hsc_marksheet)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

              <div class="mb-3 hsc">
                <label for="formFile" class="form-label">
                  Diploma Marksheet
                </label>

                <div className="doc">
                  <input type="file" name="dep_marksheet" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(dep_marksheet)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  MHTCET Score Card
                </label>

                <div className="doc">
                  <input type="file" name="mhtcet" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(mhtcet)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  JEE Score Card
                </label>

                <div className="doc">
                  <input type="file" name="jee" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(jee)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  CAP Allotment Letter
                </label>

                <div className="doc">
                  <input type="file" name="calLetter" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(calLetter)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  FC Center Verification Letter
                </label>

                <div className="doc">
                  <input type="file" name="fc" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(fc)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
              </div>

              <div class="mb-3 hsc">
                <label for="formFile" class="form-label">
                  Anti Ragging Form
                </label>

                <div className="doc">
                  <input type="file" name="antiragging" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(antiragging)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  Leaving Certificate
                </label>

                <div className="doc">
                  <input type="file" name="lc" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(lc)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

              <div className="line"></div>

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  Aadhar Card
                </label>

                <div className="doc">
                  <input type="file" name="aadhar" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(aadhar)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
               
              </div>

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  Ration Card
                </label>

                <div className="doc">
                  <input type="file" name="rc" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(rc)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
              
              </div>

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  Bank Passbook
                </label>

                <div className="doc">
                  <input type="file" name="bank_pass" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(bank_pass)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

               
              </div>

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  Domicle Certificate
                </label>

                <div className="doc">
                  <input type="file" name="Domicile" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(Domicile)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

              </div>

                <div class="mb-3 docs-3">
                  <label for="formFile" class="form-label">
                    Income Certificate
                  </label>

                  <div className="doc">
                  <input type="file" name="income" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(income)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

                </div>
          
                  <div class="mb-3 docs-3">
                    <label for="formFile" class="form-label">
                      Caste Certificate
                    </label>

                    <div className="doc">
                  <input type="file" name="caste" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(caste)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
                  </div>

                  <div class="mb-3 docs-3">
                    <label for="formFile" class="form-label">
                      Caste Validation
                    </label>

                    <div className="doc">
                  <input type="file" name="casteV" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(casteV)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>


                  </div>

                 
                    <div class="mb-3 docs-3">
                      <label for="formFile" class="form-label">
                        Non Creamy Layer Certificate
                      </label>

                      <div className="doc">
                  <input type="file" name="nonCr" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(nonCr)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

                    </div>
            

              
                <div class="mb-3 docs-3">
                  <label for="formFile" class="form-label">
                    EWS Proforma
                  </label>

                  <div className="doc">
                  <input type="file" name="ews" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(ews)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

                </div>
             

              <div className="line"></div>


              {admission_year > 2 ? (
                <div class="mb-3 docs-3">
                  <label for="formFile" class="form-label">
                    All Sem Results
                  </label>

                  <div className="doc">
                  <input type="file" name="fee" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(fee)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

                
                </div>
              ) : (
                <></>
              )}

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  College Allotment Letter
                </label>

                <div className="doc">
                  <input type="file" name="clgAllot" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(clgAllot)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>
              </div>                
                 

              <div class="mb-3 docs-3">
                <label for="formFile" class="form-label">
                  Gap Certificate
                </label>

                <div className="doc">
                  <input type="file" name="gap_cert" onChange={async(e)=>{handleFileChange(e);}}/>
                  <button className="viewDoc" onClick={async()=>handelViewDoc(gap_cert)}>
                    <span >
                      View Document
                    </span>
                  </button>
                </div>

                
              </div>
            </div>

            

            {isSubmitted == false ? (
              <div className="btns">
                <button type="submit" onClick={upload_imgs}>
                  Submit & Next
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default UploadD;