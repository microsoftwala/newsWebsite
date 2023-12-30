import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import { auth } from "../../Firebase";
import "../signin/signin.css";

function Signup() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState("");
  const [submitdisable,setSubmitdisable] = useState(false)
  function handleInput() {
    if (!values.name || !values.email || !values.password) {
      setErrormsg("Fill All the Fields!");
    } else {
      setErrormsg("");
    }
    setSubmitdisable(true)
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((res) => {
          setSubmitdisable(true)
          setErrormsg("Register Successful!")
          console.log(res);
          navigate("/signin")
      })
      .catch(async(err) => {
        setSubmitdisable(true)
        console.log("Error", await err.message);
      });
  }

  return (
    <div className="body">
    <div className="wrappers">
      <div className="heading">
      <Link to="/" className="bg-slate-400 pr-2 pl-2 pt-1 pb-1 font-bold font-serif rounded-xl hover:bg-green-500 hover:-m-1"> Back </Link>
        <h2 className="text-3xl">Welcome!</h2>
        <p>Sign Up to your account</p>
      </div>
      {errormsg === "Register Successful!"? (
        <div className="text-1xl underline bg-green-400 rounded-xl p-3">
          {errormsg}
        </div>
      ) : (
        ""
      )}
      {errormsg ===  "Fill All the Fields!"? (
        <div className="text-1xl underline bg-red-400 rounded-xl p-3">
          {errormsg}
        </div>
      ) : (
        ""
      )}
      <div className="input-group">
        <label htmlFor="username" className="text-black">
          UserName
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Username"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      </div>

      <div className="input-group">
        <label htmlFor="email" className="text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="text-black">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
      </div>

      <div className="input-group">
        <button onClick={handleInput}>
          Signup <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Signup;
