import React from 'react'
import "./WorkersList.css"
import axios from "../axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function WorkersList() {

const [renderHandler, setRenderHandler] = useState(0);
const [workers, setWorkers] = useState([])
const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    axios.get("/tinder/cards")       // ANDA BIEN
      .then(res => console.log(res))
      .catch(err => console.error(err))
  },[renderHandler])

  useEffect(()=>{
    const getWorkers = async ()=>{
      try{
        const res = await axios.get("/workers");
        setWorkers(res.data);
        setLoading(false);
        // console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    getWorkers();
  },[renderHandler])

  const removeWorker = (e)=>{
    axios.delete(`/workers/${e.target.id}`)
    .then(res => {
      console.log(res)
      setRenderHandler(prevState => prevState + 1)
      Swal.fire({
        icon: 'success',
        title: `worker was Succesfully deleted`,
        timer: 2500
      })
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="main">
      <h2> Workers List </h2>
          
      <div className="main__list__container">

        <div className="main__list__div">
          <strong className="main__list__div__element"><p>Name</p></strong>
          <strong className="main__list__div__element"><p>Lives in</p></strong>
          <strong className="main__list__div__element"><p>Age</p></strong>
          <strong className="main__list__div__element"><p>Phone</p></strong>
          <button className="main__list__div__button" id="mainbar">Position</button>
          <button className="main__list__div__button" id="mainbar">Years in This Company</button>
          <button className="main__list__div__button" id="mainbar">Actions</button>
          {/* <strong className="main__list__div__button"><p>Position</p></strong> */}
          {/* <strong className="main__list__div__element"><p>Years in this company</p></strong> */}
          {/* <strong className="main__list__div__element"><p>Actions</p></strong> */}
        </div>
        {/* <Skeleton count={10} height={"50px"} /> */}
        {loading ? 
          (
            <Skeleton count={20} height={"40px"} />
          ) 
          : 
          (workers.map( (worker)=> {
          return (
            <div key={worker._id} className="main__list__div">
              <p className="main__list__div__element">{worker.name}</p>
              <p className="main__list__div__element">{worker.country}</p>
              <p className="main__list__div__element">{worker.age}</p>
              <p className="main__list__div__element">{worker.phone}</p>
              {/* <p className="main__list__div__element">{worker.job}</p> */}
              <button className="main__list__div__button">{worker.job}</button>
              <button className="main__list__div__button">{worker.years}</button>

              <div className="main__list__div__buttonholder">
                <button className="remove__button" id={worker._id} onClick={(e) => removeWorker(e)}></button>
                <Link to={`/workerEdit/:${worker._id}`} className="edit__button"></Link>
              </div>
            </div>
          )})
        )}
      
      </div>
    </div>
  )
}

export default WorkersList