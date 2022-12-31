import React from "react";
import { useState } from "react";
import "./style/Upload.css";

const Assign_upload = () => {
  const [assignment_title, setAssignment_title] = useState("");
  const [assignment_teacher, setAssignment_teacher] = useState("");
  const [assignment_problem, setAssignment_problem] = useState("");
  const [assignment_type, setAssignment_type] = useState("");
  const [assignment_date, setAssignment_date] = useState("");
  const [assignment_time, setAssignment_time] = useState("");
  const saveAssignment = () => {
    const data = {
      assignment_title,
      assignment_teacher,
      assignment_problem,
      assignment_type,
      assignment_date,
      assignment_time,
    };
    fetch("https://lmsbackend-pvsn.onrender.com/assignment/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("res:", res);
    });
    alert("Your Assignment Task Successfully Updated");
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="upload">
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          Upload Assignment
        </p>
        <hr />
        <input
          type="text"
          value={assignment_title}
          onChange={(e) => {
            setAssignment_title(e.target.value);
          }}
          name="assignment_title"
          placeholder="Enter Assignment"
        />
        <input
          type="text"
          value={assignment_teacher}
          onChange={(e) => {
            setAssignment_teacher(e.target.value);
          }}
          name="assignment_teacher"
          placeholder="Enter Instructor Name "
        />
        <input
          type="text"
          value={assignment_problem}
          onChange={(e) => {
            setAssignment_problem(e.target.value);
          }}
          name="assignment_problem"
          placeholder="Assignment Problem"
        />
        <input
          type="text"
          value={assignment_type}
          onChange={(e) => {
            setAssignment_type(e.target.value);
          }}
          name="assignment_type"
          placeholder="Assignment Task"
        />
        <input
          type="date"
          value={assignment_date}
          onChange={(e) => {
            setAssignment_date(e.target.value);
          }}
          name="assignment_date"
          placeholder="Date"
        />
        <input
          type="time"
          value={assignment_time}
          onChange={(e) => {
            setAssignment_time(e.target.value);
          }}
          name="assignment_time"
          placeholder="Time"
        />
        <br />
        <button
          style={{
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
            padding: "5px",
            margin: "auto",
            fontWeight: "bold",
          }}
          onClick={saveAssignment}
        >
          Upload Assignment
        </button>
        <br />
      </div>
    </div>
  );
};

export default Assign_upload;
