import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const WorkerRegister = () => {

  const navigate = useNavigate();

  useEffect( ()=>{
    if(!localStorage.getItem("token")){
      navigate("/login", {replace:true} );
    }
  },[])

  return (
    <div className="auth">
        <form>
            <input name="name" />
            <input name="country" />
            <input name="birth_date" />
            <input name="phone" />
            <input name="job" />
            <input name="status" />
            <h5>Acciones</h5>
        </form>
    </div>
  )
}

export default WorkerRegister