// // import api from "api";
// import React from "react";
// // import './login.css'
// import { Navigate } from "react-router-dom";
// import api from "../../../api";
//
// class UpdateFaculty extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faculty_clg_id: "",
//       name: "",
//       contact: "",
//       ftype_id: "",
//       ftype_list: [],
//       depart_list: [],
//       role_list: [],
//       role: "",
//       depart_id: "",
//       joining_date: "",
//       email: "",
//       password: "",
//       err: "",
//       msg: "",
//       faculty: [],
//     };
//   }
//
//   componentDidMount() {
//     const params = new URLSearchParams(window.location.search);
//     this.fetchData(params.get("id"));
//   }
//
//   fetchData = async (id) => {
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/fetchFaculty?id=` + id
//       );
//       this.setState({ faculty: response.data["Faculty"] });
//
//       const response2 = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/add_Faculty_get`
//       );
//
//       this.setState({
//         ftype_list: response2.data["ftype_list"],
//         depart_list: response2.data["depart_list"],
//         role_list: response2.data["role"],
//       });
//
//     } catch (error) {
//     }
//   };
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new URLSearchParams(window.location.search);
//     api
//       .put(
//         `${process.env.REACT_APP_BASE_URL}/hr/update_faculty/${params.get("id")}`,
//         {
//           faculty_clg_id:this.state.faculty_clg_id || this.state.faculty.faculty_clg_id,
//           name: this.state.name || this.state.faculty.name,
//           contact: this.state.contact || this.state.faculty.contact,
//           ftype_id: this.state.ftype_id || this.state.faculty.ftype_id,
//           role: this.state.role || this.state.faculty.role,
//           depart_id: this.state.depart_id || this.state.faculty.depart_id,
//           email: this.state.email || this.state.faculty.email
//         }
//       )
//       .then((response) => {
//         this.setState({
//           msg: response.data["message"],
//           err: "",
//         });
//
//         alert("Faculty Updated!");
//         window.location.reload();
//       })
//       .catch((error) => {
//         this.setState({ err: error.response.data["message"], msg: "" });
//       });
//   };
//
//   render() {
//     const ftyprItems = [];
//     const departItems = [];
//     const roleItems = [];
//
//     for (let i = 0; i < this.state.ftype_list.length; i++) {
//       if (this.state.faculty.ftype_id == this.state.ftype_list[i].ftype_id) {
//         ftyprItems.push(
//           <option value={this.state.ftype_list[i].ftype_id} selected>
//             {this.state.ftype_list[i].ftname}
//           </option>
//         );
//       } else {
//         ftyprItems.push(
//           <option value={this.state.ftype_list[i].ftype_id}>
//             {this.state.ftype_list[i].ftname}
//           </option>
//         );
//       }
//     }
//
//     for (let i = 0; i < this.state.depart_list.length; i++) {
//       if (this.state.faculty.depart_id == this.state.depart_list[i].depart_id) {
//         departItems.push(
//           <option value={this.state.depart_list[i].depart_id} selected>
//             {this.state.depart_list[i].name}
//           </option>
//         );
//       } else {
//         departItems.push(
//           <option value={this.state.depart_list[i].depart_id}>
//             {this.state.depart_list[i].name}
//           </option>
//         );
//       }
//     }
//
//     for (let i = 0; i < this.state.role_list.length; i++) {
//       if (this.state.faculty.role == this.state.role_list[i].role_id) {
//         roleItems.push(
//           <option value={this.state.role_list[i].role_id} selected>
//             {this.state.role_list[i].name}
//           </option>
//         );
//       } else {
//         roleItems.push(
//           <option value={this.state.role_list[i].role_id}>
//             {this.state.role_list[i].name}
//           </option>
//         );
//       }
//     }
//
//     var doj = new Date(this.state.faculty.joining_date);
//     return (
//       <div className="col-lg-10">
//         {this.state.err && <p>{this.state.err}</p>}
//         {this.state.msg && <p>{this.state.msg}</p>}
//         <div className="container mx-auto" style={{ width: "30rem" }}>
//           <h4 className="fw-bolder text-center">Update Faculty Info</h4>
//           <form className="my-2" onSubmit={this.handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 value={this.state.faculty.name}
//                 className="form-control"
//                 id="Name"
//                 onChange={(e) => this.setState({ name: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label
//                 htmlFor="Faculty_clg_id"
//                 className="form-label fw-semibold"
//               >
//                 Faculty College Id
//               </label>
//               <input
//                 type="text"
//                 placeholder={this.state.faculty.faculty_clg_id}
//                 className="form-control"
//                 id="Faculty_clg_id"
//                 onChange={(e) =>
//                   this.setState({ faculty_clg_id: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="Email" className="form-label fw-semibold">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder={this.state.faculty.email}
//                 id="Email"
//                 onChange={(e) => this.setState({ email: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="Phone_Number" className="form-label fw-semibold">
//                 Phone Number
//               </label>
//               <input
//                 type="phone"
//                 placeholder={this.state.faculty.contact}
//                 className="form-control"
//                 id="Phone_Number"
//                 onChange={(e) => this.setState({ contact: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="ftype" className="form-label fw-semibold">
//                 Faculty Type
//               </label>
//               <select
//                 className="form-select"
//                 placeholder={this.state.faculty.ftype_id}
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ ftype_id: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {ftyprItems}
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="depart" className="form-label fw-semibold">
//                 Department
//               </label>
//               <select
//                 className="form-select"
//
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ depart_id: e.target.value })}
//               >
//                 <option selected>Open this select menu</option>
//                 {departItems}
//               </select>
//             </div>
//
//             <div className="mb-2">
//               <label htmlFor="role" className="form-label fw-semibold">
//                 Faculty Designation
//               </label>
//               <select
//                 className="form-select"
//                 placeholder={this.state.faculty.role}
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ role: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {roleItems}
//               </select>
//             </div>
//
//
//
//             <button
//               type="submit"
//               className="btn btn-dark my-3"
//               style={{ width: "28.5rem" }}
//             >
//               Update
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default UpdateFaculty;
//


import React, { useState, useEffect } from "react";

import api from "../../../api";

interface Faculty {
  faculty_clg_id: string;
  name: string;
  contact: string;
  ftype_id: string;
  depart_id: string;
  role: string;
  joining_date: string;
  email: string;
}

interface FacultyType {
  ftype_id: string;
  ftname: string;
}

interface Department {
  depart_id: string;
  name: string;
}

interface Role {
  role_id: string;
  name: string;
}

const UpdateFaculty: React.FC = () => {
  const [faculty, setFaculty] = useState<Faculty>({
    faculty_clg_id: "",
    name: "",
    contact: "",
    ftype_id: "",
    depart_id: "",
    role: "",
    joining_date: "",
    email: "",
  });
  const [ftypeList, setFtypeList] = useState<FacultyType[]>([]);
  const [departList, setDepartList] = useState<Department[]>([]);
  const [roleList, setRoleList] = useState<Role[]>([]);
  const [name, setName] = useState<string>("");
  const [facultyClgId, setFacultyClgId] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [ftypeId, setFtypeId] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [departId, setDepartId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    fetchData(params.get("id") || "");
  }, []);

  const fetchData = async (id: string) => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/fetchFaculty?id=${id}`
      );
      setFaculty(response.data["Faculty"]);

      const response2 = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/add_Faculty_get`
      );

      setFtypeList(response2.data["ftype_list"]);
      setDepartList(response2.data["depart_list"]);
      setRoleList(response2.data["role"]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    try {
      const response = await api.put(
        `${process.env.REACT_APP_BASE_URL}/hr/update_faculty/${params.get("id")}`,
        {
          faculty_clg_id: facultyClgId || faculty.faculty_clg_id,
          name: name || faculty.name,
          contact: contact || faculty.contact,
          ftype_id: ftypeId || faculty.ftype_id,
          role: role || faculty.role,
          depart_id: departId || faculty.depart_id,
          email: email || faculty.email,
        }
      );
      setMsg(response.data["message"]);
      setErr("");
      alert("Faculty Updated!");
      window.location.reload();
    } catch (error) {
      // setErr(error.response.data["message"]);
        setMsg("");
    }
  };

  const ftyprItems = ftypeList.map((ftype) => (
    <option
      key={ftype.ftype_id}
      value={ftype.ftype_id}
      selected={faculty.ftype_id === ftype.ftype_id}
    >
      {ftype.ftname}
    </option>
  ));

  const departItems = departList.map((depart) => (
    <option
      key={depart.depart_id}
      value={depart.depart_id}
      selected={faculty.depart_id === depart.depart_id}
    >
      {depart.name}
    </option>
  ));

  const roleItems = roleList.map((roleItem) => (
    <option
      key={roleItem.role_id}
      value={roleItem.role_id}
      selected={faculty.role === roleItem.role_id}
    >
      {roleItem.name}
    </option>
  ));

  return (
    <div className="col-lg-10">
      {err && <p>{err}</p>}
      {msg && <p>{msg}</p>}
      <div className="container mx-auto" style={{ width: "30rem" }}>
        <h4 className="fw-bolder text-center">Update Faculty Info</h4>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="Name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              value={name || faculty.name}
              className="form-control"
              id="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Faculty_clg_id" className="form-label fw-semibold">
              Faculty College Id
            </label>
            <input
              type="text"
              placeholder={faculty.faculty_clg_id}
              className="form-control"
              id="Faculty_clg_id"
              onChange={(e) => setFacultyClgId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder={faculty.email}
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Phone_Number" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="phone"
              placeholder={faculty.contact}
              className="form-control"
              id="Phone_Number"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="ftype" className="form-label fw-semibold">
              Faculty Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setFtypeId(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {ftyprItems}
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="depart" className="form-label fw-semibold">
              Department
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setDepartId(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {departItems}
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="role" className="form-label fw-semibold">
              Faculty Designation
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setRole(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {roleItems}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-dark my-3"
            style={{ width: "28.5rem" }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFaculty;