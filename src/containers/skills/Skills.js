import React, {useContext} from "react";
import "./Skills.css";
import programmingComputer from "../../assets/lottie/programmingComputer"
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import DeveloperActivity from "../../assets/images/developerActivity.svg"

export default function Skills() {
    const {isDark} = useContext(StyleContext);
    return (
        <div className={isDark ? "dark-mode main" : "main"} id="skills">
            <div className="skills-main-div">
                <Fade left duration={1000}>
                    <div className="skills-image-div" >
                        {illustration.animated ? (
                            <>
                                <div className='skills-data-visualization'>
                                    <DisplayLottie  animationData={programmingComputer} />
                                </div>
                                {/* <div
                                    className='skills-play-button'>
                                    <DisplayLottie 
                                        animationData={playButton}
                                        onClick={() => alert('Play videos')} />
                                </div> */}
                            </>
                            
                        ) : (
                            <img
                                alt="Man Working"
                                src={DeveloperActivity} />
                        )}
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1
                            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                        >
                            {skillsSection.title}{" "}
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode subTitle skills-text-subtitle"
                                    : "subTitle skills-text-subtitle"
                            }
                        >
                            {skillsSection.subTitle}
                        </p>
                        <SoftwareSkill/>
                        <div>
                            {skillsSection.skills.map((skills) => {
                                return (
                                    <p
                                        className={
                                            isDark
                                                ? "dark-mode subTitle skills-text"
                                                : "subTitle skills-text"
                                        }
                                    >
                                        {skills}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
