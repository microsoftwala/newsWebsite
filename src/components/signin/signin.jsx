import React, { useState } from "react";
import "./signin.css";
import { signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import { auth } from "../../Firebase";


function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [submitdisable,setSubmitdisable] = useState(false)
  const [errormsg, setErrormsg] = useState("");
  
  function handleForget(){
    if (!values.email){
      setErrormsg("Username or Password issue!");
    }
    else{
      setErrormsg("")
    }
    sendPasswordResetEmail(auth,values.email)
    .then((res) =>{
      console.log("Email Sent!")
      setErrormsg("Email has been Sent😎");
    }).catch((error) => console.log("Error",error))
  }

  function handleInput() {
    // console.log(values)
    if (!values.email || !values.password) {
      setErrormsg("Username or Password issue!");
    } else {
      setErrormsg("");
    }
    setSubmitdisable(true)
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((res) => {
          setSubmitdisable(true)
          setErrormsg("Login Successful!")
          localStorage.setItem('token',values.email)
          navigate("/news")
      })
      .catch(async(err) => {
        setSubmitdisable(true)
        setErrormsg("Username or Password issue!");
        console.log("Error", await err.message);
      });
  }

  return (
    <div className="body">
    <div className="wrappers">
      <div className="heading">
        <Link to="/" className="bg-slate-400 pr-2 pl-2 pt-1 pb-1 font-bold font-serif rounded-xl hover:bg-green-500 hover:-m-1"> Back </Link>
        <h2 className="text-3xl mt-2">Welcome!</h2>
        <p>Sign In to your account</p>
      </div>
      {errormsg === "Username or Password issue!" ? (
        <div className="text-1xl bg-red-400 rounded-xl p-3 font-serif">
          {errormsg}
        </div>
      ) : (
        ""
      )}
      {errormsg === "Login Successful!" ? (
        <div className="text-1xl bg-green-400 rounded-xl p-3 font-serif">
          {errormsg}
        </div>
      ) : (
        ""
      )}
      {errormsg === "Email has been Sent😎" ? (
        <div className="text-1xl bg-green-400 rounded-xl p-3 font-serif">
          {errormsg}
        </div>
      ) : (
        ""
      )}
      <div className="input-group">
        <label htmlFor="username" className="text-black">
          Email
        </label>
        <input
          type="email"
          id="username"
          className="input-field"
          placeholder="Username"
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
          Login <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div >
        <div className="flex justify-center">
          <Link className="pl-3 pr-3 underline" onClick = {handleForget}>
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signin;
