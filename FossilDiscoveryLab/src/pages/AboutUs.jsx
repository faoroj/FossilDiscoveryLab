import {  Navbar, Footer, Newsletter, AboutUsEntry, MissionStatement, Extras } from "../components/";

const AboutUs = () => {
  return (
  <main className="relative"> 
    <Navbar />

    <section className="padding-x sm:py-16 py-8">
      <AboutUsEntry />
    </section>

    <section className="padding-x padding-b">
      <MissionStatement />
    </section>

    <section className="padding">
      <Extras />
    </section>

    <section>
      <Newsletter />
    </section>

    <section className="padding-x padding-t">
      <Footer />
    </section>

  </main>

  )
}

export default AboutUs
