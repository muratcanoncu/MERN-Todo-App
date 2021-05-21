import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-100 d-flex justify-content-center align-items-end">
      <div>
        <h1 className="">MERN Todo List</h1>
        <div className="d-flex justify-content-between w-75 mx-auto">
          <button className="btn btn-success">
            <Link to="/todoadd">Add New Todo</Link>
          </button>
          <button className="btn btn-secondary">
            <Link to="/">Todo List</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
