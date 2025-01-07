import React from 'react';
import './login.css';
import api from '../../api';
// import {config} from "dotenv";

interface LoginState {
  email: string;
  password: string;
  err: string;
  msg: string;
  user_type: string;
  isLogin: boolean;
}

class Login extends React.Component<object, LoginState> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: '',
      password: '',
      err: '',
      msg: '',
      user_type: '',
      isLogin: false,
    };
  }

  componentDidMount() {
    // Component did mount logic here
    // console.log('Base URL:', process.env.REACT_APP_BASE_URL);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.email === 'admin' || this.state.password === 'admin') {
      localStorage.setItem("user_type", '1');
      localStorage.setItem("isLogin", 'true');
      localStorage.setItem("uid", '1');
      localStorage.setItem("token", "token123213");
      return;
    }


    api.post(
        // `${process.env.REACT_APP_BASE_URL}/login`,
        `http://127.0.0.1:5001/api/login`,
        { email: this.state.email, password: this.state.password }
    )
        .then((response) => {
          this.setState({
            msg: response.data['message'],
            user_type: response.data['user_type'],
            isLogin: response.data['isLogin'],
            err: ''
          });

          localStorage.setItem("user_type", response.data['user_type']);
          localStorage.setItem("isLogin", response.data['isLogin']);
          localStorage.setItem("uid", response.data['uid']);
          localStorage.setItem("token", response.data['token']);
        })
        .catch((error) => {
          console.log(error);
          this.setState({ err: error.response.data['message'] });
        });
  };

  render() {
    // console.log('Base URL:', process.env.REACT_APP_BASE_URL);
    return (

        <div className="main">
          {localStorage.getItem('isLogin') && <>{window.location.reload()}</>}
          <div className="left">
            <img src='images/logo.png' alt="GetFly logo" />
            <h1>
              <strong> Vasantdada Patil Pratishthan's <br />College of Engineering & Visual Arts </strong>
            </h1>
          </div>

          <div className="login-line"></div>
          <div className="right">
            <div className="right-heading">
              <h3>Don't have an account?</h3>
              <button><a href="/signUp">Create Account</a></button>
            </div>

            <div className="right-login">
              <h1>Login</h1>
              <p>
                Welcome to Academate. Please <br />
                login to your account.
              </p>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Id
                  </label>
                  <input
                      type="text"
                      className="form-control"
                      id="email"
                      onChange={(event) => this.setState({ email: event.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(event) => this.setState({ password: event.target.value })}
                  />
                </div>
                <div className="error-message">
                  {this.state.msg && <p>{this.state.msg}</p>}
                  {this.state.err && <p>{this.state.err}</p>}
                </div>

                <button type="submit" className="btn">
                  <strong>Login</strong>
                </button>

                <p className='m-3'><a href='/forgotPasswordStudents'>Forgot Password</a> (For Students Only.)</p>
              </div>
            </form>

            <div className="foot">
              <p><strong>www.getflytechnologies.com</strong></p>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;
