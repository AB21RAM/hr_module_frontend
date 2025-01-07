// import api from "api";
// import React from "react";
// import { IKImage, IKContext, IKUpload } from "imagekitio-react";
// // import './login.css'
// import { Navigate } from "react-router-dom";

// class ApplyForLeave extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       leave_list: [],
//       leave_id: "",
//       from_date: "",
//       to_date: "",
//       reason: "",
//       alternate: "",
//       facultyList: "",
//       doc: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     try {
//       const response = await api.get(
//         // "http://localhost:5000/api/faculty/get_allowed_leaves?uid=" + localStorage.getItem("uid")
//         `${process.env.REACT_APP_BASE_URL}/faculty/get_allowed_leaves?uid=` + localStorage.getItem("uid")
//       );
//       this.setState({
//         leave_list: response.data["leave_list"],
//         facultyList: response.data["facultylist"],
//       });
//     } catch (error) {
//     }
//   };

//   handleSubmit = (event) => {
//     var allowed = true;
//     const end = new Date(this.state.to_date);
//     const start = new Date(this.state.from_date);

//     event.preventDefault();
//     let no_of_days = end - start;
//     no_of_days = Math.floor(no_of_days / (24 * 60 * 60 * 1000));
//     no_of_days += 1;

//     var current = new Date();
//     let valid_date = start - current;
//     valid_date = Math.floor(valid_date / (24 * 60 * 60 * 1000));
//     // valid_date+=1;
//     // if (
//     //   this.state.doc == null &&
//     //   (this.state.leave_id == 4 || this.state.leave_id == 8)
//     // ) {
//     //   this.setState({
//     //     err: "For Medical and Outdoor Duty the attachment is nessesary!",
//     //     msg: "",
//     //   });
//     // }

//     // if (no_of_days < 0) {
//     //   this.setState({ err: "Please Enter Valid Date", msg: "" });
//     //   allowed = false;
//     // }

//     // if (valid_date >= -2 && valid_date <= 0) {

//     //   if (this.state.leave_id != 4)
//     //     this.setState({
//     //       err: "Only Medical leaves can be applied after consumption of leave",
//     //       msg: "",
//     //     });
//     //   else allowed = true;
//     // }

//     // if (valid_date > 0) {
//     //   allowed = true;
//     // }

//     if (allowed) {
//       api
//         .post(
//           `${process.env.REACT_APP_BASE_URL}/faculty/Apply_leave`,
//           // "http://localhost:5000/api/faculty/Apply_leave",
//           {
//             leave_id: this.state.leave_id,
//             from_date: this.state.from_date,
//             to_date: this.state.to_date,
//             reason: this.state.reason,
//             no_of_date: no_of_days,
//             alternate: this.state.alternate,
//             uid: localStorage.getItem("uid"),
//             doc: this.state.doc,
//           }
//         )
//         .then((response) => {
//           this.setState({
//             msg: response.data["message"],
//             err: "",
//           });

//           alert(response.data.message);
//           window.location.reload();
//         })
//         .catch((error) => {
//           this.setState({ err: error.response.data["message"], msg: "" });
//         });
//     }

//   };

//   render() {
//     const publicKey = "public_gWKOuQlhuPW59VhaGTXah7GGmHU=";
//     let urlEndpoint = "https://ik.imagekit.io/getflytechnologies/";
//     const authenticationEndpoint =
//       "http://localhost:5000/api/faculty/upload_auth";
//     const leaveItems = [];
//     const facultyItems = [];

//     for (let i = 0; i < this.state.leave_list.length; i++) {
//       leaveItems.push(
//         <option value={this.state.leave_list[i].leave_id}>
//           {this.state.leave_list[i].lname}
//         </option>
//       );
//     }

//     for (let i = 0; i < this.state.facultyList.length; i++) {
//       facultyItems.push(
//         <option value={this.state.facultyList[i].faculty_id}>
//           {this.state.facultyList[i].name}
//         </option>
//       );
//     }

//     return (
//       <div className="col-lg-10">
//         {this.state.msg && <h3>{this.state.msg}</h3>}
//         <div className="container mx-auto" style={{ width: "30rem" }}>
//           <h3 className="fw-bolder text-center">Leave Application Form</h3>
//           <form className="my-2" onSubmit={this.handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="from_date" className="form-label fw-semibold">
//                 From Date:
//               </label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="from_date"
//                 onChange={(e) => this.setState({ from_date: e.target.value })}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="to_date" className="form-label fw-semibold">
//                 To Date:
//               </label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="to_date"
//                 onChange={(e) => this.setState({ to_date: e.target.value })}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="leave_id" className="form-label fw-semibold">
//                 Leave Type
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ leave_id: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {leaveItems}
//               </select>
//             </div>

//             <div className="mb-2">
//               <label htmlFor="leave_id" className="form-label fw-semibold">
//                 Alternate
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 onChange={(e) => this.setState({ alternate: e.target.value })}
//               >
//                 <option defaultValue>Open this select menu</option>
//                 {facultyItems}
//               </select>
//             </div>

//             <div className="mb-2">
//               <label htmlFor="reason" className="form-label fw-semibold">
//                 Reason:
//               </label>
//               <textarea
//                 className="form-control"
//                 id="reason"
//                 rows="3"
//                 onChange={(e) => this.setState({ reason: e.target.value })}
//               ></textarea>
//             </div>
//             <div className="mb-2">
//               <label htmlFor="reason" className="form-label fw-semibold">
//                 Attach Document
//               </label>
//               <IKContext
//                 publicKey={publicKey}
//                 urlEndpoint={urlEndpoint}
//                 authenticationEndpoint={authenticationEndpoint}
//               >
//                 <IKUpload
//                   fileName="leave_proof.jpg"
//                   tags={["tag1"]}
//                   useUniqueFileName={true}
//                   isPrivateFile={false}
//                   onSuccess={(r) => {
//                     this.setState({ doc: r.url });
//                   }}
//                 />
//               </IKContext>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-dark my-3"
//               style={{ width: "28.5rem" }}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default ApplyForLeave;

// import api from "api";
import React from "react";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
// import './login.css'
import { Navigate } from "react-router-dom";
import api from "../../../api";

class ApplyForLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leave_list: [],
      leave_id: "",
      half_full_day: "",
      from_date: "",
      to_date: "",
      reason: "",
      alternate: "",
      facultyList: "",
      doc: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await api.get(
        // "http://localhost:5000/api/faculty/get_allowed_leaves?uid=" + localStorage.getItem("uid")
        `${process.env.REACT_APP_BASE_URL}/faculty/get_allowed_leaves?uid=` +
          localStorage.getItem("uid")
      );
      this.setState({
        leave_list: response.data["leave_list"],
        facultyList: response.data["facultylist"],
      });
    } catch (error) {
    }
  };
  handleLeaveTypeChange = (selectedLeaveType) => {

    // Update state with selected leave_id
    this.setState({
      leave_id: selectedLeaveType,
      half_full_day: "",
    });

    api.get(`${process.env.REACT_APP_BASE_URL}/faculty/getLeaveCount?id=${selectedLeaveType}&uid=${localStorage.getItem('uid')}`, {
      id:selectedLeaveType,
      uid:localStorage.getItem('uid')
    }).then(
      res=>{
        if(res.data.msg)
        {
          document.getElementById('leave_app_btn').style.display = 'none';
          alert(res.data.msg);
          window.location.reload()

        }
        else if(selectedLeaveType!=8 || selectedLeaveType!='8'){
          var ct = res.data.ct;
          const end = new Date(this.state.to_date);
          const start = new Date(this.state.from_date);
          let no_of_days = Math.floor((end - start) / (24 * 60 * 60 * 1000) + 1);

          if(no_of_days>ct){
            alert("You Do Not Have Sufficient Balance Leaves To Apply fot This Leave")
            window.location.reload()
          }
        }
      }
    )
  };

  handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Calculate the number of days based on the selected date range
    const end = new Date(this.state.to_date);
    const start = new Date(this.state.from_date);
    let no_of_days = Math.floor((end - start) / (24 * 60 * 60 * 1000) + 1);

    // Deduct 0.5 days if "first_half" or "second_half" is selected
    if (
      this.state.half_full_day === "first_half" ||
      this.state.half_full_day === "second_half"
    ) {
      no_of_days -= 0.5;
    }

    // Additional validation checks
    let allowed = true;
    var current = new Date();
    let valid_date = start - current;
    valid_date = Math.floor(valid_date / (24 * 60 * 60 * 1000));

    // Check for valid date and handle other conditions...
    if (no_of_days < 0) {
      this.setState({ err: "Please Enter a Valid Date", msg: "" });
      allowed = false;
    }

    // Handle conditions related to specific leave types...
    if (valid_date >= -2 && valid_date <= 0) {
      if (this.state.leave_id !== "4") {
        this.setState({
          err: "Only Medical leaves can be applied after consumption of leave",
          msg: "",
        });
      } else {
        allowed = true;
      }
    }

    if (valid_date > 0) {
      allowed = true;
    }

    // If all conditions are met, proceed with the form submission
    if (allowed) {
      api
        .post(`${process.env.REACT_APP_BASE_URL}/faculty/Apply_leave`, {
          leave_id: this.state.leave_id,
          from_date: this.state.from_date,
          to_date: this.state.to_date,
          reason: this.state.reason,
          no_of_date: no_of_days, // Updated number of days
          alternate: this.state.alternate,
          uid: localStorage.getItem("uid"),
          doc: this.state.doc,
          half_full_day: this.state.half_full_day,
        })
        .then((response) => {
          this.setState({
            msg: response.data["message"],
            err: "",
          });

          alert(response.data.message);
          window.location.reload();
        })
        .catch((error) => {
          this.setState({ err: error.response.data["message"], msg: "" });
        });
    }
  };

  render() {
    // Inside the render() method

    const publicKey = "public_gWKOuQlhuPW59VhaGTXah7GGmHU=";
    let urlEndpoint = "https://ik.imagekit.io/getflytechnologies/";
    const authenticationEndpoint =
      "http://localhost:5000/api/faculty/upload_auth";
    const leaveItems = [];
    const facultyItems = [];

    let secondLevelOptions = null;
    if (
      this.state.leave_id == 1 ||
      this.state.leave_id == 3 ||
      this.state.leave_id == 8
    ) {
      secondLevelOptions = (
        <div className="mb-2">
          <label htmlFor="half_full_day" className="form-label fw-semibold">
            Second Level Selection:
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => this.setState({ half_full_day: e.target.value })}
          >
            <option defaultValue>Open this select menu</option>
            <option value="first_half">First Half - Half Day</option>
            <option value="second_half">Second Half - Half Day</option>
            <option value="full_day">Full Day</option>
          </select>
        </div>
      );
    }
    for (let i = 0; i < this.state.leave_list.length; i++) {
      leaveItems.push(
        <option value={this.state.leave_list[i].leave_id}>
          {this.state.leave_list[i].lname}
        </option>
      );
    }

    for (let i = 0; i < this.state.facultyList.length; i++) {
      facultyItems.push(
        <option value={this.state.facultyList[i].faculty_id}>
          {this.state.facultyList[i].name}
        </option>
      );
    }

    return (
      <div className="col-lg-10">
        {this.state.msg && <h3>{this.state.msg}</h3>}
        <div className="container mx-auto" style={{ width: "30rem" }}>
          <h3 className="fw-bolder text-center">Leave Application Form</h3>
          <form className="my-2" onSubmit={this.handleSubmit}>
            <div className="mb-2">
              <label htmlFor="from_date" className="form-label fw-semibold">
                From Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="from_date"
                onChange={(e) => this.setState({ from_date: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="to_date" className="form-label fw-semibold">
                To Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="to_date"
                onChange={(e) => this.setState({ to_date: e.target.value })}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="leave_id" className="form-label fw-semibold">
                Leave Type
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => this.handleLeaveTypeChange(e.target.value)}
              >
                <option defaultValue>Open this select menu</option>
                {leaveItems}
              </select>
            </div>
            {secondLevelOptions && (
              <div className="mb-2">
                <label
                  htmlFor="half_full_day"
                  className="form-label fw-semibold"
                >
                  Second Level Selection:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={this.state.half_full_day}
                  onChange={(e) =>
                    this.setState({ half_full_day: e.target.value })
                  }
                >
                  <option value="">Open this select menu</option>
                  <option value="first_half">First Half - Half Day</option>
                  <option value="second_half">Second Half - Half Day</option>
                  <option value="full_day">Full Day</option>
                </select>
              </div>
            )}

            <div className="mb-2">
              <label htmlFor="leave_id" className="form-label fw-semibold">
                Alternate
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => this.setState({ alternate: e.target.value })}
              >
                <option defaultValue>Open this select menu</option>
                {facultyItems}
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="reason" className="form-label fw-semibold">
                Reason:
              </label>
              <textarea
                className="form-control"
                id="reason"
                rows="3"
                onChange={(e) => this.setState({ reason: e.target.value })}
              ></textarea>
            </div>
            <div className="mb-2">
              <label htmlFor="reason" className="form-label fw-semibold">
                Attach Document
              </label>
              <IKContext
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                authenticationEndpoint={authenticationEndpoint}
              >
                <IKUpload
                  fileName="leave_proof.jpg"
                  tags={["tag1"]}
                  useUniqueFileName={true}
                  isPrivateFile={false}
                  onSuccess={(r) => {
                    this.setState({ doc: r.url });
                  }}
                />
              </IKContext>
            </div>

            <button
            id="leave_app_btn"
              type="submit"
              className="btn btn-dark my-3"
              style={{ width: "28.5rem" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ApplyForLeave;
