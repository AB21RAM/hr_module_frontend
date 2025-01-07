import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import api from '../../../api';

class Leave_history extends Component {

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
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BASE_URL}/faculty/leave_hisotry?uid=${localStorage.getItem('uid')}`
      );
      this.setState({ pendingList: response.data['leave'] });
    } catch (error) {
    }
  };

  CancelLeave = async (id) =>{
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BASE_URL}/faculty/cancel_leave`,{id:id}
      );
      alert('Leave Has been Canceled');
      window.location.reload();
    } catch (error) {
    }
  }


  render() {
    var pendingItems = [];
    if(this.state.pendingList!=null){
      if (this.state.pendingList.length > 0) {
        for (let i = 0; i < this.state.pendingList.length; i++) {
          if (this.state.search == '') {
            pendingItems.push(<tr>
             <td>{i+1}</td>
                  <td>{new Date(this.state.pendingList[i].from_date).toLocaleDateString('en-GB')}</td>
                  <td>{new Date(this.state.pendingList[i].to_date).toLocaleDateString('en-GB')}</td>
                  <td>{this.state.pendingList[i].lname}</td>
                  <td>{this.state.pendingList[i].reason}</td>
                  <td>{this.state.pendingList[i].status_alternate==1 ? <>Approved</> : (this.state.pendingList[i].status_alternate==2 ? <>Denied</> : <>Pending</>)}</td>
                  <td>{(this.state.pendingList[i].signed_by_hod!=0 && this.state.pendingList[i].signed_by_hod!=2) ? <>Approved</> : (this.state.pendingList[i].signed_by_hod==2 ? <>Denied</> : <>Pending</>)}</td>
                  <td>{this.state.pendingList[i].status==1 ? <>Approved</> : (this.state.pendingList[i].status==2 ? <>Denied</> : <>{(this.state.pendingList[i].status==3 ? <>Cancelled Leave</> : <>Pending</>)}</>)}</td>
                  <td>{this.state.pendingList[i].status==1 ? <>Leave Taken</> : (this.state.pendingList[i].status==2 ? <>Denied</> : <><button type="button" className='btn btn-danger' onClick={(e)=>{this.CancelLeave(this.state.pendingList[i].leave_app_id)}}>Cancel</button></>)}</td>
              </tr>);
          } 
  
        }
      }
    }
   
    return (
      <>
        <div className="sub-main">
        <h4 className="fw-bolder">My Leaves</h4>
        


          <div className="table">
            <table className="table table-bordered">
              <tr>
                <th>Sr No</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>Alternate Approval Status</th>
                <th>Approved by HOD</th>
                <th>Approval Status</th>
                <th>Cancel Leave</th>
              </tr>
              {pendingItems}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Leave_history;

