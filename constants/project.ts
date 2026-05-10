import { fromZonedTime } from 'date-fns-tz'
import { appTimeZone } from '@/constants/date'
import { ProjectEntry, ProjectId } from '@/types/project'

const projectEntries: Record<ProjectId, ProjectEntry> = {
  loblawsPerfectExperience: {
    id: 'loblawsPerfectExperience',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/sdm-pe/grafana.png',
        width: 1040,
        height: 580,
        alt: 'Example Grafana Dashboard - Serverside Render to Clientside Render - Load Time Traces & Metrics'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/sdm-pe/desktop.png',
        width: 3840,
        height: 2160,
        alt: 'Shoppers Drug Mart Perfect Experience - Desktop',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/sdm-pe/mobile.png',
        width: 1290,
        height: 2796,
        alt: 'Shoppers Drug Mart Perfect Experience - Mobile',
        frameId: 'mobile'
      }
    ],
    title: 'Loblaws Perfect Experience',
    intro:
      'Web telemetry SDK package that unified observability across multiple lines of business. This project established organization-wide insights into performance metrics, enabling actionable diagnostics and SLO monitoring through a flexible, reusable SDK built on OpenTelemetry.',
    desc: 'As Web Lead for Loblaws Digital Telemetry, I architected and developed a cross-platform telemetry SDK package (Node.js / Next.js) using low-level OpenTelemetry APIs, which was adopted across multiple lines of business (LOBs) within Loblaws Digital. I proposed scalable web architecture, SDK structure, data flows, and Grafana dashboard POC to leadership and executive team across LOBs, platforms, and affiliated projects. I co-led technical design conversations with engineering leads to collect requirements and alignment on instrumentation strategy and telemetry adoption. I implemented core telemetry events and instrumentation patterns (traces, metrics, logs), ensuring compatibility with both server-side (Node) and client-side (browser) runtimes. I abstracted differences in LOB-specific needs, Next.js features/versions, and runtime environments to deliver a flexible and reusable SDK. I built a zustand-powered state store with historical state tracking to enrich trace context and frontend observability. I designed and developed custom data transformation logic to feed into the broader VictoriaMetrics, Tempo, and Grafana observability stack. This enabled organization-wide insights into performance metrics including page load durations, frontend error rates, and SLO breaches — with emphasis on actionable P95 latency breakdowns and user-centric diagnostics.',
    clientId: 'badal',
    profileIds: ['tony', 'jax', 'ron', 'yuval'],
    startDate: fromZonedTime('2024-12-01', appTimeZone),
    endDate: fromZonedTime('2025-06-30', appTimeZone),
    skills: [
      'Fetch API',
      'Next.js',
      'OpenTelemetry',
      'TypeScript',
      'Zustand',
      'Grafana',
      'VictoriaMetrics',
      'Tempo',
      'Observability',
      'SDK Development',
      'Software Architecture',
      'Performance Monitoring',
      'SLO Management',
      'Cross-platform Development',
      'State Management',
      'Data Transformation'
    ],
    isFeatured: true
  },
  beyondModernization: {
    id: 'beyondModernization',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/1.png',
        width: 1060,
        height: 590,
        alt: 'Beyond MPD - Olympus Ramp Interface'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/beyond.png',
        width: 1920,
        height: 1080,
        alt: 'Beyond MPD - Webpage'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/olympus.png',
        width: 3660,
        height: 1994,
        alt: 'Beyond MPD - Logo'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/1.png',
        width: 1060,
        height: 590,
        alt: 'Beyond MPD - Olympus Ramp Interface',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/2.png',
        width: 1170,
        height: 657,
        alt: 'Beyond MPD - Olympus Ramp Interface - Light Mode',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/3.png',
        width: 1319,
        height: 729,
        alt: 'Beyond MPD - Olympus Advanced Tripping Interface',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/3-basic.png',
        width: 1350,
        height: 756,
        alt: 'Beyond MPD - Olympus Basic Tripping Interface',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/beyond-mpd/4-rollover.png',
        width: 906,
        height: 509,
        alt: 'Beyond MPD - Olympus Rollover Interface',
        frameId: 'desktop'
      }
    ],
    title: 'Beyond MPD Olympus Platform',
    intro:
      'The Olympus platform is redefining industrial operations by transforming legacy oil rig systems into a cutting-edge, event-driven architecture. Designed to improve operational integrity and real-time decision-making, this modernization project bridges advanced technology with critical field applications.',
    desc: 'As part of the Beyond MPD modernization project, I co-developed an event-driven architecture using event brokers to ensure reliable communication across control systems interfacing with oil rig panels, communication buses, and PLCs. I collaborated on building a design system in Figma, enabling a consistent and intuitive user interface across applications. I contributed to back-end solutions supporting the calibration of chokes and sensors, while co-authoring interpolation algorithms for precise fluid pressure control with rigorous unit testing. Leveraging SVG and Canvas, I designed real-time and historical data visualization solutions capable of tracking over 10,000 data points with subsecond tolerance. Additionally, I developed robust validation schemas, optimized CI/CD pipelines, and ensured global deployment compatibility through precise unit conversion standards. My role also involved creating project management presentations to enhance team efficiency and streamline processes. Beyond is poised to set new standards in the industry, with more details to come post-launch.',
    clientId: 'badal',
    profileIds: ['tony', 'tulio', 'zeena', 'harpreet'],
    startDate: fromZonedTime('2023-05-01', appTimeZone),
    endDate: fromZonedTime('2024-11-01', appTimeZone),
    skills: [
      'Node.js',
      'Software Infrastructure',
      'RabbitMQ',
      'tRPC',
      'gRPC',
      'Canvas',
      'SVG',
      'Jest',
      'Design Systems'
    ],
    isFeatured: true
  },
  paypowerReloadablePrepaidMastercardMobileApp: {
    id: 'paypowerReloadablePrepaidMastercardMobileApp',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/paypower/paypower.png',
        width: 1640,
        height: 1024,
        alt: 'Paypower Mastercard App'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-overview.png',
        width: 1640,
        height: 1024,
        alt: 'Paypower Mastercard App - Overview'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-cards.png',
        width: 375,
        height: 812,
        alt: 'Paypower Mastercard App - Cards',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-dashboard.png',
        width: 375,
        height: 812,
        alt: 'Paypower Mastercard App - Dashboard',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-verify.png',
        width: 375,
        height: 812,
        alt: 'Paypower Mastercard App - Verify Identity',
        frameId: 'mobile'
      }
    ],
    title: 'PayPower Mastercard App',
    intro:
      'The PayPower Reloadable Prepaid Mastercard app revolutionized prepaid financial management with a customizable React Native solution. Combining robust backend architecture, dynamic theming, and accessibility-first design, the app delivered an intuitive and user-focused experience for both clients and end-users.',
    desc: 'As Team Lead, I spearheaded the system design and architecture for the PayPower app, focusing on scalability and feature consistency across platforms. For PayPower, I implemented a monorepo architecture with feature flag-based whitelabeling, enabling tailored deployments for diverse client needs. Transitioning the app’s codebase from Redux to tRPC enhanced data efficiency, while CI/CD pipelines with integrated Sentry monitoring ensured seamless development and robust performance. I also secured and led three client engagements, resulting in contracts for white-label solutions, React Query refactoring, and a UX-focused redesign. My role extended to incident response, managing critical security and deployment challenges to minimize production impact and uphold app reliability.',
    clientId: 'peoplesGroup',
    profileIds: ['tony', 'ben', 'leo', 'nikita'],
    startDate: fromZonedTime('2021-10-01', appTimeZone),
    endDate: fromZonedTime('2022-04-01', appTimeZone),
    skills: [
      'React Native',
      'tRPC',
      'CI/CD',
      'Multi-language',
      'Currency Precision',
      'Push Notifications',
      'UX Design System',
      'Agile Process'
    ],
    isFeatured: true
  },
  aeroplanShoppingButton: {
    id: 'aeroplanShoppingButton',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext.png',
        width: 2232,
        height: 936,
        alt: 'Aeroplan Shopping Button - Browser Extension'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-overview.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan Shopping Button - Overview'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-02-activate-offer-coupons-crop.png',
        width: 1440,
        height: 934,
        alt: 'Aeroplan Shopping Button - Offer Activation',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-04-activated-a-crop.png',
        width: 2880,
        height: 1868,
        alt: 'Aeroplan Shopping Button - Offer Activated',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-ext/aeroplan-ext-05-landing-a-crop.png',
        width: 2880,
        height: 1868,
        alt: 'Aeroplan Shopping Button - Home View',
        frameId: 'desktop'
      }
    ],
    title: 'Aeroplan Shopping Button Browser Extension',
    intro:
      'The Aeroplan Shopping Button browser extension brought seamless rewards earning to users across hundreds of retail sites. Designed for cross-browser compatibility, high traffic and dynamic retailer data, this innovative tool streamlined the shopping experience while integrating effortlessly with Aeroplan’s ecosystem.',
    desc: 'As the lead developer for the Aeroplan Shopping Button browser extension, I created a cross-browser solution that integrated rewards earning seamlessly into online shopping. To address the complexities of shopping sessions, I optimized the event system to overcome CORS restrictions and handle interactions across multiple tabs and windows without state conflicts. I implemented an SWR-based query system and developed a navigation tracking system for multi-domain purchase sessions, ensuring smooth user journeys. To manage high traffic and dynamic retailer data, I designed a multi-level caching mechanism that reduced backend load while maintaining responsive performance. This project delivered a reliable, scalable, and user-friendly tool that empowered Aeroplan members to earn rewards effortlessly across hundreds of retailers.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2021-07-01', appTimeZone),
    endDate: fromZonedTime('2022-01-01', appTimeZone),
    skills: [
      'SWR',
      'CORS',
      'Multi-domain Navigation',
      'Caching',
      'Browser Extension',
      'PRDs',
      'Client Management'
    ],
    isFeatured: true
  },
  aeroplanEStore: {
    id: 'aeroplanEStore',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-for-you.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Retailer & Catalog Redesign - For You Page'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-listing.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Retailers Listing'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-cart.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Cart'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-mobile-deals.png',
        width: 430,
        height: 930,
        alt: 'Aeroplan eStore - Mobile Deals',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-mobile-retailer.png',
        width: 430,
        height: 930,
        alt: 'Aeroplan eStore - Mobile Retailer',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-mobile-item.png',
        width: 430,
        height: 930,
        alt: 'Aeroplan eStore - Mobile Product',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-retailers.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Retailers Intro',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-dyson.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Dyson Retailer',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan-retailer/aeroplan-catalog.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Dyson Retailer Catalog',
        frameId: 'desktop'
      }
    ],
    title: 'Aeroplan Redemption eStore',
    intro:
      'Transforming Aeroplan’s digital ecosystem, I played a key role in designing and implementing solutions that spanned multiple projects, from software architecture and initial MVP, to e-commerce experiences pioneering accessibility and cross-browser compatibility. These initiatives revolutionized how users interacted with Aeroplan’s services, enabling seamless reward earning, better user experiences, and regulatory compliance across their platform.',
    desc: `
      My engagements with Aeroplan encompassed a diverse range of projects that addressed user experience, accessibility, and technical scalability across their ecosystem:
      
      **Aeroplan Shopping Button Browser Extension**: As the lead developer, I architected Aeroplan’s first cross-browser web extension, which supported hundreds of retailer sites. The extension enabled users to earn points seamlessly while shopping online. Utilizing an SWR-based query system, I overcame CORS limitations to provide real-time updates, implemented multi-domain navigation tracking for uninterrupted purchase sessions, and designed a multi-layer caching system to reduce backend load and enhance performance.
      
      **Aeroplan Retailer and Catalog Redesign**: I spearheaded the implementation of the eStore’s retailer catalog and filtering system redesign to create a more intuitive shopping experience. My contributions included implementing a componentized React architecture, Redux-based state management, and whitelabel theming to improve scalability. These updates allowed users to more easily locate retailers and discover Aeroplan earning opportunities, significantly improving engagement.
      
      **AODA AA / WCAG Compliance**: Leading Aeroplan’s accessibility initiative, I ensured their eStore met AODA AA and WCAG 2.0 compliance standards. This involved auditing the platform, implementing semantic HTML, and enhancing keyboard navigation and screen reader compatibility. These changes ensured equitable access for all users and alignment with regulatory requirements.
      
      **eStore Initial Architecture and MVP**: I was instrumental in laying the groundwork for Aeroplan’s eStore by developing its initial architecture and MVP. This project involved designing scalable front-end and server-side solutions with React and Node.js, enabling future feature expansion. The MVP provided users with a streamlined way to redeem points online, setting a strong foundation for ongoing development.
      
      **Technical Innovations and Team Leadership**: Across all projects, I integrated modern development practices, including monorepos for streamlined code management, CI/CD pipelines for efficient deployments, and modular design systems for reusable components. I also led and mentored teams, ensuring consistent code quality, fostering knowledge sharing, and aligning technical solutions with business objectives.
      
      **Proposal Development and Client Engagement**: I collaborated with Aeroplan stakeholders to develop proposals for new projects, including feature enhancements, performance optimizations, and accessibility improvements. My contributions helped secure client buy-in for three engagements and align project goals with Aeroplan’s strategic vision.
      
      These contributions collectively elevated Aeroplan’s digital platform, driving user satisfaction and operational efficiency while adhering to stringent technical and regulatory standards. My work with Aeroplan exemplifies the power of combining technical expertise with a user-centered approach to deliver impactful, scalable solutions.
    `,
    clientId: 'quantumMob',
    profileIds: ['tony', 'steven'],
    startDate: fromZonedTime('2020-01-01', appTimeZone),
    endDate: fromZonedTime('2023-01-10', appTimeZone),
    skills: [
      'React',
      'Redux',
      'Node.js',
      'SWR',
      'Accessibility (AODA AA / WCAG 2.0)',
      'Semantic HTML',
      'Keyboard Navigation',
      'Screen Reader Compatibility',
      'Multi-Domain Navigation',
      'Caching Strategies',
      'Cross-Browser Development',
      'Monorepos',
      'CI/CD Pipelines',
      'Design Systems',
      'State Management',
      'Whitelabel Theming',
      'E-Commerce Optimization',
      'Performance Optimization',
      'Client Management',
      'Team Leadership'
    ],
    isFeatured: true
  },
  rocMarEngineeringEmployeeDashboard: {
    id: 'rocMarEngineeringEmployeeDashboard',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-overview.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard, Overview'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-home.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard, Home',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-dashboard.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard, Home',
        frameId: 'desktop'
      }
    ],
    title: 'RocMar Employee Dashboard',
    intro:
      'I led the design and development of an employee dashboard for RocMar Engineering, delivering a user-centric platform that streamlined workflows and optimized productivity. This end-to-end project involved designing a cohesive interface, implementing a robust back-end, and collaborating closely with stakeholders to translate complex processes into actionable, data-driven insights.',
    desc: 'The RocMar Employee Dashboard project required a blend of design and technical expertise to create a platform tailored to architectural productivity needs. I designed the interface and developed a comprehensive design system, ensuring visual consistency and intuitive user interactions. On the back end, I implemented secure infrastructure using Next.js and Express, incorporating OAuth and OpenID Connect (OICD) for seamless SSO authentication via Passport.js. I integrated four OAuth-based APIs to source user data and browsing habits, transforming them into actionable insights through dynamic data visualizations. Leveraging SVG and optimized SQL queries, I combined and reformatted millions of data points spanning years to create meaningful, interactive visualizations. Close collaboration with stakeholders throughout the project ensured that the dashboard met user requirements while aligning with business goals. The result was a powerful, visually cohesive tool that centralized data and elevated employee productivity.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-11-01', appTimeZone),
    endDate: fromZonedTime('2021-03-01', appTimeZone),
    skills: ['Design Systems', 'React', 'UI/UX', 'OAuth', 'OICD', 'Postgres', 'Client Management'],
    isFeatured: true
  },
  quantumMobCatalogAppProjectMobCiCdIntegrations: {
    id: 'quantumMobCatalogAppProjectMobCiCdIntegrations',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Quantum Mob - Catalog App, Media Mob, CI/CD Integrations',
    intro:
      'As Team Lead, I developed infrastructure for Quantum Mob’s product catalog and introduced a streamlined CI/CD tool for efficient project setup. This tool automated pipeline generation, enhancing development workflows and enabling faster product iteration, contributing to the firm’s commitment to efficient, modern development processes.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-09-01', appTimeZone),
    endDate: fromZonedTime('2020-10-01', appTimeZone),
    skills: ['CI/CD', 'Pipeline Development', 'Product Catalog', 'Team Leadership']
  },
  quantumMobCoreUtilitiesAuthModule: {
    id: 'quantumMobCoreUtilitiesAuthModule',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Quantum Mob - Core Utilities, Auth Module',
    intro:
      'At Quantum Mob, I developed core authentication utilities within a monorepo structure, enabling reuse across multiple projects. These modules provided robust, secure authentication solutions for both internal and client applications, reducing development time on future projects.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-07-01', appTimeZone),
    endDate: fromZonedTime('2020-10-01', appTimeZone),
    skills: ['Monorepo', 'Authentication', 'Node.js', 'Modular Development']
  },
  airMilesLandingPortalDevelopment: {
    id: 'airMilesLandingPortalDevelopment',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-partners.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal, Partner Finder'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-earn.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal, How to Earn',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-offers.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal, Offers',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/airmiles/airmiles-ways.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles Landing Portal, 6 Ways to Earn',
        frameId: 'desktop'
      }
    ],
    title: 'Air Miles Landing Portal',
    intro:
      'As a key contributor to the Air Miles Landing Portal development, I played a pivotal role in creating a scalable and cohesive user experience. Leveraging a monorepo architecture and reusable React components, the project emphasized modularity, accessibility, and seamless integration with Air Miles branding.',
    desc: 'The Air Miles Landing Portal project focused on delivering a modular, scalable, and user-friendly platform through a monorepo architecture with reusable React components. I contributed to the implementation of a cohesive design system using Lerna published components, ensuring consistency across the portal while aligning with Air Miles’ branding. Rigorous testing with Jest and Nock ensured reliability and code quality, while accessibility compliance with AODA and WCAG 2.0 AA standards enhanced usability for all users. By adhering to BEM SASS standards, I created maintainable and cross-compatible styles for hundreds of components, delivering a polished and professional user experience.',
    clientId: 'airMiles',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-01-01', appTimeZone),
    endDate: fromZonedTime('2020-01-31', appTimeZone),
    skills: ['React', 'Monorepo', 'Component Development', 'Team Collaboration'],
    isFeatured: true
  },
  petsAboveReactModernization: {
    id: 'petsAboveReactModernization',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Pets Above - React Modernization',
    intro:
      'I led the modernization of the Pets Above application, updating the codebase from legacy React and Redux to a more maintainable and efficient structure. This overhaul included enhancements in messaging with RabbitMQ and improvements in data handling with MySQL, aligning the app with modern standards for performance and usability.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-11-01', appTimeZone),
    endDate: fromZonedTime('2019-12-01', appTimeZone),
    skills: ['React', 'Redux', 'RabbitMQ', 'MySQL', 'Application Modernization']
  },
  cardinalMeatsFoodServiceWebsiteAndCms: {
    id: 'cardinalMeatsFoodServiceWebsiteAndCms',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/cardinal.png',
        width: 1920,
        height: 1080,
        alt: 'Cardinal Meats & Food Service - Website & CMS'
      }
    ],
    frames: [],
    title: 'Cardinal Meats & Food Service - Website & CMS',
    intro:
      'For Cardinal Meats, I developed a custom CMS integrated with their Express-based website. This project included creating user-friendly content management tools, providing the client with an accessible platform for content updates and ensuring the site remained engaging and efficient for end-users.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Express.js', 'CMS Development', 'Web Development', 'Node.js']
  },
  canadaChiropracticProtectiveAssociationWebsiteAndCms: {
    id: 'canadaChiropracticProtectiveAssociationWebsiteAndCms',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/ccpa.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Chiropractic Protective Association - Website & CMS'
      }
    ],
    frames: [
      {
        type: 'video',
        src: '/videos/projects/CCPAinfographic-short.mp4',
        width: 2788,
        height: 1748,
        alt: 'Canada Chiropractic Protective Association - Infographic',
        frameId: 'desktop'
      }
    ],
    title: 'Canada Chiropractic Protective Association - Website & CMS',
    intro:
      'For the Canada Chiropractic Protective Association, I developed a Microsoft Dynamics 365 CRM-integrated website. This project allowed the client to manage case information and plans effectively, enhancing their administrative capabilities and supporting better client service through a centralized, accessible platform.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Microsoft Dynamics 365', 'CRM Integration', 'Web Development', 'Client Management']
  },
  canadaDryEnterPinContest: {
    id: 'canadaDryEnterPinContest',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry - Enter PIN Contest'
      }
    ],
    frames: [],
    title: 'Canada Dry - Enter PIN Contest',
    intro:
      'I designed and developed an entry-based contest for Canada Dry using PHP and Ractive.js. This interactive project allowed users to enter PIN codes for a chance to win, engaging customers and promoting Canada Dry’s brand in a fun, user-driven way.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['PHP', 'Ractive.js', 'ProfileEntry Engagement', 'Contest Development']
  },
  canadaDryWebsite: {
    id: 'canadaDryWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry - Website'
      }
    ],
    frames: [],
    title: 'Canada Dry - Website',
    intro:
      'I developed a dynamic landing site for Canada Dry that featured parallax effects and interactive animations. Built with PHP, this visually engaging site supported Canada Dry’s branding and offered an interactive experience for users, enhancing the brand’s digital presence.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['PHP', 'Parallax', 'Animation', 'Web Development']
  },
  monogramCanadianCatalogWebsite: {
    id: 'monogramCanadianCatalogWebsite',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/monogram.png',
        width: 1920,
        height: 1080,
        alt: 'Monogram - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'Monogram - Canadian Catalog Website',
    intro:
      'For Monogram, I developed a responsive catalog website using Koa.js and Ractive.js. This project showcased Monogram’s offerings through a clean, accessible interface that adapted seamlessly across frames, enhancing user engagement and accessibility.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  modaMatchVirtualFittingRoom: {
    id: 'modaMatchVirtualFittingRoom',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/modamatch.png',
        width: 1920,
        height: 1080,
        alt: 'Moda Match - Virtual Fitting Room'
      }
    ],
    frames: [],
    title: 'Moda Match - Virtual Fitting Room',
    intro:
      'Moda Match transforms online apparel shopping by enabling customers to virtually try on clothing using predefined models. Integrated as a white-label plugin, it’s compatible with Shopify and WooCommerce, easily installed by store owners to enhance customer engagement. With support for thousands of items, Moda Match helps users visualize fit and dimensions, driving a more personalized shopping experience.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2021-04-01', appTimeZone),
    endDate: fromZonedTime('2021-05-01', appTimeZone),
    skills: [
      'MongoDB',
      'Shopify Plugins',
      'WooCommerce Plugins',
      'DOM Injection',
      'Templates',
      'React',
      'Next.js'
    ]
  },
  parentsCanadaMagazineWebsite: {
    id: 'parentsCanadaMagazineWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/parents.png',
        width: 1920,
        height: 1080,
        alt: 'Parents Canada - Magazine Website'
      }
    ],
    frames: [],
    title: 'Parents Canada - Magazine Website',
    intro:
      'I developed a custom WordPress theme for Parents Canada’s magazine website, providing a content-rich platform that aligned with the publication’s brand and met the needs of its diverse readership. This theme allowed for easy content updates and a visually engaging user experience.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['WordPress', 'Theme Development', 'Content Management', 'Web Design']
  },
  toffifeeSpinToWinContest: {
    id: 'toffifeeSpinToWinContest',
    roles: ['development'],
    media: [
      {
        type: 'video',
        src: '/videos/projects/toff7026-short.mp4',
        width: 2400,
        height: 1748,
        alt: 'Toffifee Spin To Win Contest'
      }
    ],
    frames: [
      {
        type: 'video',
        src: '/videos/projects/toff7026.mp4',
        width: 2400,
        height: 1748,
        alt: 'Toffifee Spin To Win Contest - Long Version',
        frameId: 'desktop'
      },
      {
        type: 'video',
        src: '/videos/projects/toff7026-spin.mp4',
        width: 2784,
        height: 1652,
        alt: 'Toffifee Spin To Win Contest - Spin Animation',
        frameId: 'desktop'
      }
    ],
    title: 'Toffifee - Spin to Win Contest',
    intro:
      'For Toffifee, I created a "spin to win" contest using Express.js and Ractive.js. This engaging, animation-driven contest offered users a fun way to interact with the brand, increasing engagement and enhancing Toffifee’s digital marketing strategy.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Ractive.js', 'Animation', 'ProfileEntry Engagement']
  },
  toyotaBringYourToyotaHomeContest: {
    id: 'toyotaBringYourToyotaHomeContest',
    roles: ['development'],
    media: [
      {
        type: 'video',
        src: '/videos/projects/byth7040-short.mp4',
        width: 1146,
        height: 850,
        alt: 'Bring Your Toyota Home Contest'
      }
    ],
    frames: [
      {
        type: 'video',
        src: '/videos/projects/byth7040-long.mp4',
        width: 1276,
        height: 796,
        alt: 'Bring Your Toyota Home Contest - Long Version',
        frameId: 'desktop'
      }
    ],
    title: 'Toyota - Bring Your Toyota Home Contest',
    intro:
      'I developed a contest for Toyota, integrating interactive Apple-style parallax animations with Express.js. This project offered users an immersive experience, showcasing Toyota’s commitment to innovative digital engagement.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Parallax', 'Animation', 'Web Development']
  },
  toyotaMakeADateContest: {
    id: 'toyotaMakeADateContest',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/toyota.webp',
        width: 900,
        height: 574,
        alt: 'Make A Date Every 8 Contest'
      }
    ],
    frames: [],
    title: 'Toyota - Make a Date Contest',
    intro:
      'I developed a date-driven contest for Toyota that engaged users with interactive elements. This project combined Toyota’s branding with an engaging user interface, encouraging customers to participate and connect with the brand in a unique way.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Interactive Design', 'Contest Development', 'ProfileEntry Engagement']
  },
  babyJoggerCanadianCatalogWebsite: {
    id: 'babyJoggerCanadianCatalogWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/babyjogger.png',
        width: 1920,
        height: 1080,
        alt: 'BabyJogger - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'BabyJogger - Canadian Catalog Website',
    intro:
      'I created a responsive catalog website for BabyJogger using Koa.js and Ractive.js, offering a seamless browsing experience for customers. This site presented BabyJogger’s products in a user-friendly format, helping customers make informed purchasing decisions.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2018-04-01', appTimeZone),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  toyotaSalesReportingDashboard: {
    id: 'toyotaSalesReportingDashboard',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Toyota - Sales Reporting Dashboard',
    intro:
      'For Toyota, I developed an internal sales dashboard using Koa.js to simplify sales reporting processes. This dashboard provided real-time data visualization, making it easier for teams to track sales metrics and make informed business decisions.',
    clientId: 'toyota',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Koa.js', 'Data Visualization', 'Dashboard Development', 'Sales Reporting']
  },
  weiserCanadianCatalogWebsite: {
    id: 'weiserCanadianCatalogWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/weiser.png',
        width: 1920,
        height: 1080,
        alt: 'Weiser - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'Weiser - Canadian Catalog Website',
    intro:
      'I led the development of a Canadian catalog website for Weiser, using Express and Vue.js to deliver a server-rendered, user-friendly experience. This site showcased Weiser’s products, providing a seamless browsing experience that supported the brand’s online presence.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Express.js', 'Vue.js', 'Catalog Website', 'Server-Side Rendering']
  },
  web10Era: {
    id: 'web10Era',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/web-era/1.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Sony Ericsson Phone Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/7.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - After5hock @ Xanga.com Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/12.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - After5hock @ AsianAvenue.com Theme'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/11.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Infu5ion @ Zuup.com Theme & Various Abstract Art'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/5.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Mousepad Photoshop Design'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/4.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Train Illustration'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/3.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Alienware Illustration'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/9.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Naha Sushi Flash Website'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/10.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - ABC Cakes Business Cards'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/web-era/6.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - PixelInfinity.ca Theme',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/2.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - After5hock @ Xanga.com Theme',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/web-era/8.jpg',
        width: 1920,
        height: 1500,
        alt: 'Web 1.0 Era Web Design - Infu5ion @ Zuup.com Theme',
        frameId: 'desktop'
      }
    ],
    title: 'Web 1.0 Era Web Design',
    intro:
      'During the Web 1.0 era, I honed my skills in web design and illustration, creating pixel-perfect layouts with early tools like Photoshop, Illustrator, Flash, Dreamweaver and FrontPage. These projects reflected the limitations and creativity of the time, leveraging HTML before the advent of HTML5, CSS3, and flex / grid based layouts (tables!), all while navigating the challenges of dial-up internet speeds.',
    desc: 'This period marked the beginning of my journey as a designer and developer, where creativity thrived within constraints of Netscape Navigator, Internet Explorer 6 and rudimentary Javascript. I specialized at the time in designing sliced Photoshop templates for web and ventured into creating custom themes for various apps, such as Sony Ericsson Phones and Winamp. These projects showcased my early love for technology while producing visually engaging and technically sound designs that laid the groundwork for my future in web development.',
    clientId: 'tkodev',
    profileIds: ['tony'],
    startDate: fromZonedTime('2000-01-01', appTimeZone),
    endDate: fromZonedTime('2010-12-31', appTimeZone),
    skills: [
      'Photoshop',
      'Illustrator',
      'Abstract Art',
      'HTML (Pre-HTML5)',
      'CSS 1 & 2',
      'Flash',
      'Javascript',
      'Table-Based Layouts',
      'Sliced Photoshop Templates',
      'Internet Explorer Compatibility',
      'Dial-Up Internet Optimization',
      'Illustration',
      'Sony Ericsson Phone Themes'
    ],
    isFeatured: true
  },
  interiorsArchitecture: {
    id: 'interiorsArchitecture',
    roles: ['design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview.jpg',
        width: 1920,
        height: 1080,
        alt: "Interior & Architecture Design - 1800's Queen St. Modernization"
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview-Cutaway-2.jpg',
        width: 1920,
        height: 1080,
        alt: "Interior & Architecture Design - 1800's Queen St. Modernization Cutaway"
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview-Cutaway-1.jpg',
        width: 1920,
        height: 1080,
        alt: "Interior & Architecture Design - 1800's Queen St. Modernization Cutaway"
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/South-West-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design - Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/South-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design - Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/West-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design - Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/North-East-Overview.jpg',
        width: 300,
        height: 300,
        alt: 'Interior & Architecture Design - Modern Sculpture Gallery'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Overview-2.jpg',
        width: 1920,
        height: 1440,
        alt: 'Interior & Architecture Design - Alexandra Park Revitalization'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Street-View.jpg',
        width: 1920,
        height: 1440,
        alt: 'Interior & Architecture Design - Alexandra Park Revitalization'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/East-Overview.jpg',
        width: 1920,
        height: 1080,
        alt: 'Interior & Architecture Design - Das Canoas House Model'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/axonometric-models.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design - AGO Staircase Technical Drawing'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/floor-plan-&-cross-section.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design - AGO Staircase Technical Drawing'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Final-1.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design - Museum of Contemporary Canadian Art Drawings'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Final-2.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design - Museum of Contemporary Canadian Art Drawings'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Final-4.jpg',
        width: 1920,
        height: 1242,
        alt: 'Interior & Architecture Design - Museum of Contemporary Canadian Art Drawings'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Light.jpg',
        width: 1920,
        height: 1085,
        alt: 'Interior & Architecture Design - Lamp Sculpture'
      },
      {
        type: 'image',
        src: '/images/projects/interiors-arch/Light-Top.jpg',
        width: 1920,
        height: 1085,
        alt: 'Interior & Architecture Design - Lamp Sculpture'
      }
    ],
    frames: [],
    title: 'Interior & Architecture Design',
    intro:
      'My journey into functional design began at Georgian College and OCAD University, where I explored interior design and architecture through art history, color theory, and user experience, culminating in works that combined technical precision with creative expression.',
    desc: 'At OCAD University, I delved deeply into the interplay between design and functionality, focusing on interior design, architecture, and the broader principles of user experience. This period was defined by a passion for art history, architectural history, and the engineering aspects of design. My projects often involved creating architectural models that merged precision engineering with artistic creativity, paying homage to historic architecture through recreations and inspired works. I developed technical drawing skills, mastered 3D software like Revit, Fusion 360, and Blender, and crafted physical models that emphasized the relationship between form and function. This experience enriched my understanding of design as a holistic practice, where aesthetics and usability converge to create impactful spaces and concepts.',
    clientId: 'ocadUniversity',
    profileIds: ['tony'],
    startDate: fromZonedTime('2010-09-01', appTimeZone),
    endDate: fromZonedTime('2016-09-01', appTimeZone),
    skills: [
      'Art History',
      'Architectural History',
      'Sculpture Design',
      'Industrial Design',
      'Color Theory',
      'User Experience Design',
      'Architectural Models',
      'Technical Drawing',
      '3D Modeling',
      'Revit',
      'Fusion 360',
      'Photoshop',
      'Blender',
      'Physical Modeling'
    ],
    isFeatured: true
  },
  earlySoftwareEngineering: {
    id: 'earlySoftwareEngineering',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m (1).jpg',
        width: 2259,
        height: 1506,
        alt: 'Early Software Engineering - Simon Says Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m.jpg',
        width: 1980,
        height: 1506,
        alt: 'Early Software Engineering - Tic Tac Toe Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-game-m.jpg',
        width: 1980,
        height: 1506,
        alt: 'Early Software Engineering - Tic Tac Toe Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m (3).jpg',
        width: 2259,
        height: 1506,
        alt: 'Early Software Engineering - Pomodoro Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile-m (2).jpg',
        width: 1980,
        height: 1506,
        alt: 'Early Software Engineering - Calculator Mobile Mockup'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/mockup-mobile.jpg',
        width: 960,
        height: 640,
        alt: 'Early Software Engineering - Weather Widget Mockup'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (1).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering - Simon Says Mobile',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+.jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering - Tic Tac Toe Mobile',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-game-6+.jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering - Tic Tac Toe Mobile',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (4).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering - Pomodoro Mobile',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (3).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering - Calculator Mobile',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/early-soft/screenshot-6+ (2).jpg',
        width: 414,
        height: 736,
        alt: 'Early Software Engineering - Weather Widget Mobile',
        frameId: 'mobile'
      }
    ],
    title: 'Early Software Engineering',
    intro:
      'During a self-directed bootcamp through FreeCodeCamp, I embarked on my journey from functional design, into software engineering, mastering full-stack JavaScript and blending my design expertise with technical development to create refined and functional user interfaces.',
    desc: 'As part of my self-directed bootcamp with FreeCodeCamp, I immersed myself in the foundations of software engineering, focusing on full-stack JavaScript, DOM, jQuery, Node.js, and Advanced MySQL Queries. This experience also emphasized understanding core DOM manipulation, implementing OAuth authentication, and mastering algorithms and data structures. FreeCodeCamp offered a structured yet flexible environment that allowed me to explore and build real-world projects at my own pace, fostering both technical skills and self-discipline. \n\nThis period was transformative, as I applied my background in functional design, color theory, and composition from OCAD to create interfaces that were minimalist yet polished and user-centric. 2015-2017, often regarded as a "golden age" of web development, was a time of immense growth for me. It provided a thriving environment to explore new ideas, combine my design and engineering passions, and establish the foundation for a full-fledged career in software development.',
    clientId: 'tkodev',
    profileIds: ['tony'],
    startDate: fromZonedTime('2016-09-01', appTimeZone),
    endDate: fromZonedTime('2019-05-01', appTimeZone),
    skills: [
      'Full-Stack JavaScript',
      'React.js',
      'Node.js',
      'Koa.js',
      'Ractive.js (Not React)',
      'Express.js',
      'OAuth',
      'Core DOM Knowledge',
      'Algorithms',
      'Data Structures',
      'User Interface Design',
      'Color Theory',
      'Composition',
      'Functional Design',
      'Minimalist UI',
      'MySQL'
    ],
    isFeatured: true
  },
  industrialDesign: {
    id: 'industrialDesign',
    roles: ['design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/industrial-design/modern-build_2024-dec-15_11-10-28pm-000_customizedview2748624882.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Small Form Factor PC Build'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/modern-build_2024-dec-15_11-10-52pm-000_customizedview25809979503.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Small Form Factor PC Build'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/eos_1_a_2024-dec-15_11-32-28pm-000_customizedview18216312656.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - EOS Acrylic Laser Cut PC Case'
      },
      // {
      //   type: 'image',
      //   src: '/images/projects/industrial-design/mjolnir_3_2024-dec-15_11-31-31pm-000_customizedview24532261697.png',
      //   width: 1200,
      //   height: 1200,
      //   alt: '3D Modeling and Industrial Design - Mjolnir 3D Printed PC Case - Close Up'
      // },
      {
        type: 'image',
        src: '/images/projects/industrial-design/mjolnir_3_2024-dec-15_11-48-20pm-000_customizedview1631237819.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Mjolnir 3D Printed PC Case'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/eos_block_2024-dec-15_11-50-39pm-000_customizedview34151560115.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - EOS CPU Pump Water Block with Pump'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/eos_block_2024-nov-27_04-57-07am-000_customizedview5928134866.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - EOS CPU Pump Water Block'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/zx-1_mount_2024-dec-15_11-15-23pm-000_customizedview13614885543.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Nouvolo CPU Pump Water Block to Iquinix ZX-1 PC Case Mount'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/case_-_evolv_shift_2_2024-dec-15_11-12-54pm-000_customizedview31469564511.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Evolv Shift 2 Case Cover'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/redux-assy_2024-dec-15_11-37-14pm-000_customizedview18606186293.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Magic the Gathering - Redux Card Case'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/redux-assy_2024-dec-15_11-37-06pm-000_customizedview18606186293.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Magic the Gathering - Redux Card Case with Insert'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/desk-organizer-redux_2024-dec-15_11-36-28pm-000_customizedview7294577484.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Desk Organizer Redux'
      },

      {
        type: 'image',
        src: '/images/projects/industrial-design/macbook_stand_2024-dec-15_11-09-37pm-000_customizedview6170979262.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - MacBook Stand'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/hue-mount_2024-dec-15_11-13-59pm-000_customizedview18169488883.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Philips Hue Lightbar Mount for Vivo Desk Monitor Pole'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/light_pole_mount_-_screw_based_2024-dec-15_11-39-06pm-000_customizedview10171845343.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Generic Mount for Vivo Desk Monitor Pole'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/koolance_-_fitting_-_90_degree_-_low_profile_2024-dec-15_11-35-21pm-000_customizedview10262692848.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Koolance Fitting 90 Degree Low Profile'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/vandal_switch_2024-dec-15_11-11-49pm-000_customizedview19737110002.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Anti-Vandal Switch from FDV'
      },
      // {
      //   type: 'image',
      //   src: '/images/projects/industrial-design/vent-redux_2024-dec-15_11-43-18pm-000_customizedview25641897381.png',
      //   width: 1200,
      //   height: 1200,
      //   alt: '3D Modeling and Industrial Design - Air Return Vent - Redux'
      // },
      {
        type: 'image',
        src: '/images/projects/industrial-design/qm-ornament_2024-dec-15_11-41-51pm-000_customizedview39273023891.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Quantum Mob Logo Ornament'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/keyfob_2024-dec-15_11-41-34pm-000_customizedview3517011434.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Quantum Mob Logo Keyfob'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/trophy_-_tech_tank_2024-dec-15_11-07-40pm-000_customizedview13777747030.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Tech Tank Sashimis - Sports Trophy'
      },
      {
        type: 'image',
        src: '/images/projects/industrial-design/burger_press_2024-dec-15_11-36-02pm-000_customizedview3640923189.png',
        width: 1200,
        height: 1200,
        alt: '3D Modeling and Industrial Design - Burger Press'
      }
    ],
    frames: [],
    title: '3D Modeling and Industrial Design',
    intro:
      'My 3D modeling journey began as a hobby, driven by a desire to merge creativity with practicality. I explored solving everyday problems by designing custom prints, reimagined forms for existing devices, and assembled parts for PC and electronic builds, pushing the boundaries of what functional design could achieve.',
    desc: 'This hands-on exploration allowed me to dive deep into industrial design, using tools like Fusion 360 and Blender to create models that are both innovative and practical. From crafting 3D-printed solutions for everyday challenges to prototyping new forms and integrating parts for advanced electronic projects, I focused on bridging digital design with physical functionality. The process reinforced my passion for building solutions that enhance usability while maintaining a refined, aesthetic approach.',
    clientId: 'tkodev',
    profileIds: ['tony'],
    startDate: fromZonedTime('2021-01-01', appTimeZone),
    skills: [
      '3D Modeling',
      'Industrial Design',
      '3D Printing',
      'Fusion 360',
      'Blender',
      'Revit',
      'Functional Design',
      'Form and Function',
      'Prototyping',
      'Device Interface Design',
      'Hobbyist Exploration'
    ],
    isFeatured: true
  }
}

const projectIds: ProjectId[] = [
  'loblawsPerfectExperience',
  'beyondModernization',
  'paypowerReloadablePrepaidMastercardMobileApp',
  'aeroplanEStore',
  'aeroplanShoppingButton',
  'modaMatchVirtualFittingRoom',
  'rocMarEngineeringEmployeeDashboard',
  'quantumMobCatalogAppProjectMobCiCdIntegrations',
  'quantumMobCoreUtilitiesAuthModule',
  'airMilesLandingPortalDevelopment',
  'petsAboveReactModernization',
  'cardinalMeatsFoodServiceWebsiteAndCms',
  'toyotaSalesReportingDashboard',
  'weiserCanadianCatalogWebsite',
  'canadaChiropracticProtectiveAssociationWebsiteAndCms',
  'canadaDryEnterPinContest',
  'canadaDryWebsite',
  'monogramCanadianCatalogWebsite',
  'parentsCanadaMagazineWebsite',
  'toffifeeSpinToWinContest',
  'toyotaBringYourToyotaHomeContest',
  'toyotaMakeADateContest',
  'babyJoggerCanadianCatalogWebsite',
  'earlySoftwareEngineering',
  'web10Era',
  'interiorsArchitecture',
  'industrialDesign'
]

export { projectEntries, projectIds }
