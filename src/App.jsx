import { BrowserRouter as Router, Routes, Route , Link, Navigate, Outlet } from "react-router-dom";
import './App.css'

import AuthProvider,{ useAuth } from "./hooks/AuthProvider";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import { ReactNotifications } from 'react-notifications-component'
import './css/notification_theme.css' 
import Login from "./components/login/login";


import { Store } from 'react-notifications-component';
import Admin from "./components/admin";


const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />;
  return <Outlet />;
};

const success = (text)=>{
  Store.addNotification({
    title: "",
    message: text,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1000,
      onScreen: false
    }
  })
}
const error = (text)=>{
  Store.addNotification({
    title: "",
    message: text,
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    isMobile: true,
    dismiss: {
      duration: 5000,
      onScreen: false
    }
  });
}

function App() {
  
  const clipboardCopy = (ref)=>{
    ref.select()
    let copy = document.execCommand('copy')
    copy? success("Message Copied Successfully.")
   : error("Copy Operation failed.")

  }

  return (
    <>
    <ReactNotifications />
    <Router>
    <AuthProvider>
       <Routes>
          <Route path="/login" element={<Login success={success} Link={Link}/>} />
          <Route path="/register" element={<Login  success={success}  register={true} Link={Link}/>} />
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard success={success} error={error} copy={clipboardCopy} />} />
          </Route>
          <Route path="/admin" element={<Admin />}></Route>
       </Routes>
     </AuthProvider>
    </Router>
     
    </>
  )
}

export default App
