import {  Navbar, Footer, Newsletter, AboutUsEntry, MissionStatement, Extras } from "../components/";

const AboutUs = () => {
  return (
    <div> 

      <div>
        <div>
          <Navbar />
        </div>
      </div>
     
      <div>
        <div>
          <AboutUsEntry />
          <MissionStatement />
          <Extras />
          <Newsletter />
          <Footer />
        </div>
      </div>

  </div>

  )
}

export default AboutUs
