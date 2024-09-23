import {  Questions, Admission, Help, Directions, Hours, Newsletter, Footer, Navbar } from "../components/";

const VisitUs = () => {
  return (
    <div> 

      <div>
        <div>
          <Navbar />
        </div>
      </div>
    
      <div>
        <div>
          <Hours />
          <Directions />
          <Admission />
          <Help />
          <Questions />
          <Newsletter />
          <Footer />   
        </div>
      </div>

    </div>


  )
}

export default VisitUs

