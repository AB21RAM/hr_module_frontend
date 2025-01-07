// // import api from "api";
// import React from "react";
// import api from "../../../api";
// // import './login.css'
//
//
// class GenerateLeaveCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       half_full_day: "",
//       leave_list: [],
//       leave_id: "",
//       from_date: "",
//       to_date: "",
//       reason: "",
//       alternate: "",
//       facultyList: [],
//       doc: null,
//       faculty_id:'',
//       faculty_idlist:[],
//     };
//   }
//
//   componentDidMount() {
//     this.fetchAllFacultyIds();
//   }
//
//
//   fetchAllFacultyIds = async() =>{
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFacultyIds`
//       );
//       this.setState({
//         faculty_idlist: response.data["facultylist"],
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//
//   handleClick=async()=>{
//     if(this.state.faculty_id!=''){
//         window.open(`/leaveCard?id=${this.state.faculty_id}`,'_blank')
//     }
//     else{
//         alert('Select Faculty First!')
//     }
// }
//
//   render() {
//
//     const leaveItems = [];
//     const facultyItems = [];
//     const faculty_idItems = [];
//
//
//     if(this.state.faculty_idlist.length>0){
//       for (let i = 0; i < this.state.faculty_idlist.length; i++) {
//         facultyItems.push(
//           <option value={this.state.faculty_idlist[i].faculty_id}>
//             {this.state.faculty_idlist[i].name}
//           </option>
//         );
//       }
//
//       for (let i = 0; i < this.state.faculty_idlist.length; i++) {
//         faculty_idItems.push(
//           <option value={this.state.faculty_idlist[i].faculty_id}>
//             {this.state.faculty_idlist[i].name}
//           </option>
//         );
//       }
//     }
//
//
//
//
//     return (
//       <div className="col-lg-10">
//           <div className="mb-2">
//               <label htmlFor="from_date" className="form-label fw-semibold">
//                 Faculty Name
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ faculty_id: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {faculty_idItems}
//               </select>
//             </div>
//
//             <button
//               type="submit"
//               className="btn btn-dark my-3"
//               onClick={(e)=>this.handleClick()}
//               style={{ width: "28.5rem" }}
//             >
//               Apply
//             </button>
//       </div>
//     );
//   }
// }
//
// export default GenerateLeaveCard;
//


import React, { useState, useEffect } from "react";
import api from "../../../api";

interface Faculty {
  faculty_id: string;
  name: string;
}

const GenerateLeaveCard: React.FC = () => {
  // const [halfFullDay, setHalfFullDay] = useState<string>("");
  // const [leaveList, setLeaveList] = useState<any[]>([]);
  // const [leaveId, setLeaveId] = useState<string>("");
  // const [fromDate, setFromDate] = useState<string>("");
  // const [toDate, setToDate] = useState<string>("");
  // const [reason, setReason] = useState<string>("");
  // const [alternate, setAlternate] = useState<string>("");
  // const [facultyList, setFacultyList] = useState<any[]>([]);
  // const [doc, setDoc] = useState<File | null>(null);
  const [facultyId, setFacultyId] = useState<string>("");
  const [facultyIdList, setFacultyIdList] = useState<Faculty[]>([]);

  useEffect(() => {
    fetchAllFacultyIds();
  }, []);

  const fetchAllFacultyIds = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFacultyIds`
      );
      setFacultyIdList(response.data["facultylist"]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (facultyId !== "") {
      window.open(`/leaveCard?id=${facultyId}`, "_blank");
    } else {
      alert("Select Faculty First!");
    }
  };

  const facultyIdItems = facultyIdList.map((faculty) => (
    <option key={faculty.faculty_id} value={faculty.faculty_id}>
      {faculty.name}
    </option>
  ));

  return (
    <div className="col-lg-10">
      <div className="mb-2">
        <label htmlFor="from_date" className="form-label fw-semibold">
          Faculty Name
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setFacultyId(e.target.value)}
        >
          <option defaultValue="">Open this select menu</option>
          {facultyIdItems}
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-dark my-3"
        onClick={handleClick}
        style={{ width: "28.5rem" }}
      >
        Apply
      </button>
    </div>
  );
};

export default GenerateLeaveCard;
