// // import React from "react";
// // // import "./style.css";
// // import api from "api";
// // import { Link, Navigate } from "react-router-dom";
//
// // class MyFaculty extends React.Component {
//
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       FacultygList: [],
// //       search: '',
// //       counter: 0,
// //     };
// //   }
//
// //   componentDidMount() {
// //     this.fetchData();
// //   }
//
// //   fetchData = async () => {
// //     try {
// //       const response = await api.get(
// //         // 'http://localhost:5000/api/hr/fetchAllFaculty'
// //         `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFaculty`
// //       );
// //       this.setState({ FacultygList: response.data['facultyList'] });
// //     } catch (error) {
// //     }
// //   };
//
// //   deleteFac= async(e)=>{
// //     try {
// //       const response = await api.post(
// //         `${process.env.REACT_APP_BASE_URL}/hr/deleteFac`,{id:e}
// //       );
// //       alert(response.data.message);
// //       window.location.reload();;
// //     } catch (error) {
// //     }
// //   }
//
// //   render() {
// //     const facultyItems = [];
//
// //     if (this.state.FacultygList.length != 0) {
// //       for (let i = 0; i < this.state.FacultygList.length; i++) {
// //         const date = new Date(this.state.FacultygList[i].from_date)
// //         const date1 = new Date(this.state.FacultygList[i].to_date)
//
// //         if (this.state.search == '') {
// //           facultyItems.push(<tr>
// //             <td>{this.state.FacultygList[i].faculty_clg_id}</td>
// //             <td>{this.state.FacultygList[i].name}</td>
// //             <td>{this.state.FacultygList[i].role1}</td>
// //             <td>{this.state.FacultygList[i].ftname}</td>
// //             <td>{this.state.FacultygList[i].depart_name}</td>
// //             <td>{this.state.FacultygList[i].contact}</td>
// //             <td>
// //               <div className="buttons">
// //                 {/* <button className="green"> */}
// //                 {/* <Link to={'#'}>Update</Link> */}
// //                 <Link to={'/updateFacultyinfo?id=' + this.state.FacultygList[i].faculty_id}>Update</Link>
// //                 {/* </button> */}
// //               </div>
// //             </td>
// //             <td>
// //               <div className="buttons" onClick={()=>this.deleteFac(this.state.FacultygList[i].faculty_id)}>
//
// //                 <Link>Delete</Link>
//
// //               </div>
// //             </td>
// //           </tr>);
// //         } else {
// //           if (this.state.FacultygList[i].name.toLowerCase().includes(this.state.search)) {
// //             facultyItems.push(<tr>
// //               <td>{this.state.FacultygList[i].faculty_clg_id}</td>
// //               <td>{this.state.FacultygList[i].name}</td>
// //               <td>{this.state.FacultygList[i].role1}</td>
// //               <td>{this.state.FacultygList[i].ftname}</td>
// //               <td>{this.state.FacultygList[i].depart_name}</td>
// //               <td>{this.state.FacultygList[i].contact}</td>
// //               <td>
// //                 <div className="buttons">
// //                   {/* <button className="green"> */}
// //                   {/* <Link to={'#'}>Update</Link> */}
// //                   <Link to={'/updateFacultyinfo?id=' + this.state.FacultygList[i].faculty_id}>Update</Link>
// //                   {/* </button> */}
// //                 </div>
// //               </td>
// //               <td>
// //               <div className="buttons" onClick={()=>this.deleteFac(this.state.FacultygList[i].faculty_id)}>
//
// //                 <Link>Delete</Link>
//
// //               </div>
// //             </td>
// //             </tr>);
// //           }
// //         }
// //       }
// //     }
//
// //     var total = facultyItems.length;
// //     var displayItem = []
//
// //     for (let i = this.state.counter; i < this.state.counter + 10; i++) {
// //       displayItem.push(facultyItems[i]);
// //     }
//
//
//
// //     return (
// //       <div className="sub-main">
//
// //         <h4 className="fw-bolder">Faculty List</h4>
// //         <div className="search_faculty">
// //           <div className="input">
// //             <i class="material-icons">search</i>
// //             <input type="text" placeholder="Search faculty name" onChange={(e) => { this.setState({ search: e.target.value }) }} />
// //           </div>
//
// //         </div>
// //         <h4>Total Faculties: {total}</h4>
// //         <br />
// //         <div className="btns" style={{ justifyContent: "space-between" }}>
// //           {this.state.counter == 0 ? <button className="prev" disabled>Prev</button> : <button className="prev" onClick={() => this.setState({ counter: this.state.counter - 10 })}>Prev</button>}
// //           {this.state.counter >= facultyItems.length ? <button className="next" disabled>Next</button> : <button className="next" onClick={() => this.setState({ counter: this.state.counter + 10 })}>Next</button>}
// //         </div> <br />
// //         <div className="table">
// //           <table className="table table-bordered">
// //             <tr>
// //               <th>Emp_ID</th>
// //               <th>Faculty Name</th>
// //               <th>Designation</th>
// //               <th>Faculty Type</th>
// //               <th>Department</th>
// //               <th>Contact</th>
// //               <th>Update Information</th>
// //               <th>Delete Information</th>
// //             </tr>
// //             {displayItem}
//
// //           </table>
//
//
// //         </div>
// //         {this.state.msg && <h3 className="success-message">
// //           <i class="material-icons tick">check_circle</i>
// //           {this.state.msg}
// //         </h3>}
// //       </div>
// //     );
// //   }
// // }
//
// // export default MyFaculty;
// import React from "react";
// // import api from "api";
// import { Link } from "react-router-dom";
// import api from "../../../api";
//
// class MyFaculty extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       FacultygList: [],
//       search: "",
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
//         `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFaculty`
//       );
//       this.setState({ FacultygList: response.data["facultyList"] });
//     } catch (error) {
//     }
//   };
//
//   deleteFac = async (e) => {
//     try {
//       const response = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/deleteFac`,
//         { id: e }
//       );
//       alert(response.data.message);
//       window.location.reload();
//     } catch (error) {
//     }
//   };
//
//   render() {
//     const { FacultygList, search } = this.state;
//     const facultyItems = [];
//
//     if (FacultygList.length !== 0) {
//       for (let i = 0; i < FacultygList.length; i++) {
//         const date = new Date(FacultygList[i].from_date);
//         const date1 = new Date(FacultygList[i].to_date);
//
//         if (search === "") {
//           facultyItems.push(
//             <tr key={FacultygList[i].faculty_id}>
//               <td>{FacultygList[i].faculty_clg_id}</td>
//               <td>{FacultygList[i].name}</td>
//               <td>{FacultygList[i].role1}</td>
//               <td>{FacultygList[i].ftname}</td>
//               <td>{FacultygList[i].depart_name}</td>
//               <td>{FacultygList[i].contact}</td>
//               <td>
//                 <div className="buttons">
//                   <Link to={"/updateFacultyinfo?id=" + FacultygList[i].faculty_id}>
//                     Update
//                   </Link>
//                 </div>
//               </td>
//               <td>
//                 <div className="buttons" onClick={() => this.deleteFac(FacultygList[i].faculty_id)}>
//                   <Link>Delete</Link>
//                 </div>
//               </td>
//             </tr>
//           );
//         } else {
//           if (FacultygList[i].name.toLowerCase().includes(search)) {
//             facultyItems.push(
//               <tr key={FacultygList[i].faculty_id}>
//                 <td>{FacultygList[i].faculty_clg_id}</td>
//                 <td>{FacultygList[i].name}</td>
//                 <td>{FacultygList[i].role1}</td>
//                 <td>{FacultygList[i].ftname}</td>
//                 <td>{FacultygList[i].depart_name}</td>
//                 <td>{FacultygList[i].contact}</td>
//                 <td>
//                   <div className="buttons">
//                     <Link to={"/updateFacultyinfo?id=" + FacultygList[i].faculty_id}>
//                       Update
//                     </Link>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="buttons" onClick={() => this.deleteFac(FacultygList[i].faculty_id)}>
//                     <Link>Delete</Link>
//                   </div>
//                 </td>
//               </tr>
//             );
//           }
//         }
//       }
//     }
//
//     const total = facultyItems.length;
//
//     return (
//       <div className="sub-main">
//         <h4 className="fw-bolder">Faculty List</h4>
//         <div className="search_faculty">
//           <div className="input">
//             <i className="material-icons">search</i>
//             <input type="text" placeholder="Search faculty name" onChange={(e) => { this.setState({ search: e.target.value }) }} />
//           </div>
//         </div>
//         <h4>Total Faculties: {total}</h4>
//         <br />
//         <div className="table">
//           <table className="table table-bordered">
//             <tr>
//               <th>Emp_ID</th>
//               <th>Faculty Name</th>
//               <th>Designation</th>
//               <th>Faculty Type</th>
//               <th>Department</th>
//               <th>Contact</th>
//               <th>Update Information</th>
//               <th>Delete Information</th>
//             </tr>
//             {facultyItems}
//           </table>
//         </div>
//         {this.state.msg && (
//           <h3 className="success-message">
//             <i className="material-icons tick">check_circle</i>
//             {this.state.msg}
//           </h3>
//         )}
//       </div>
//     );
//   }
// }
//
// export default MyFaculty;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../api";

interface Faculty {
  faculty_id: number;
  faculty_clg_id: string;
  name: string;
  role1: string;
  ftname: string;
  depart_name: string;
  contact: string;
  from_date: string;
  to_date: string;
}

const MyFaculty: React.FC = () => {
  const [facultyList, setFacultyList] = useState<Faculty[]>([]);
  const [search, setSearch] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/fetchAllFaculty`
      );
      setFacultyList(response.data["facultyList"]);
    } catch (error) {
      console.error("Error fetching faculty data", error);
    }
  };

  const deleteFac = async (id: number) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/deleteFac`,
        { id }
      );
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting faculty", error);
    }
  };

  const facultyItems = facultyList
    .filter((faculty) =>
      search === "" ? true : faculty.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((faculty) => (
      <tr key={faculty.faculty_id}>
        <td>{faculty.faculty_clg_id}</td>
        <td>{faculty.name}</td>
        <td>{faculty.role1}</td>
        <td>{faculty.ftname}</td>
        <td>{faculty.depart_name}</td>
        <td>{faculty.contact}</td>
        <td>
          <div className="buttons">
            <Link to={`/updateFacultyinfo?id=${faculty.faculty_id}`}>Update</Link>
          </div>
        </td>
        <td>
          <div className="buttons" onClick={() => deleteFac(faculty.faculty_id)}>
            <Link to={""}>Delete</Link>
          </div>
        </td>
      </tr>
    ));

  const total = facultyItems.length;
  const displayItems = facultyItems.slice(counter, counter + 10);

  return (
    <div className="sub-main">
      <h4 className="fw-bolder">Faculty List</h4>
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
      <h4>Total Faculties: {total}</h4>
      <br />
      <div className="btns" style={{ justifyContent: "space-between" }}>
        <button
          className="prev"
          disabled={counter === 0}
          onClick={() => setCounter(counter - 10)}
        >
          Prev
        </button>
        <button
          className="next"
          disabled={counter + 10 >= total}
          onClick={() => setCounter(counter + 10)}
        >
          Next
        </button>
      </div>
      <br />
      <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Emp_ID</th>
              <th>Faculty Name</th>
              <th>Designation</th>
              <th>Faculty Type</th>
              <th>Department</th>
              <th>Contact</th>
              <th>Update Information</th>
              <th>Delete Information</th>
            </tr>
          </thead>
          <tbody>{displayItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFaculty;
