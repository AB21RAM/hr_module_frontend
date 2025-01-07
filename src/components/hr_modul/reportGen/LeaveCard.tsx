// // import api from "api";
// import React, { Component } from "react";
// import api from "../../../api";
//
// class LeaveCard extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             LeaveCards:[],
//         }
//     }
//
//     componentDidMount=async()=>{
//         const searchParams = new URLSearchParams(window.location.search);
//         const myParamValue = searchParams.get('id');
//         this.getSingleFacultyData(myParamValue);
//     }
//
//
//     getSingleFacultyData=async(myParamValue)=>{
//         try{
//             const { data } = await api.post(`${process.env.REACT_APP_BASE_URL}/hr/report/getLeaveCard`,{id:myParamValue},{
//                 headers: { Authorization: localStorage.getItem('token')}
//             });
//             if (data){
//                 this.setState({LeaveCards:data.data})
//             }
//         }
//         catch(err){
//             console.log(err)
//             alert('Something Went Wrong!');
//         }
//     }
//
//     handlePrint=async(e)=>{
//         const div = document.getElementById('print')
//         div.style.display = 'none';
//
//         window.print();
//
//         div.style.display = 'block';
//     }
//
//     render(){
//         const {LeaveCards} = this.state;
//
//         let slips = [];
//
//         LeaveCards.forEach(e=>{
//             slips.push(
//                   <>
//                   <tr>
//                     <td>{e.from_date}</td>
//                     <td>{e.to_date}</td>
//                     <td>{e.lname}</td>
//                     <td>{e.no_of_days}</td>
//                     <td>{e.balance_leave}</td>
//                   </tr>
//                   </>
//             )
//
//         })
//
//
//         return(
//             <>
//             <div className="container">
//                 <div className="btns d-flex w-100 justify-content-between">
//                     <button id='print' className="btn btn-primary mt-3" onClick={(e)=>{this.handlePrint(e)}}>Print</button>
//                 </div>
//
//             </div>
//             {
//                 LeaveCards.length>0 ?
//                 <div className="container mt-3 text-class">
//                 <h5 className="text-center"><strong>Vasantdada Patil Pratishthan's College of Engineering and Visual Arts</strong></h5>
//                 <h6 className="text-center">Eastern Express Highway Near Everad Nagar, Sion-Chunabhatti</h6>
//
//                 <table className="table table-sm w-100 text-class">
//                     <tr>
//                         <td>
//                             <strong>Branch:</strong> {LeaveCards[0].dname}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <strong>EMP Code :</strong> {LeaveCards[0].faculty_clg_id}
//                         </td>
//                         <td>
//                             <strong>Name:</strong> {LeaveCards[0].name}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <strong>Department :</strong> {LeaveCards[0].dname}
//                         </td>
//                         <td>
//                             <strong>Designation:</strong> {LeaveCards[0].role}
//                         </td>
//                         <td>
//                             <strong>Division:</strong> {LeaveCards.division}
//                         </td>
//                     </tr>
//                 </table>
//                 <hr />
//
//                 <table className="table table-sm w-100 text-class ex">
//                     <tr>
//                         <th>From Date</th>
//                         <th>To Date</th>
//                         <th>Leave Name</th>
//                         <th>Number of Days</th>
//                         <th>Balance Leave</th>
//                     </tr>
//                     {slips}
//                 </table>
//
//                 <strong>Note:</strong><p>This is computer generated leave card no signature or stamp is required</p>
//             </div>
//             :
//             <></>
//             }
//
//
//             </>
//         )
//     }
// }
//
// export default LeaveCard;

import React, { useState, useEffect } from "react";
import api from "../../../api";

interface LeaveCardData {
  from_date: string;
  to_date: string;
  lname: string;
  no_of_days: number;
  balance_leave: number;
  dname: string;
  faculty_clg_id: string;
  name: string;
  role: string;
  division: string;
}

const LeaveCard: React.FC = () => {
  const [leaveCards, setLeaveCards] = useState<LeaveCardData[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const myParamValue = searchParams.get('id');
    if (myParamValue) {
      getSingleFacultyData(myParamValue);
    }
  }, []);

  const getSingleFacultyData = async (myParamValue: string) => {
    try {
      const { data } = await api.post(
        `${process.env.REACT_APP_BASE_URL}/hr/report/getLeaveCard`,
        { id: myParamValue },
        {
          headers: { Authorization: localStorage.getItem('token') || '' }
        }
      );
      if (data) {
        setLeaveCards(data.data);
      }
    } catch (err) {
      console.error(err);
      alert('Something Went Wrong!');
    }
  };

  const handlePrint = () => {
    const div = document.getElementById('print');
    if (div) {
      div.style.display = 'none';
      window.print();
      div.style.display = 'block';
    }
  };

  return (
    <>
      <div className="container">
        <div className="btns d-flex w-100 justify-content-between">
          <button id='print' className="btn btn-primary mt-3" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
      {leaveCards.length > 0 ? (
        <div className="container mt-3 text-class">
          <h5 className="text-center">
            <strong>Vasantdada Patil Pratishthan's College of Engineering and Visual Arts</strong>
          </h5>
          <h6 className="text-center">Eastern Express Highway Near Everad Nagar, Sion-Chunabhatti</h6>

          <table className="table table-sm w-100 text-class">
            <tbody>
              <tr>
                <td>
                  <strong>Branch:</strong> {leaveCards[0].dname}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>EMP Code :</strong> {leaveCards[0].faculty_clg_id}
                </td>
                <td>
                  <strong>Name:</strong> {leaveCards[0].name}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Department :</strong> {leaveCards[0].dname}
                </td>
                <td>
                  <strong>Designation:</strong> {leaveCards[0].role}
                </td>
                <td>
                  <strong>Division:</strong> {leaveCards[0].division}
                </td>
              </tr>
            </tbody>
          </table>
          <hr />

          <table className="table table-sm w-100 text-class ex">
            <thead>
              <tr>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Name</th>
                <th>Number of Days</th>
                <th>Balance Leave</th>
              </tr>
            </thead>
            <tbody>
              {leaveCards.map((e, index) => (
                <tr key={index}>
                  <td>{e.from_date}</td>
                  <td>{e.to_date}</td>
                  <td>{e.lname}</td>
                  <td>{e.no_of_days}</td>
                  <td>{e.balance_leave}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <strong>Note:</strong>
          <p>This is a computer-generated leave card; no signature or stamp is required.</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LeaveCard;