import React, { useEffect } from "react";
import { useState } from "react";

const Assignments = () => {
  const [assignment, setAssignment] = useState([]);
  const getAsssignment = async () => {
    try {
      const req = await fetch("https://lmsbackend-pvsn.onrender.com/assignment/");
      const res = await req.json();
      setAssignment(res.items);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAsssignment();
  }, []);

  const Assignment = assignment.map((el) => el);
  const updatedAssignment = Assignment.reverse();

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
          <h1 style={{ fontWeight: "500", fontSize: "23px" }}>Assignments</h1>
        </div>
      </div>

      <div style={{ maxWidth: "90%", margin: "50px auto" }}>
        {updatedAssignment.map((el) => {
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
                    {el.assignment_title}
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
                    {el.assignment_type}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>
                    <span style={{ fontWeight: "500" }}>
                      {el.assignment_teacher}
                    </span>{" "}
                    Created{" "}
                    <span
                      style={{ fontWeight: "500" }}
                    >{`${el.assignment_problem} Problem's`}</span>{" "}
                    at {el.assignment_date} - {el.assignment_time}{" "}
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "15px" }}>
                <button
                  style={{
                    fontWeight: "bold",
                    borderRadius: "5px",
                    backgroundColor: "#CA8A04",
                    padding: "5px 10px 5px 10px",
                    color: "white",
                  }}
                >
                  Progress
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;
