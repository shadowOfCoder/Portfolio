import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";

const Main = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches.toString());
    }
    setIsDark(localStorage.getItem("isDark") === "true");
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", isDark.toString());
  };

  return (
    <div className={isDark ? "dark-mode" : "dark-mode"}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;