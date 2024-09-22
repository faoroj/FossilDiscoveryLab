import { Donate, Exhibits, Hero, Latest, Learn, Services, Navbar, Footer, Newsletter } from "../components/";

const App = () => (
    <div> 

      <div>
        <div>
          <Navbar />
        </div>
      </div>
       
        <div>
          <div>
            <Hero />
            <Exhibits />
            <Services />
            <Latest />
            <Learn />
            <Donate />
            <Newsletter />
            <Footer />
          </div>
        </div>
        
    </div>
  )

export default App