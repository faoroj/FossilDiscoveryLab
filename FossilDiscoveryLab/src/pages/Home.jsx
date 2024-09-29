import { Donate, Exhibits, Hero, Latest, Learn, Services, Navbar, Footer, Newsletter } from "../components/";

const App = () => {
  return (
    <main className="relative"> 
      <Navbar />

      <section className='padding-b'>
        <Hero />
      </section>

      <section className="padding-x">
        <Exhibits />
      </section>

      <section className='padding-t'>
        <Services />
      </section>

      <section className="padding-x padding-y">
        <Latest />
      </section>

      <section className="bg-white padding">
        <Learn />
      </section>

      <section className="">
        <Donate />
      </section>

      <section>
        <Newsletter />
      </section>

      <section className="padding-x padding-t">
        <Footer />
      </section>

    </main>
  );
};

export default App