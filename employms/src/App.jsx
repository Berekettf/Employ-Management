import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Employee from "./components/Employee";
import Catagory from "./components/Catagory";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmploy from "./components/AddEmploy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/category" element={<Catagory />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/add_employee" element={<AddEmploy />}></Route>
          <Route
            path="/dashboard/add_category"
            element={<AddCategory />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
