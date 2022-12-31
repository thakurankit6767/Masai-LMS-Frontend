import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // console.log(user)
      alert("Register  successfully!");
    } catch (error) {
      // console.log(error)
      alert(error.message);
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "600px",
          margin: "100px auto",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
      >
        <br />
        <h1 style={{ fontWeight: "bold" }}>Register User</h1>

        <div style={{ display: "grid", justifyContent: "center" }}>
          <input
            style={{
              backgroundColor: "#E8F0FE",
              width: "400px",
              height: "35px",
              borderRadius: "5px",
              padding: "5px 20px",
            }}
            type="email"
            placeholder="Email..."
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <br />
          <input
            style={{
              backgroundColor: "#E8F0FE",
              width: "400px",
              height: "35px",
              borderRadius: "5px",
              padding: "5px 20px",
            }}
            placeholder="Password..."
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <br />
          <button
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "white",
              fontWeight: "bold",
              width: "fit-content",
              margin: "auto",
            }}
            onClick={register}
          >
            Creat User
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Signup;
