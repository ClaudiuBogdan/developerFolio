import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import GitHubProjects from "./GitHubProjects/GitHubProjects";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import { TopProjects } from "./topProjects/TopProjects";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={`${this.state.isDark ? "dark-mode" : ''} main-layout`}>
          <StyleProvider
              value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}>
              <Header/>
              <Greeting/>
              <Skills/>
              <TopProjects/>
              <GitHubProjects/>
              <WorkExperience/>
              <Projects/>
              <Education/>
              <Achievement/>
              <Contact/>
              <Footer/>
              <Top/>
          </StyleProvider>
      </div>
    );
  }
}
