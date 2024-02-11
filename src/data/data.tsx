import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import test1 from '../images/portfolio/ankit.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume By Swapnil barai',
  description: "Built By Swapnil Barai",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Swapnil Barai.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong>Full Stack Software Engineer</strong> based in Nagpur, currently employed at{' '}
        <strong>BA Continuum India Pvt. Ltd</strong>, where I contribute to the development of modern ETL processes
        using Big Data technology
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        During my free time, you can find me at <strong className="text-stone-100">Cricket Ground</strong>, or cruising
        around on my <strong className="text-stone-100">MotorBike</strong>,exploring the scenic landscapes of
        <strong className="text-stone-100"> Northern India </strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'Experienced in Big Data, Fullstack Development, and Machine Learning, I am dedicated to solving real-time problems and thrive as a team player. Passionate about innovation and continuous learning, I bring a diverse skill set to every project',
  aboutItems: [
    {label: 'Location', text: 'India, Mmumbai', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Cricket', Icon: SparklesIcon},
    {label: 'Study', text: 'IIT Kharagpur', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'BA Continuum India pvt. Ltd', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Hindi',
        level: 9.5,
      },
      {
        name: 'Marathi',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'Big Data',
    skills: [
      {
        name: 'Spark',
        level: 9,
      },
      {
        name: 'Kafka',
        level: 9,
      },
      {
        name: 'Scala',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'PacMan AI Game',
    description: 'Created AI Agent which play Capture The Flag version Of Pacman',
    url: 'https://github.com/swapnilbarai/PacmanAiGame',
    image: porfolioImage1,
  },
  {
    title: 'SBDART AUTOMATION',
    description: 'Facilitated collaboration between Aero-Opt model and SBDART model by creating a user interface using Tkinter',
    url: 'https://github.com/swapnilbarai/SBDART-AUTOMATION/',
    image: porfolioImage2,
  },
  {
    title: 'Created Tic Tac Toe ',
    description: 'Implemented Tic Tac Toe Game using JavaScript and React Js.',
    url: 'https://github.com/swapnilbarai/tic-tac-toe',
    image: porfolioImage3,
  },
  {
    title: 'Crack Detection',
    description: 'Implemented Transfer Learning to train a ResNet-50 Convolutional Neural Network (CNN) Model for precise crack identification in Civil Engineering Structures like pavements, resulting in an impressive accuracy of 96 %',
    url: 'https://github.com/swapnilbarai/CrackDetection',
    image: porfolioImage4,
  },
  
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July-2017 - May-2022',
    location: 'Indian Institute Of Technology Khargpur',
    title: 'B.Tech (Dual) Civil And ENVIRONMENTAL ENGINEERING',
    content: (
      <p>
        {' '}
        I acquired skills in fundamentals of data science,structural engineering participated in extracurricular
        activities, and completed relevant internships, fostering my professional development and passion for learning
      </p>
    ),
  },
  {
    date: 'July-2014 - May-2016',
    location: 'Shivaji Science, Nagpur',
    title: 'HSC (Junior Collge)',
    content: <p>I learned fundamentals of physics, math and chemistry.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2020 - Present',
    location: 'Bank Of America, Market Risk Technology',
    title: 'Software Developer',
    content: (
      <div>
        <div>
          <strong>Event Orchestration</strong>
          <div>
            <ul>
              <li>
                Implemented a distributed cache manager using Znode, and optimized logic for efficiently storing the
                state of events
              </li>
              <li>
                Developed a streaming process to consume different PnL and Position loaded events and take actions to
                update flags
              </li>
              <li>
                Worked on creating data dependency rules to govern the backfill and aggregation processes. Created
                producers responsible for generating essential events required for executing both aggregation and
                backfill operations seamlessly
              </li>
              <li>
                Created a command-line utility to handle end-of-day markers and showcase real-time aggregation status
                updates
              </li>
              <li>
                It converted a batch process into a real-time system, minimized downtime and simplified resubmission
                handling
              </li>
            </ul>
          </div>
        </div>
        <div>
          <strong>Backfill And Aggregation</strong>
          <div>
            <ul>
              <li>
                Found and Resolved Impala dialect issue which was causing problems while running Common Table
                Expressions (CTEs)
              </li>
              <li>
                Established a process to start data markers from upstream sources, aiding in identifying missing data
                for aggregation
              </li>
              <li>
                Mitigated ExtenalId changes within the aggregation and backfill process, overall inhancing accuracy for
                risk managers
              </li>
            </ul>
          </div>
        </div>
        <div>
          <strong>Data Quality Check And Automation</strong>
          <div>
            <ul>
              <li>
                Developed and implemented code to automate manual data quality checks, reducing execution time by half
                an hour
              </li>
              <li>
                Contributed to project automation with Autosys, cutting runtime by 2 hours, eliminating manual
                intervention
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    date: 'April 2020 - June 2020',
    location: 'ZestMoney, Banglore India',
    title: 'Software Intern',
    content: (
      <div>
        <ul>
          <li>
            Designed and implemented React JS components (Form, Camera, Summary) for KYC Registration page, leveraging
            Material UI to enhance user interface
          </li>
          <li>
            Used GoLang and kafka to developed a robust transaction notification system utilizing Email and SMS channels
            for efficient and reliable confirmations
          </li>
          <li>
            Engineered an AI agent proficient in playing the Capture the Flag (CTF) version of PacMan using
            Reinforcement Learning techniques, showcasing innovative problem-solving skills
          </li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ankit Kumar',
      text: 'Employs Scala expertise to craft robust solutions, blending technical acumen with Scala powerful capabilities for seamless development.',
      image:test1,
    },
    {
      name: 'Sourabh Verma',
      text: 'A dynamic coworker who excels in swiftly mastering new technologies and problem-solving with finesse'
    },
    {
      name: 'Someone else',
      text: 'A self-motivated team player, Swapnil adeptly navigates technical challenges with minimal support, showcasing resilience and a proactive approach to problem-solving.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I am always eager to engage in conversations about technology, language models, and any related topics. Looking forward to hearing from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'swapnilbarai149@gmail.com',
      href: 'swapnilbarai149@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mumbai,Goregaon West',
      href: 'https://www.google.com/maps/@19.16523,72.8313423,16z?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@swapnil',
      href: 'https://www.instagram.com/swapnilbarai123/',
    },
    {
      type: ContactType.Github,
      text: '@swapnil',
      href: 'https://github.com/swapnilbarai',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/swapnilbarai'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/swapnilbaraiiitkgp/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/swapnilbarai123/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/swapnilbarai149'},
];
