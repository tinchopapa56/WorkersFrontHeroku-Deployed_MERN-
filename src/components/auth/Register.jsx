import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./auth.styles.css"
import {useFormik} from "formik"
import * as Yup from "yup"
import { v4 as uuidv4 } from "uuid"

const Register = () => {
  
  const navigate = useNavigate();

  let initialValues = {
    username:"",
    email:"",
    password:"",
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(6, "min 6 caracteres").required("Obligatorio"),
    email: Yup.string().email("email válido").required("Obligatorio"),
    password: Yup.string().min(6, "min 6 caracteres").required("Obligatorio"),
  })

  const onSubmit = () => {
    localStorage.setItem("logged", "true")
    navigate("/login", {replace:true})
  }

  const formik = useFormik( {initialValues, validationSchema, onSubmit} );
  const {handleChange, handleSubmit, errors, values} = formik

  return (
    <div className="auth">
        <form onSubmit={handleSubmit}>
        <h1>Register (admin acount)</h1>
          <div> 
            <label>Username</label>
            <input name="username" onChange={handleChange} value={values.username} />
          </div>
          {errors.username && <div className="error-color">{errors.username}</div>}
          <div>
            <label>Email</label>
            <input name="email" onChange={handleChange} value={values.email}/>
          </div>
          {errors.email && <div className="error-color">{errors.email}</div>}
          <div> 
            <label>Password</label>
            <input name="password" onChange={handleChange} value={values.password}/>
          </div>
          {errors.password && <div className="error-color">{errors.password}</div>}
          <button type="submit">Register</button>
          <div>
            <Link to="/login"> Already have an account? Log In </Link>
          </div>
        </form>
    </div>
  )
}


export default Register