import { 
  Assistance, Divider, DonateBanner, facebook, hero, instagram, Learning, 
  logo,  Programs ,Tours, Trex, Trex2, Triceratops, twitter, youtube, Learning2, 
  ContactUs, JoinUs, FAQ, Address, Handicap, Car, Map, Dropdown, DropdownBlack, Calender
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        path: "/"
    },
    {
        id: "about",
        title: "About",
        path: "/AboutUs"
    },
    {
        id: "visit",
        title: "Visit",
        path: "/VisitUs"
    },
    {
        id: "explore",
        title: "Explore",
        path: "/Explore"
    },
    {
        id: "learn",
        title: "Learn",
        path: "/Learn"
    },
  ];

export const exhibits = [
    {
      id: "exhibit-1",
      image: Triceratops,
      title: "Horns of the Past: The Triceratops Legacy",
      content:"Encounter the majestic skeleton of a Triceratops, marveling at its iconic horns and shield-like frill, symbols of strength and survival in the ancient world. ",
      
    },

    {
      id: "exhibit-2",
      image: Trex,
      title: "Tyrant Kings: The Reign of T-Rex",
      content:"Step into the ancient world of 'Tyrant Kings: The Reign of T-Rex,' where you'll come face to face with the awe-inspiring skeleton of a fearsome Tyrannosaurus rex, the undisputed king of the dinosaurs.",  
    },
  ];

export const services = [
    {
        id: "service-1",
        title: "Wheelchairs Assistance",
        content:"The museum has wheelchairs available for all who need them upon request. To request ahead of time email help@fossildiscoverymuseum.org",
    },

    {
        id: "service-2",
        title: "Service Dogs",
        content:"Visitors who benefit from service animals defined by the Americans with Disabilities Act are welcome within the museum.",
    },

    {
        id: "service-3",
        title: "Accessible Parking",
        content:"The museum has accessible parking available along with ramps elevators and hallways designed to be accessible to wheelchairs and other mobility aids.",
    },

  ];

  export const learnmore = [
    {
        id: "learnmore-1",
        image: Learning,
        title: "Learning Resources",
        content:"Keen to learn more? Explore our range of available resources to further your studies.",
        link: "Learn Now >",
    },

    {
        id: "learnmore-2",
        image: Programs,
        title: "Programs and Internships",
        content:"Curious about our educational programs or internship opportunities? Reach out to us to find out more!",
        link: "Join Us >",
    },

    {
        id: "learnmore-3",
        image: Tours,
        title: "School Tours",
        content:"Want to organize a school visit? Book your tour now!",
        link: "Schedule Tour >",
        page: "/GroupVisit"
    },

  ];

  export const socialMedia = [
    {
      id: "social-media-1",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-2",
      icon: twitter,
      link: "https://www.twitter.com/",
       
    },
    {
      id: "social-media-3",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-4",
      icon: youtube,
      link: "https://www.youtube.com/",
    },
  ];

  export const footerlinks = [
    {
      id: "footer-links-1",
      page: "About",
      link: "/AboutUs",
    },
    {
      id: "footer-links-2",
      page: "Plan Your Visit",
      link: "/VisitUs",
    },
    {
      id: "footer-links-3",
      page: "Contact Us",
      link: "/",
    },
    {
      id: "footer-links-4",
      page: "FAQs",
      link: "/",
    },
  ];

  export const ExtraResources = [

    {
      id: "ExtraResources-1",
      image: Learning2,
      title: "Learning Resources",
      content:"Explore our collection of educational materials and resources to enhance your dinosaur discoveries.",
      link: "Learn Now >",
  },

  {
      id: "ExtraResources-2",
      image: JoinUs,
      title: "Join Us",
      content:"Connect and collaborate with us with our professional positions and programs",
      link: "View Careers >",
  },

  {
      id: "ExtraResources-3",
      image: ContactUs,
      title: "Contact Us",
      content:"We're here to help! Reach out to us with any questions or inquiries.",
      link: "Reach Out >",
  },

  {
      id: "ExtraResources-4",
      image: FAQ,
      title: "FAQ",
      content:"Find answers to commonly asked questions about our museum below.",
      link: "Learn More >",
  },

  ];

  export const Directions = [
    {
      id: "Directions-1",
      title: "Address",
      icon: Address,
      content: "2600 Benjamin Franklin Parkway Philadelphia, PA 19130",
      link: "Copy Address",
    },
    {
      id: "Directions-2",
      title: "Parking",
      icon: Car,
      content: "The parking lot entrance is located on Kensington Ave, just south of E Tiega St.",
      link: "Google Map",
    },
    {
      id: "Directions-3",
      title: "Accessible Parking",
      icon: Handicap,
      content: "We provide accessible parking spaces and bicycle racks to accommodate all visitors' needs.",
      link: "Read More",
      page: "/Accessibility"
    }
  ];

  export const Admission = [
    {
      id: "Admission-1",
      age: "Adults",
      cost: "20$",
    },
    {
      id: "Admission-2",
      age: "Senior (60 & over)",
      cost: "18$",
    },
    {
      id: "Admission-3",
      age: "Military",
      cost: "18$",
    },
    {
      id: "Admission-4",
      age: "Students with valid ID",
      cost: "15$",
    },
    {
      id: "Admission-5",
      age: "Children (8 & Under) ",
      cost: "Free",
    },
  ];

  export const tips = [
    {
      id: "Tips-1",
      title: "Where to eat",
      content: "We are proud to work with local food and beverage suppliers to provide guests with a selection of dineries.",
      link: "Suggested Dineries",
      icon: Dropdown
    },
    {
      id: "Tips-2",
      title: "Mobile Map",
      content: "The parking lot entrance is located on Kensington Ave, just south of E Tiega St.",
      link: "Download Here",
      icon: Map
    },
    {
      id: "Tips-3",
      title: "Still need help?",
      content: "We provide accessible parking spaces and bicycle racks to accommodate all visitors' needs.",
      link: "Contact Us (239) 255-0108",
    }
  ];

  export const FrequentQuestions = [
    {
      id: "FrequentQuestions-1",
      question: "What are your museum hours and admission prices?",
      icon: DropdownBlack
    },
    {
      id: "FrequentQuestions-2",
      question: "Are there guided tours available? How can I schedule one?",
      icon: DropdownBlack
    },
    {
      id: "FrequentQuestions-3",
      question: "Is the museum accessible for visitors with disabilities?",
      icon: DropdownBlack
    },
    {
      id: "FrequentQuestions-4",
      question: "How can I support the museum through donations or volunteering?",
      icon: DropdownBlack
    }
  ];

  export const GroupForm = [
    {
      id: "GroupForm-1",
      header: "Group Type*",
    },
    {
      id: "GroupForm-2",
      header: "Contact Name*",
    },
    {
      id: "GroupForm-3",
      header: "Contact Email*",
    },
    {
      id: "GroupForm-4",
      header: "Contact Phone*",
    },
    {
      id: "GroupForm-5",
      header: "Desired Date*",
      icon: Calender,
    },
    {
      id: "GroupForm-6",
      header: "Number in group*",
    },
    {
      id: "GroupForm-7",
      header: "Arrival Time*",
    },
    {
      id: "GroupForm-8",
      header: "Departure Time*",
    },
    {
      id: "GroupForm-9",
      header: "Accessibility Requests*",
    }

  ];

  
 


