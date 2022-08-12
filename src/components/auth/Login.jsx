import React from 'react'
import "./auth.styles.css"
import {useNavigate, Link} from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
import Swal from 'sweetalert2';

function Login() {

  const navigate = useNavigate()

  let initialValues = {
    email:"",
    password:""
 }

 const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email válido").required("Campo obligatorio"),
    password: Yup.string().min(6, "6 caracteres mínimo").required("Campo obligatorio")
 });

  const onSubmit = () => {
    if(localStorage.getItem("logged")){
     navigate("/workerRegister", {replace:true})
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Email or password are wrong',
        // timer: 1500
      })
    }
  }
  const formik = useFormik( {initialValues, validationSchema, onSubmit} );
  const {handleSubmit, handleChange, values, errors} = formik

console.log(errors)

  return (
    <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div>
            <label>Email</label>
            <input onChange={handleChange} value={values.email} name="email" />
          </div>
            {errors.email && <div className="error-color">{errors.email}</div>}
          <div> 
            <label>Password</label>
            <input onChange={handleChange} value={values.password} name="password" type="password"/>
          </div>
            {errors.password && <div className="error-color">{errors.password}</div>}
          <button type="submit">Login</button>
          <div>
            <Link to="/register"> Don't have an account? Create one! </Link>
          </div>
        </form>
    </div>
  )
}

export default Login