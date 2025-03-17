import {  Navbar, Footer, Newsletter, GroupVisitHero, GroupVisitForm } from "../components/";
import { useState } from "react";
import SearchBar from "../components/nav/SearchBar";

const GroupVisit = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const handleSearchClick = () => {setIsSearchBarOpen(!isSearchBarOpen);};

  return (
  <main className="relative"> 
    <Navbar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick}/>
    <SearchBar isSearchBarOpen={isSearchBarOpen} handleSearchClick={handleSearchClick} />

   <section className="padding-x pt-[35px]">
    <GroupVisitHero />
   </section>

   <section className="padding-x pt-8 pb-[100px]">
    <GroupVisitForm />
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

export default GroupVisit
