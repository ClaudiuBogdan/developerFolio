import React from "react";
import "./Progress.css";
import buildAnimation from "../../assets/lottie/build"
import {ilustration as illustration, techStack} from "../../portfolio";
import { Fade } from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SkillsImage from "../../assets/images/skill.svg"

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className="skills-image">
                    {illustration.animated ? (
                        <DisplayLottie animationData={buildAnimation} />
                    ) : (
                        <img
                            alt="Skills"
                            src={SkillsImage}/>
                    )}
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
