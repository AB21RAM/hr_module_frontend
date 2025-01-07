import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import api from '../../../api';

class MyPunchRecord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pendingList: [],
      from_date: '',
      to_date: '',
      search: ''
    };
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/report/myPunchReport`,
        {
          startDate: this.state.from_date,
          endDate: this.state.to_date,
          faculty_clg_id: localStorage.getItem('uid'), // Ensure the correct key is used
        }
      );
      this.setState({ pendingList: response.data['attendanceList'] });
    } catch (error) {
    }
  };


render() {
    var pendingItems = [];
    if(this.state.pendingList!=null){
      if (this.state.pendingList.length > 0) {
        for (let i = 0; i < this.state.pendingList.length; i++) {
          if (this.state.search == '') {
              var a = new Date(this.state.pendingList[i].Date)
            pendingItems.push(<tr>
            <td>{this.state.pendingList[i]['Name']}</td>
                <td>{this.state.pendingList[i]['Punch In Time']}</td>
                <td>{this.state.pendingList[i]['Punch Out Time']}</td>
                <td>{this.state.pendingList[i].Date}</td>
            </tr>);
          } else {
            if (this.state.pendingList[i].name.toLowerCase().includes(this.state.search)) {
              var a = new Date(this.state.pendingList[i].date_d)
              pendingItems.push(<tr>
                <td>{this.state.pendingList[i]['Name']}</td>
                <td>{this.state.pendingList[i]['Punch In Time']}</td>
                <td>{this.state.pendingList[i]['Punch Out Time']}</td>
                <td>{this.state.pendingList[i].Date}</td>
              </tr>);
            }
          }
  
        }
      }
    }
   
    return (
      <>
        <div className="sub-main">
        <h4 className="fw-bolder">Attendance Record</h4>
        <div className="report-dates">
            <div className="mb-2 my-3">
              <label htmlFor="jod" className="form-label fw-semibold">From Date</label>
              <input type="date" className="form-control" id="jod" onChange={(e) => this.setState({ from_date: e.target.value })} />
            </div>
            <div className="mb-2 my-3">
              <label htmlFor="jod" className="form-label fw-semibold">To Date</label>
              <input type="date" className="form-control" id="jod" onChange={(e) => this.setState({ to_date: e.target.value })} />
            </div>
         
          </div>
          <div className="btns">
          <button
              type="submit"
              className="btn my-3"
              // style={{ width }}
              onClick={this.fetchData}
            >
              Fetch
            </button>
          </div>


          <div className="table">
            <table className="table table-bordered">
              <tr>
                <th>Name</th>
                <th>Punch In</th>
                <th>Punch Out</th>
                {/* <th>Remark</th> */}
                <th>Date</th>
              </tr>
              {pendingItems}
            </table>
          </div>
        </div>
      </>
    );
  }
}
export default MyPunchRecord;
