import {  Navbar, Footer, Newsletter, AboutUsEntry, MissionStatement, Extras } from "../components/";
import { useState } from "react";
import SearchBar from "../components/nav/SearchBar";

const AboutUs = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const handleSearchClick = () => {setIsSearchBarOpen(!isSearchBarOpen);};

  return (
  <main className="relative"> 
    <Navbar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick}/>
    <SearchBar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick} />

    <section className="padding-x sm:py-16 py-8">
      <AboutUsEntry />
    </section>

    <section className="padding-x padding-b">
      <MissionStatement />
    </section>

    <section className="padding-x padding-b">
      <Extras />
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

export default AboutUs
