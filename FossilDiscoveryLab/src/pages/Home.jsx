import { Donate, Exhibits, Hero, Latest, Learn, Services, Navbar, Footer, Newsletter } from "../components/";

const App = () => {
  return (
    <main className="relative"> 
      <Navbar />

      <section className='padding-b'>
        <Hero />
      </section>

      <section className="padding">
        <Exhibits />
      </section>

      <section className='padding-y'>
        <Services />
      </section>

      <section className="padding">
        <Latest />
      </section>

      <section className="bg-white padding">
        <Learn />
      </section>

      <section>
        <Donate />
      </section>

      <section>
        <Newsletter />
      </section>

      <section>
        <Footer />
      </section>

    </main>
  );
};

export default App