// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { BrowserRouter as Router, Route, Routes, Link, Navigate  } from 'react-router-dom';
// // import HRBase from './components/HRBase';
// // import FacBase from './components/faculty/FacBase';
// // import Admission_facBase from './components/admission/faculty/FacultyAdmission';
// // // import AccountBase from './components/faculty/AccountBase';
// // import StudBase from './components/faculty/StudBase';
// // import Login from './components/login';
// // import Signup from './components/signup';
// // import Logout from './components/logout';
// // import AdmssionPrintAndroid from './components/admission/faculty/AdmssionPrintAndroid';
// // import ForgotPassword from './components/admission/faculty/ForgotPassword';
//
// // enum UserTypes {
// //   Hr = "1",
// //   Faculty = "2",
// //   Admission_faculty = "3",
// //   Student = "4",
// // }
//
// // const getLocalStorageUserType = (key: string): string | null => {
// //   return localStorage.getItem(key);
// // }
//
//
// // const App: React.FC = () => {
// //   // const [count, setCount] = useState(0)
//
// //   const isMobileView = (): boolean => {
// //     return window.screen.availWidth < 786;
// //   }
//
// //   return (
//
// //     <Router>
//
// //       {/* <h1>The Site is uder maintainance. Will resume admission on 8th July 2023. Thank You!</h1> */}
// //       {
// //         (window.screen.availWidth<786) && (window.location.pathname!='/printApplication') ?
// //         <main className="view-box">
// //           <div className="view-container">
// //             <h3 className="view-title">Best Viewed on Desktop</h3>
// //             <p className="view-title">This website is optimized for desktop browsing to provide better user experience.</p>
// //           </div>
// //         </main>
// //         :
// //         <>
//
// //       {localStorage.getItem('isLogin')!=undefined  ? (
// //         localStorage.getItem('user_type')==1 ? <HRBase/> :
// //         (localStorage.getItem('user_type')==2 ? <FacBase/>:
// //         (localStorage.getItem('user_type')==3 ?  <Admission_facBase/> :
// //        (localStorage.getItem('user_type')==4 ?  <StudBase/> : <></>))
// //       //  (localStorage.getItem('user_type')==4 ? <h1>Admissions are closed for batch 2023-24.</h1> : <AccountBase/>))
// //          )):
// //         <Routes><Route exact path="/SignUp" element={ < Signup/>} />
// //         {/* <Routes><Route exact path="/SignUp" element={<h1>Admissions are closed for batch 2023-24.</h1>} /> */}
// //         <Route exact path="/" element={ < Login/>} />  </Routes>}
// //         <Routes>
// //           <Route exact path="/logout" element={ < Logout/>} />
// //           <Route exact path="/AdmssionPrintAndroid" element={ < AdmssionPrintAndroid/>} />
// //           <Route exact path="/forgotPasswordStudents" element={ < ForgotPassword/>} />
// //         </Routes>
// //         </>
// //   }
// //     </Router>
// //     // <>
// //     //   <div>
// //     //     <a href="https://vite.dev" target="_blank">
// //     //       <img src={viteLogo} className="logo" alt="Vite logo" />
// //     //     </a>
// //     //     <a href="https://react.dev" target="_blank">
// //     //       <img src={reactLogo} className="logo react" alt="React logo" />
// //     //     </a>
// //     //   </div>
// //     //   <h1>Vite + React</h1>
// //     //   <div className="card">
// //     //     <button onClick={() => setCount((count) => count + 1)}>
// //     //       count is {count}
// //     //     </button>
// //     //     <p>
// //     //       Edit <code>src/App.tsx</code> and save to test HMR
// //     //     </p>
// //     //   </div>
// //     //   <p className="read-the-docs">
// //     //     Click on the Vite and React logos to learn more
// //     //   </p>
// //     // </>
// //   )
// // }
//
// // export default App
//
//
//
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HRBase from './components/base/Base.tsx';
// // import FacBase from './components/base/facultyBase.tsx';
// // import Admission_facBase from './components/base/Admission_facBase.tsx';
// // import StudBase from './components/base/StudBase.tsx';
// import Login from './components/login/login.tsx';
// // import Signup from './components/admission/Sign-up/SignUp.tsx';
// import Logout from './components/logout';
// // import AdmssionPrintAndroid from './components/admission/printApplication/Admission_print_android.tsx';
// // import Signup from "@/components/admission/Sign-up/SignUp.tsx";
// // import ForgotPassword from './components/admission/faculty/ForgotPassword';
//
// // Define user types as an enum for better type safety
// enum UserType {
//   HR = "1",
//   Faculty = "2",
//   AdmissionFaculty = "3",
//   Student = "4"
// }
//
// const getLocalStorageItem = (key: string): string | null => {
//   return localStorage.getItem(key);
// };
//
// const App: React.FC = () => {
//   const isMobileView = (): boolean => {
//     return window.screen.availWidth < 786;
//   };
//
//   const isPrintApplication = (): boolean => {
//     return window.location.pathname === '/printApplication';
//   };
//
//   const isValidUserType = (type: string | null): type is UserType => {
//     return type !== null && Object.values(UserType).includes(type as UserType);
//   };
//
//   const renderUserInterface = (): JSX.Element => {
//     const userType = getLocalStorageItem('user_type');
//
//     if (!isValidUserType(userType)) {
//       return <></>;
//     }
//
//     switch (userType) {
//       case UserType.HR:
//         return <HRBase />;
//       // case UserType.Faculty:
//       //   return <FacBase />;
//       // case UserType.AdmissionFaculty:
//       //   // return <Admission_facBase />;
//       // case UserType.Student:
//       //   // return <StudBase />;
//       default:
//         return <></>;
//     }
//   };
//
//   const renderMobileWarning = (): JSX.Element => {
//     return (
//       <main className="view-box">
//         <div className="view-container">
//           <h3 className="view-title">Best Viewed on Desktop</h3>
//           <p className="view-title">
//             This website is optimized for desktop browsing to provide better user experience.
//           </p>
//         </div>
//       </main>
//     );
//   };
//
//   const renderAuthRoutes = (): JSX.Element => {
//     return (
//       <Routes>
//         {/*<Route path="/SignUp" element={<Signup />} />*/}
//         <Route path="/" element={<Login />} />
//       </Routes>
//     );
//   };
//
//   const renderCommonRoutes = (): JSX.Element => {
//     console.log('isLogin:', getLocalStorageItem('isLogin'));
//     console.log('user_type:', getLocalStorageItem('user_type'));
//     return (
//       <Routes>
//         <Route path="/logout" element={<Logout />} />
//         {/*<Route path="/AdmssionPrintAndroid" element={<AdmssionPrintAndroid />} />*/}
//         {/*<Route path="/forgotPasswordStudents" element={<ForgotPassword />} />*/}
//       </Routes>
//     );
//   };
//
//   return (
//     <Router>
//       {isMobileView() && !isPrintApplication() ? (
//         renderMobileWarning()
//       ) : (
//         <>
//           {getLocalStorageItem('isLogin') !== undefined ? (
//             renderUserInterface()
//           ) : (
//             renderAuthRoutes()
//           )}
//           {renderCommonRoutes()}
//         </>
//       )}
//     </Router>
//   );
// };
//
// export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HRBase from './components/base/Base.tsx';
import Login from './components/login/login.tsx';
import Logout from './components/logout';

// Define user types as an enum for better type safety
enum UserType {
  HR = "1",
  Faculty = "2",
  AdmissionFaculty = "3",
  Student = "4"
}

const getLocalStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

const App: React.FC = () => {
  const isMobileView = (): boolean => {
    return window.screen.availWidth < 786;
  };

  const isPrintApplication = (): boolean => {
    return window.location.pathname === '/printApplication';
  };

  const isValidUserType = (type: string | null): type is UserType => {
    return type !== null && Object.values(UserType).includes(type as UserType);
  };

  const renderUserInterface = (): JSX.Element => {
    const userType = getLocalStorageItem('user_type');

    if (!isValidUserType(userType)) {
      return <></>;
    }

    switch (userType) {
      case UserType.HR:
        return <HRBase />;
      // Add cases for other user types if needed
      default:
        return <></>;
    }
  };

  const renderMobileWarning = (): JSX.Element => {
    return (
      <main className="view-box">
        <div className="view-container">
          <h3 className="view-title">Best Viewed on Desktop</h3>
          <p className="view-title">
            This website is optimized for desktop browsing to provide better user experience.
          </p>
        </div>
      </main>
    );
  };

  const renderAuthRoutes = (): JSX.Element => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  };

  const renderCommonRoutes = (): JSX.Element => {
    console.log('isLogin:', getLocalStorageItem('isLogin'));
    console.log('user_type:', getLocalStorageItem('user_type'));
    return (
      <Routes>
        <Route path="/logout" element={<Logout />} />
        {/* Add other common routes if needed */}
      </Routes>
    );
  };

  return (
    <Router>
      {isMobileView() && !isPrintApplication() ? (
        renderMobileWarning()
      ) : (
        <>
          {getLocalStorageItem('isLogin') === 'true' ? (
            renderUserInterface()
          ) : (
            renderAuthRoutes()
          )}
          {renderCommonRoutes()}
        </>
      )}
    </Router>
  );
};

export default App;