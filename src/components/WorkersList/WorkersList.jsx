import React from 'react'
import "./WorkersList.css"
import axios from "../axios"
import { useEffect, useState } from 'react';


function WorkersList() {

const [workers, setWorkers] = useState([])
  
  useEffect(()=>{
    axios.get("/workers")
      .then(res => {
        console.log(res);
        setWorkers(res.data);
      })
      .catch(err => console.error(err))
  },[])

  return (
    <div className="main">
      <h2> Workers List </h2>
      <div className="main__list__container">

        <div className="main__list__div">
          {/* <strong><p>ID</p></strong> */}
          <strong className="main__list__div__element"><p>Name</p></strong>
          <strong className="main__list__div__element"><p>Living in</p></strong>
          <strong className="main__list__div__element"><p>Age</p></strong>
          <strong className="main__list__div__element"><p>Phone</p></strong>
          <strong className="main__list__div__element"><p>Position</p></strong>
          <strong className="main__list__div__element"><p>Status</p></strong>
          <strong className="main__list__div__element"><p>Actions</p></strong>
        </div>
        {workers.map( (worker)=> {
          return (
            <div className="main__list__div" key={worker.id}>
              <p className="main__list__div__element">{worker.name}</p>
              <p className="main__list__div__element">{worker.country}</p>
              <p className="main__list__div__element">{worker.age}</p>
              <p className="main__list__div__element">{worker.phone}</p>
              <p className="main__list__div__element">{worker.job}</p>
              <button className="main__list__div__button">{worker.status}</button>
              <div className="main__list__div__buttonholder">
                <button className="edit__button">IMG</button>
                <button className="remove__button">IMG</button>
              </div>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default WorkersList