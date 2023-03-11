import React, { useState } from "react";
import Search from "./Search";

const About = () => {
  const [img, setImg] = useState("");
  const handleChange = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder="Way to my Heart"
          value={img}
          onChange={handleChange}
        />

        <Search name={img} />

        <img
          style={{ widows: "50%", height: "350px" }}
          src="https://files.cults3d.com/uploaders/17664276/illustration-file/6e286561-28c2-4163-b35c-53ea8de77120/Heart-Beat.gif"
          alt="heartbeat"
        />
      </div>
      <div className="About">
        <h1>I am from Odisha</h1>
        <h3>Completed my Btech from CET.</h3>
        <p>Without having any prior Interest , I joined Masai School.</p>
        <p>
          Never expected there will be a life changing turn will come into my
          life.
        </p>
        <br />
        <p>
          I meet a guy, was elder to me. Bold Eyes ,Shiny Face, Handsome Look
          with lots of Attitude.{" "}
        </p>
        <h2>"October 11 - 2022"-- My Lucky Date </h2>
        <p>
          I Love Him More <span style={{ fontSize: "40px" }}>💝</span>
        </p>
      </div>

      <div className="AboutGovind">
        <h1>He is from Himanchal</h1>
        <h3>My LifeLine.</h3>
        <p>
          I don't know what to say about him, In Simple term "A Genious Person"
        </p>
        <p>
          Always listen to my messy words,Spends valuable time with me,Respects
          me,Loves me more and sometimes get jealous{" "}
          <span style={{ fontSize: "30px" }}>😍</span>.
        </p>
        <h2>"October 11 - 2022"-- Officially came into a Relationship</h2>
        <p>
          He Love Me More than Anything{" "}
          <span style={{ fontSize: "40px" }}>💝</span>
        </p>
      </div>
    </>
  );
};

export default About;
