// import React from "react";
// // import "./style.css";
// // import api from "api";
// import { Link } from "react-router-dom";
// import api from "../../../api";
//
// class ApprovedLeave extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pendingList: {},
//       search: "",
//       faculty_idlist:[],
//       selected_id:'',
//       selected_date:'',
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//     this.fetchAllFacultyIds();
//   }
//
//   fetchData = async () => {
//     try {
//       if (localStorage.getItem("user_type") == "1") {
//         const response = await api.get(
//           `${process.env.REACT_APP_BASE_URL}/hr/approvedLeave`
//           // 'http://localhost:5000/api/hr/approvedLeave'
//         );
//         this.setState({ pendingList: response.data["pendingList"] });
//       } else {
//         const response = await api.get(
//           // 'http://localhost:5000/api/faculty/approved_leaves_hod?uid='+localStorage.getItem('uid')+'&role='+localStorage.getItem("role")
//           `${process.env.REACT_APP_BASE_URL}/faculty/approved_leaves_hod?uid=` +
//             localStorage.getItem("uid") +
//             "&role=" +
//             localStorage.getItem("role")
//         );
//         this.setState({ pendingList: response.data["pendingList"] });
//       }
//     } catch (error) {
//     }
//   };
//
//   fetchAllFacultyIds = async() =>{
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFacultyClgId`
//       );
//       this.setState({
//         faculty_idlist: response.data["facultylist"],
//       });
//     } catch (error) {
//     }
//   }
//
//   ApplyFilter = async() =>{
//     try {
//       const response = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/filteredApprovedLeaveList`,
//         {
//           id:this.state.selected_id=='' ? undefined : this.state.selected_id,
//           date:this.state.selected_date=='' ? undefined : this.state.selected_date
//       }
//       );
//       this.setState({
//         pendingList: response.data["pendingList"],
//       });
//     } catch (error) {
//     }
//   }
//
//   render() {
//     const pendingItems = [];
//     const faculty_idItems = [];
//
//     if(this.state.faculty_idlist.length>0){
//        for (let i = 0; i < this.state.faculty_idlist.length; i++) {
//         faculty_idItems.push(
//           <option value={this.state.faculty_idlist[i].faculty_clg_id}>
//             {this.state.faculty_idlist[i].faculty_clg_id}
//           </option>
//         );
//       }
//     }
//
//     if (this.state.pendingList.length != 0) {
//       for (let i = 0; i < this.state.pendingList.length; i++) {
//         const date = new Date(this.state.pendingList[i].from_date);
//         const date1 = new Date(this.state.pendingList[i].to_date);
//
//         if (this.state.search == "") {
//           pendingItems.push(
//             <tr>
//               <td>{this.state.pendingList[i].clgId}</td>
//               <td>{this.state.pendingList[i].name}</td>
//               <td>
//                 {this.state.pendingList[i].previlage == 1 ? (
//                   <>Principal</>
//                 ) : this.state.pendingList[i].previlage == 2 ? (
//                   <>HOD</>
//                 ) : (
//                   <>Staff</>
//                 )}
//               </td>
//               <td>{this.state.pendingList[i].lname}</td>
//               <td>{this.state.pendingList[i].dname}</td>
//               <td>{this.state.pendingList[i].no_of_days}</td>
//               <td>{this.state.pendingList[i].reason}</td>
//               <td>{date.toLocaleDateString("en-GB")}</td>
//               <td>{date1.toLocaleDateString("en-GB")}</td>
//               <td>
//                 {this.state.pendingList[i].status_alternate ? (
//                   <>{this.state.pendingList[i].altname}</>
//                 ) : (
//                   <>Pending</>
//                 )}
//               </td>
//               <td>
//                 {this.state.pendingList[i].doc_link != null ? (
//                   <div>
//
//                       <Link to={`${process.env.REACT_APP_BASE_URL}/security/view/${this.state.pendingList[i].doc_link}`}>Click</Link>
//                   </div>
//                 ) : (
//                   <>None</>
//                 )}
//               </td>
//
//               <td>{(this.state.pendingList[i].sbh!=0 && this.state.pendingList[i].sbh!=2) ? <>Approved</> : (this.state.pendingList[i].sbh==2 ? <>Denied</> : <>Pending</>)}</td>
//               <td>
//                 {this.state.pendingList[i].status == 0 && <>Pending</>}
//                 {this.state.pendingList[i].status == 1 && <>Approved</>}
//                 {this.state.pendingList[i].status == 2 && <>Denied</>}
//               </td>
//             </tr>
//           );
//         } else {
//           if (
//             this.state.pendingList[i].name
//               .toLowerCase()
//               .includes(this.state.search)
//           ) {
//             pendingItems.push(
//               <tr>
//                 <td>{this.state.pendingList[i].clgId}</td>
//                 <td>{this.state.pendingList[i].name}</td>
//                 <td>
//                   {this.state.pendingList[i].previlage == 1 ? (
//                     <>Principal</>
//                   ) : this.state.pendingList[i].previlage == 2 ? (
//                     <>HOD</>
//                   ) : (
//                     <>Staff</>
//                   )}
//                 </td>
//                 <td>{this.state.pendingList[i].lname}</td>
//                 <td>{this.state.pendingList[i].dname}</td>
//                 <td>{this.state.pendingList[i].no_of_days}</td>
//                 <td>{this.state.pendingList[i].reason}</td>
//                 <td>{date.toLocaleDateString("en-GB")}</td>
//                 <td>{date1.toLocaleDateString("en-GB")}</td>
//                 <td>
//                   {this.state.pendingList[i].status_alternate ? (
//                     <>{this.state.pendingList[i].altname}</>
//                   ) : (
//                     <>Pending</>
//                   )}
//                 </td>
//                 <td>
//                   {this.state.pendingList[i].doc_link != null ? (
//                       <Link to={`${process.env.REACT_APP_BASE_URL}/security/view/${this.state.pendingList[i].doc_link}`}>Click</Link>
//                   ) : (
//                     <>None</>
//                   )}
//                 </td>
//                 <td>
//                   {this.state.pendingList[i].sbh == null ? (
//                     <>Pending</>
//                   ) : (
//                     <>Approved</>
//                   )}
//                 </td>
//                 <td>
//                   {this.state.pendingList[i].status == 0 && <>Pending</>}
//                   {this.state.pendingList[i].status == 1 && <>Approved</>}
//                   {this.state.pendingList[i].status == 2 && <>Denied</>}
//                 </td>
//               </tr>
//             );
//           }
//         }
//       }
//     } else {
//       pendingItems.push(<tr>There is no pendeing Leave approval</tr>);
//     }
//     return (
//       <div className="sub-main">
//         <h4 className="fw-bolder">Faculty Approval List</h4>
//         <div className="search_faculty">
//           <div className="input">
//             <i class="material-icons">search</i>
//             <input
//               type="text"
//               placeholder="Search faculty"
//               onChange={(e) => {
//                 this.setState({ search: e.target.value });
//               }}
//             />
//           </div>
//           <div className="button">
//             <button>
//               <Link to="/leaveApproval">Back to Approval Page</Link>
//             </button>
//           </div>
//         </div>
//
//         <div className="row" style={{justifyContent:"space-between"}}>
//             <div className="mb-2 col-lg-3">
//                 <select
//                   className="form-select"
//                   aria-label="Default select example"
//                   onChange={(e) => this.setState({ selected_id: e.target.value })}
//                 >
//                   <option defaultValue>Faculty Clg Id</option>
//                   {faculty_idItems}
//                 </select>
//             </div>
//
//             <div className="mb-2 col-lg-3">
//                 <input
//                   type="date"
//                   className="form-select"
//                   aria-label="Default select example"
//                   onChange={(e) => this.setState({ selected_date: e.target.value })}
//                 />
//             </div>
//
//             <div className="button mb-2 col-lg-3" >
//             <button onClick={(e)=>this.ApplyFilter()} style={{color:'white'}}>
//               Apply Filter
//             </button>
//           </div>
//
//         </div>
//
//         <div className="table">
//           <table className="table table-bordered">
//             <tr>
//               <th>College Id</th>
//               <th>Faculty Name</th>
//               <th>Post</th>
//               <th>Leave Type</th>
//               <th>Department</th>
//               <th>Number of days</th>
//               <th>Leave Reason</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Charge Taken</th>
//               <th>Proof</th>
//               <th>Signed By HOD</th>
//               <th>Status</th>
//             </tr>
//             {pendingItems}
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default ApprovedLeave;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../api";

interface FacultyId {
  faculty_clg_id: string;
}

interface PendingItem {
  clgId: string;
  name: string;
  previlage: number;
  lname: string;
  dname: string;
  no_of_days: number;
  reason: string;
  from_date: string;
  to_date: string;
  status_alternate: boolean;
  altname: string;
  doc_link: string | null;
  sbh: number | null;
  status: number;
}

const ApprovedLeave: React.FC = () => {
  const [pendingList, setPendingList] = useState<PendingItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [facultyIdList, setFacultyIdList] = useState<FacultyId[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    fetchData();
    fetchAllFacultyIds();
  }, []);

  const fetchData = async () => {
    try {
      const userType = localStorage.getItem("user_type");
      const url =
        userType === "1"
          ? `${process.env.REACT_APP_BASE_URL}/hr/approvedLeave`
          : `${process.env.REACT_APP_BASE_URL}/faculty/approved_leaves_hod?uid=${localStorage.getItem("uid")}&role=${localStorage.getItem("role")}`;
      const response = await api.get(url);
      setPendingList(response.data["pendingList"]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllFacultyIds = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFacultyClgId`
      );
      setFacultyIdList(response.data["facultylist"]);
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilter = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/filteredApprovedLeaveList`,
        {
          id: selectedId === "" ? undefined : selectedId,
          date: selectedDate === "" ? undefined : selectedDate,
        }
      );
      setPendingList(response.data["pendingList"]);
    } catch (error) {
      console.error(error);
    }
  };

  const pendingItems = pendingList.map((item, index) => {
    const date = new Date(item.from_date);
    const date1 = new Date(item.to_date);

    if (search === "" || item.name.toLowerCase().includes(search.toLowerCase())) {
      return (
        <tr key={index}>
          <td>{item.clgId}</td>
          <td>{item.name}</td>
          <td>
            {item.previlage === 1 ? (
              <>Principal</>
            ) : item.previlage === 2 ? (
              <>HOD</>
            ) : (
              <>Staff</>
            )}
          </td>
          <td>{item.lname}</td>
          <td>{item.dname}</td>
          <td>{item.no_of_days}</td>
          <td>{item.reason}</td>
          <td>{date.toLocaleDateString("en-GB")}</td>
          <td>{date1.toLocaleDateString("en-GB")}</td>
          <td>{item.status_alternate ? item.altname : <>Pending</>}</td>
          <td>
            {item.doc_link ? (
              <Link to={`${process.env.REACT_APP_BASE_URL}/security/view/${item.doc_link}`}>Click</Link>
            ) : (
              <>None</>
            )}
          </td>
          <td>
            {item.sbh !== 0 && item.sbh !== 2 ? <>Approved</> : item.sbh === 2 ? <>Denied</> : <>Pending</>}
          </td>
          <td>
            {item.status === 0 && <>Pending</>}
            {item.status === 1 && <>Approved</>}
            {item.status === 2 && <>Denied</>}
          </td>
        </tr>
      );
    }
    return null;
  });

  const facultyIdItems = facultyIdList.map((faculty, index) => (
    <option key={index} value={faculty.faculty_clg_id}>
      {faculty.faculty_clg_id}
    </option>
  ));

  return (
    <div className="sub-main">
      <h4 className="fw-bolder">Faculty Approval List</h4>
      <div className="search_faculty">
        <div className="input">
          <i className="material-icons">search</i>
          <input
            type="text"
            placeholder="Search faculty"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="button">
          <button>
            <Link to="/leaveApproval">Back to Approval Page</Link>
          </button>
        </div>
      </div>

      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="mb-2 col-lg-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option defaultValue="">Faculty Clg Id</option>
            {facultyIdItems}
          </select>
        </div>

        <div className="mb-2 col-lg-3">
          <input
            type="date"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="button mb-2 col-lg-3">
          <button onClick={applyFilter} style={{ color: "white" }}>
            Apply Filter
          </button>
        </div>
      </div>

      <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>College Id</th>
              <th>Faculty Name</th>
              <th>Post</th>
              <th>Leave Type</th>
              <th>Department</th>
              <th>Number of days</th>
              <th>Leave Reason</th>
              <th>From</th>
              <th>To</th>
              <th>Charge Taken</th>
              <th>Proof</th>
              <th>Signed By HOD</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingItems.length > 0 ? pendingItems : <tr><td colSpan={13}>There is no pending Leave approval</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedLeave;