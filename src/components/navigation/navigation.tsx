//
// import "./navigation.css";
// import {  Link} from "react-router-dom";
//
// const Navigation = () => {
//   return (
//     <section className="hero">
//       <nav className="navLinks" id="navL">
//         <ul>
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">storage</i>&nbsp;
//               <Link to="/Reports">Reports</Link>
//             </li>
//           )}
//
// {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">storage</i>&nbsp;
//               <Link to="/GenerateLeaveCard">Leave Card</Link>
//             </li>
//           )}
//
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">storage</i>&nbsp;
//               <Link to="/Addholiday">AddHoliday</Link>
//             </li>
//           )}
//
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">group_add</i>&nbsp;
//               <Link to="/Addfaculty">Add faculty</Link>
//             </li>
//           )}
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">group_add</i>&nbsp;
//               <Link to="/cancelled_leave">Cancelled leaves</Link>
//             </li>
//           )}
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">group_add</i>&nbsp;
//               <Link to="/particularFacultyReport">
//                 Particular Faculty Report
//               </Link>
//             </li>
//           )}
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">group_add</i>&nbsp;
//               <Link to="/AddDepartment">Add Deparment</Link>
//             </li>
//           )}
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">group_add</i>&nbsp;
//               <Link to="/AddDesignation">Add Designation</Link>
//             </li>
//           )}
//           {localStorage.getItem("user_type") == 1 && (
//             <li>
//               <i class="material-icons">group_add</i>&nbsp;
//               <Link to="/myFaculty">My Faculty</Link>
//             </li>
//           )}
//           {localStorage.getItem("user_type") == 1 && (
//             <>
//               <li>
//                 <i className="fa-solid fa-user-plus"></i>&nbsp;
//                 <Link to="/FacultyLeaveBalance">Faculty Leave Balance</Link>
//               </li>
//               <li>
//                 <i className="fa-solid fa-user-plus"></i>&nbsp;
//                 <Link to="/ApplyLeave">Apply Leave</Link>
//               </li>
//             </>
//           )}
//           {localStorage.getItem("user_type") == 2 && (
//             <>
//               {" "}
//               <li>
//                 <i className="fa-solid fa-user-plus"></i>&nbsp;
//                 <Link to="/applyForLeave">Leave Application</Link>
//               </li>
//               <li>
//                 <i className="fa-solid fa-user-plus"></i>&nbsp;
//                 <Link to="/myleaves">My Leaves</Link>
//               </li>
//               <li>
//                 <i className="fa-solid fa-user-plus"></i>&nbsp;
//                 <Link to="/MyPunchRecord">My Punch Record</Link>
//               </li>
//               <li>
//                 <i className="fa-solid fa-user-plus"></i>&nbsp;
//                 <Link to="faculty_cancelled_leave">
//                   Added or Deducted leave History
//                 </Link>
//               </li>
//             </>
//           )}
//
//           {localStorage.getItem("user_type") == 1 ? (
//             <li>
//               <i class="material-icons">approval</i>&nbsp;
//               <Link to="/leaveApproval">Faculty Leave</Link>
//             </li>
//           ) : (
//             localStorage.getItem("role") <= 2 && (
//               <li>
//                 <i className="fa-solid fa-user-minus"></i>&nbsp;
//                 <Link to="/leaveApproval">Faculty Leave</Link>
//               </li>
//             )
//           )}
//
//           <li>
//             <i class="material-icons">logout</i>&nbsp;
//             <Link to="/logout">Logout</Link>
//           </li>
//         </ul>
//
//         <p>Getfly Technologies</p>
//       </nav>
//     </section>
//   );
// };
//
// export default Navigation;


import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const userType = localStorage.getItem("user_type");
  const role = localStorage.getItem("role");

  return (
    <section className="hero">
      <nav className="navLinks" id="navL">
        <ul>
          {userType === "1" && (
            <>
              <li>
                <i className="material-icons">storage</i>&nbsp;
                <Link to="/Reports">Reports</Link>
              </li>
              <li>
                <i className="material-icons">storage</i>&nbsp;
                <Link to="/GenerateLeaveCard">Leave Card</Link>
              </li>
              <li>
                <i className="material-icons">storage</i>&nbsp;
                <Link to="/Addholiday">AddHoliday</Link>
              </li>
              <li>
                <i className="material-icons">group_add</i>&nbsp;
                <Link to="/Addfaculty">Add faculty</Link>
              </li>
              <li>
                <i className="material-icons">group_add</i>&nbsp;
                <Link to="/cancelled_leave">Cancelled leaves</Link>
              </li>
              <li>
                <i className="material-icons">group_add</i>&nbsp;
                <Link to="/particularFacultyReport">
                  Particular Faculty Report
                </Link>
              </li>
              <li>
                <i className="material-icons">group_add</i>&nbsp;
                <Link to="/AddDepartment">Add Department</Link>
              </li>
              <li>
                <i className="material-icons">group_add</i>&nbsp;
                <Link to="/AddDesignation">Add Designation</Link>
              </li>
              <li>
                <i className="material-icons">group_add</i>&nbsp;
                <Link to="/myFaculty">My Faculty</Link>
              </li>
              <li>
                <i className="fa-solid fa-user-plus"></i>&nbsp;
                <Link to="/FacultyLeaveBalance">Faculty Leave Balance</Link>
              </li>
              <li>
                <i className="fa-solid fa-user-plus"></i>&nbsp;
                <Link to="/ApplyLeave">Apply Leave</Link>
              </li>
            </>
          )}
          {userType === "2" && (
            <>
              <li>
                <i className="fa-solid fa-user-plus"></i>&nbsp;
                <Link to="/applyForLeave">Leave Application</Link>
              </li>
              <li>
                <i className="fa-solid fa-user-plus"></i>&nbsp;
                <Link to="/myleaves">My Leaves</Link>
              </li>
              <li>
                <i className="fa-solid fa-user-plus"></i>&nbsp;
                <Link to="/MyPunchRecord">My Punch Record</Link>
              </li>
              <li>
                <i className="fa-solid fa-user-plus"></i>&nbsp;
                <Link to="faculty_cancelled_leave">
                  Added or Deducted leave History
                </Link>
              </li>
            </>
          )}
          {userType === "1" ? (
            <li>
              <i className="material-icons">approval</i>&nbsp;
              <Link to="/leaveApproval">Faculty Leave</Link>
            </li>
          ) : (
            role && parseInt(role) <= 2 && (
              <li>
                <i className="fa-solid fa-user-minus"></i>&nbsp;
                <Link to="/leaveApproval">Faculty Leave</Link>
              </li>
            )
          )}
          <li>
            <i className="material-icons">logout</i>&nbsp;
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <p>Getfly Technologies</p>
      </nav>
    </section>
  );
};

export default Navigation;