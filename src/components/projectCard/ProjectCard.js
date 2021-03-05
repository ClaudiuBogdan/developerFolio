import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./ProjectCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectCard({project}) {
    const imgRef = createRef();

    const GetDescBullets = ({descBullets}) => {
        return descBullets
            ? descBullets.map((item) => <li className="subTitle">{item}</li>)
            : null;
    };
    const {isDark} = useContext(StyleContext);
    return (
        <div>
            <Fade left duration={1000}>
                <div className="project-card">
                    <div className="project-card-left">
                        <a href={project.link} target='_blank'>
                            <img
                                crossOrigin={"anonymous"}
                                ref={imgRef}
                                className="project-roundedimg"
                                src={project.logo}
                                alt={project.name}
                            />
                        </a>

                    </div>
                    <div className="project-card-right">
                        <a href={project.link}
                           target="_blank">

                            <h5 className="project-text-header">
                                {project.name}
                            </h5>
                        </a>

                        <div className="project-text-details">
                            <h5
                                className={
                                    isDark
                                        ? "dark-mode project-text-subHeader"
                                        : "project-text-subHeader"
                                }
                            >
                                {project.subHeader}
                            </h5>
                            <p
                                className={`${
                                    isDark ? "dark-mode" : ""
                                } project-text-duration`}
                            >
                                {project.duration}
                            </p>
                            <p className="project-text-desc">{project.desc}</p>
                            <div className="project-text-bullets">
                                <ul>
                                    <GetDescBullets descBullets={project.descBullets}/>
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
