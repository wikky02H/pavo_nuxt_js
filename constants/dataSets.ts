// features.js (or features.ts if using TypeScript)
//features
export const features = [
    {
      "title": "Platform Integration",
      "description": "You sales force can use the app on any smartphone platform without compatibility issues",
      "imgPath": "icon1.svg"
    },
    {
      "title": "Easy On Resources",
      "description": "Works smoothly even on older generation hardware due to our optimization efforts",
      "imgPath": "icon2.svg"
    },
    {
      "title": "Great Performance",
      "description": "Optimized code and innovative technology insure no delays and ultra-fast responsiveness",
      "imgPath": "icon3.svg"
    },
    {
      "title": "Multiple Languages",
      "description": "Choose from one of the 40 languages that come pre-installed and start selling smarter",
      "imgPath": "icon4.svg"
    },
    {
      "title": "Free Updates",
      "description": "Don't worry about future costs, pay once and receive all future updates at no extra cost",
      "imgPath": "icon5.svg"
    },
    {
      "title": "Community Support",
      "description": "Register the app and get access to knowledge and ideas from the Pavo online community",
      "imgPath": "icon6.svg"
    }
  ];

  //details
  export const details = [
    {
      "title": "Happy Users",
      "start": 1,
      "end": 231
    },{
      "title": "Issues Solved",
      "start": 1,
      "end": 385
    },{
      "title": "Good Reviews",
      "start": 1,
      "end": 159
    },{
      "title": "Case Studied",
      "start": 1,
      "end": 127
    },{
      "title": "Order received",
      "start": 1,
      "end": 385
    }
  ];

  //testimonials
  export const testimonials = [
    {
      profilePic: "testimonial1.jpg",
      designation: "Jude Thorn - Designer",
      details: "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great", 
    },{
      profilePic: "testimonial2.jpg",
      designation: "Roy Smith - Developer",
      details: "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers", 
    },{
      profilePic: "testimonial3.jpg",
      designation: "Marsha Singer - Marketer",
      details: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy", 
    },{
      profilePic: "testimonial4.jpg",
      designation: "Tim Shaw - Designer",
      details: "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects", 
    },{
      profilePic: "testimonial5.jpg",
      designation: "Lindsay Spice - Marketer",
      details: "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly", 
    },
    {
      profilePic: "testimonial6.jpg",
      designation: "Ann Blake - Developer",
      details: "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team", 
    }
  ];

//common features for price plans
const commonFeatures = [
  "List building and relations",
  "Seamless platform integration",
  "Great performance on devices",
  "Community support and videos"
];

//price plans
export const pricingPlans = [
  {
    planName: "Standard",
    price: 29,
    priceUnit: "month",
    description: "This basic package covers the marketing needs of small startups.",
    features: commonFeatures 
  },
  {
    planName: "Advanced",
    price: 39,
    priceUnit: "month",
    description: "This is a more advanced package suited for medium companies.",
    features: commonFeatures 
  },
  {
    planName: "Complete",
    price: 49,
    priceUnit: "month",
    description: "This is a comprehensive package designed for big organizations.",
    features: commonFeatures 
  }
];

//footerSocialLinks
export const socialLinks = [
  { link: '#facebook', icon: 'fa-facebook-f' },
  { link: '#twitter', icon: 'fa-twitter' },
  { link: '#pinterest', icon: 'fa-pinterest-p' },
  { link: '#instagram', icon: 'fa-instagram' },
  { link: '#youtube', icon: 'fa-youtube' }
];

export const footerBar = [
  { title: 'Article Details' },
  { title: 'Terms & Conditions' },
  { title: 'Privacy Policy' },
  // { title: 'Copyright © Your name' },
  // { title: 'Distributed by :Themewagon' },
];

export const navLinks = [
  { name: 'home', label: 'Home', to: '#home' },
  { name: 'features', label: 'Features', to: '#features' },
  { name: 'details', label: 'Details', to: '#details' },
  { name: 'pricing', label: 'Pricing', to: '#pricing' },
  { name: 'download', label: 'Download', to: '#download' },
];

export const dropdownLinks = [
  { name: 'article', label: 'Article Details', to: '#article' },
  { name: 'terms', label: 'Terms & Conditions', to: '#terms' },
  { name: 'privacy', label: 'Privacy Policy', to: '#privacy' },
];

export const socialIcons = [
  { name: 'apple', class: 'fab fa-apple', href: '#apple' },
  { name: 'android', class: 'fab fa-android', href: '#android' },
];

export const headerTabs = [
  { name: 'home', orderNo: 1},
  { name: 'features', orderNo: 2},
  { name: 'details', orderNo: 3},
  { name: 'pricing', orderNo: 4},
  { name: 'drop', orderNo: 5},
  { name: 'download', orderNo: 6 },
];

export const dropDownValues = [
  { name: 'Article Details', orderNo: 1},
  { name: 'Terms & Conditions', orderNo: 2},
  { name: 'Privacy Policy', orderNo: 3}
];

  