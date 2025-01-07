// // import React, { Component } from 'react';
// //
// // import { Link } from 'react-router-dom';
//
// // class ReportGen extends Component {
//
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       pendingList: [],
// //       from_date: '',
// //       to_date: '',
// //       search: ''
// //     };
// //   }
//
// //   componentDidMount() {
// //     this.fetchData();
// //   }
//
// //   fetchData = async () => {
// //     try {
// //       var date = '';
// //       if (this.state.from_date == '') {
// //         date = new Date();
// //         date = date.toLocaleDateString('sv-SE')
// //       }
// //       else {
// //         date = this.state.from_date;
// //       }
// //       const response = await api.post(
// //         `${process.env.REACT_APP_BASE_URL}/hr/report/daily`, { 'from_date': date }
// //       );
// //       this.setState({ pendingList: response.data['attendanceList'] });
// //       console.log(response.data)
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
//
//
// //   render() {
// //     var pendingItems = [];
//
// //     if (this.state.pendingList.length != 0) {
// //       for (let i = 0; i < this.state.pendingList.length; i++) {
// //         if (this.state.search == '') {
// //           var a = new Date(this.state.pendingList[i].date_d)
// //           pendingItems.push(<tr>
// //             <td>{a.toLocaleDateString('en-GB')}</td>
// //             <td>{this.state.pendingList[i].faculty_clg_id}</td>
// //             <td>{this.state.pendingList[i].name}</td>
// //             <td>{this.state.pendingList[i].punch_in}</td>
// //             <td>{this.state.pendingList[i].punch_out}</td>
// //             <td>{this.state.pendingList[i].working_hours}</td>
// //             <td>{this.state.pendingList[i]['On Time']}</td>
// //             <td>{this.state.pendingList[i].remark}</td>
// //           </tr>);
// //         } else {
// //           if (this.state.pendingList[i].name.toLowerCase().includes(this.state.search)) {
// //             var a = new Date(this.state.pendingList[i].date_d)
// //             pendingItems.push(<tr>
// //               <td>{a.toLocaleDateString('en-GB')}</td>
// //               <td>{this.state.pendingList[i].faculty_clg_id}</td>
// //               <td>{this.state.pendingList[i].name}</td>
// //               <td>{this.state.pendingList[i].punch_in}</td>
// //               <td>{this.state.pendingList[i].punch_out}</td>
// //               <td>{this.state.pendingList[i].working_hours}</td>
// //               <td>{this.state.pendingList[i]['On Time']}</td>
// //               <td>{this.state.pendingList[i].remark}</td>
// //             </tr>);
// //           }
// //         }
//
// //       }
// //     }
//
// //     var total = pendingItems.length;
// //     var displayItem = []
//
// //     for (let i = this.state.counter; i < this.state.counter + 10; i++) {
// //       displayItem.push(pendingItems[i]);
// //     }
//
// //     return (
// //       <>
// //         <div className="sub-main">
// //           <div className="btns justify-content-between">
// //             <h4 className="fw-bolder" >Report Generation</h4>
// //             <button><Link to='/monthlyReport'>Switch To Monthly Report</Link></button>
// //           </div>
// //           <div className="report-dates">
// //             <div className="mb-2 my-3">
// //               <label htmlFor="jod" className="form-label fw-semibold">Date</label>
// //               <input type="date" className="form-control" id="jod" onChange={(e) => this.setState({ from_date: e.target.value })} />
// //             </div>
//
// //           </div>
// //           <div className="btns">
// //             <button
// //               type="submit"
// //               className="btn my-3"
// //               // style={{ width }}
// //               onClick={this.fetchData}
// //             >
// //               Generate
// //             </button>
// //           </div>
//
// //           <div className="search_faculty">
// //             <div className="input">
// //               <i class="material-icons">search</i>
// //               {/* <span className="material-symbols-outlined"></span> */}
// //               <input type="text" placeholder="Search faculty" onChange={(e) => { this.setState({ search: e.target.value }) }} />
// //             </div>
// //           </div>
//
// //           <h4>Total Faculties: {total}</h4>
// //           <br />
// //           <div className="btns" style={{ justifyContent: "space-between" }}>
// //             {this.state.counter == 0 ? <button className="prev" disabled>Prev</button> : <button className="prev" onClick={() => this.setState({ counter: this.state.counter - 10 })}>Prev</button>}
// //             {this.state.counter >= pendingItems.length ? <button className="next" disabled>Next</button> : <button className="next" onClick={() => this.setState({ counter: this.state.counter + 10 })}>Next</button>}
// //           </div> <br />
//
// //           <div className="table">
// //             <table className="table table-bordered">
// //               <tr>
// //                 <th>Date</th>
// //                 <th>Faculty_id</th>
// //                 <th>Faculty Name</th>
// //                 <th>Punch In</th>
// //                 <th>Punch Out</th>
// //                 <th>Working Hours</th>
// //                 <th>On Time</th>
// //                 <th>Remark</th>
// //               </tr>
// //               {pendingItems}
// //             </table>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   }
// // }
//
// // export default ReportGen;
//



// import React, { Component } from 'react';
//
// import { Link } from 'react-router-dom';
// import api from '../../../api';
//
// class ReportGen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pendingList: [],
//       from_date: '',
//       to_date: '',
//       search: '',
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData = async () => {
//     try {
//       var date = '';
//       if (this.state.from_date === '') {
//         date = new Date();
//         date = date.toLocaleDateString('sv-SE');
//       } else {
//         date = this.state.from_date;
//       }
//       const response = await api.post(
//         `${process.env.REACT_APP_BASE_URL}/hr/report/daily`,
//         { from_date: date }
//       );
//       this.setState({ pendingList: response.data['attendanceList'] });
//     } catch (error) {
//     }
//   };
//
//   render() {
//     const { pendingList, search } = this.state;
//
//     const filteredItems =
//       search === ''
//         ? pendingList
//         : pendingList.filter((item) =>
//           item.name.toLowerCase().includes(search.toLowerCase())
//         );
//
//     const total = filteredItems.length;
//
//     const tableRows = filteredItems.map((item, index) => {
//       const a = new Date(item.date_d);
//       return (
//         <tr key={index}>
//           <td>{a.toLocaleDateString('en-GB')}</td>
//           <td>{item.faculty_clg_id}</td>
//           <td>{item.name}</td>
//           <td>{item.dname}</td>
//           <td>{item.punch_in}</td>
//           <td>{item.punch_out}</td>
//           <td>{item.working_hours}</td>
//           <td>{item['On Time']}</td>
//           <td>{item.remark}</td>
//         </tr>
//       );
//     });
//
//     return (
//       <>
//         <div className="sub-main">
//           <div className="btns justify-content-between">
//             <h4 className="fw-bolder">Report Generation</h4>
//             <button>
//               <Link to="/monthlyReport">Switch To Monthly Report</Link>
//             </button>
//           </div>
//           <div className="report-dates">
//             <div className="mb-2 my-3">
//               <label htmlFor="jod" className="form-label fw-semibold">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="jod"
//                 onChange={(e) => this.setState({ from_date: e.target.value })}
//               />
//             </div>
//           </div>
//           <div className="btns">
//             <button type="submit" className="btn my-3" onClick={this.fetchData}>
//               Generate
//             </button>
//           </div>
//           <div className="search_faculty">
//             <div className="input">
//               <i className="material-icons">search</i>
//               <input
//                 type="text"
//                 placeholder="Search faculty"
//                 onChange={(e) => {
//                   this.setState({ search: e.target.value });
//                 }}
//               />
//             </div>
//           </div>
//           <h4>Total Faculties: {total}</h4>
//           <br />
//           <div className="table">
//             <table className="table table-bordered">
//               <tr>
//                 <th>Date</th>
//                 <th>Faculty_id</th>
//                 <th>Faculty Name</th>
//                 <th>Deparment</th>
//                 <th>Punch In</th>
//                 <th>Punch Out</th>
//                 <th>Working Hours</th>
//                 <th>On Time</th>
//                 <th>Remark</th>
//               </tr>
//               {tableRows}
//             </table>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
//
// export default ReportGen;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';

interface AttendanceItem {
  date_d: string;
  faculty_clg_id: string;
  name: string;
  dname: string;
  punch_in: string;
  punch_out: string;
  working_hours: string;
  "On Time": string;
  remark: string;
}

const ReportGen: React.FC = () => {
  const [pendingList, setPendingList] = useState<AttendanceItem[]>([]);
  const [fromDate, setFromDate] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, [fromDate]);

  const fetchData = async () => {
    try {
      const date = fromDate || new Date().toLocaleDateString('sv-SE');

      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/report/daily`,
        { from_date: date }
      );
      setPendingList(response.data['attendanceList']);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredItems = search === ''
    ? pendingList
    : pendingList.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

  const total = filteredItems.length;

  const tableRows = filteredItems.slice(counter, counter + 10).map((item, index) => {
    const a = new Date(item.date_d);
    return (
      <tr key={index}>
        <td>{a.toLocaleDateString('en-GB')}</td>
        <td>{item.faculty_clg_id}</td>
        <td>{item.name}</td>
        <td>{item.dname}</td>
        <td>{item.punch_in}</td>
        <td>{item.punch_out}</td>
        <td>{item.working_hours}</td>
        <td>{item['On Time']}</td>
        <td>{item.remark}</td>
      </tr>
    );
  });

  return (
    <div className="sub-main">
      <div className="btns justify-content-between">
        <h4 className="fw-bolder">Report Generation</h4>
        <button>
          <Link to="/monthlyReport">Switch To Monthly Report</Link>
        </button>
      </div>
      <div className="report-dates">
        <div className="mb-2 my-3">
          <label htmlFor="jod" className="form-label fw-semibold">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="jod"
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
      </div>
      <div className="btns">
        <button type="submit" className="btn my-3" onClick={fetchData}>
          Generate
        </button>
      </div>
      <div className="search_faculty">
        <div className="input">
          <i className="material-icons">search</i>
          <input
            type="text"
            placeholder="Search faculty"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <h4>Total Faculties: {total}</h4>
      <br />
      <div className="btns" style={{ justifyContent: "space-between" }}>
        <button
          className="prev"
          onClick={() => setCounter(Math.max(0, counter - 10))}
          disabled={counter === 0}
        >
          Prev
        </button>
        <button
          className="next"
          onClick={() => setCounter(counter + 10)}
          disabled={counter + 10 >= total}
        >
          Next
        </button>
      </div>
      <br />
      <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Faculty_id</th>
              <th>Faculty Name</th>
              <th>Department</th>
              <th>Punch In</th>
              <th>Punch Out</th>
              <th>Working Hours</th>
              <th>On Time</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportGen;


