// import React from "react";
// // import "./style.css";
// // import api from "api";
// import { Link } from "react-router-dom";
// import api from "../../../api";
//
// class LeaveBalnce extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pendingList: [],
//       search: "",
//       cl: "",
//       sl: "",
//       el: "",
//       co: "",
//       sv: "",
//       wv: "",
//       ml: "",
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     try {
//       const response = await api.get(
//         // 'http://localhost:5000/api/hr/leaveBalance'
//         `${process.env.REACT_APP_BASE_URL}/hr/leaveBalance`
//       );
//       this.setState({ pendingList: response.data["balanceLeave"] });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   updateBalance = async (
//     faculty_id,
//     cl,
//     ml,
//     el,
//     co,
//     sv,
//     wv,
//     sl,
//     uel,
//     mtl,
//     remark
//   ) => {
//     try {
//       const response = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/updateleaveBalance`,
//         // 'http://localhost:5000/api/hr/updateleaveBalance'
//         {
//           faculty_id: faculty_id,
//           cl: cl,
//           co: co,
//           ml: ml,
//           el: el,
//           sv: sv,
//           wv: wv,
//           sl: sl,
//           uel: uel,
//           mtl:mtl,
//           remark: remark,
//         }
//       );
//       this.setState({ msg: response.data["message"], status: 0, app_id: "" });
//       alert("Updated the Leave Count");
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
//               <td>{this.state.pendingList[i].name}</td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Casual Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Casual Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Medical Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Medical Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Earned Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Earned Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Compensation Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Compensation Leave"] =
//                       e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Summer Vacation"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Summer Vacation"] =
//                       e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Winter Vacation"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Winter Vacation"] =
//                       e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Special Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Special Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["Maternity Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Maternity Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["used_earned_leaves"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["used_earned_leaves"] =
//                       e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 150 }}
//                   type="text"
//                   placeholder={this.state.pendingList[i]["remark"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["remark"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <div className="buttons">
//                   <button
//                     className="green"
//                     onClick={(e) => {
//                       this.updateBalance(
//                         this.state.pendingList[i].faculty_id,
//                         this.state.pendingList[i]["Casual Leave"],
//                         this.state.pendingList[i]["Medical Leave"],
//                         this.state.pendingList[i]["Earned Leave"],
//                         this.state.pendingList[i]["Compensation Leave"],
//                         this.state.pendingList[i]["Summer Vacation"],
//                         this.state.pendingList[i]["Winter Vacation"],
//                         this.state.pendingList[i]["Special Leave"],
//                         this.state.pendingList[i]["used_earned_leaves"],
//                         this.state.pendingList[i]["Maternity Leave"],
//                         this.state.pendingList[i]["remark"]
//                       );
//                     }}
//                   >
//                     Update
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
//                 <td>{this.state.pendingList[i].name}</td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Casual Leave"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Casual Leave"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Medical Leave"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Medical Leave"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Earned Leave"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Earned Leave"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={
//                       this.state.pendingList[i]["Compensation Leave"]
//                     }
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Compensation Leave"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Summer Vacation"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Summer Vacation"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Winter Vacation"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Winter Vacation"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Special Leave"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Special Leave"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["Maternity Leave"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["Maternity Leave"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     placeholder={
//                       this.state.pendingList[i]["used_earned_leaves"]
//                     }
//                     onChange={(e) => {
//                       this.state.pendingList[i]["used_earned_leaves"] =
//                         e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 150 }}
//                     type="text"
//                     placeholder={this.state.pendingList[i]["remark"]}
//                     onChange={(e) => {
//                       this.state.pendingList[i]["remark"] = e.target.value;
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <div className="buttons">
//                     <button
//                       className="green"
//                       onClick={(e) => {
//                         this.updateBalance(
//                           this.state.pendingList[i].faculty_id,
//                           this.state.pendingList[i]["Casual Leave"],
//                           this.state.pendingList[i]["Medical Leave"],
//                           this.state.pendingList[i]["Earned Leave"],
//                           this.state.pendingList[i]["Compensation Leave"],
//                           this.state.pendingList[i]["Summer Vacation"],
//                           this.state.pendingList[i]["Winter Vacation"],
//                           this.state.pendingList[i]["Special Leave"],
//                           this.state.pendingList[i]["used_earned_leaves"],
//                           this.state.pendingList[i]["Maternity Leave"],
//                           this.state.pendingList[i]["remark"]
//                         );
//                       }}
//                     >
//                       Update
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
//           <td colSpan={10} className="fw-bolder text-center">
//             There is no pending Leave approval
//           </td>
//         </tr>
//       );
//     }
//
//     return (
//       <div className="sub-main">
//         {this.state.msg && <h1>{this.state.msg}</h1>}
//         <h4 className="fw-bolder">Faculty Leave Balance</h4>
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
//         </div>
//
//         <div className="table">
//           <table className="table table-bordered">
//             <tr>
//               <th>Faculty Name</th>
//               <th>Casual Leave</th>
//               <th>Medical Leave</th>
//               <th>Earned Leave</th>
//               <th>Compensation Leave</th>
//               <th>Summer Vacation</th>
//               <th>Winter Vacation</th>
//               <th>Special Leave</th>
//               <th>Maternity Leave</th>
//               <th>Used Earned Leaves</th>
//               <th>Remark</th>
//               <th>Update</th>
//             </tr>
//             {pendingItems}
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default LeaveBalnce;
import React, { useState, useEffect } from "react";
import api from "../../../api";
interface LeaveBalanceItem {
    faculty_id: string;
    name: string;
    "Casual Leave": string;
    "Medical Leave": string;
    "Earned Leave": string;
    "Compensation Leave": string;
    "Summer Vacation": string;
    "Winter Vacation": string;
    "Special Leave": string;
    "Maternity Leave": string;
    "used_earned_leaves": string;
    remark: string;
}
const LeaveBalance: React.FC = () => {
  const [pendingList, setPendingList] = useState<LeaveBalanceItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/leaveBalance`
      );
      setPendingList(response.data["balanceLeave"]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBalance = async (
    faculty_id: string,
    cl: string,
    ml: string,
    el: string,
    co: string,
    sv: string,
    wv: string,
    sl: string,
    uel: string,
    mtl: string,
    remark: string
  ) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/updateleaveBalance`,
        {
          faculty_id,
          cl,
          co,
          ml,
          el,
          sv,
          wv,
          sl,
          uel,
          mtl,
          remark,
        }
      );
      setMsg(response.data["message"]);
      alert("Updated the Leave Count");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const pendingItems = pendingList.length ? (
    pendingList.map((item, index) => {
      if (search === "" || item.name.toLowerCase().includes(search.toLowerCase())) {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Casual Leave"]}
                onChange={(e) => (item["Casual Leave"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Medical Leave"]}
                onChange={(e) => (item["Medical Leave"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Earned Leave"]}
                onChange={(e) => (item["Earned Leave"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Compensation Leave"]}
                onChange={(e) => (item["Compensation Leave"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Summer Vacation"]}
                onChange={(e) => (item["Summer Vacation"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Winter Vacation"]}
                onChange={(e) => (item["Winter Vacation"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Special Leave"]}
                onChange={(e) => (item["Special Leave"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["Maternity Leave"]}
                onChange={(e) => (item["Maternity Leave"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                placeholder={item["used_earned_leaves"]}
                onChange={(e) => (item["used_earned_leaves"] = e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 150 }}
                type="text"
                placeholder={item["remark"]}
                onChange={(e) => (item["remark"] = e.target.value)}
              />
            </td>
            <td>
              <div className="buttons">
                <button
                  className="green"
                  onClick={() =>
                    updateBalance(
                      item.faculty_id,
                      item["Casual Leave"],
                      item["Medical Leave"],
                      item["Earned Leave"],
                      item["Compensation Leave"],
                      item["Summer Vacation"],
                      item["Winter Vacation"],
                      item["Special Leave"],
                      item["used_earned_leaves"],
                      item["Maternity Leave"],
                      item["remark"]
                    )
                  }
                >
                  Update
                </button>
              </div>
            </td>
          </tr>
        );
      }
      return null;
    })
  ) : (
    <tr className="leave-message">
      <td colSpan={12} className="fw-bolder text-center">
        There is no pending Leave approval
      </td>
    </tr>
  );

  return (
    <div className="sub-main">
      {msg && <h1>{msg}</h1>}
      <h4 className="fw-bolder">Faculty Leave Balance</h4>
      <div className="search_faculty">
        <div className="input">
          <i className="material-icons">search</i>
          <input
            type="text"
            placeholder="Search faculty name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Casual Leave</th>
              <th>Medical Leave</th>
              <th>Earned Leave</th>
              <th>Compensation Leave</th>
              <th>Summer Vacation</th>
              <th>Winter Vacation</th>
              <th>Special Leave</th>
              <th>Maternity Leave</th>
              <th>Used Earned Leaves</th>
              <th>Remark</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>{pendingItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveBalance;