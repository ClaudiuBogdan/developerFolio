import React, {useContext} from "react";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/workingMan"
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, ilustration as illustration} from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Greeting() {
    const {isDark} = useContext(StyleContext);
    const animationEnabled = true; //illustration.animated
    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1
                                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                            >
                                {" "}
                                {greeting.title}
                            </h1>
                            <p
                                className={
                                    isDark
                                        ? "dark-mode greeting-text-p"
                                        : "greeting-text-p subTitle"
                                }
                            >
                                {greeting.subTitle}
                            </p>
                            <SocialMedia/>
                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact"/>
                                <Button
                                    text="See my resume"
                                    newTab={true}
                                    href={greeting.resumeLink}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {animationEnabled ? (
                            <DisplayLottie animationData={landingPerson}/>
                        ) : (
                            <img
                                alt="man sitting on table"
                                src={require("../../assets/images/manOnTable.svg")}/>
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
