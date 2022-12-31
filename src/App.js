import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Lectures from "./components/Lectures";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Lecture_upload from "./components/Lecture_upload";
import Assign_upload from "./components/Assign_upload";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Assignment from "./components/Assignment";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const childToParent = (childdata) => {
    // console.log("childdata",childdata)
    setUser(childdata);
  };
  useEffect(() => {
    childToParent();
  }, []);

  //console.log("user",user?.email)
  return (
    <div className="App">
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/lecture_upload" element={<Lecture_upload />} />
        <Route path="/assignment_upload" element={<Assign_upload />} />
        <Route
          path="/login"
          element={<Login childToParent={childToParent} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/assignments" element={<Assignment />} />
      </Routes>
    </div>
  );
}

export default App;
