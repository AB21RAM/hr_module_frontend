//
// import React from 'react';
// // import './login.css'
// import CSVReader from 'react-csv-reader'
// import {Navigate} from 'react-router-dom';
// import api from '../../../api';
//
// class AddDepartment extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:'',
//       depart_list:[],
//       role:'',
//       err:'',
//       msg:'',
//       search:''
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
//         `${process.env.REACT_APP_BASE_URL}/hr/add_faculty_get`
//         // 'http://localhost:5000/api/hr/add_faculty_get'
//         );
//       this.setState({depart_list:response.data['depart_list']});
//     } catch (error) {
//     }
//   };
//
//
//   handleSubmit = (event) =>{
//     event.preventDefault();
//
//     api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/Add_department`,
//         // 'http://localhost:5000/api/hr/Add_department',
//       {
//       "name":this.state.name,
//     })
//       .then((response) => {
//         this.setState({
//           msg: response.data['message'],
//           err:''
//         })
//
//         alert("Department Added!");
//         window.location.reload();
//       })
//       .catch((error) => {
//         this.setState({err: error.response.data['message'],msg:''});
//       });
//   };
//
//   bulkUpload = async(data)=>{
//
//     api.post(
//       // 'http://185.210.144.40/api/hr/Add_department',
//       `${process.env.REACT_APP_BASE_URL}/hr/BulkAdd_department`,
//     {
//     data:data
//   })
//     .then((response) => {
//       this.setState({
//         msg: response.data['message'],
//         err:''
//       })
//       alert("Departments Added!")
//     })
//     .catch((error) => {
//       this.setState({err: error.response.data['message'],msg:''});
//     });
//   }
//
//
//
//   render(){
//     const departItems = [];
//
//     if (this.state.depart_list.length != 0) {
//       for (let i = 0; i < this.state.depart_list.length; i++) {
//         if (this.state.search == '') {
//           departItems.push(<tr>
//             <td>{this.state.depart_list[i].name}</td>
//           </tr>);
//         } else {
//           if (this.state.depart_list[i].name.toLowerCase().includes(this.state.search)) {
//             departItems.push(<tr>
//               <td>{this.state.depart_list[i].name}</td>
//             </tr>);
//           }
//         }
//
//       }
//     }
//
//   return (
//     <div className="col-lg-10">
//
//       {this.state.err && <p>{this.state.err}</p>}
//       {this.state.msg && <p>{this.state.msg}</p>}
//                 <div className="container mx-auto" style={{ width: '30rem' }}>
//                   <CSVReader onFileLoaded={
//                     (data, fileInfo, originalFile) => {
//                    this.bulkUpload(data);
//                     }}></CSVReader>
//                   <h4 className="fw-bolder text-center">Add New Department</h4>
//                   <form className="my-2" onSubmit={this.handleSubmit}>
//                     <div className="mb-2">
//                       <label htmlFor="Name" className="form-label fw-semibold">Name</label>
//                       <input type="text" className="form-control" id="Name" onChange={(e) => this.setState({name:e.target.value})}/>
//                     </div>
//                     <button
//                       type="submit"
//                       className="btn btn-dark my-3"
//                       style={{ width: '28.5rem' }}
//                     >
//                       Add Department
//                     </button>
//                   </form>
//                   <div className="table">
//           <table className="table table-bordered">
//             <tr>
//               <th>Department Name</th>
//             </tr>
//             {departItems}
//
//           </table>
//
//         </div>
//                 </div>
//
//
//               </div>
//   );
// }}
//
// export default AddDepartment;
import React, { useState, useEffect, FormEvent } from 'react';
import CSVReader from 'react-csv-reader';
import api from '../../../api';
import axios from "axios";
interface DepartmentData {
  name: string;
  // Add other properties if needed
}
const AddDepartment: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [departList, setDepartList] = useState<{ name: string }[]>([]);
  const [err, setErr] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [search] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/add_faculty_get`
      );
      setDepartList(response.data['depart_list']);
    } catch (error) {
      // Handle error if needed
      console.log("Some error at add department", error);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/Add_department`,
        { name }
      );
      setMsg(response.data['message']);
      setErr('');
      alert("Department Added!");
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Access the response data safely
        setErr(error.response?.data['message'] || 'An error occurred');
        setMsg('');
      } else {
        // Handle non-Axios errors
        setErr('An unexpected error occurred');
        setMsg('');
      }
    }
  };

  const bulkUpload = async (data: DepartmentData[]) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/BulkAdd_department`,
        { data }
      );
      setMsg(response.data['message']);
      setErr('');
      alert("Departments Added!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Access the response data safely
        setErr(error.response?.data['message'] || 'An error occurred');
        setMsg('');
      } else {
        // Handle non-Axios errors
        setErr('An unexpected error occurred');
        setMsg('');
      }
    }
  };

  const departItems = departList
    .filter(department => search === '' || department.name.toLowerCase().includes(search.toLowerCase()))
    .map((department, index) => (
      <tr key={index}>
        <td>{department.name}</td>
      </tr>
    ));

  return (
    <div className="col-lg-10">
      {err && <p>{err}</p>}
      {msg && <p>{msg}</p>}
      <div className="container mx-auto" style={{ width: '30rem' }}>
        <CSVReader onFileLoaded={(data) => bulkUpload(data)} />
        <h4 className="fw-bolder text-center">Add New Department</h4>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="Name" className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark my-3"
            style={{ width: '28.5rem' }}
          >
            Add Department
          </button>
        </form>
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Department Name</th>
              </tr>
            </thead>
            <tbody>
              {departItems}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;