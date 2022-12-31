import React from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <div
        style={{
          padding: "20px",
          margin: "50px auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid gray",
            width: "80%",
            margin: "auto",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "#A9ABAF 5px 3px 5px 3px",
          }}
        >
          <h1 style={{ fontWeight: "700", fontSize: "25px" }}>Lectures</h1>
          <button
            style={{
              fontWeight: "bold",
              borderRadius: "5px",
              backgroundColor: "black",
              padding: "5px 10px 5px 10px",
              color: "white",
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/lecture_upload"
            >
              upload
            </Link>
          </button>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid gray",
            width: "80%",
            margin: "auto",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "#A9ABAF 5px 3px 5px 3px",
          }}
        >
          <h1 style={{ fontWeight: "700", fontSize: "25px" }}>Assignmet</h1>
          <button
            style={{
              fontWeight: "bold",
              borderRadius: "5px",
              backgroundColor: "black",
              padding: "5px 10px 5px 10px",
              color: "white",
            }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/assignment_upload"
            >
              Upload
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
