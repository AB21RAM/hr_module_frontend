// import React from "react";
// // import "./style.css";
// // import api from "api";
// import { Link } from "react-router-dom";
// import api from "../../../api";
//
// class LeaveAproval extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pendingList: [],
//       approveList: [],
//       app_id: "",
//       status: "",
//       search: "",
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     try {
//       if (localStorage.getItem("user_type") == 1) {
//         const response = await api.get(
//           // 'http://localhost:5000/api/hr/leaveApproval'
//           `${process.env.REACT_APP_BASE_URL}/hr/leaveApproval`
//         );
//         this.setState({ pendingList: response.data["pendingList"] });
//         // Log sbh if available in the response
//         if (response.data.hasOwnProperty("sbh")) {
//         }
//         // Add a console.log statement to check the data fetched
//       } else {
//         const response = await api.get(
//           `${process.env.REACT_APP_BASE_URL}/faculty/leave_aproval_hod?uid=` +
//             localStorage.getItem("uid")
//           // 'http://localhost:5000/api/faculty/leave_aproval_hod?uid=' + localStorage.getItem('uid')+";role='"+localStorage.getItem('role')
//         );
//         this.setState({ pendingList: response.data["pendingList"] });
//         // Log sbh if available in the response
//         if (response.data.hasOwnProperty("sbh")) {
//         }
//         // Add a console.log statement to check the data fetched
//       }
//     } catch (error) {
//     }
//   };
//
//   approveLeave = async (
//     app_id,
//     status,
//     no_of_days,
//     faculty_id,
//     leave_id,
//     times
//   ) => {
//     try {
//       const response = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/update_leave_status`,
//         // 'http://localhost:5000/api/hr/update_leave_status'
//         {
//           app_id: app_id,
//           status: status,
//           no_of_days: no_of_days,
//           leave_id: leave_id,
//           faculty_id: faculty_id,
//           role: localStorage.getItem("role"),
//           uid: localStorage.getItem("uid"),
//         }
//       );
//       this.setState({ msg: response.data["message"], status: 0, app_id: "" });
//       if (times == 2) {
//         return true;
//       } else {
//         alert("Updated the status of the leave!");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   aprove_all = async () => {
//     try {
//       if (localStorage.getItem("user_type") != 1) {
//         const response = await api.post(
//           `${process.env.REACT_APP_BASE_URL}/hr/update_Allleave_status`,
//           // 'http://localhost:5000/api/hr/update_Allleave_status'
//           {
//             role: localStorage.getItem("role"),
//             uid: localStorage.getItem("uid"),
//             aproveSelected: this.state.approveList,
//           }
//         );
//         this.setState({ msg: response.data["message"], status: 0, app_id: "" });
//       } else {
//         this.state.pendingList.forEach((element) => {
//           if (this.state.approveList.length != 0) {
//             if (this.state.approveList.includes(element.leave_app_id)) {
//               this.approveLeave(
//                 element.leave_app_id,
//                 1,
//                 element.no_of_days,
//                 element.faculty_id,
//                 element.leave_id,
//                 2
//               );
//             }
//           } else {
//             this.approveLeave(
//               element.leave_app_id,
//               1,
//               element.no_of_days,
//               element.faculty_id,
//               element.leave_id,
//               2
//             );
//           }
//         });
//       }
//       alert("Updated All the status of the leave!");
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   render() {
//     const pendingItems = [];
//
//     if (this.state.pendingList.length != 0) {
//       for (let i = 0; i < this.state.pendingList.length; i++) {
//         const date = new Date(this.state.pendingList[i].from_date);
//         const date1 = new Date(this.state.pendingList[i].to_date);
//
//         if (this.state.search == "") {
//           pendingItems.push(
//             <tr>
//               <td>
//                 <input
//                   type="checkbox"
//                   onChange={(e) => {
//                     if (e.target.value) {
//                       this.state.approveList.push(
//                         this.state.pendingList[i].leave_app_id
//                       );
//                     } else {
//                       this.state.approveList.pop(
//                         this.state.pendingList[i].leave_app_id
//                       );
//                     }
//                   }}
//                 />
//               </td>
//               <td>{this.state.pendingList[i].clgId}</td>
//               <td>{this.state.pendingList[i].name}</td>
//               <td>
//                 {this.state.pendingList[i].role}
//               </td>
//               <td>{this.state.pendingList[i].lname}</td>
//               <td>{this.state.pendingList[i].dname}</td>
//               <td>{this.state.pendingList[i].no_of_days}</td>
//               <td>{this.state.pendingList[i].reason}</td>
//               <td>{date.toLocaleDateString("en-GB")}</td>
//               <td>{date1.toLocaleDateString("en-GB")}</td>
//               <td>
//                 {Number(this.state.pendingList[i].status_alternate)==1 ? (
//                   <>{this.state.pendingList[i].altname}</>
//                 ) : (
//                   <>Pending</>
//                 )}
//               </td>
//               <td>
//                 {this.state.pendingList[i].doc_link != null ? (
//                       <Link to={`${process.env.REACT_APP_BASE_URL}/security/view/${this.state.pendingList[i].doc_link}`}>Click</Link>
//                 ) : (
//                   <>None</>
//                 )}
//               </td>
//               <td>{(this.state.pendingList[i].signed_by_hod!=0 && this.state.pendingList[i].signed_by_hod!=2) ? <>Approved</> : (this.state.pendingList[i].signed_by_hod==2 ? <>Denied</> : <>Pending</>)}</td>
//               <td>
//                 <div className="buttons">
//                   <button
//                     className="green"
//                     onClick={(e) => {
//                       this.approveLeave(
//                         this.state.pendingList[i].leave_app_id,
//                         1,
//                         this.state.pendingList[i].no_of_days,
//                         this.state.pendingList[i].faculty_id,
//                         this.state.pendingList[i].leave_id,
//                         1
//                       );
//                     }}
//                   >
//                     Approve
//                   </button>
//                   <button
//                     className="red"
//                     onClick={(e) => {
//                       this.approveLeave(
//                         this.state.pendingList[i].leave_app_id,
//                         2,
//                         this.state.pendingList[i].no_of_days,
//                         this.state.pendingList[i].faculty_id,
//                         this.state.pendingList[i].leave_id,
//                         1
//                       );
//                     }}
//                   >
//                     Deny
//                   </button>
//                 </div>
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
//                 <td>
//                   <input
//                     type="checkbox"
//                     onChange={(e) => {
//                       if (e.target.value) {
//                         this.state.approveList.push(
//                           this.state.pendingList[i].leave_app_id
//                         );
//                       } else {
//                         this.state.approveList.pop(
//                           this.state.pendingList[i].leave_app_id
//                         );
//                       }
//                     }}
//                   />
//                 </td>
//                 <td>{this.state.pendingList[i].clgId}</td>
//                 <td>{this.state.pendingList[i].name}</td>
//                 <td>
//                 {this.state.pendingList[i].role}
//                 </td>
//                 <td>{this.state.pendingList[i].lname}</td>
//                 <td>{this.state.pendingList[i].dname}</td>
//                 <td>{this.state.pendingList[i].no_of_days}</td>
//                 <td>{this.state.pendingList[i].reason}</td>
//                 <td>{date.toLocaleDateString("en-GB")}</td>
//                 <td>{date1.toLocaleDateString("en-GB")}</td>
//                 <td>
//                   {Number(this.state.pendingList[i].status_alternate) == 0 ? (
//                     "Pending"
//                   ) : (Number(this.state.pendingList[i].status_alternate) == 1 ? (
//                     <>{this.state.pendingList[i].altname}</>
//                   ) : (
//                     "Denied"
//                   ))}
//                 </td>
//                 <td>
//                   {this.state.pendingList[i].doc_link != "null" ? (
//                     <div>
//
//                       <Link to={`${process.env.REACT_APP_BASE_URL}/security/view/${this.state.pendingList[i].doc_link}`}>Click</Link>
//                     </div>
//                   ) : (
//                     <>None</>
//                   )}
//                 </td>
//                 <td>
//                   {this.state.pendingList[i].signed_by_hod === 0
//                     ? "Pending"
//                     : "Approved"}
//                 </td>
//                 <td>
//                   <div className="buttons">
//                     <button
//                       className="green"
//                       onClick={(e) => {
//                         this.approveLeave(
//                           this.state.pendingList[i].leave_app_id,
//                           1,
//                           this.state.pendingList[i].no_of_days,
//                           this.state.pendingList[i].faculty_id,
//                           this.state.pendingList[i].leave_id,
//                           1
//                         );
//                       }}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="red"
//                       onClick={(e) => {
//                         this.approveLeave(
//                           this.state.pendingList[i].leave_app_id,
//                           2,
//                           this.state.pendingList[i].no_of_days,
//                           this.state.pendingList[i].faculty_id,
//                           this.state.pendingList[i].leave_id,
//                           1
//                         );
//                       }}
//                     >
//                       Deny
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           }
//         }
//       }
//     } else {
//       pendingItems.push(
//         <tr className="leave-message">
//           <td colSpan={12} className="fw-bolder text-center">
//             There is no pending Leave approval
//           </td>
//         </tr>
//       );
//     }
//
//     return (
//       <div className="sub-main">
//         <h4 className="fw-bolder">Faculty Leave Approval</h4>
//         <div className="search_faculty">
//           <div className="input">
//             <i class="material-icons">search</i>
//             <input
//               type="text"
//               placeholder="Search faculty name"
//               onChange={(e) => {
//                 this.setState({ search: e.target.value });
//               }}
//             />
//           </div>
//           <div className="button">
//             <button>
//               <Link to="/AprovedLeaves"> View Approved Leaves</Link>
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "2%",
//           }}
//         >
//           <div className="button">
//             <button onClick={this.aprove_all}>
//               <Link>Approve All Applications</Link>
//             </button>
//           </div>
//           <div className="button">
//             <button onClick={this.aprove_all}>
//               <Link>Approve Selected</Link>
//             </button>
//           </div>
//         </div>
//
//         <div className="table">
//           <table className="table table-bordered">
//             <tr>
//               <th>Select</th>
//               <th>College Id</th>
//               <th>Faculty Name</th>
//               <th>Post</th>
//               <th>Leave Type</th>
//               <th>Department</th>
//               <th>Number of Days</th>
//               <th>Leave Reason</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Charge Taken</th>
//               <th>Proof</th>
//               <th>Signed By HOD</th>
//               <th>Approval</th>
//             </tr>
//             {pendingItems}
//           </table>
//         </div>
//         {this.state.msg && (
//           <h3 className="success-message">
//             <i class="material-icons tick">check_circle</i>
//             {this.state.msg}
//           </h3>
//         )}
//       </div>
//     );
//   }
// }
//
// export default LeaveAproval;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../api";

interface PendingItem {
  leave_app_id: string;
  clgId: string;
  name: string;
  role: string;
  lname: string;
  dname: string;
  no_of_days: number;
  reason: string;
  from_date: string;
  to_date: string;
  status_alternate: string;
  altname: string;
  doc_link: string;
  signed_by_hod: number;
  faculty_id: string;
  leave_id: string;
}

const LeaveAproval: React.FC = () => {
  const [pendingList, setPendingList] = useState<PendingItem[]>([]);
  const [approveList, setApproveList] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userType = localStorage.getItem("user_type");
      const uid = localStorage.getItem("uid");
      const url =
        userType === "1"
          ? `${process.env.REACT_APP_BASE_URL}/hr/leaveApproval`
          : `${process.env.REACT_APP_BASE_URL}/faculty/leave_aproval_hod?uid=${uid}`;

      const response = await api.get(url);
      setPendingList(response.data["pendingList"]);
    } catch (error) {
      console.error(error);
    }
  };

  const approveLeave = async (
    app_id: string,
    status: number,
    no_of_days: number,
    faculty_id: string,
    leave_id: string,
    times: number
  ) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/update_leave_status`,
        {
          app_id,
          status,
          no_of_days,
          leave_id,
          faculty_id,
          role: localStorage.getItem("role"),
          uid: localStorage.getItem("uid"),
        }
      );
      setMsg(response.data["message"]);
      if (times !== 2) {
        alert("Updated the status of the leave!");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const approveAll = async () => {
    try {
      const userType = localStorage.getItem("user_type");
      if (userType !== "1") {
        const response = await api.post(
          `${process.env.REACT_APP_BASE_URL}/hr/update_Allleave_status`,
          {
            role: localStorage.getItem("role"),
            uid: localStorage.getItem("uid"),
            aproveSelected: approveList,
          }
        );
        setMsg(response.data["message"]);
      } else {
        pendingList.forEach((element) => {
          if (approveList.length !== 0) {
            if (approveList.includes(element.leave_app_id)) {
              approveLeave(
                element.leave_app_id,
                1,
                element.no_of_days,
                element.faculty_id,
                element.leave_id,
                2
              );
            }
          } else {
            approveLeave(
              element.leave_app_id,
              1,
              element.no_of_days,
              element.faculty_id,
              element.leave_id,
              2
            );
          }
        });
      }
      alert("Updated All the status of the leave!");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (leaveAppId: string, checked: boolean) => {
    setApproveList((prevList) =>
      checked ? [...prevList, leaveAppId] : prevList.filter((id) => id !== leaveAppId)
    );
  };

  const filteredPendingItems = pendingList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const pendingItems = filteredPendingItems.map((item, index) => {
    const fromDate = new Date(item.from_date).toLocaleDateString("en-GB");
    const toDate = new Date(item.to_date).toLocaleDateString("en-GB");

    return (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            onChange={(e) => handleCheckboxChange(item.leave_app_id, e.target.checked)}
          />
        </td>
        <td>{item.clgId}</td>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{item.lname}</td>
        <td>{item.dname}</td>
        <td>{item.no_of_days}</td>
        <td>{item.reason}</td>
        <td>{fromDate}</td>
        <td>{toDate}</td>
        <td>
          {Number(item.status_alternate) === 1 ? item.altname : "Pending"}
        </td>
        <td>
          {item.doc_link ? (
            <Link to={`${process.env.REACT_APP_BASE_URL}/security/view/${item.doc_link}`}>
              Click
            </Link>
          ) : (
            "None"
          )}
        </td>
        <td>
          {item.signed_by_hod !== 0 ? "Approved" : "Pending"}
        </td>
        <td>
          <div className="buttons">
            <button
              className="green"
              onClick={() =>
                approveLeave(
                  item.leave_app_id,
                  1,
                  item.no_of_days,
                  item.faculty_id,
                  item.leave_id,
                  1
                )
              }
            >
              Approve
            </button>
            <button
              className="red"
              onClick={() =>
                approveLeave(
                  item.leave_app_id,
                  2,
                  item.no_of_days,
                  item.faculty_id,
                  item.leave_id,
                  1
                )
              }
            >
              Deny
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="sub-main">
      <h4 className="fw-bolder">Faculty Leave Approval</h4>
      <div className="search_faculty">
        <div className="input">
          <i className="material-icons">search</i>
          <input
            type="text"
            placeholder="Search faculty name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="button">
          <button>
            <Link to="/AprovedLeaves"> View Approved Leaves</Link>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2%",
        }}
      >
        <div className="button">
          <button onClick={approveAll}>
            <Link to={""}>Approve All Applications</Link>
          </button>
        </div>
        <div className="button">
          <button onClick={approveAll}>
            <Link to={""}>Approve Selected</Link>
          </button>
        </div>
      </div>

      <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Select</th>
              <th>College Id</th>
              <th>Faculty Name</th>
              <th>Post</th>
              <th>Leave Type</th>
              <th>Department</th>
              <th>Number of Days</th>
              <th>Leave Reason</th>
              <th>From</th>
              <th>To</th>
              <th>Charge Taken</th>
              <th>Proof</th>
              <th>Signed By HOD</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            {pendingItems.length > 0 ? (
              pendingItems
            ) : (
              <tr className="leave-message">
                <td colSpan={14} className="fw-bolder text-center">
                  There is no pending Leave approval
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {msg && (
        <h3 className="success-message">
          <i className="material-icons tick">check_circle</i>
          {msg}
        </h3>
      )}
    </div>
  );
};

export default LeaveAproval;