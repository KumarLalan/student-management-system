import React,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
import "./view.css";



const View = () => {
    const [user,setUser]=useState("");
    const {id}= useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp)=> setUser({...resp.data[0]}));
      },[id])
  return (
    <div>
        <div className='card'>
            <div className='card-header'>
                <p> user Contact Details</p>
            </div>
            <div className='conatiner'>
                <strong>ID: </strong>
                <span>{id} </span>
                <br/>
                <br/>
                <strong>Name: </strong>
                <span>{user.name} </span>
                <br/>
                <br/>
                <strong>Email: </strong>
                <span>{user.email} </span>
                <br/>
                <br/>
                <strong>Mob No.: </strong>
                <span>{user.number} </span>
                <br/>
                <br/>
                <Link to="/" >
                <div className='btn btn-edit'>Go Back</div></Link>
            </div>
        </div>
    </div>
  )
}

export default View