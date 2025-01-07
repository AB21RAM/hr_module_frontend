// import React from "react";
// // import "./style.css";
// // import api from "api";
// import { Link } from "react-router-dom";
// import api from "../../../api";
//
// class CancelledLeave extends React.Component {
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
//         `${process.env.REACT_APP_BASE_URL}/hr/cancelled_leave`
//       );
//       this.setState({ pendingList: response.data["balanceLeave"] });
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
//                   value={this.state.pendingList[i]["Casual Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Casual Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   value={this.state.pendingList[i]["Medical Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Medical Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   value={this.state.pendingList[i]["Earned Leave"]}
//                   onChange={(e) => {
//                     this.state.pendingList[i]["Earned Leave"] = e.target.value;
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   value={this.state.pendingList[i]["Compensation Leave"]}
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
//                   value={this.state.pendingList[i]["Summer Vacation"]}
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
//                   value={this.state.pendingList[i]["Winter Vacation"]}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   value={this.state.pendingList[i]["Special Leave"]}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 50 }}
//                   type="text"
//                   value={this.state.pendingList[i]["used_earned_leaves"]}
//                 />
//               </td>
//               <td>
//                 <input
//                   style={{ width: 150 }}
//                   type="text"
//                   value={this.state.pendingList[i]["remark"]}
//                 />
//               </td>
//               <td></td>
//             </tr>
//           );
//         } else {
//           if (
//             this.state.pendingList[i].name.toLowerCase().includes(this.state.search.toLowerCase())
//           ) {
//             pendingItems.push(
//               <tr>
//                 <td>{this.state.pendingList[i].name}</td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Casual Leave"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Medical Leave"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Earned Leave"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Compensation Leave"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Summer Vacation"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Winter Vacation"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["Special Leave"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 50 }}
//                     type="text"
//                     value={this.state.pendingList[i]["used_earned_leaves"]}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     style={{ width: 150 }}
//                     type="text"
//                     value={this.state.pendingList[i]["remark"]}
//                   />
//                 </td>
//                 <td></td>
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
//         <h4 className="fw-bolder">Added or Deducted leave History</h4>
//         <div className="search_faculty">
//           <div className="input">
//             <i class="material-icons">search</i>
//             <input
//               type="text"
//               value={this.state.search}
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
//               <th>Used Earned Leaves</th>
//               <th>Remark</th>
//             </tr>
//             {pendingItems}
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default CancelledLeave;

import React, { useState, useEffect, ChangeEvent } from "react";
import api from "../../../api";

interface Leave {
  name: string;
  "Casual Leave": string;
  "Medical Leave": string;
  "Earned Leave": string;
  "Compensation Leave": string;
  "Summer Vacation": string;
  "Winter Vacation": string;
  "Special Leave": string;
  "used_earned_leaves": string;
  "remark": string;
  from_date: string;
  to_date: string;
}

const CancelledLeave: React.FC = () => {
  const [pendingList, setPendingList] = useState<Leave[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_BASE_URL}/hr/cancelled_leave`
        );
        setPendingList(response.data["balanceLeave"]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (index: number, field: keyof Leave, value: string) => {
    const updatedList = [...pendingList];
    updatedList[index][field] = value;
    setPendingList(updatedList);
  };

  const pendingItems = pendingList.length ? (
    pendingList.map((leave, index) => {
        new Date(leave.from_date);
        new Date(leave.to_date);
        if (search === "" || leave.name.toLowerCase().includes(search.toLowerCase())) {
        return (
          <tr key={index}>
            <td>{leave.name}</td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Casual Leave"]}
                onChange={(e) => handleInputChange(index, "Casual Leave", e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Medical Leave"]}
                onChange={(e) => handleInputChange(index, "Medical Leave", e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Earned Leave"]}
                onChange={(e) => handleInputChange(index, "Earned Leave", e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Compensation Leave"]}
                onChange={(e) => handleInputChange(index, "Compensation Leave", e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Summer Vacation"]}
                onChange={(e) => handleInputChange(index, "Summer Vacation", e.target.value)}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Winter Vacation"]}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["Special Leave"]}
              />
            </td>
            <td>
              <input
                style={{ width: 50 }}
                type="text"
                value={leave["used_earned_leaves"]}
              />
            </td>
            <td>
              <input
                style={{ width: 150 }}
                type="text"
                value={leave["remark"]}
              />
            </td>
            <td></td>
          </tr>
        );
      }
      return null;
    })
  ) : (
    <tr className="leave-message">
      <td colSpan={10} className="fw-bolder text-center">
        There is no pending Leave approval
      </td>
    </tr>
  );

  return (
    <div className="sub-main">
      <h4 className="fw-bolder">Added or Deducted leave History</h4>
      <div className="search_faculty">
        <div className="input">
          <i className="material-icons">search</i>
          <input
            type="text"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
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
              <th>Used Earned Leaves</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>{pendingItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CancelledLeave;