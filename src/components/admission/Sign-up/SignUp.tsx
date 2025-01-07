// import React from 'react';
// import './signup.css';
// import { Navigate } from 'react-router-dom';
// import api from '../../../api';
//
// interface Branch {
//   branch_id: number;
//   bname: string;
// }
//
// interface Program {
//   programm_id: number;
//   programm_name: string;
// }
//
// interface Seat {
//   seat_type_id: number;
//   seat_name: string;
// }
//
// interface SignupState {
//   brachList: Branch[];
//   programmList: Program[];
//   seatList: Seat[];
//   msg: string;
//   err: string;
//   program_choise: number;
//   sup: boolean;
// }
//
// class Signup extends React.Component<object, SignupState> {
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       brachList: [],
//       programmList: [],
//       seatList: [],
//       msg: '',
//       err: '',
//       program_choise: 0,
//       sup: false,
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     try {
//       const res = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/signup`);
//       this.setState({
//         seatList: res.data['seat_type'],
//         brachList: res.data['branch'],
//         programmList: res.data['programms'],
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//
//     const formData = new FormData(event.currentTarget);
//     let isValid = true;
//
//     for (const [ value] of formData.entries()) {
//       if (value?.trim() === '') {
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
//         `${process.env.REACT_APP_BASE_URL}/admission/signup`,
//         Object.fromEntries(formData)
//     )
//         .then((response) => {
//           this.setState({
//             msg: response.data['message'],
//             err: '',
//             sup: true,
//           });
//           alert(response.data['message']);
//         })
//         .catch((error) => {
//           this.setState({ err: error.response.data['message'], msg: '' });
//           alert(error.response.data['message']);
//         });
//   };
//
//   render() {
//     const branchItems = this.state.brachList.map((branch) => (
//         <option key={branch.branch_id} value={branch.branch_id}>
//           {branch.bname}
//         </option>
//     ));
//
//     const programmItems = this.state.programmList.map((program) => (
//         <option key={program.programm_id} value={program.programm_id}>
//           {program.programm_name}
//         </option>
//     ));
//
//     const seatItems = this.state.seatList.map((seat) => (
//         <option key={seat.seat_type_id} value={seat.seat_type_id}>
//           {seat.seat_name}
//         </option>
//     ));
//
//     return (
//         <div className="main">
//           {this.state.sup && <Navigate to="/" />}
//
//           <div className="left">
//             <img src="images/logo.png" alt="GetFly logo" />
//             <h1>
//               <strong>
//                 Vasantdada Patil Pratishthan's <br />
//                 College of Engineering & Visual Arts
//               </strong>
//             </h1>
//           </div>
//
//           <div className="login-line"></div>
//           <div className="right">
//             <div className="right-heading">
//               <button>
//                 <a href="/">Back to Login</a>
//               </button>
//             </div>
//
//             <div className="right-login">
//               <h1>
//                 <strong>Signup</strong>
//               </h1>
//               <p>
//                 Welcome to Admission @ Vasantdada Patil Pratishthan's <br />
//                 College of Engineering & Visual Arts Please signup for an account.
//               </p>
//             </div>
//
//             <form onSubmit={this.handleSubmit}>
//               <div className="form">
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email Id
//                   </label>
//                   <input type="email" className="form-control" id="email" name="email" />
//                 </div>
//
//                 <div className="mb-3">
//                   <label htmlFor="seat_type" className="form-label">
//                     Seat Type
//                   </label>
//                   <br />
//                   <select className="form-select" aria-label="Select Seat Type" name="seat_type">
//                     <option selected>Select Seat Type</option>
//                     {seatItems}
//                   </select>
//                 </div>
//
//                 <div className="mb-3">
//                   <label htmlFor="selected_program" className="form-label">
//                     Selected Programme
//                   </label>
//                   <br />
//                   <select
//                       className="form-select"
//                       aria-label="Select Programme"
//                       name="selected_program"
//                       onChange={(e) => this.setState({ program_choise: Number(e.target.value) })}
//                   >
//                     <option selected>Select Programme</option>
//                     {programmItems}
//                   </select>
//                 </div>
//
//                 <div className="mb-3">
//                   <label htmlFor="branch" className="form-label">
//                     Selected Branch
//                   </label>
//                   <br />
//                   <select className="form-select" aria-label="Select Branch" name="branch">
//                     <option selected>Select Branch</option>
//                     {branchItems}
//                   </select>
//                 </div>
//
//                 <div className="mb-3">
//                   <label htmlFor="clg_id" className="form-label">
//                     College Id
//                   </label>
//                   <input type="text" className="form-control" id="clg_id" name="clg_id" />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="gr_number" className="form-label">
//                     Gr Number
//                   </label>
//                   <input type="text" className="form-control" id="gr_number" name="gr_number" />
//                 </div>
//
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input type="password" className="form-control" id="password" name="password" />
//                 </div>
//
//                 <div className="mb-3">
//                   <label htmlFor="cnfpassword" className="form-label">
//                     Confirm Password
//                   </label>
//                   <input type="password" className="form-control" id="cnfpassword" name="cnfpassword" />
//                 </div>
//
//                 <button type="submit" className="btn my-2">
//                   <strong>Signup</strong>
//                 </button>
//               </div>
//             </form>
//
//             <div className="foot">
//               <p>
//                 <strong>www.getflytechnologies.com</strong>
//               </p>
//             </div>
//           </div>
//         </div>
//     );
//   }
// }
//
// export default Signup;
