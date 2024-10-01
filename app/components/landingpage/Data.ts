import img1 from "/public/images/landingpage/demos/demo-main.jpg";
import img2 from "/public/images/landingpage/demos/demo-dark.jpg";
import img3 from "/public/images/landingpage/demos/demo-horizontal.jpg";
import img4 from "/public/images/landingpage/demos/demo-mini.jpg";
import img5 from "/public/images/landingpage/demos/demo-rtl.jpg";


import img6 from "/public/images/landingpage/apps/app-calendar.jpg";
import img7 from "/public/images/landingpage/apps/app-chat.jpg";
import img8 from "/public/images/landingpage/apps/app-contact.jpg";
import img9 from "/public/images/landingpage/apps/app-user-profile.jpg";
import img10 from "/public/images/landingpage/apps/app-note.jpg";
import img11 from "/public/images/landingpage/apps/app-blog.jpg";
import img12 from "/public/images/landingpage/apps/app-shop.jpg";
import img13 from "/public/images/landingpage/apps/app-productlist.jpg";
import img14 from "/public/images/landingpage/apps/app-invoice.jpg";
import img15 from "/public/images/landingpage/apps/app-blog-detail.jpg";
import img16 from "/public/images/landingpage/apps/app-product-detail.jpg";
import img17 from "/public/images/landingpage/apps/app-kanban.jpg";
import {
  Icon,
  IconAdjustments,
  IconArchive,
  IconArrowsShuffle,
  IconBook,
  IconBrandTailwind,
  IconBuildingCarousel,
  IconCalendar,
  IconChartPie,
  IconDatabase,
  IconDiamond,
  IconLanguageKatakana,
  IconLayersIntersect,
  IconLockAccess,
  IconMessage,
  IconRefresh,
  IconShieldLock,
  IconTag,
  IconWand,
  IconBrandHeadlessui
} from "@tabler/icons-react";

interface DemoTypes {
  link: string;
  img: string | any;
  name: string;
  type: boolean;
}
interface ProductDemoTypes {
  link: string;
  img: string | any;
  name: string;
  type: boolean;
  active: boolean;
}

const Demos: ProductDemoTypes[] = [
  {
    type: true,
    img: img1,
    name: "Main",
    link: "https://adminpro-nextjs-main.vercel.app/",
    active:true,
  },
  {
    type: true,
    img: img2,
    name: "Dark",
    link: "https://adminpro-nextjs-dark.vercel.app/",
    active:true,
  },
  {
    type: true,
    img: img3,
    name: "Horizontal",
    link: "https://adminpro-nextjs-horizontal.vercel.app/",
    active:true,
  },
  {
    type: true,
    img: img4,
    name: "Minisidebar",
    link: "",
    active:false,
  },
  {
    type: true,
    img: img5,
    name: "RTL",
    link: "",
    active:false,
  },

  
];

const AppsDemos: DemoTypes[] = [
  {
    type: false,
    img: img6,
    name: "Calandar App",
    link: "/apps/calendar",
  },
  {
    type: false,
    img: img7,
    name: "Chat App",
    link: "/apps/chats",
  },
  {
    type: false,
    img: img8,
    name: "Contact App",
    link: "/apps/contacts",
  },
  {
    type: false,
    img: img9,
    name: "User Profile App",
    link: "/apps/user-profile/profile",
  },
  {
    type: false,
    img: img10,
    name: "Notes App",
    link: "/apps/notes",
  },
  {
    type: false,
    img: img11,
    name: "Blog App",
    link: "/apps/blog/post",
  },
  {
    type: false,
    img: img15,
    name: "Blog Detail App",
    link: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
  },
  {
    type: false,
    img: img12,
    name: "eCommerce Shop App",
    link: "/apps/ecommerce/shop",
  },
  {
    type: false,
    img: img16,
    name: "eCommerce Product Detail App",
    link: "/apps/ecommerce/detail/1",
  },
  {
    type: false,
    img: img13,
    name: "eCommerce Product List App",
    link: "/apps/ecommerce/list",
  },
  {
    type: false,
    img: img14,
    name: "Invoice App",
    link: "/apps/invoice/list",
  },
  {
    type: false,
    img: img17,
    name: "Kanban App",
    link: "/apps/kanban",
  },
]

interface ListFeatureTypes {
  featureicon: any;
  title: string;
  subtitle: string;
}

const listFeature: ListFeatureTypes[] = [
  {
    featureicon: IconWand,
    title: "6 Theme Colors",
    subtitle:
      "AdminPro Admin comes with 6 pre-defined theme colors.",
  },
  {
    featureicon: IconArchive,
    title: "90+ Page Templates",
    subtitle: "Indeed, we offer 6 demos, each featuring over 90+ pages, to simplify the process",
  },
  {
    featureicon: IconAdjustments,
    title: "45+ UI Components",
    subtitle: "The Adminpro Admin Pack includes nearly 45 UI components.",
  },
  {
    featureicon: IconBrandTailwind,
    title: "Tailwind",
    subtitle:
      "It is built using Tailwind, a robust UI component framework.",
  },
  {
    featureicon: IconBuildingCarousel,
    title: "Flowbite React",
    subtitle:
      "A utility-first CSS framework and UI component library for React applications.",
  },
  {
    featureicon: IconDiamond,
    title: "3400+ Font Icons",
    subtitle:
      "The AdminPro Admin package includes numerous icon fonts.",
  },
  {
    featureicon: IconBrandHeadlessui,
    title: "HeadlessUI",
    subtitle: "The Adminpro Admin template includes 15+ Headless UI components.",
  },
  {
    featureicon: IconShieldLock,
    title: "Firebase",
    subtitle:
      "offer robust real-time database capabilities, authentication, and additional features.",
  },
  {
    featureicon: IconDatabase,
    title: "Axios",
    subtitle:
      "Axios is a promise-based HTTP client designed for both Node.js and browser environments.",
  },
  {
    featureicon: IconLanguageKatakana,
    title: "i18 React",
    subtitle:
      "react-i18 is a robust framework for internationalization in React applications.",
  },

  {
    featureicon: IconLockAccess,
    title: "Next-Auth",
    subtitle:
      "We have integrated Google, GitHub, and Credential providers with NextAuth.",
  },
  {
    featureicon: IconChartPie,
    title: "Lots of Chart Options",
    subtitle:
      "With ApexCharts, we offer a wide variety of chart options if you can name it, we likely have it.",
  },
  {
    featureicon: IconLayersIntersect,
    title: "Lots of Table Examples",
    subtitle: "Tables are a fundamental requirement, and we've included them",
  },
  {
    featureicon: IconRefresh,
    title: "Regular Updates",
    subtitle: "We continuously enhance our pack with new features.",
  },
  {
    featureicon: IconBook,
    title: "Detailed Documentation",
    subtitle: "We have created comprehensive documentation to make usage straightforward.",
  },
  {
    featureicon: IconCalendar,
    title: "Calendar Design",
    subtitle: "Our package includes a well-designed calendar.",
  },
  {
    featureicon: IconMessage,
    title: "Dedicated Support",
    subtitle: "We believe that exceptional support is essential, and we provide it.",
  },

];

/*User Review Section*/
import review1 from "/public/images/profile/user-2.jpg";
import review2 from "/public/images/profile/user-3.jpg";
import review3 from "/public/images/profile/user-4.jpg";

interface UserReviewTypes {
  img: any;
  review: string;
  title: string;
  subtitle: string;
}
const userReview: UserReviewTypes[] = [
  {
    img: review3,
    title: "Leslie Alexander",
    subtitle: "Product Designer, Appzio",
    review:
      "Such a beautiful, detailed, and extensive template. MaterialM admin is the perfect foundation for any project. I highly recommend this huge time saver.",
  },
  {
    img: review1,
    title: "Jenny Wilson",
    subtitle: "Features avaibility",
    review:
      "The dashboard template from wrappixel has helped me provide a cleanand sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.",
  },
  {
    img: review2,
    title: "Minshan Cui",
    subtitle: "Features avaibility",
    review:
      "The quality of design is excellent, customizability and flexibility much better than the other products available in the market.I strongly recommend the wrappixel to other.",
  },
];


interface DemosMegaMenuTypes {
  img: any;
  name: string;
  link: string;
}


/*Demos Megamenu*/
const demosMegamenu: DemosMegaMenuTypes[] = [
  {
      img: img1,
      name: 'Main',
      link: ''
  },
  {
      img: img2,
      name: 'Dark',
      link: ''
  },
  {
      img: img3,
      name: 'Horizontal',
      link: ''
  },
  {
      img: img4,
      name: 'Minisidebar',
      link: ''
  },
  {
      img: img5,
      name: 'RTL',
      link: ''
  },

];
const appsMegamenu: DemosMegaMenuTypes[] = [
  {
      img: img6,
      name: 'Calandar App',
      link: '/apps/calendar'
  },
  {
      img: img7,
      name: 'Chat App',
      link: '/apps/chats'
  },
  {
      img: img8,
      name: 'Contact App',
      link: '/apps/contacts'
  },
  {
      img: img9,
      name: 'User Profile App',
      link: '/apps/user-profile/profile'
  },
  {
      img: img10,
      name: 'Notes App',
      link: '/apps/notes'
  }
];

export { Demos, listFeature, userReview,demosMegamenu,appsMegamenu , AppsDemos };
