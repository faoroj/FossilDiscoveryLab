import {  Questions, Admission, Help, Directions, Hours, Newsletter, Footer, Navbar } from "../components/";

const VisitUs = () => {
  return (
    <main> 
      <Navbar />

      <section className="padding-x pt-[80px]">
        <Hours />
      </section>

      <section className="padding">
        <Directions />
      </section>

      <section className="padding-x">
        <Admission />
      </section>

      <section>
        <Help />
      </section>

      <section>
        <Questions />
      </section>

      <section>
        <Newsletter />
      </section>

      <section>
        <Footer />
      </section>
      



    </main>


  )
}

export default VisitUs

