import "./Base.css";
import React, { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  // Navigate,
} from "react-router-dom";
import HRDashboard from "../dashboard/HRDashboard";
import LeaveAproval from "../hr_modul/LeaveApproval/LeaveAproval";
import LeaveBalnce from "../hr_modul/leaveBalance/LeaveBalance";
import ApprovedLeave from "../hr_modul/ApprovedLeave/ApprovedLeave";
import AddDepartment from "../hr_modul/AddDepartment/AddDepartment";
import AddDesignation from "../hr_modul/AddDesignation/AddDesignation";
import ReportGen from "../hr_modul/reportGen/ReportGen";
import MyFaculty from "../hr_modul/myFaculty/MyFaculty";
import UpdateFaculty from "../hr_modul/UpdateFaculty/UpdateFaculty";
import Logout from "../logout";
import Header from "../Header/Header";
import Navigation from "../navigation/navigation";
import Monthly from "../hr_modul/reportGen/Monthly";
import ApplyForLeaveHR from "../hr_modul/ApplyLeave/applyLeaveHr";
// import AbsentFaculty from "../hr_modul/AbsentFaculty/AbsentFaculty";
import ForgetPass from "../Header/ForgetPass";
import CancelledLeave from "../hr_modul/CancelledLeave/CancelledLeave";
// import FacultyCancelledLeave from "../hr_modul/CancelledLeave/FacultyCancelledleave";
import AddHolidays from "../hr_modul/Addholidays/Addholidays";
import ParticularFacultyReport from "../hr_modul/reportGen/ParticularFacultyReport";
import LeaveCard from "../hr_modul/reportGen/LeaveCard";
import GenerateLeaveCard from "../hr_modul/reportGen/generateLeveCard";
import api from "../../api";
import AddFaculty from "../hr_modul/AddFaculty/Addfaculty";

const HRBase: React.FC = () => {
  const [, setUser] = useState<string>("");
  // const [attendance, setAttendance] = useState<string>("");
  // const [absent, setAbsent] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
            `${process.env.REACT_APP_BASE_URL}/base_data?uid=` +
            localStorage.getItem("uid")
        );
        setUser(response.data["user"]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
      <div>
        {window.location.pathname !== "/leaveCard" && <Header />}
        <section className="rootf containers">
          {window.location.pathname !== "/leaveCard" && <Navigation />}
          <div className="dynamic">
            {window.location.pathname !== "/leaveCard" && (
                <>
                  <div className="welcome">
                    <div className="left-welcome">
                      {/*<h2 className="greet fw-bolder">Hello, {user.name}</h2>*/}
                      <p>Welcome to Dashboard</p>
                    </div>
                    <p className="greet fw-bolder">{formattedDate}</p>
                  </div>
                  <hr />
                </>
            )}
            <main className="change">
              <div className="box-c">
                <Routes>
                  <Route path="/" element={<HRDashboard />} />
                  <Route path="/Dashboard" element={<HRDashboard />} />
                  <Route path="/leaveApproval" element={<LeaveAproval />} />
                  <Route path="/AprovedLeaves" element={<ApprovedLeave />} />
                  <Route path="/cancelled_leave" element={<CancelledLeave />} />
                  <Route path="/Addfaculty" element={<AddFaculty />} />
                  <Route path="/AddDepartment" element={<AddDepartment />} />
                  <Route path="/AddDesignation" element={<AddDesignation />} />
                  <Route path="/myFaculty" element={<MyFaculty />} />
                  <Route path="/monthlyReport" element={<Monthly />} />
                  <Route
                      path="/particularFacultyReport"
                      element={<ParticularFacultyReport />}
                  />
                  <Route path="/updateFacultyinfo" element={<UpdateFaculty />} />
                  <Route path="/FacultyLeaveBalance" element={<LeaveBalnce />} />
                  <Route path="/Reports" element={<ReportGen />} />
                  <Route path="/ApplyLeave" element={<ApplyForLeaveHR />} />
                  <Route path="/resetpass" element={<ForgetPass />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/Addholiday" element={<AddHolidays />} />
                  <Route path="/leaveCard" element={<LeaveCard />} />
                  <Route path="/generateLeaveCard" element={<GenerateLeaveCard />} />
                  <Route
                      path="*"
                      element={
                        <h1>
                          404! Page Not Found. Please Check That You have Proper
                          authority To visit the page
                        </h1>
                      }
                  />
                </Routes>
              </div>
            </main>
          </div>
        </section>
      </div>
  );
};

export default HRBase;