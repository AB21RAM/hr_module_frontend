// import React from 'react';
// // import './login.css'
// import CSVReader from 'react-csv-reader'
// import { Navigate } from 'react-router-dom';
// import api from '../../../api';
//
// interface Cat{
//   cat_id: string;
//   cat_name: string;
// }
//
// interface Branch{
//   branch_id: string;
//   bname: string;
// }
//
// // interface Program{
// //   program_id: string;
// //   pname: string;
// // }
//
// interface AddCapAppState {
//   name: string;
//   cat_list: Cat[];
//   role: string;
//   err: string;
//   msg: string;
//   search: string;
//   brachList: Branch[];
//   programmList: string[];
// }
//
//
// class AddCapApp extends React.Component<{}, AddCapAppState> {
//
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       name: '',
//       cat_list: [],
//       role: '',
//       err: '',
//       msg: '',
//       search: '',
//       brachList: [],
//       programmList: [],
//     };
//
//   }
//
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/admission/addCapApp`
//       );
//       this.setState({ cat_list: response.data['result'] });
//
//       const response_1 = await api.get(`${process.env.REACT_APP_BASE_URL}/admission/signup`)
//
//       this.setState({ brachList: response_1.data['branch'] })
//
//
//     } catch (error) {
//     }
//   };
//
//
//
//   handleSubmit = (event: any) => {
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//     api.post(
//       `${process.env.REACT_APP_BASE_URL}/admission/addCapApp`,
//       Object.fromEntries(formData)
//     )
//       .then((response) => {
//         alert(response.data['message']);
//         window.location.reload();
//       })
//       .catch((error) => {
//         this.setState({ err: error.response.data['message'], msg: '' });
//       });
//   };
//
//
//   render() {
//     var catItems = [];
//     try {
//       for (let i = 0; i < this.state.cat_list.length; i++) {
//         catItems.push(<option value={this.state.cat_list[i].cat_id}>{this.state.cat_list[i].cat_name}</option>);
//       }
//     }
//     catch (err) {
//
//     }
//
//     const branchItems = [];
//
//     try {
//       for (let i = 0; i < this.state.brachList.length; i++) {
//         branchItems.push(<option value={this.state.brachList[i].branch_id}>{this.state.brachList[i].bname}</option>);
//       }
//
//     } catch (err) {  }
//
//     return (
//       <div className="col-lg-10">
//
//         {this.state.err && <p>{this.state.err}</p>}
//         {this.state.msg && <p>{this.state.msg}</p>}
//         <div className="container mx-auto" style={{ width: '30rem' }}>
//           <br />
//
//           <br />
//           <h4 className="fw-bolder text-center">Add Applications To be Allowed</h4>
//           <form className="my-2" onSubmit={this.handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">Cap Application Number/College Id Number</label>
//               <input type="text" className="form-control" id="Name" name='cap_application' />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="cap-id" className="form-label">
//                 Gr Number
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cap-id"
//                 name='gr_number'
//               />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">Last Name</label>
//               <input type="text" className="form-control" id="Name" name='last_name' />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">First Name</label>
//               <input type="text" className="form-control" id="Name" name='first_name' />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">Father Name</label>
//               <input type="text" className="form-control" id="Name" name='father_name' />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">Mother Name</label>
//               <input type="text" className="form-control" id="Name" name='mother_name' />
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="Category" className="form-label fw-semibold">Category</label>
//               <select className="form-control" id="Category" name="cat">
//                 <option value="OPEN">OPEN</option>
//                 <option value="OBC">OBC</option>
//                 <option value="EBC">EBC</option>
//                 <option value="EWS">EWS</option>
//                 <option value="SBC">SBC</option>
//                 <option value="VJ">VJ</option>
//                 <option value="NT">NT</option>
//                 <option value="SC">SC</option>
//                 <option value="ST">ST</option>
//                 <option value="TFWS">TFWS</option>
//                 <option value="J&K">J&K</option>
//                 <option value="SEBC">SEBC</option>
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="SeatType" className="form-label fw-semibold">Allotment Type</label>
//               <select className="form-control" id="SeatType" name="seat_type">
//                 <option value="CAP">CAP</option>
//                 <option value="AGAINST CAP">AGAINST CAP</option>
//                 <option value="INSTITUTE LEVEL">INSTITUTE LEVEL</option>
//               </select>
//             </div>
//
//
//             <div className="mb-2">
//               <label htmlFor="Round" className="form-label fw-semibold">Round</label>
//               <select className="form-control" id="Round" name="round">
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//               </select>
//             </div>
//
//
//             <div className="mb-2">
//               <label htmlFor="Year" className="form-label fw-semibold">Admission Year</label>
//               <select className="form-control" id="Year" name="years">
//                 <option value="FIRST YEAR">FIRST YEAR</option>
//                 <option value="DIRECT SECOND YEAR">DIRECT SECOND YEAR</option>
//                 <option value="SECOND YEAR">SECOND YEAR</option>
//                 <option value="THIRD YEAR">THIRD YEAR</option>
//                 <option value="FINAL YEAR">FINAL YEAR</option>
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="Branch" className="form-label fw-semibold">Branch</label>
//               <select className="form-control" id="Branch" name="branch">
//                 {branchItems}
//               </select>
//             </div>
//
//
//             <div className="btns">
//               <button
//                 type="submit"
//                 className="btnn my-3"
//                 style={{ width: '28.5rem' }}
//               >
//                 Add
//               </button>
//             </div>
//
//
//           </form>
//
//         </div>
//       </div>
//     );
//   }
// }
//
// export default AddCapApp;
//
