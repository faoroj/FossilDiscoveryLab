import {  Navbar, Footer, Newsletter, AccessibilityHero, } from "../components/";

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
            <Newsletter />
            <Footer />
          </div>
        </div>
        
    </div>
  )
}

export default Accessibility
