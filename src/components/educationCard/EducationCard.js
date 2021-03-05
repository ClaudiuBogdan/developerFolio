import React, { createRef, useContext } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="subTitle">{item}</li>)
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="project-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="project-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="project-card-right">
            <h5 className="project-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="project-text-desc">{school.desc}</p>
              <div className="project-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="project-card-border"></div>
      </Slide>
    </div>
  );
}
