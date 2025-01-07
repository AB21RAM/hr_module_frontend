// import React, { Component } from 'react';
//
// import {Link, Navigate} from 'react-router-dom';
// import './style.css';
// import api from '../../api';
//
// class StudDash extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       alternate_list:[],
//       record:[{"hello":0}],
//       isEnt:false,
//       isEdu:false,
//       isPer:false,
//       isParent:false,
//       isAddress:false,
//       isDoc:false,
//       isNavi:false,
//       isSem:false,
//       isSubmit:false,
//       used:0
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//
//   }
//
//   fetchData = async () => {
//     if(localStorage.getItem('isLogin')==undefined){
//       window.location.reload()
//     }else{
//       try {
//         const response = await api.get(
//           // 'http://localhost:5000/api/faculty/dashboard?uid='+localStorage.getItem('uid')
//         `${process.env.REACT_APP_BASE_URL}/admission/studentDashboard?uid=` + localStorage.getItem("uid")
//           );
//         this.setState({isEdu:response.data['isEdu'],isEnt:response.data['isEnt'],isAddress:response.data['isAdd'],isSem:response.data['isSem']});
//         if(response.data['data'][0].personal_details_id!=null){
//           this.setState({isPer:true})
//         }
//         if(response.data['data'][0].father_id!=null){
//           this.setState({isParent:true})
//         }
//         if(response.data['data'][0].doc_ids!=null){
//           this.setState({isDoc:true})
//         }
//         this.setState({isSubmit:response.data['isSubmmited']})
//         localStorage.setItem('program',response.data['data'][0].programm_id)
//         localStorage.setItem('isSubmitted',response.data['data'][0].isSubmmited)
//
//       } catch (error) {
//       }
//     }
//
//   };
//
//
//
//   render() {
//
//     return (
//       <div className='dynamic'>
//         <div className="row">
//         <div className="col-lg-8 m-2 rectangle">
//           <h4>Basic Details</h4>
//           <h6>Personal {this.state.isPer ? <>Completed</> : <>Pending</>}</h6>
//           <h6>Parent {this.state.isParent ? <>Completed</> : <>Pending</>}</h6>
//           <h6>Address {this.state.isAddress ? <>Completed</> : <>Pending</>}</h6>
//         </div>
//         <div className="col-lg-8 m-2 rectangle">
//           <h4>Education Details</h4>
//           <h6>Previous Details {this.state.isEdu ? <>Completed</>: <>Pending</>}</h6>
//           {
//           localStorage.getItem('program')>2 ? <></>:<h6>Entrance Details {this.state.isEnt ? <>Completed</> : <>Pending</>}</h6>
//           }
//
//           {
//           localStorage.getItem('program')>2 ? <h6>Semester Details {this.state.isSem ? <>Completed</> : <>Pending</>}</h6>:<></>
//           }
//         </div>
//         <div className="col-lg-8 m-2 rectangle">
//           <h4>Document Uploads Applications {this.state.isDoc ? <>Completed</> : <>Pending</>}</h4>
//         </div>
//         {
//           localStorage.getItem('program')>2 ?
//           <>
//           {
//             (this.state.isPer && this.state.isParent && this.state.isAddress && this.state.isEdu  && this.state.isSem && this.state.isDoc) ?
//
//             <div className="btns col-lg-8">
//               {/* <button style={{color:'white',width:'100%'}}>
//                 <Link to='/printApplication' target='_blank'>Print Application</Link>
//               </button> */}
//               {
//                 this.state.isSubmit==true?
//                 <button style={{color:'white',width:'100%'}}>
//                 <Link to='/printApplication' target='_blank'>Print Application</Link>
//               </button>:
//               <button style={{color:'white',width:'100%'}}>
//               <Link to='/finalSubmit'>Final Submit</Link>
//             </button>
//               }
//
//           </div>
//           :
//           <></>
//           }
//           </>:
//           <>
//           {
//             (this.state.isPer && this.state.isParent && this.state.isAddress && this.state.isEdu && this.state.isEnt && this.state.isDoc) ?
//             <div className="btns col-lg-8">
//               {/* <button style={{color:'white',width:'100%'}}>
//                 <Link to='/printApplication' target='_blank'>Print Application</Link>
//               </button> */}
//             {
//                 this.state.isSubmit==true?
//                 <button style={{color:'white',width:'100%'}}>
//                 <Link to='/printApplication' target='_blank'>Print Application</Link>
//               </button>:
//               <button style={{color:'white',width:'100%'}}>
//               <Link to='/finalSubmit'>Final Submit</Link>
//             </button>
//               }
//           </div>
//           :
//           <></>
//           }
//           </>
//
//         }
//
//
//         </div>
//
//
//     </div>
//     );
//   }
// }
//
// export default StudDash;
