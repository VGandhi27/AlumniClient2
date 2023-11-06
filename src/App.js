import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import Nopage from "./routes/Nopage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}/>
          <Route index element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}