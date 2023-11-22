import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import NoteState from "./context/notes/NoteState";
import ForgotPassword from "./routes/ForgotPassword";
import Dashboard from "./routes/Dashboard";
import CreatePost from './routes/CreatePost';
import Nopage from "./routes/Nopage";
import Profile from "./routes/Profile"
import People from "./routes/People";
import Alert from "./components/Alert";
import CareerCenter from "./routes/CareerCenter";
import Lookup from "./components/Lookup";


export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <NoteState>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Alert alert={alert}/><SignUp  showAlert={showAlert} /></>}/>
          <Route index element={<><Alert alert={alert}/><SignUp  showAlert={showAlert} /></>} />
          <Route path="signin" element={<><Alert alert={alert}/><SignIn  showAlert={showAlert} /></>} />
          <Route path="signup" element={<><Alert alert={alert}/><SignUp  showAlert={showAlert} /></>} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createpost" element ={<CreatePost/>}/>
          <Route path="profile" element ={<Profile/>}/>
          <Route path="people" element ={<People/>}/>
          <Route path="careercenter" element ={<CareerCenter/>}/>
          <Route path="lookup" element ={<Lookup/>}/>      
          <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter></NoteState>
  );
}