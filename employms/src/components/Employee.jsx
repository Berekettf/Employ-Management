import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employ List</h3>
      </div>
      <Link to="/dashboard/add_employ" className="btn btn-success">
        Add Employ
      </Link>
      <div className="mt-3"></div>
    </div>
  );
};

export default Employee;
