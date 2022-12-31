import React, { useEffect } from "react";
import { useState } from "react";

const Lectures = () => {
  const [lectures, setLectures] = useState([]);
  const getLectures = async () => {
    try {
      const req = await fetch("https://lmsbackend-pvsn.onrender.com/lecture");
      const res = await req.json();
      setLectures(res.items);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getLectures();
  }, []);
  // lectures.reverse
  const Lectures = lectures.map((el) => el);
  const updatedLectures = Lectures.reverse();

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgb(181, 181, 181)",
        }}
      >
        <div style={{ marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "500", fontSize: "23px" }}>Lectures</h1>
        </div>
      </div>

      <div style={{ maxWidth: "90%", margin: "50px auto" }}>
        {updatedLectures.map((el) => {
          return (
            <div
              style={{
                backgroundColor: "#ffffff",
                Width: "100%",
                height: "100px",
                border: "1px solid #E5E7EB",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <div style={{ marginLeft: "15px" }}>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <p style={{ fontSize: "22px", color: "#4F46E5" }}>
                    {el.lecture_title}
                  </p>
                  <div
                    style={{
                      borderRadius: "5px",
                      color: "#FFFFFF",
                      backgroundColor: "green",
                      height: "fit-content",
                      padding: "0 10px",
                    }}
                  >
                    {el.video_type}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: "500" }}>
                      {el.lecture_teacher}
                    </span>{" "}
                    Created{" "}
                    <span
                      style={{ fontWeight: "500" }}
                    >{`${el.lecture_type} Problem's`}</span>{" "}
                    at {el.lecture_date} - {el.lecture_time}{" "}
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "15px" }}>
                <button
                  style={{
                    fontWeight: "bold",
                    borderRadius: "5px",
                    backgroundColor: "green",
                    padding: "5px 10px 5px 10px",
                    color: "white",
                  }}
                >
                  Present
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lectures;
