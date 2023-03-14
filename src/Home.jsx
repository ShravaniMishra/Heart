import React, { useState } from "react";

const Home = () => {
    let newTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newTime);
    const handleClick = () => {
      newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    };
    setInterval(handleClick, 1000);

    let [love, setLove] = useState("");
    const Change = ()=>{
      setLove('I Love You Govind')
    }
  return (
    <>
      <div style={{backgroundImage: "linear-gradient(rgb(52, 94, 94),rgb(202, 185, 202))"}}>
        <div className="Home_main">
          <h1
            style={{
              color: "white",
              fontSize: "40px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Welcome to My Website
          </h1>
          <h3
            style={{
              fontSize: "25px",
              color: "white",
              textAlign: "right",
              marginRight: "10px",
              marginTop: "-55px",
            }}
          >
            {time}
          </h3>
        </div>
        <div className="Home">
          <img
            src="https://i.ibb.co/5K0cjj6/Whats-App-Image-2023-03-04-at-8-30-28-PM.jpg"
            alt="Shravani"
          />
        </div>
        <div className="box">
          <h2>
            Hey It's me {" "}
            <span style={{ textDecoration: "bold", color: "brown" }} >
              Queen of Govind.
            </span>
          </h2>
          <button
            className="btn btn-outline-success"
            onClick={Change}
            style={{ margin: "auto", marginLeft: "-25%" }}
          >
            Click Me
          </button>
          <h1 className="text-danger">{love}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
