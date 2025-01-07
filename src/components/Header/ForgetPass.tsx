// import axios from "axios";
// import React, { useState } from "react";
//
// const ForgetPass = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//
//     new_password: "",
//   });
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${process.env.REACT_APP_BASE_URL}/user_controller/resetPass`, {
//         email: formData.email,
//
//         new_password: formData.new_password,
//       });
//
//       setErrorMessage("");
//
//       alert("Password changed successfully!");
//     } catch (error) {
//       console.error(error);
//       if (error.response && error.response.data) {
//         setErrorMessage(error.response.data.message);
//       } else {
//         setErrorMessage("An error occurred. Please try again.");
//       }
//     }
//   };
//
//   return (
//     <div className="container">
//       <h3>Reset Password</h3>
//       <hr />
//       <div className="mx-auto text-center">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 mx-auto" style={{ width: "30vw" }}>
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//
//           <div className="mb-3 mx-auto" style={{ width: "30vw" }}>
//             <label htmlFor="new_password" className="form-label">
//               New Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="new_password"
//               name="new_password"
//               value={formData.new_password}
//               onChange={handleChange}
//             />
//             {errorMessage && (
//               <div className="error-message text-danger my-2">
//                 {errorMessage}
//               </div>
//             )}
//           </div>
//           <input
//             type="submit"
//             value="Reset Password"
//             className="btn btn-primary mx-auto"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export default ForgetPass;


import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  new_password: string;
}

const ForgetPass: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    new_password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/user_controller/resetPass`, {
        email: formData.email,
        new_password: formData.new_password,
      });

      setErrorMessage("");

      alert("Password changed successfully!");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error) && error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h3>Reset Password</h3>
      <hr />
      <div className="mx-auto text-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mx-auto" style={{ width: "30vw" }}>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 mx-auto" style={{ width: "30vw" }}>
            <label htmlFor="new_password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="new_password"
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
            />
            {errorMessage && (
              <div className="error-message text-danger my-2">
                {errorMessage}
              </div>
            )}
          </div>
          <input
            type="submit"
            value="Reset Password"
            className="btn btn-primary mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;