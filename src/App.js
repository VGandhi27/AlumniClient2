import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import Dashboard from "./routes/Dashboard";
import CreatePost from './routes/CreatePost';
import Nopage from "./routes/Nopage";
import Profile from "./routes/Profile"
import People from "./routes/People"
import CareerCenter from "./routes/CareerCenter"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}/>
          <Route index element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createpost" element ={<CreatePost/>}/>
          <Route path="profile" element ={<Profile/>}/>
          <Route path="people" element ={<People/>}/>
          <Route path="careercenter" element ={<CareerCenter/>}/>
          <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}