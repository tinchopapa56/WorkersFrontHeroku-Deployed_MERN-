import { Routes, Route } from "react-router-dom"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register";
import WorkerRegister from "./components/auth/WorkerRegister";
import WorkerEdit from "./components/auth/WorkerEdit";
import WorkersList from "./components/WorkersList/WorkersList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> 
      <Route path="/" element={<WorkersList />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/workerRegister" element={<WorkerRegister />}/>
        <Route path="/workerEdit" element={<WorkerEdit />}/>
        <Route path="/workerEdit/:id" element={<WorkerEdit />}/>
      </Routes>
    </div>
  );
}

export default App;
