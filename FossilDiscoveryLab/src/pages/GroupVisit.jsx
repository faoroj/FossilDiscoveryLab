import {  Navbar, Footer, Newsletter, GroupVisitHero, GroupVisitForm } from "../components/";

const GroupVisit = () => {
  return (
  <div> 

    <div>
      <div>
        <Navbar />
      </div>
    </div>
     
      <div>
        <div>
          <GroupVisitHero />
          <GroupVisitForm />
          {/*
          <Newsletter />
          <Footer />
          */}
        </div>
      </div>
      
  </div>

  )
}

export default GroupVisit
