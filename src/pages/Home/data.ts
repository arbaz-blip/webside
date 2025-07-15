import { Feature, Partner, Capabilities, Hero } from './types';

import tibco from 'assets/images/brands/tibco.png';
// import yellowai from 'assets/images/brands/yellowai.png';
import akinon from 'assets/images/brands/akinon.png';
import singlestore from 'assets/images/brands/singlestore.png';
import nintex from 'assets/images/brands/nintex.png';
import ibm from 'assets/images/brands/ibm.svg';
import bahwen from 'assets/images/brands/bahwen.jpg';

import tibcoHero from 'assets/images/solutions/tibco.svg';
import singlestoreHero from 'assets/images/solutions/singlestore.svg';
import yellowHero from 'assets/images/solutions/yellow-ai.svg';
import ibmHero from 'assets/images/solutions/ibm.png';
import nintexHero from 'assets/images/solutions/nintex.svg';
import bahwanHero from 'assets/images/solutions/bahwan-bct.svg';
import akinonHero from 'assets/images/solutions/akinon.svg';
// import singleStoreImg from 'assets/images/solutions/imagen_singlestore_en.svg'

const capabilities: Capabilities[] = [
    {
        icon: 'zap',
        variant: 'primary',
        title: 'Business Process Management',
        description:
            'Automates and manages end-to-end processes within organizations, enhancing efficiency and workflow.',
    },
    {
        icon: 'settings',
        variant: 'orange',
        title: 'Robotic Process Automation',
        description: 'Streamlines repetitive tasks, replacing manual efforts and maximizing operational efficiency.',
    },
    {
        icon: 'users',
        variant: 'info',
        title: 'Enterprise Integration',
        description:
            'Crafting brand identities through effective collaboration and thoughtful design, treating your brand as our own.',
    },
    {
        icon: 'share-2',
        variant: 'success',
        title: 'API Management',
        description: 'Centralized platform for unified API management, facilitating efficient and consistent handling.',
    },
    {
        icon: 'database',
        variant: 'warning',
        title: 'Big Data Management',
        description:
            'Centralized solution for managing, processing, and analyzing big data, supporting strategic decision-making.',
    },
    {
        icon: 'message-circle',
        variant: 'secondary',
        title: 'Conversational AI',
        description:
            'Versatile application in customer service, sales, and marketing, providing enhanced engagement and interaction.',
    },
];

const features: Feature[] = [
    {
        icon: 'shield',
        title: 'Proven Leadership',
        description:
            'Global expertise, local guidance: Let our proven leaders fuel your digital journey, big or small.',
    },
    {
        icon: 'users',
        title: 'Skilled Professionals',
        description: 'Diverse minds, bold solutions. Rely on our seasoned team for project-propelling expertise.',
    },
    {
        icon: 'cpu',
        title: 'Tailored Solutions',
        description: 'No cookie-cutter tech. We tailor solutions to your precise needs, hand-in-hand.',
    },
    {
        icon: 'phone-call',
        title: 'Client-Centric Approach',
        description: 'Your success is our priority: open communication, exceeding expectations.',
    },
];

const partners: Partner[] = [
    {
        appLogo: tibco,
        app: 'TIBCO',
        description: 'Real-time data integration and analytics leader for streamlined business decision-making.',
        url: '/solutions/tibco',
    },
    // {
    //     appLogo: yellowai,
    //     app: 'Yellow.ai',
    //     description: 'Transforming engagement with advanced chatbot-driven AI for streamlined interactions.',
    //     url: '/solutions/yellow-ai',
    // },
    {
        appLogo: akinon,
        app: 'Akinon',
        description: 'Crafting seamless e-commerce journeys with innovative solutions and user-centric design.',
        url: '/solutions/akinon',
    },
    {
        appLogo: singlestore,
        app: 'SingleStore',
        description: 'Empowering businesses with swift insights through a unified & versatile database platform.',
        url: '/solutions/singlestore',
    },
    {
        appLogo: nintex,
        app: 'Nintex',
        description: 'Simplifying business processes through intuitive and efficient workflow automation solutions.',
        url: '/solutions/nintex',
    },
    // {
    //     appLogo: ibm,
    //     app: 'IBM',
    //     description: 'Pioneering innovation with advanced technology solutions for businesses worldwide.',
    //     url: '/solutions/ibm',
    // },
    {
        appLogo: bahwen,
        app: 'Bahwan Cybertek',
        description: 'Pioneering digital transformation through innovative IT solutions & services.',
        url: '/solutions/bct',
    },
];

const solutions: Hero[] = [
    {
        logo: tibcoHero,
        logoSize: '100px',
        title: 'Tibco',
        backgroundColor: 'linear-gradient(to bottom, #318CDC, #115DAA)',
        heading: 'Elevate Operations, Transform with Tibco.',
        description:
            "Improve your operations, enhance collaboration, and stay ahead in today's fast-paced business landscape with Tibco's cutting-edge solutions. It's not just technology; it's the key to unlocking your business's full potential.",
        link: '/solutions/tibco',
        color: 'white',
        more: 'Ignite Insights with Tibco',
    },
    {
        logo: singlestoreHero,
        logoSize: '100px',
        title: 'SingleStore',
        backgroundColor: 'linear-gradient(to bottom, #1B001B, #3A002F)',
        heading: "Accelerate Growth with SingleStore's Data Mastery.",
        description:
            'Unleash dynamic analytics, drive innovation, and embrace data-driven excellence. Empowering businesses, one breakthrough at a time.',
        link: '/solutions/singlestore',
        color: 'white',
        more: 'Explore Data Mastery',
    },
    // {
    //     logo: yellowHero,
    //     logoSize: '100px',
    //     title: 'Yellow.ai',
    //     backgroundColor: 'linear-gradient(to bottom, #FFFADA, #F8E27C)',
    //     heading: 'Enchancing Experiences with Yellow.ai Chatbot.',
    //     description:
    //         'Transform customer interactions with Yellow.ai – where AI-powered conversations redefine engagement. Elevate experiences, boost efficiency, and stay ahead in the era of intelligent customer interactions.',
    //     link: '/solutions/yellow-ai',
    //     color: 'dark',
    //     more: 'Explore Yellow.ai Chatbot',
    // },
    // {
    //     logo: ibmHero,
    //     title: 'IBM',
    //     logoSize: '100px',
    //     backgroundColor: 'linear-gradient(to bottom, #162A36, #59B5A0)',
    //     heading: "Maximize Potential with IBM Licenses.",
    //     description:
    //         'Unlock innovation and efficiency with IBM licenses. Elevate your business capabilities, streamline operations, and harness the power of cutting-edge technology for unparalleled success.',
    //     link: '/solutions/ibm',
    //     color: 'white',
    //     more: 'Explore IBM Innovations',
    // },
    {
        logo: nintexHero,
        title: 'Nintex',
        backgroundColor: 'linear-gradient(to right, #013870, #00A8E8)',
        heading: "Empower Productivity with Nintex Workflow Solutions.",
        description:
            'Transform your business operations seamlessly with Nintex. Streamline workflows, enhance collaboration, and boost productivity effortlessly for sustainable success.',
        link: '/solutions/nintex',
        color: 'white',
        more: 'Boost Productivity with Nintex',
    },
    {
        logo: bahwanHero,
        logoSize: '200px',
        title: 'BCT',
        backgroundColor: 'linear-gradient(to bottom, #0077B6, #0096DA, #00B4FC)',
        heading: "Unlocking Success with Bahwan CyberTek Solutions.",
        description:
            'Elevate your business with Bahwan CyberTek solutions. Harness cutting-edge technology, streamline operations, and drive innovation for unparalleled success in Pakistan and the Middle East.',
        link: '/solutions/bct',
        color: 'white',
        more: 'Discover BCT Solutions'
    },
    {
        logo: akinonHero,
        logoSize: '100px',
        title: 'Akinon',
        backgroundColor: 'linear-gradient(to bottom, #EA4A32, #D9444B, #B4385F)',
        heading: "Revolutionizing Online Success with Akinon.",
        description:
            'Transform your online presence with Akinon Ecommerce solutions. Elevate user experiences, streamline operations, and achieve unprecedented success in the digital marketplace.',
        link: '/solutions/akinon',
        color: 'white',
        more: 'Elevate Ecommerce with Akinon'
    },
];

export { capabilities, features, partners, solutions };

