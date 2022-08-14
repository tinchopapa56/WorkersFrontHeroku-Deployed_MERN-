import React from 'react'
import "./WorkersList.css"
import axios from "../axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function WorkersList() {

const [renderHandler, setRenderHandler] = useState(0);
const [workers, setWorkers] = useState([])
  
  useEffect(()=>{
    axios.get("/workers")
      .then(res => {
        // console.log(res);
        setWorkers(res.data);
      })
      .catch(err => console.error(err))
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


  // const editWorker = (e)=>{
  //   let targetWorker = workers.filter((worker)=>{
  //     return workers._id === e.target.id;
  //   })

    // useEffect(()=>{
    //   console.log(targetWorker)
    // },[targetWorker])

      // if (worker._id == e.target.id) {
      //   const targetWorker = worker;
      //   console.log(targetWorker)
    
     
//create NEWdata/user
    // axios.put(`workers${e.target.id}`)
    //   .then(res =>{
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
    // }

  return (
    <div className="main">
      <h2> Workers List </h2>
      <div className="main__list__container">

        <div className="main__list__div">
          {/* <strong><p>ID</p></strong> */}
          <strong className="main__list__div__element"><p>Name</p></strong>
          <strong className="main__list__div__element"><p>Lives in</p></strong>
          <strong className="main__list__div__element"><p>Age</p></strong>
          <strong className="main__list__div__element"><p>Phone</p></strong>
          <strong className="main__list__div__element"><p>Position</p></strong>
          <strong className="main__list__div__element"><p>Years in this company</p></strong>
          <strong className="main__list__div__element"><p>Actions</p></strong>
        </div>
        {workers.map( (worker)=> {
          return (
            <div key={worker._id} className="main__list__div">
              <p className="main__list__div__element">{worker.name}</p>
              <p className="main__list__div__element">{worker.country}</p>
              <p className="main__list__div__element">{worker.age}</p>
              <p className="main__list__div__element">{worker.phone}</p>
              <p className="main__list__div__element">{worker.job}</p>
              <button className="main__list__div__button">{worker.years}</button>
              <div className="main__list__div__buttonholder">
                <button className="remove__button" id={worker._id} onClick={(e) => removeWorker(e)}></button>
                <Link to={`/workerEdit/:${worker._id}`} className="edit__button"> <button className="edit__button"></button> </Link>
                {/* <button className="edit__button" id={worker._id} onClick={(e)=> editWorker(e)}></button> */}
              </div>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default WorkersList