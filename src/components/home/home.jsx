import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import newspaperImage from './news.jpeg';

function Home(props) {
  const backgroundImageStyle = {
    backgroundImage: `url(${newspaperImage})`,
    backgroundPosition: 'center',
  };


  return (
    <div className="w-full h-screen justify-evenly hel" style={backgroundImageStyle}>
      <div className="justify-center items-center flex h-1/4 pt-10">
      <p className="text-5xl font-bold flex justify-center text-center loader">
         <span className='font-serif hover-gradient'>Welcome to newsWoRLD</span>
      </p>
      </div>
      <div className="w-full h-3/4 justify-evenly hel flex">
      <div className="flex text-4xl font-bold justify-center items-center md:h-2/3">
        <Link to="/signin" className="font-serif bg-green-700 p-5 text-black rounded-2xl hover:bg-green-500 md:hover:m-1 hel1">Signin</Link>
      </div>
      <div className="flex justify-center text-4xl font-bold items-center md:h-2/3">
        <Link to="/signup" className="font-serif bg-blue-700 p-5 text-black rounded-2xl hover:bg-blue-500 md:hover:m-1 hel1">Signup</Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
