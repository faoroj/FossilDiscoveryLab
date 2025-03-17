import {  Navbar, Footer, Newsletter, AccessibilityHero, Info } from "../components/";
import { useState } from "react";
import SearchBar from "../components/nav/SearchBar";


const Accessibility = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const handleSearchClick = () => {setIsSearchBarOpen(!isSearchBarOpen);};

  return (
    <main className="relative"> 
        <Navbar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick}/>
        <SearchBar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick} />

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
