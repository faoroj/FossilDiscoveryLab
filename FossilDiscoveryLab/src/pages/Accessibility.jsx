import {  Navbar, Footer, Newsletter, AccessibilityHero, Info } from "../components/";

const Accessibility = () => {
  return (
    <main className="relative"> 
      <Navbar />

        <section className="padding-x padding-t">
          <AccessibilityHero />
        </section>

        <section className="padding">
          <Info />
        </section>

        <section>
         <Newsletter /> 
        </section>
         
        <section className="">
         <Footer />
        </section>
        
        
    </main>
  )
}

export default Accessibility
