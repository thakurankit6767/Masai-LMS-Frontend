import React, { useState } from "react";
import { useEffect } from "react";

const lectures = [
  {
    lecture_title: "HTML 2",
    lecture_teacher: "Nrupul",
    lecture_type: "Coading",
    video_type: "Live",
    lecture_time: "1:00 PM",
  },
  {
    lecture_title: "Scrum",
    lecture_teacher: "Sibin O",
    lecture_type: "Scrum",
    video_type: "Live",
    lecture_time: "9:00 AM",
  },
];

const Home = () => {
  const [lectures, setLectures] = useState([]);
  const [today, setToday] = useState([]);
  const todayLecture = [];
  const Today = new Date();
  const yyyy = Today.getFullYear();
  let mm = Today.getMonth() + 1;
  let dd = Today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = yyyy + "-" + mm + "-" + dd;

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

  const data = () => {
    for (let i = 0; i < lectures.length; i++)
      if (lectures[i].lecture_date.toString() == formattedToday.toString()) {
        todayLecture.push(lectures[i]);
      }
  };
  data();

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          width: "100%",
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgb(181, 181, 181)",
        }}
      >
        <div style={{ marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "500", fontSize: "23px" }}>
            Today's Schedule
          </h1>
        </div>
        <div style={{ marginRight: "5%", display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "7px",
              backgroundColor: "black",
              color: "#FFFFFF",
              fontWeight: "bold",
              borderRadius: "7px",
            }}
          >
            BOOKMARKS
          </button>
          <button
            style={{
              padding: "7px",
              backgroundColor: "black",
              color: "#FFFFFF",
              fontWeight: "bold",
              borderRadius: "7px",
            }}
          >
            REFER & EARN
          </button>
        </div>
      </div>
      <div style={{ maxWidth: "90%", margin: "50px auto" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            Width: "90%",
            minHeight: "100px",
            border: "1px solid #E5E7EB",
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "15px", textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <div
                  style={{
                    backgroundColor: "#4F46E5",
                    padding: " 15px 10px",
                    borderRadius: "5px",
                  }}
                >
                  <p style={{ fontWeight: "700", color: "white" }}>09:00 AM</p>
                  <p style={{ fontWeight: "700", color: "white" }}>LECTURE</p>
                </div>
              </div>
              <div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <p
                    style={{
                      fontSize: "22px",
                      color: "#4F46E5",
                      fontWeight: "500",
                    }}
                  >{`Scrum - ${formattedToday}`}</p>
                </div>
                <div>
                  <p>
                    <span style={{ fontWeight: "500" }}>Sibin O</span> Starting
                    at 09:00 AM{" "}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#DBEAFE",
                        padding: "0 5px",
                        borderRadius: "5px",
                      }}
                    >
                      SCRUM
                    </div>
                    <div
                      style={{
                        backgroundColor: "#DCFCE7",
                        padding: "0 5px",
                        borderRadius: "5px",
                      }}
                    >
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginRight: "15px" }}>
            <button>Details </button>
          </div>
        </div>

        {todayLecture.map((el) => {
          return (
            <div
              style={{
                backgroundColor: "#ffffff",
                Width: "90%",
                minHeight: "100px",
                border: "1px solid #E5E7EB",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: "15px", textAlign: "left" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div>
                    <div
                      style={{
                        backgroundColor: "#4F46E5",
                        padding: " 15px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      <p style={{ fontWeight: "700", color: "white" }}>
                        {el.lecture_time}
                      </p>
                      <p style={{ fontWeight: "700", color: "white" }}>
                        LECTURE
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "22px",
                          color: "#4F46E5",
                          fontWeight: "500",
                        }}
                      >{`${el.lecture_title} - ${formattedToday}`}</p>
                    </div>
                    <div>
                      <p>
                        <span style={{ fontWeight: "500" }}>
                          {el.lecture_teacher}
                        </span>{" "}
                        Starting at {el.lecture_time}{" "}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#DBEAFE",
                            padding: "0 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {el.lecture_type}
                        </div>
                        <div
                          style={{
                            backgroundColor: "#DCFCE7",
                            padding: "0 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {el.video_type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginRight: "15px" }}>
                <button>Details </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
