import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";

import TaskDetails from "./pages/TaskDetails";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


function Layout() {
  const {user} = useSelector((state) => state.auth);

  const location = useLocation();
  const isPublicRoute = location.pathname === "/log-in";

  if (!user && !isPublicRoute) {
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#f3f4f6]">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* <Sidebar /> */}
        <Sidebar />
      </div>

      <div className="flex-1 h-screen overflow-y-auto">
        {/* navbar */}
        <Navbar />

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"  element={<Navigate to="/dashboard"  />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Dashboard />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/log-in" element={<Login />} />
        </Route>
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
