import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useFormik} from "formik"
import * as Yup from "yup"


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
    status:"",
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(6, "min 6 caracteres").required("Obligatorio"),
    country: Yup.string().required("Obligatorio"),
    age: Yup.string().required("Obligatorio"),
    phone: Yup.string().required("Obligatorio"),
    job: Yup.string().required("Obligatorio"),
    status: Yup.string().required("Obligatorio"),
    
  })

  const onSubmit = () => {
    //POSTEAR cargar el objeto a una base de datos
    //para fetchearlo despues
  }

  const formik = useFormik({initialValues, validationSchema, onSubmit})
  const {handleChange,handleSubmit, errors, values} = formik

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
            <label>Country</label>
            <input onChange={handleChange} value={values.country} name="country" /> 
          </div>
          {errors.country && <div className="error-color">{errors.country}</div>}
          <div>
            <label>Age</label>
            <input onChange={handleChange} value={values.age} name="age" /> 
          </div>
          {errors.age && <div className="error-color">{errors.age}</div>}
          <div>
            <label>phone</label>
            <input onChange={handleChange} value={values.phone} name="phone" /> 
          </div>
          {errors.phone && <div className="error-color">{errors.phone}</div>}
          <div>
            <label>Job</label>
            <input onChange={handleChange} value={values.job} name="job" /> 
          </div>
          {errors.job && <div className="error-color">{errors.job}</div>}
          <div>
            <label>Status</label>
            <input onChange={handleChange} value={values.status} name="status" /> 
          </div>
          {errors.status && <div className="error-color">{errors.status}</div>}
          <button type="submit">Add New worker</button>
        </form>
    </div>
  )
}

export default WorkerRegister