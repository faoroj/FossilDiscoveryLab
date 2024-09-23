import {  Navbar, Footer, Newsletter, AccessibilityHero, Info } from "../components/";

const Accessibility = () => {
  return (
    <div> 

      <div>
        <div>
          <Navbar />
        </div>
      </div>
       
        <div>
          <div>
            <AccessibilityHero />
            <Info />
            {/*
            <Newsletter />
            <Footer />
            */}
          </div>
        </div>
        
    </div>
  )
}

export default Accessibility
