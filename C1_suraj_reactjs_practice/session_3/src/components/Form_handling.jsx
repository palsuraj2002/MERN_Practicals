import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form_handling = () => {
  const [users, setUser] = useState({ uname: "", upass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUsers) => ({
      ...prevUsers, //it hold the previously saved value
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // alert(`Welcome ${users.uname},Your are logged in `);
    console.log("User's Info:", users);
    // You would typically handle form submission logic here,
    // like sending data to a server or validating input.
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-6">
          
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Login</h5>
              
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="uname" // Changed name to match state key
                    id="floatingInputUname" 
                    placeholder="Username"
                    value={users.uname} // Added value prop for controlled component
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInputUname">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="upass" // Changed name to match state key
                    id="floatingPassword" 
                    placeholder="Password"
                    value={users.upass} // Added value prop for controlled component
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_handling;
