import {  Questions, Admission, Help, Directions, Hours, Newsletter, Footer, Navbar } from "../components/";

const VisitUs = () => {
  return (
    <main> 
      <Navbar />

      <section className="padding-x pt-[40px] md:pt-[80px]">
        <Hours />
      </section>

      <section className="padding">
        <Directions />
      </section>

      <section className="padding-x">
        <Admission />
      </section>

      <section className="padding-x pt-[0px] md:pt-[200px]">
        <Help />
      </section>

      <section className="padding-x padding-b sm:pt-[100px] pt-[66px]">
        <Questions />
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

export default VisitUs

