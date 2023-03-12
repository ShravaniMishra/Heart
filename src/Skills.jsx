import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Skills = () => {
  return (
    <>
      <Box>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://source.unsplash.com/400x200"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Caring</h5>
            <p className="card-text">
              It's a way of showing love. Call often to remind him how much you
              love him and how you are always thinking about him.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Compassionate</li>
            <li className="list-group-item">Concerned</li>
            <li className="list-group-item">Loving</li>
          </ul>
          <div className="card-body">
            <a
              href="https://spontaneous-sunflower-c6ac1f.netlify.app/"
              className="btn btn-outline-danger"
            >
              Click Me
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://source.unsplash.com/400x200"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Respect</h5>
            <p className="card-text">
              It's a Center of Attraction. For me he is a Successful person
              because he respect each and everyone and every Religion.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Listen to others</li>
            <li className="list-group-item">Politeness</li>
            <li className="list-group-item">Kindness</li>
          </ul>
          <div className="card-body">
            <a
              href="https://spontaneous-sunflower-c6ac1f.netlify.app/"
              className="btn btn-outline-danger"
            >
              Click Me
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://source.unsplash.com/400x200"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Honesty</h5>
            <p className="card-text">
              "Honesty" key Relationship. A Relationship should always
              begins with truth, if there is a terrible past simply share with
              your partner.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Admitting</li>
            <li className="list-group-item">Sharing</li>
            <li className="list-group-item">Building Trust</li>
          </ul>
          <div className="card-body">
            <a
              href="https://spontaneous-sunflower-c6ac1f.netlify.app/"
              className="btn btn-outline-danger"
            >
              Click Me
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://source.unsplash.com/400x200"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Effort</h5>
            <p className="card-text">
              Achieve SomeOne. He puts a lot of effort in this Relationship to make it more stronger and pure.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Hard Work</li>
            <li className="list-group-item">Showing Emotions</li>
            <li className="list-group-item">Value</li>
          </ul>
          <div className="card-body">
            <a
              href="https://spontaneous-sunflower-c6ac1f.netlify.app/"
              className="btn btn-outline-danger"
            >
              Click Me
            </a>
          </div>
        </div>
      </Box>
    </>
  );
};
const Box = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 20px;
margin-left: 20px;
margin-top: 10px;

 
`;
export default Skills;
