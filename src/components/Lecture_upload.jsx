import React from "react";
import { useState } from "react";
import "./style/Upload.css";

const Lecture_upload = () => {
  const [lecture_title, setLecture_title] = useState("");
  const [lecture_teacher, setLecture_teacher] = useState("");
  const [lecture_type, setLecture_type] = useState("");
  const [video_type, setVideo_type] = useState("");
  const [lecture_date, setLecture_date] = useState("");
  const [lecture_time, setLecture_time] = useState("");
  const saveLecture = () => {
    const data = {
      lecture_title,
      lecture_teacher,
      lecture_type,
      video_type,
      lecture_date,
      lecture_time,
    };
    fetch("https://lmsbackend-pvsn.onrender.com/lecture/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log(res)
    });
    alert("Your Lecture Task Successfully Updated");
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="upload">
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>Upload Lectures</p>
        <hr />
        <input
          type="text"
          value={lecture_title}
          onChange={(e) => {
            setLecture_title(e.target.value);
          }}
          name="lecture_title"
          placeholder="Enter Assignment"
        />
        <input
          type="text"
          value={lecture_teacher}
          onChange={(e) => {
            setLecture_teacher(e.target.value);
          }}
          name="lecture_teacher"
          placeholder="Enter Instructor Name "
        />
        <input
          type="text"
          value={lecture_type}
          onChange={(e) => {
            setLecture_type(e.target.value);
          }}
          name="lecture_type"
          placeholder="Lecture Problem (Coading / DSA)"
        />
        <input
          type="text"
          value={video_type}
          onChange={(e) => {
            setVideo_type(e.target.value);
          }}
          name="video_type"
          placeholder="Lecture class (Live/ recording)"
        />
        <input
          type="date"
          value={lecture_date}
          onChange={(e) => {
            setLecture_date(e.target.value);
          }}
          name="lecture_date"
          placeholder="Date"
        />
        <input
          type="time"
          value={lecture_time}
          onChange={(e) => {
            setLecture_time(e.target.value);
          }}
          name="lecture_time"
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
          onClick={saveLecture}
        >
          Upload Lecture
        </button>
        <br />
      </div>
    </div>
  );
};

export default Lecture_upload;
