import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  smileVariante1,
  smileVariante2,
  smileVariante3,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  /* Hero Parallax Left Bar */
  dexscreener,
  smilerCircle,
  venom,
  w3w,
  /* Hero Parallax Left Bar */
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  x,
  discordLight,
  telegramLight,
} from "../assets";

import {
  SmileWhitepaper,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Smile",
    url: "#Smile",
  },
  {
    id: "1",
    title: "Whitepaper",
    url: SmileWhitepaper,
  },
  {
    id: "2",
    title: "Dexscreener",
    url: "https://dexscreener.com/venom/0:29c089d11e07cdd032c7ddd9f1e89044548569cced72e9c6d0d1bad0214de57a",
  },
  {
    id: "3",
    title: "Buy Smile",
    url: "https://web3.world/swap/coin/0:c0f8763c2e241c7cc5723ba8bfcb46d2e0446e743eb43dc854e81eeaf9ee6f3c",
  },

  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [smilerCircle, venom, dexscreener, w3w];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [{ id: "0", imageUrl: x, url: "https://twitter.com/SmileOnVenom" }, { id: "0", imageUrl: discordLight, url: "#ComingSoon" }, { id: "0", imageUrl: telegramLight, url: "https://t.me/+uQhXA0HQLQA1MDY0" }];

export const brainwaveServices = [
  "Staking",
  "Airdrop",
  "Active members",
];

export const brainwaveServicesIcons = [
  twitter,
  discord,
  dexscreener,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 30,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Liquidity Locked",
    text: "Our top priority is ensuring your investment safety. That's why we've opted to lock liquidity.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: smileVariante1,
    link: "#",
  },
  {
    id: "1",
    title: "Mint Disable",
    text: "This measure ensures greater security and stability for our platform, protecting both your assets and the integrity of Smile.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: smileVariante2,
    light: true,
    link: "https://venomscan.com/transactions/ed7b8dea08397893ae5c711348cb59cd42f84d03f079e98f41e9e19f7bf4908d",

  },
  {
    id: "2",
    title: "Top 10 holders own less than 15 %",
    text: "Our commitment to decentralization is reflected in the fact that the top 10 holders collectively possess less than 15 % of Smile.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: smileVariante3,
    link: "https://venomscan.com/accounts/0:c0f8763c2e241c7cc5723ba8bfcb46d2e0446e743eb43dc854e81eeaf9ee6f3c/holders",

  },


];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: x,
    url: "https://twitter.com/SmileOnVenom",
  },
  {
    id: "1",
    title: "X",
    iconUrl: discordLight,
    url: "#ComingSoon",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegramLight,
    url: "https://t.me/+uQhXA0HQLQA1MDY0",
  }
];
