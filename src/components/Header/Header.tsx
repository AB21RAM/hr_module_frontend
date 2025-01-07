
import "./Header.css";
import {  Link } from "react-router-dom";

const Header = () => {
  // Assuming the user_type is stored in the localStorage
  const userType = parseInt(localStorage.getItem("user_type") as string);

  return (
    <header className="main-header">
      <section className="container head">
        <div className="ham-container">
          <li className="hamburger">
            <a className="ham-icon" id="ham" href="#home">
              <i id="hamInner" className="fas fa-bars"></i>
            </a>
          </li>
        </div>
        <div className="logo">
          <a href="#">
            <img
              src="/images/logo1.png"
              alt="GetFly logo"
              style={{ width: "50px" }}
            />
            <span className="help-text big">AcadeMate</span>
          </a>
        </div>
        <div className="help">
          <a href="#">
            <i className="material-icons">dashboard</i>
            &nbsp;
            <Link to="/Dashboard">Dashboard</Link>
          </a>
          {userType !== 4 && (
            // Render the ForgetPass component if userType is not equal to 4
            <Link to="/resetPass">Reset Password Link</Link>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
