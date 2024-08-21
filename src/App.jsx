import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import MeetOurTeam from "./components/MeetOurTeam"
import MoreProjects from "./components/MoreProjects"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <MeetOurTeam />
      <MoreProjects />
      <Footer />
    </>
  )
}

export default App
