import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import TasksDetails from "./pages/TasksDetails";
import Login from "./pages/Login";
import { Toaster } from "sonner-react";

function Layout () {
  const user = ""
   const location  = useLocation()

   return user ? (
    <div className= "w-full h-screen flex flex-col md:flex-row">

<div className="w-1/5 h-screen bg-white  sticky top-0 hidden md:block">
   { /* <Sidebar/> */}
   
  </div>

  
      </div>
    
   ):(
    <Navigate to="/log-in"  state={{from: location}} replace/>
   );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Dashboard />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TasksDetails />} />

          <Route path="/log-in" element={<Login />} />
        </Route>
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
