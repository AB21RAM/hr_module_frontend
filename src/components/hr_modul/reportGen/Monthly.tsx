// import React, { Component } from 'react';
//
// import { Link } from 'react-router-dom';
// import api from '../../../api';
//
// class Monthly extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       pendingList: [],
//       from_date: '',
//       to_date: '',
//       search: ''
//     };
//   }
//
//   componentDidMount() {
//     // this.fetchData();
//   }
//
//   fetchData = async () => {
//     try {
//       if(this.state.from_date=='' || this.state.to_date==''){
//         alert('Please Select Dates.')
//       }else{
//         const response = await api.post(
//           `${process.env.REACT_APP_BASE_URL}/hr/report/monthlyReport`, {'startDate': this.state.from_date, 'endDate':this.state.to_date }
//         );
//         const blob = new Blob([response.data], { type: 'text/csv' });
//         const csvURL = URL.createObjectURL(blob);
//         const downloadLink = document.createElement('a');
//         downloadLink.href = csvURL;
//         downloadLink.download = 'MonthlyReport.csv';
//         downloadLink.click();
//         URL.revokeObjectURL(csvURL);
//         downloadLink.remove();
//       }
//     } catch (error) {
//     }
//   };
//
//   fetchWorkingHours = async () => {
//     try {
//       if(this.state.from_date=='' || this.state.to_date==''){
//         alert('Please Select Dates.')
//       }else{
//         const response = await api.post(
//           `${process.env.REACT_APP_BASE_URL}/hr/report/workingHours`, {'startDate': this.state.from_date, 'endDate':this.state.to_date }
//         );
//         const blob = new Blob([response.data], { type: 'text/csv' });
//         const csvURL = URL.createObjectURL(blob);
//         const downloadLink = document.createElement('a');
//         downloadLink.href = csvURL;
//         downloadLink.download = 'WorkingHoursReport.csv';
//         downloadLink.click();
//         URL.revokeObjectURL(csvURL);
//         downloadLink.remove();
//       }
//     } catch (error) {
//     }
//   };
//
//
//   render() {
//     var pendingItems = [];
//
//     // if (this.state.pendingList.length != 0) {
//     //   for (let i = 0; i < this.state.pendingList.length; i++) {
//     //     if (this.state.search == '') {
//     //         var a = new Date(this.state.pendingList[i].date_d)
//     //         pendingItems.push(<tr>
//     //         <td>{this.state.pendingList[i].name}</td>
//     //         <td>{this.state.pendingList[i].punch_in}</td>
//     //         <td>{this.state.pendingList[i].punch_out}</td>
//     //           <td>{a.toLocaleDateString('en-GB')}</td>
//     //       </tr>);
//     //     } else {
//     //       if (this.state.pendingList[i].name.toLowerCase().includes(this.state.search)) {
//     //         var a = new Date(this.state.pendingList[i].date_d)
//     //         pendingItems.push(<tr>
//     //           <td>{this.state.pendingList[i].name}</td>
//     //           <td>{this.state.pendingList[i].punch_in}</td>
//     //           <td>{this.state.pendingList[i].punch_out}</td>
//     //           <td>{a.toLocaleDateString('en-GB')}</td>
//     //         </tr>);
//     //       }
//     //     }
//
//     //   }
//     // }
//
//     // var total = pendingItems.length;
//     // var displayItem = []
//
//     // for(let i = this.state.counter; i<this.state.counter+10;i++){
//     //   displayItem.push(pendingItems[i]);
//     // }
//
//     return (
//       <>
//         <div className="sub-main">
//         <div className="btns justify-content-between">
//         <h4 className="fw-bolder" >Report Generation</h4>
//         <button><Link to='/Reports'>Switch To Daily Report</Link></button>
//         </div>
//           <div className="report-dates">
//             <div className="mb-2 my-3">
//               <label htmlFor="jod" className="form-label fw-semibold">From Date</label>
//               <input type="date" className="form-control" id="jod" onChange={(e) => this.setState({ from_date: e.target.value })} />
//             </div>
//             <div className="mb-2 my-3">
//               <label htmlFor="jod" className="form-label fw-semibold">To Date</label>
//               <input type="date" className="form-control" id="jod" onChange={(e) => this.setState({ to_date: e.target.value })} />
//             </div>
//
//           </div>
//           <div className="btns">
//           <button
//               type="submit"
//               className="btn my-3"
//               // style={{ width }}
//               onClick={this.fetchData}
//             >
//               Monthly Report
//             </button>
//
//             <button
//               type="submit"
//               className="btn my-3"
//               // style={{ width }}
//               onClick={this.fetchWorkingHours}
//             >
//               Working Hours Report
//             </button>
//           </div>
//
//
//
//           {/* <div className="search_faculty">
//             <div className="input">
//               <i class="material-icons">search</i>
//               {/* <span className="material-symbols-outlined"></span> */}
//               {/* <input type="text" placeholder="Search faculty" onChange={(e) => { this.setState({ search: e.target.value }) }} />
//             </div>
//           </div> */}
//
//         {/* //   <h4>Total Faculties: {total}</h4>
//         //   <br />
//         // <div className="btns" style={{justifyContent:"space-between"}}>
//         // {this.state.counter==0 ? <button className="prev" disabled>Prev</button> : <button className="prev" onClick={()=>this.setState({counter:this.state.counter-10})}>Prev</button>}
//         //   {this.state.counter>=pendingItems.length? <button className="next" disabled>Next</button> : <button className="next" onClick={()=>this.setState({counter:this.state.counter+10})}>Next</button>}
//         // </div> <br />
//
//         //   <div className="table">
//         //     <table className="table table-bordered">
//         //       <tr>
//         //         <th>Faculty Name</th>
//         //         <th>Punch In</th>
//         //         <th>Punch Out</th>
//         //         <th>Remark</th>
//         //         <th>Date</th>
//         //       </tr>
//         //       {pendingItems}
//         //     </table>
//           </div> */}
//         </div>
//       </>
//     );
//   }
// }
//
// export default Monthly;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';

// interface PendingItem {
//   name: string;
//   punch_in: string;
//   punch_out: string;
//   date_d: string;
// }

const Monthly: React.FC = () => {
  // const [pendingList, setPendingList] = useState<PendingItem[]>([]);
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  // const [search, setSearch] = useState<string>('');

  const fetchData = async () => {
    try {
      if (fromDate === '' || toDate === '') {
        alert('Please Select Dates.');
      } else {
        const response = await api.post(
          `${process.env.REACT_APP_BASE_URL}/hr/report/monthlyReport`,
          { startDate: fromDate, endDate: toDate }
        );
        const blob = new Blob([response.data], { type: 'text/csv' });
        const csvURL = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = csvURL;
        downloadLink.download = 'MonthlyReport.csv';
        downloadLink.click();
        URL.revokeObjectURL(csvURL);
        downloadLink.remove();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWorkingHours = async () => {
    try {
      if (fromDate === '' || toDate === '') {
        alert('Please Select Dates.');
      } else {
        const response = await api.post(
          `${process.env.REACT_APP_BASE_URL}/hr/report/workingHours`,
          { startDate: fromDate, endDate: toDate }
        );
        const blob = new Blob([response.data], { type: 'text/csv' });
        const csvURL = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = csvURL;
        downloadLink.download = 'WorkingHoursReport.csv';
        downloadLink.click();
        URL.revokeObjectURL(csvURL);
        downloadLink.remove();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Render pending items based on search criteria
  // const pendingItems = pendingList
  //   .filter(item => search === '' || item.name.toLowerCase().includes(search.toLowerCase()))
  //   .map((item, index) => {
  //     const date = new Date(item.date_d);
  //     return (
  //       <tr key={index}>
  //         <td>{item.name}</td>
  //         <td>{item.punch_in}</td>
  //         <td>{item.punch_out}</td>
  //         <td>{date.toLocaleDateString('en-GB')}</td>
  //       </tr>
  //     );
  //   });

  return (
    <div className="sub-main">
      <div className="btns justify-content-between">
        <h4 className="fw-bolder">Report Generation</h4>
        <button>
          <Link to="/Reports">Switch To Daily Report</Link>
        </button>
      </div>
      <div className="report-dates">
        <div className="mb-2 my-3">
          <label htmlFor="fromDate" className="form-label fw-semibold">From Date</label>
          <input
            type="date"
            className="form-control"
            id="fromDate"
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="mb-2 my-3">
          <label htmlFor="toDate" className="form-label fw-semibold">To Date</label>
          <input
            type="date"
            className="form-control"
            id="toDate"
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>
      <div className="btns">
        <button type="submit" className="btn my-3" onClick={fetchData}>
          Monthly Report
        </button>
        <button type="submit" className="btn my-3" onClick={fetchWorkingHours}>
          Working Hours Report
        </button>
      </div>
      {/* Uncomment and implement search functionality if needed */}
      {/* <div className="search_faculty">
        <div className="input">
          <i className="material-icons">search</i>
          <input
            type="text"
            placeholder="Search faculty"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div> */}
      {/* Uncomment and implement table rendering if needed */}
      {/* <div className="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Punch In</th>
              <th>Punch Out</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pendingItems}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Monthly;
