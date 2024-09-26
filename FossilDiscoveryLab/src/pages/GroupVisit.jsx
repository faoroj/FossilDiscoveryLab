import {  Navbar, Footer, Newsletter, GroupVisitHero, GroupVisitForm } from "../components/";

const GroupVisit = () => {
  return (
  <main className="relative"> 
    <Navbar />

    <section className="padding-x pt-[35px]">
      <GroupVisitHero />
    </section>

    <section className="padding-x pt-8 pb-[100px]">
      <GroupVisitForm />
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

export default GroupVisit
