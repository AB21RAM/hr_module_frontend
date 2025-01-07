import React, { useState, useEffect } from "react";
import "./style.css";
import api from "../../api";

interface AttendanceItem {
  faculty_clg_id: string;
  name: string;
  dname: string;
  punch_in: string;
  punch_out: string;
  working_hours: string;
  "On Time": string;
  remark: string;
}
interface AlternateItem {
  // Define the properties of an alternate item here
  id: string;
  name: string;
  // Add other properties as needed
}
const HRDashboard: React.FC = () => {
  // const [user, setUser] = useState<string>("");
  const [attendance, setAttendance] = useState<string>("");
  const [absent, setAbsent] = useState<string>("");
  const [, setAlternateList] = useState<AlternateItem[]>([]);
  const [attendanceList, setAttendanceList] = useState<AttendanceItem[]>([]);
  const [absentList, setAbsentList] = useState<AttendanceItem[]>([]);
  const [atdClicked, setAtdClicked] = useState<number>(0);
  const [apClicked, setApClicked] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("isLogin") === undefined) {
        window.location.reload();
      } else {
        try {
          const response = await api.get(

              // `${process.env.REACT_APP_BASE_URL}/hr/dashboard`
              `http://127.0.0.1:5001/api/hr/dashboard`
          );
          setAttendance(response.data["attendance"]);
          setAbsent(response.data["absent"]);
          setAlternateList(response.data["alternate_list"]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  const fetchAttendance = async () => {
    try {
      setAtdClicked(1);
      setApClicked(0);
      const date = new Date().toLocaleDateString("sv-SE");

      const response = await api.post(
          `${process.env.REACT_APP_BASE_URL}/hr/report/daily`,
          { from_date: date }
      );
      setAttendanceList(response.data["attendanceList"]);
      setAbsentList([]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAbsent = async () => {
    try {
      setAtdClicked(0);
      setApClicked(1);
      const date = new Date().toLocaleDateString("sv-SE");

      const response = await api.post(
          `${process.env.REACT_APP_BASE_URL}/hr/report/daily_absent`,
          { from_date: date }
      );
      setAbsentList(response.data["attendanceList"]);
      setAttendanceList([]);
    } catch (error) {
      console.error(error);
    }
  };

  const filter =
      attendanceList.length > 0 ? attendanceList : absentList.length > 0 ? absentList : [];

  const tableRows = filter.map((item, index) => {
    const a = new Date();
    return (
        <tr key={index}>
          <td>{a.toLocaleDateString("en-GB")}</td>
          <td>{item.faculty_clg_id}</td>
          <td>{item.name}</td>
          <td>{item.dname}</td>
          <td>{item.punch_in}</td>
          <td>{item.punch_out}</td>
          <td>{item.working_hours}</td>
          <td>{item["On Time"]}</td>
          <td>{item.remark}</td>
        </tr>
    );
  });

  return (
      <div className="main" style={{ flexDirection: "column" }}>
        <div className="row">
          <div className="col-lg-4 mx-2 rectangle" onClick={fetchAttendance}>
            <h4>Faculties Present</h4>
            <h2>{attendance}</h2>
          </div>
          <div className="col-lg-4 mx-2 rectangle" onClick={fetchAbsent}>
            <h4>Faculties Absent</h4>
            <h2>{absent}</h2>
          </div>
        </div>

        {(atdClicked === 1 || apClicked === 1) && (
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
        )}
      </div>
  );
};

export default HRDashboard;