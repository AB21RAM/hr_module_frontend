// // import api from "api";
// import React from "react";
// import CSVReader from "react-csv-reader";
// import { Navigate } from "react-router-dom";
// import api from "../../../api";
//
// class AddHolidays extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       datetList: {},
//       id: "",
//       msg: "",
//       search: "",
//       HolidayList: [],
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
//         `${process.env.REACT_APP_BASE_URL}/hr/addHoliday`
//       );
//       this.setState({ datetList: response.data["dateList"] });
//     } catch (error) {
//     }
//
//     try {
//       const response = await api.get(
//         `${process.env.REACT_APP_BASE_URL}/hr/holidayList`
//       );
//       this.setState({ HolidayList: response.data["holidayList"] });
//     } catch (error) {
//     }
//   };
//
//   handleSubmit = (event) => {
//     event.preventDefault();
//
//     api
//       .post(`${process.env.REACT_APP_BASE_URL}/hr/addHoliday`, {
//         hname: this.state.name,
//         id: this.state.id,
//       })
//       .then((response) => {
//         this.setState({
//           msg: response.data["message"],
//           err: "",
//         });
//
//         alert("Holiday Added!");
//         window.location.reload();
//       })
//       .catch((error) => {
//         this.setState({ err: error.response.data["message"], msg: "" });
//       });
//   };
//
//   render() {
//     const dl = this.state.datetList;
//     const hl = this.state.HolidayList;
//     const departItems = [];
//     const typeList = [];
//
//     if (dl.length != 0) {
//       for (let i = 0; i < dl.length; i++) {
//         departItems.push(
//           <option value={dl[i].id}>
//             {new Date(dl[i].date_value).toLocaleDateString("en-GB")}
//           </option>
//         );
//       }
//     }
//
//     if (hl.length != 0) {
//       for (let i = 0; i < hl.length; i++) {
//         typeList.push(
//           <tr>
//             <td>{new Date(hl[i].date_value).toLocaleDateString("en-GB")}</td>
//             <td>{hl[i].holidays}</td>
//           </tr>
//         );
//       }
//     }
//
//     return (
//       <div className="col-lg-10">
//         <div className="container mx-auto" style={{ width: "30rem" }}>
//           <h4 className="fw-bolder text-center">Add New Department</h4>
//           <form className="my-2" onSubmit={this.handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="ftype" className="form-label fw-semibold">
//                 Date
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ id: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {departItems}
//               </select>
//             </div>
//             <div className="mb-2">
//               <label htmlFor="Name" className="form-label fw-semibold">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="Name"
//                 onChange={(e) => this.setState({ name: e.target.value })}
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-dark my-3"
//               style={{ width: "28.5rem" }}
//             >
//               Add Department
//             </button>
//           </form>
//           <div className="table">
//             <table className="table table-bordered">
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Designastion</th>
//               </tr>
//               {typeList}
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default AddHolidays;


import React, { useState, useEffect, FormEvent } from "react";
import api from "../../../api";
import axios from "axios";

interface DateItem {
  id: string;
  date_value: string;
}

interface HolidayItem {
  date_value: string;
  holidays: string;
}

const AddHolidays: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [datetList, setDatetList] = useState<DateItem[]>([]);
  const [id, setId] = useState<string>("");
  const [ ,setMsg] = useState<string>("");
  const [ ,setErr] = useState<string>("");
  const [holidayList, setHolidayList] = useState<HolidayItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/addHoliday`
      );
      setDatetList(response.data["dateList"]);
    } catch (error) {
      console.error("Error fetching date list", error);
    }

    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/hr/holidayList`
      );
      setHolidayList(response.data["holidayList"]);
    } catch (error) {
      console.error("Error fetching holiday list", error);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/addHoliday`,
        {
          hname: name,
          id: id,
        }
      );
      setMsg(response.data["message"]);
      setErr("");
      alert("Holiday Added!");
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Access the error message from the response
        setErr(error.response?.data["message"] || "An error occurred");
      } else {
        setErr("An unexpected error occurred");
      }
      setMsg("");
    }
  };

  return (
    <div className="col-lg-10">
      <div className="container mx-auto" style={{ width: "30rem" }}>
        <h4 className="fw-bolder text-center">Add New Department</h4>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="ftype" className="form-label fw-semibold">
              Date
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setId(e.target.value)}
            >
              <option defaultValue="">Open this select menu</option>
              {datetList.map((item) => (
                <option key={item.id} value={item.id}>
                  {new Date(item.date_value).toLocaleDateString("en-GB")}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="Name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark my-3"
            style={{ width: "28.5rem" }}
          >
            Add Department
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
            <tbody>
              {holidayList.map((item, index) => (
                <tr key={index}>
                  <td>{new Date(item.date_value).toLocaleDateString("en-GB")}</td>
                  <td>{item.holidays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddHolidays;