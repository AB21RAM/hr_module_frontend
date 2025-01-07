//
// import React from 'react';
// import './signup.css'
// import { Navigate } from 'react-router-dom';
// import api from '../../../api';
//
// class ForgotPassword extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brachList:[],
//       programmList:[],
//       seatList:[],
//       msg:'',
//       err:'',
//       program_choise:0,
//       sup:false
//     };
//
//   }
//
//
//   componentDidMount() {
//    this.fetchData();
//   }
//
//   fetchData=async()=>{
//     api.get(`${process.env.REACT_APP_BASE_URL}/admission/signup`).then((res)=>{
//       this.setState({seatList:res.data['seat_type'],brachList:res.data['branch'],programmList:res.data['programms']})
//     }).catch((err)=>{
//     })
//   }
//
//
//   handleSubmit = (event) =>{
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     let isValid = true;
//
//     for (let [name, value] of formData.entries()) {
//       if (value.trim() === '') {
//         isValid = false;
//         break;
//       }
//     }
//
//     if (!isValid) {
//       alert('Please fill in all the fields.');
//       return;
//     }
//
//     api.post(
//       `${process.env.REACT_APP_BASE_URL}/admission/forgetPasswordStudent`, Object.fromEntries(formData)
//       )
//       .then((response) => {
//         this.setState({
//           msg: response.data['message'],
//           err:'',
//           sup:true
//         })
//         alert(response.data['message']);
//
//       })
//       .catch((error) => {
//         this.setState({err: error.response.data['message'],msg:''});
//         alert(error.response.data['message']);
//       });
//   };
//
//   render() {
//
//     return (
//       <div className="main">
//         {this.state.sup==true && <Navigate to='/'/>}
//
//         <div className="left">
//           <img src='images/logo.png' alt="GetFly logo" />
//           <h1>
//             <strong> Vasantdada Patil Pratishthan's  <br />College of Engineering & Visual Arts </strong>
//           </h1>
//         </div>
//
//         <div className="login-line"></div>
//         <div className="right">
//
//         <div className="right-heading">
//         {/* {this.state.msg && <p>{this.state.msg}</p>}
//       {this.state.err && <p>{this.state.err}</p>} */}
//           {/* <h3>Back to Login Page</h3> */}
//           <button><a href="/">Back to Login</a></button>
//         </div>
//
//           <div className="right-login">
//             <h1>
//               <strong>Forgot Password</strong>
//             </h1>
//             <p>
//               Welcome to Admission @ Vasantdada Patil Pratishthan's <br />College of Engineering & Visual Arts Please
//               signup for an account.
//             </p>
//           </div>
//
//           <form onSubmit={this.handleSubmit}>
//
//             <div className="form">
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email Id
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name='email'
//                 />
//               </div>
//
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Contact Number(Given Last Time)
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="email"
//                   name='contact'
//                 />
//               </div>
//
//
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name='password'
//                 />
//               </div>
//
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name='cnfpassword'
//                 />
//               </div>
//
//               <button type="submit" className="btn my-2">
//                 <strong>Change Password</strong>
//               </button>
//             </div>
//           </form>
//
//           <div className="foot">
//             <p><strong>www.getflytechnologies.com</strong></p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default ForgotPassword;
