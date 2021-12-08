import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
const Join=()=>{
   const [name,setName]=useState('');//passing the empty string as initial value for the "name" state.
   const [room,setRoom]=useState('');
   return(
       <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Code Rush </h1>
            <div><input placeholder="Name" className="joinInput" type="text " onChange={(event)=>setName(event.target.value)} /></div>
            <div><input placeholder="Room" className="joinInput " type="text  " onChange={(event)=>setRoom(event.target.value)} /></div>
            <Link  onClick={event=>(!name||!room)?event.preventDefault():null}  to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-30" type="submit">Sign In</button>

            </Link>
        </div>

       </div>
   )
}
export default  Join;