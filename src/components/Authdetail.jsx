import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('9e79c371b4a6436b8d2e196640770b9f');

function Authdetail() {

  const navigate = useNavigate()
  const [authUser, setAuthuser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthuser(user);
      } else {
        setAuthuser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Succesfull!");
        navigate("/")
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignout}>Sign Out</button>{" "}
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}

export default Authdetail;


