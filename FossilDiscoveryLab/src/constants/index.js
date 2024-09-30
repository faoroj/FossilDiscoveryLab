import { 
  Assistance, Divider, DonateBanner, facebook, hero, instagram, Learning, 
  logo,  Programs ,Tours, Trex, Trex2, Triceratops, twitter, youtube, Learning2, 
  ContactUs, JoinUs, FAQ, Address, Handicap, Car, Map, Dropdown, DropdownBlack, Calender, Whitearrowright
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

  export const visitLinks = [
    {
        id: "Visit-1",
        title: "Plan Your Visit",
        path: "/VisitUs",
        icon: Whitearrowright,
    },
    {
        id: "Visit-2",
        title: "Buy Tickets",
        path: "/BuyTickets",
        icon: Whitearrowright,
    },
    {
        id: "Visit-3",
        title: "Accessibility",
        path: "/Accessibility",
        icon: Whitearrowright,
    },
    {
        id: "Visit-4",
        title: "Group Visits",
        path: "/GroupVisit",
        icon: Whitearrowright,
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
      page: "https://maps.app.goo.gl/UqpA7c6RduYp4T4q9"
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
      question: "What are your museum hours?",
      answer: "Our museum is open during the following hours: Monday to Saturday: 8:00AM-6:00PM Sunday: 11:00AM-5:00PM",
      icon: DropdownBlack
    },
    {
      id: "FrequentQuestions-2",
      question: "Are there guided tours available? How can I schedule one?",
      answer: "Our knowledgeable guides provide in-depth insights into our exhibits, offering a rich, educational experience for visitors of all ages. To schedule a guided tour, please visit our website or contact us directly at 215-763-8100 or help@fossildiscoverymuseum.org Tours are available for individuals, groups, and school visits, and we recommend booking in advance to ensure availability.",
      icon: DropdownBlack
    },
    {
      id: "FrequentQuestions-3",
      question: "Is the museum accessible for visitors with disabilities?",
      answer: "We are committed to providing an inclusive experience for all guests, offering accessible entrances, restrooms, and pathways throughout the museum. Additionally, we have wheelchair rentals available at no charge on a first-come, first-served basis.If you have any specific accessibility needs or questions, please feel free to contact us in advance at 215-763-8100 or help@fossildiscoverymuseum.org, and we'll be happy to assist in making your visit as comfortable as possible.",
      icon: DropdownBlack
    },
    {
      id: "FrequentQuestions-4",
      question: "How can I support the museum through donations or volunteering?",
      answer: "There are several ways to support our museum! You can contribute by making a donation, which helps us preserve exhibits, fund educational programs, and maintain our facilities. Donations can be made through our website or by contacting us directly. We also offer volunteer opportunities for those looking to get involved. Volunteers assist with various tasks, from guiding visitors to helping with special events.",
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

  export const serviceDogsPolicy = {
    title: "Service Dogs Policy",
    introduction: "At our museum, we welcome visitors with service animals to ensure an inclusive and accessible experience for all. We recognize the vital role that service animals play in assisting individuals with disabilities, and we are committed to accommodating their presence within our premises.",
    responsibilities: [
      "Service animals must be harnessed, leashed, or tethered, unless these devices interfere with the animal's work or the individual's disability prevents using such devices.",
      "The handler is responsible for the care, supervision, and control of the service animal at all times."
    ],
    exclusions: [
      "Animals other than service animals, such as pets and emotional support animals, are not permitted within the museum.",
      "Service animals that are not under control, pose a direct threat to the health or safety of others, or exhibit disruptive behavior (such as excessive barking or aggression) may be asked to leave."
    ]
  };

  export const signLanguagePolicy = {
    title: "Sign Language Interpreters",
    introduction: "We are committed to providing an inclusive and accessible experience for all visitors at our museum. To assist individuals who are deaf or hard of hearing, we offer sign language interpreter services.",
    requesting: [
      "Visitors who require a sign language interpreter during their museum visit are kindly asked to submit a request at least two weeks in advance of their booked visit date.",
      "Requests can be made by contacting our Accessibility Services Coordinator at help@fossildiscoverymuseum.org or 215-763-8100. Please provide the following information:"
    ],
    requesting2: [
      "Date and time of your visit",
      "Type of interpreter needed (e.g., American Sign Language, British Sign Language, etc.)"
    ]
  };
  
 


  
 


