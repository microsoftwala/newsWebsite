import React from 'react'
import "./News.css"
import { useLocation } from 'react-router-dom';
import Nav from './Nav';


function Moreread() {
      const location = useLocation();
      const props = location.state && location.state.yourData;

  return (
      <div>
      <Nav/>
      <br></br>
      <div className='justify-center flex m-14'>
      <div className="card" style={{background:props.color, maxWidth:"50%" }} >
      <h2 className="card-title mb-4">{props.title}</h2>
      <p className="card-content">
        {props.description}
      </p>
      <p className="card-content">
        {props.content}
      </p>

      <div className="flex mt-4 text-orange-200">
            <strong>{props.author}</strong>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Moreread