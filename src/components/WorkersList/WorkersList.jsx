import React from 'react'
import "./WorkersList.css"


function WorkersList() {

  const hardCode = [
    {
      key: 1,
      namee: "jose",
      country: "ARG",
      age: 24,
      phone: "011 8449-4305",
      job: "S.sr",
      status: "Available"
    },
    {
      key: 2,
      namee: "Rigoberto Menendez",
      country: "COL",
      age: 45,
      phone: "011 8449-4305",
      job: "S.sr",
      status: "Busy"
    },
    {
      key: 3,
      namee: "carlos",
      country: "URU",
      age: 29,
      phone: "011 8449-4305",
      job: "S.sr",
      status: "Available"
    }
];
  

  return (
    <div className="eList">
      <h2> Workers List </h2>
      <div className="eList__container">
        <div className="eList__container__item">
          <strong><p>ID</p></strong>
          <strong><p>Name</p></strong>
          <strong><p>Living in</p></strong>
          <strong><p>Age</p></strong>
          <strong><p>Phone</p></strong>
          <strong><p>Position</p></strong>
          <strong><p>Status</p></strong>
          <strong><p>Actions</p></strong>
        </div>
        {/* <div className="eList__container__item">
          <p>ID</p>
          <p>Name</p>
          <p>Lives</p>
          <p>Age</p>
          <p>Phone</p>
          <p>Position</p>
          <p>Status</p>
        </div> */}
        {hardCode.map( (worker)=> {
          return (
            <div className="eList__container__item">
              <p>{worker.key}</p>
              <p>{worker.namee}</p>
              <p>{worker.country}</p>
              <p>{worker.age}</p>
              <p>{worker.phone}</p>
              <p>{worker.job}</p>
              <button className="eList__container__button">{worker.status}</button>
              <div>
                <button className="eList__edit-button">IMG1</button>
                <button className="eList__remove-button">IMG2</button>
              </div>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default WorkersList