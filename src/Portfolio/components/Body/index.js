import React from "react";
import { BodyContainer } from "./styles";
import Landing from "../pages/Landing";
import Timeline from "../pages/Timeline";
import BackgroundElements from "../BackgroundElements";
import Projects from "../pages/Projects";
import Navigator from "../Navigator";
import Feedback from "../pages/Feedback";
import Footer from "../Footer";
import Skills from "../pages/Skills";
import InterviewPrepper from "../InterviewPrepper";

function Body() {
  const [scrollTop, setScrollTop] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
        setScrollTop(Math.floor(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if(window.location.pathname === "/prep"){
    return <InterviewPrepper/>
  }
  return <BodyContainer>
    <BackgroundElements/>
    <Landing/>
    <Timeline scroll={scrollTop}/>
    <Projects  scroll={scrollTop}/>
    <Skills  scroll={scrollTop}/>
    <Navigator scroll={scrollTop}/>
    <Feedback/>
    <Footer/>
  </BodyContainer>;
}
export default Body;