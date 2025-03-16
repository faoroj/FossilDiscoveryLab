import { useState } from "react";
import { Donate, Exhibits, Hero, Latest, Learn, Services, Navbar, Footer, Newsletter, NewsletterSubscribe } from "../components/";
import SearchBar from "../components/nav/SearchBar";



const App = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const handleSearchClick = () => {setIsSearchBarOpen(!isSearchBarOpen);};

  return (
    <main className="relative"> 
      <Navbar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick}/>
      <SearchBar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick} />

      <section className='padding-b'>
        <Hero />
      </section>

      <section className="padding-x overflow-hidden">
        <Exhibits />
      </section>

      <section className='padding-y'>
        <Services />
      </section>

      {/* <section className="padding-x padding-y">
        <Latest />
      </section> */}

      <section className="bg-white padding">
        <Learn />
      </section>

      <section className="">
        <Donate />
      </section>

      <section>
        <NewsletterSubscribe />
      </section>

      <section className="">
        <Footer />
      </section>

    </main>
  );
};

export default App