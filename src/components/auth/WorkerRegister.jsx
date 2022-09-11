import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useFormik} from "formik"
import * as Yup from "yup"
import Swal from 'sweetalert2'
import axios from "../axios"

const WorkerRegister = () => {

  const navigate = useNavigate();

  useEffect( ()=>{
    if(!localStorage.getItem("logged")){
      navigate("/login", {replace:true} );
    }
  },[])

  let initialValues = {
    name:"",
    country:"",
    age:"",
    phone:"",
    job:"",
    years:"",
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(6, "min 6 caracteres").required("Obligatorio"),
    country: Yup.string().max(3,"Only 3 characters").required("Obligatorio"),
    age: Yup.number().required("Obligatorio").positive().integer(),
    phone: Yup.string().required("Obligatorio"),
    job: Yup.string().required("Obligatorio"),
    years: Yup.string().required("Required (years)"),    
  })

  const onSubmit = () => {
    axios({
      method: 'post',
      url: '/workers',
      data: {
        name: values.name,
        country: values.country,
        age: values.age,
        phone: values.phone,
        job: values.job,
        years: values.years
      }
    })
    .then(data =>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: `${values.name} was registered as a worker`,
        timer: 1500
      });
      navigate("/", {replace:true});
    })
    .catch(err => console.log(err))
    // .then(response => response.json)
}

const formik = useFormik({initialValues, validationSchema, onSubmit})
const {handleChange,handleSubmit, errors, values} = formik
  
const yearsOptions = [
  {key: "select an option", value: ""},
  {key: "Less than 1", value: "-1"},
  {key: "1-3 years", value: "1-3"},
  {key: "3-5 years", value: "3-5"},
  {key: "More than 5", value: "5+"},
]

  return (
    <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1>Register the new worker</h1>
          <div>
            <label>Name</label>
            <input onChange={handleChange} value={values.name} name="name" /> 
          </div>
          {errors.name && <div className="error-color">{errors.name}</div>}
          <div>
            <label>Country (currently living)</label>
            <input onChange={handleChange} value={values.country} name="country" /> 
          </div>
          {errors.country && <div className="error-color">{errors.country}</div>}
          <div>
            <label>Age</label>
            <input onChange={handleChange} value={values.age} name="age" /> 
          </div>
          {errors.age && <div className="error-color">{errors.age}</div>}
          <div>
            <label>Phone</label>
            <input onChange={handleChange} value={values.phone} name="phone" /> 
          </div>
          {errors.phone && <div className="error-color">{errors.phone}</div>}

          <div>
            <label> Position</label>
            <select name="job" onChange={handleChange} value={values.job}>
              <option name="Select an option..." value="">Select an option...</option>
              <option name="Jr" value="Jr">Jr</option>
              <option name="S.sr" value="S,.sr">S.sr</option>
              <option name="Sr" value="Sr">Sr</option>
            </select>
            {errors.job && <div className="error-color">{errors.job}</div>}
          </div>

          <div>
            <label >Years in this firm</label>
            <select name="years" onChange={handleChange} value={values.years}>
              {yearsOptions.map(option =>{
                return(
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                )
              })}
            </select>
            {errors.years && <div className="error-color">{errors.years}</div>}
          </div>

          <button type="submit">Add New worker</button>
        </form>
    </div>
  )
}

export default WorkerRegister