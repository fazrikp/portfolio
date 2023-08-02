type Job = {
  title: string;
  timeline: string;
  description: string;
  remark?: string;
  activities?: string[];
  techs?: string | string[];
  links?: any;
};

const work: Record<string, Job[]> = {
  Careers: [
    {
      title: "PT. Kharisma Lestari Jaya",
      timeline: "Sep 2019 - Present",
      description: "An Indonesia -based company specializing in Garment Industries Manufacturing",
      remark: "Work in progress...",
      techs: "Ms. Excel, Photoshop, Corel , Wordpress, PHP, Mikrotik",
      activities: [
        "R&D Division",
        "Make Something Jeans or Jacket new Model inovation",
        "Administration of R&D ",
        "Man in the middle between sample room & Merchandise",
        "Follow up sample to finish in line schedulle",
        "IT- Support networking handling"
      ],
    },
    {
      title: "PT. Anugra Karya Utama Abadi",
      timeline: "March 2019 - August 2021",
      description: "A Freelance Job",
      remark:
        "",
      activities: [
        "Preparation of Detailed Engineering Estimate (EE) & Owner Estimate (OE)",
        "Project Location Photo and Documentation of working progress",
        "Data Entry",
      ],
      techs: "Ms. Excel . Photoshop",
      
    },
    {
      title: "ROYAL Marketing International",
      timeline: "Oct 2016 - March 2019",
      description: "distribution of herbal medicines company",
      remark:
        "This is the first time to learn about ads, SEO, SEM, etc.",
      activities: [
        "Digital Marketing - Handling Ecommerce like Shopee , Tokopedia, Bukalapak, Lazada, Blibli, etc",
        "Process Order to Shipment Ready for pickup courier",
        "Make sales reports every months",
      ],
      techs: "Google Ads, Facebook Ads, Social Toolkit, Wocommerce, Worpress",
    },

    {
      title: "Mc Donald's",
      timeline: "Sep 2015 - Sep 2016",
      description: "McDonald's Corporation is an American multinational fast food chain",
      remark:
        "One day to move station As Crew Production",
      activities: [
        "Handling Customer as a Front Cashier",
        "Balance capital money and result money after end session work",
        "Make Chicken at Fryer station",
        "become runner, give food for customer order to front cashier",
        "Drive Thru customer Service , Customer Handling for order from Drive Thru"
      ],
      techs: "Google Ads, Facebook Ads, Social Toolkit, Wocommerce, Worpress",
    },

    {
      title: "CV. Dira Fashion",
      timeline: "Jan 2015 - Aug 2015",
      description: "A Job for 7 Month",
      remark:
        "Make Application base Web",
      activities: [
        "CV Information System Analysis. Dira Fashion work flow",
        "Creating Flowmap Schematics to be made in the Application",
        "Coding design in making applications using the PHP and MySQL programming languages",
        "Network Management to connect in one application user with several employees",
        "Synchronize applications at one time (Online Information System) in one network"
      ],
      techs: "XAMPP , Sublime Text Editor , PHP, MySQL, Bootstrap",
    },
  ],
  "Side Works": [
  
    {
      title: "Website Developers",
      timeline: "2016 - Present",
      description: "",
      remark:
        "",
      activities: [
        "",
      ],
      techs: "HTML, CSS,",
      links: {
        $1: ["MediaWiki", "https://www.mediawiki.org/wiki/MediaWiki"],
        $2: ["ArticleRating", "https://dev.fandom.com/wiki/ArticleRating"],
        $3: ["FloatingToc", "https://dev.fandom.com/wiki/FloatingToc"],
        $4: ["MediaWiki API", "https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api"],
      },
    },
    
  ],
};

export default work;
