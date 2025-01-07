//
// import React from 'react';
// // import './login.css'
// import CSVReader from 'react-csv-reader'
// import {Navigate} from 'react-router-dom';
// import api from '../../../api';
//
// class AddDesignation extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:'',
//       ftype_list:[],
//       role:[],
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
//       this.setState({role:response.data['role']});
//     } catch (error) {
//     }
//   };
//
//
//   handleSubmit = (event) =>{
//     event.preventDefault();
//
//     api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/Add_designation`,
//         // 'http://localhost:5000/api/hr/Add_designation',
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
//       `${process.env.REACT_APP_BASE_URL}/hr/BulkAdd_designation`,
//       // 'http://localhost:5000/api/hr/Add_designation',
//     {
//    data:data
//   })
//     .then((response) => {
//       this.setState({
//         msg: response.data['message'],
//         err:''
//       })
//
//       return true;
//     })
//     .catch((error) => {
//       this.setState({err: error.response.data['message'],msg:''});
//     });
//   }
//
//
//
//   render(){
//     const typeList = [];
//
//     if (this.state.role.length>0) {
//       for (let i = 0; i < this.state.role.length; i++) {
//         if (this.state.search == '') {
//           typeList.push(<tr>
//               <td>{i}</td>
//             <td>{this.state.role[i].name}</td>
//           </tr>);
//         } else {
//           if (this.state.role[i].name.toLowerCase().includes(this.state.search)) {
//             typeList.push(<tr>
//               <td>{i}</td>
//               <td>{this.state.role[i].name}</td>
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
//                       data.forEach((element)=>{
//                         this.bulkUpload(element);
//                       })
//                     }}></CSVReader>
//                   <h4 className="fw-bolder text-center">Add New Designastion</h4>
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
//                       Add Designastion
//                     </button>
//                   </form>
//                   <div className="table">
//           <table className="table table-bordered">
//             <tr>
//               <th>Sr No.</th>
//               <th>Designastion</th>
//             </tr>
//             {typeList}
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
// export default AddDesignation;
import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader';
import api from '../../../api';
import axios from "axios";

interface Role {
  name: string;
}
interface DesignationData {
  // Define the properties of the data structure here
  // For example, if each element has a 'name' property:
  name: string;
  // Add other properties as needed
}

const AddDesignation: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<Role[]>([]);
  const [err, setErr] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [search, ] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_BASE_URL}/hr/add_faculty_get`);
        setRole(response.data['role']);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await api.post(`${process.env.REACT_APP_BASE_URL}/hr/Add_designation`, { name });
      setMsg(response.data['message']);
      setErr('');
      alert("Department Added!");
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErr(error.response?.data['message'] || 'An error occurred');
        setMsg('');
      } else {
        setErr('An unexpected error occurred');
        setMsg('');
      }
    }
  };

  const bulkUpload = async (data: DesignationData[]): Promise<void> => {
    try {
      const response = await api.post(
          `${process.env.REACT_APP_BASE_URL}/hr/BulkAdd_designation`,
          { data }
      );
      setMsg(response.data['message']);
      setErr('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErr(error.response?.data['message'] || 'An error occurred');
        setMsg('');
      } else {
        setErr('An unexpected error occurred');
        setMsg('');
      }
    }
  };
  const typeList = role
    .filter(r => search === '' || r.name.toLowerCase().includes(search.toLowerCase()))
    .map((r, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{r.name}</td>
      </tr>
    ));

  return (
    <div className="col-lg-10">
      {err && <p>{err}</p>}
      {msg && <p>{msg}</p>}
      <div className="container mx-auto" style={{ width: '30rem' }}>
        <CSVReader onFileLoaded={(data) => data.forEach(element => bulkUpload(element))} />
        <h4 className="fw-bolder text-center">Add New Designation</h4>
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
          <button type="submit" className="btn btn-dark my-3" style={{ width: '28.5rem' }}>
            Add Designation
          </button>
        </form>
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>{typeList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddDesignation;