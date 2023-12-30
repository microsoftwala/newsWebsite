import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./News.css"


function Card(props) {
      const navigate = useNavigate()
      const [check ,setCheck] = useState(false)
      function Moreread(){
            navigate('../moreread', { state: { yourData: props } });
      }
  return (
    <div className="card" style={{background:props.color}} >
      <h2 className="card-title mb-4">{props.title}</h2>
      <img src={props.image} alt={props.title} className="card-image" />
      <p className="card-content">
        {props.description.slice(0,35)}
      </p>
      <div className="flex mt-4 font-bold">
            <strong>{props.author}</strong>
            {/* <button className="card-btn" onClick={Moreread}>READ MORE</button> */}
            <Link to={props.url} target="_blank"                  className="font-bold card-btn">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
