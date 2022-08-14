import * as Yup from "yup";
import Swal from 'sweetalert2'
import {useFormik} from "formik";
import {useParams, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "../axios"

// NOT READY

const WorkerEdit = () => {

  let { id } = useParams();
  const navigate = useNavigate();
  id = id.slice(1, id.length);
  // }

    {/* FORMIK form*/}
    let initialValues = {
        editName:"",            //podria probar poner e.targetWorker.name el EDIT ACA
        editCountry:"",     //podria probar
        editAge:"",     //podria probar
        editPhone:"",       //podria probar
        editJob:"",     //podria probar
        editYears:"",       //podria probar
      }
      const validationSchema = Yup.object().shape({
        editName: Yup.string().min(6, "min 6 caracteres").required("Obligatorio"),
        editCountry: Yup.string().max(3,"Only 3 characters").required("Obligatorio"),
        editAge: Yup.number().required("Obligatorio").positive().integer(),
        editPhone: Yup.string().required("Obligatorio"),
        editJob: Yup.string().required("Obligatorio"),
        editYears: Yup.string().required("Required (years)"),    
      })

      const onSubmit =  ()=>{     //EL CHABON USA ASYNC
        axios.put(`/workers/${id}`, {
          name: values.editName,
          country: values.editCountry,     
          age: values.editAge,     
          phone: values.editPhone,       
          job: values.editJob,     
          years: values.editYears,
        })
        .then(res => console.log(res))
        .then(()=>{
          Swal.fire({
            icon: 'success',
            title: `${values.editName} was registered as a worker`,
            timer: 1500
          })
          navigate("/", {replace: true})
        })
        .catch(err =>{
          console.log(id)
          console.log(err)
        })
        // alert("submiteado, worker edited");
        // console.log(initialValues)
      }

    const formik = useFormik({initialValues, validationSchema, onSubmit})
    const {handleChange,handleSubmit, errors, values} = formik


return (
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1> Edit this worker</h1>
          <div>
            <label>Name</label>
            <input onChange={handleChange} value={values.editName} name="editName" />
            {errors.editName && <div className="error-color">{errors.editName}</div>}
          </div>
             
          
          <div>
            <label>Country (currently living)</label>
            <input onChange={handleChange} value={values.editCountry} name="editCountry" /> 
            {errors.editCountry && <div className="error-color">{errors.editCountry}</div>}
          </div>
          
          <div>
            <label>Age</label>
            <input onChange={handleChange} value={values.editAge} name="editAge" />
            {errors.editAge && <div className="error-color">{errors.editAge}</div>}
          </div>
          
          <div>
            <label>Phone</label>
            <input onChange={handleChange} value={values.editPhone} name="editPhone" />
            {errors.editPhone && <div className="error-color">{errors.editPhone}</div>}
          </div>
          
          <div>
            <label> Position</label>
            <select name="editJob" onChange={handleChange} value={values.editJob}>
              <option name="Select an option..." value="">Select an option...</option>
              <option name="Jr" value="Jr">Jr</option>
              <option name="S.sr" value="S.sr">S.sr</option>
              <option name="Sr" value="Sr">Sr</option>
            </select>
            {errors.editJob && <div className="error-color">{errors.editJob}</div>}
          </div>

          <div>
            <label >Years in this firm</label>
            <select name="editYears" onChange={handleChange} value={values.editYears}>
            <option name="Select an option..." value="">Select an option...</option>
              <option name="Less than 1" value="-1">Less than 1</option>
              <option name="1-3 years" value="1-3">1-3 years</option>
              <option name="3-5 years" value="3-5">3-5 years</option>
              <option name="More than 5" value="5+">More than 5</option>
            </select>
            {errors.editYears && <div className="error-color">{errors.editYears}</div>}
          </div>

          <button type="submit">Add New worker</button>
        </form>
    </div>
)
}
export default WorkerEdit;