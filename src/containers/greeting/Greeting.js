import React, {useContext} from "react";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/workingMan"
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, illustration} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import ManOnTable from "../../assets/images/manOnTable.svg"

export default function Greeting() {
    const {isDark} = useContext(StyleContext);

    const greetingText = [
        {
            title: 'Why me?',
            items: [
                <span> I work <strike>hard</strike>  smart to deliver quality software</span>,
                'I collaborate with the stakeholders to prioritize the tasks that bring value to the project',
                'I implement optimal solutions to each specific problem',
                'I have experience in delivering a wide range of projects',
                'I\'m not afraid of asking questions to understand the scope of my work'
            ]
        },
        {
            title: 'What am I seeking?',
            items: [
                'A company that cares about its product or service',
                'An agile team that value quality software',
                'JavaScript/TypeScript projects, preferable React.js or Node.js',
            ]                 
        }
    ]

    const animationEnabled = illustration.animated
    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1
                                className={isDark ? "dark-mode greeting-title" : "greeting-title"}>
                                Looking for an experienced developer to deliver quality software, 
                                be part of your development team and bring your product to the next level?
                            </h1>
                            {greetingText.map((greetingItem, index) => (
                              <section key={index}>
                                <h2 className={ isDark
                                            ? "dark-mode greeting-question"
                                            : "greeting-question"}>
                                    {greetingItem.title}
                                </h2>
                                <ul>
                                    {greetingItem.items.map((item, itemIndex) => (
                                        <li key={itemIndex}
                                            className={
                                                isDark
                                                    ? "dark-mode greeting-bullet"
                                                    : "greeting-bullet"}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                              </section>  
                            ))}

                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact"/>
                                <Button
                                    text="See my resume"
                                    newTab={true}
                                    href={greeting.resumeLink}
                                />
                            </div>
                            <SocialMedia/>
                            
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {animationEnabled ? (
                            <DisplayLottie animationData={landingPerson}/>
                        ) : (
                            <img
                                alt="man sitting on table"
                                src={ManOnTable}/>
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
