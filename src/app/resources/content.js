import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Álvaro",
  lastName: "Mañoso Oca",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer & Architect",
  avatar: "/images/avatar.JPEG",
  location: "Europe/Spain", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English", "Catalan"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about architecture, technology, and share thoughts on the intersection of
      soft skills and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alvaromaoc",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alvaromanoso",
  },
  /* {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  }, */
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I architect software like I build IKEA furniture, only with fewer leftover pieces.</>,
  subline: (
    <>
      I'm Álvaro, a software engineer currently working at <InlineCode>Tymit</InlineCode> and being tutored as a
      software architect in the Master's Degree in Software Development and Architecture at <InlineCode>La Salle</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Álvaro is a software engineer and architect with a strong focus on designing scalable and efficient systems.
        Passionate about continuous learning and collaboration, he actively engages with the tech community, sharing
        knowledge and staying up to date with industry trends. He values the power of teamwork and innovation, believing
        that the best solutions come from exchanging ideas and experiences with other professionals.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tymit",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Designed the architecture and built the components for data migrations
            that facilitated the onboarding of 2 million users onto the platform.
          </>,
          <>
            Redesigned the process for changing credentials, increasing their security and enabling auditability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          }, */
        ],
      },
      {
        company: "GFT Group",
        timeframe: "2023 - 2024",
        role: "Junior Software Engineer",
        achievements: [
          <>
            Played a key role in the migration of an on-prem architecture to Google Cloud Platform (GCP), improving
            scalability, security, and cost efficiency.
          </>,
          <>
            Built an entire end-to-end CI/CD pipeline with GitHub Actions, integrating SDLC controls
            that reduced delivery time by a factor of 14.
          </>,
          <>
            Led an initiative to integrate hexagonal architecture practices, improving code maintainability and
            modularity while providing knowledge transfer (KT) sessions to the team.
          </>,
        ],
        images: [],
      },
      {
        company: "IThink UPC",
        timeframe: "2020 - 2022",
        role: "Intern Software Engineer",
        achievements: [
          <>
            Designed and developed a new platform to manage building technical inspections and
            all associated requirements, also enabling neighbourhood communities to be part of the process.
          </>,
        ],
        images: [],
      },
    ],
  },
  otherRelevantExperience: {
    display: true, // set to false to hide this section
    title: "Other relevant experience",
    experiences: [
      {
        company: "Board of European Students of Technology",
        timeframe: "2023 - 2024",
        role: "Head of Corporate Relations Department",
        achievements: [
          <>
            Led the Week of Engineering Competition, generating €17K in revenue and connecting around 200 students
            with top companies in Spain’s technology sector.
          </>,
          <>
            Established over 20 new partnerships, steering the association toward a more resilient,
            sustainable, and profitable future, beyond its mission and milestones.
          </>,
          <>
            Promoted and facilitated training for association members in fiscal matters, public speaking,
            and negotiation skills, enhancing their professional growth and contributions to the association’s goals.
          </>,
        ],
        images: [
          {
            src: "/images/work/WEC_Closing.jpeg",
            alt: "Week of Engineering Competition closing",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/WEC_BEC_topic-team.JPG",
            alt: "Week of Engineering Competition topic team",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/WEC_BEC_me-talking.JPG",
            alt: "Week of Engineering Competition Álvaro presenting",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/WEC_Closing_final-speech.JPG",
            alt: "Week of Engineering Competition Álvaro doing the final speech of the closing ceremony",
            width: 16,
            height: 9,
          }
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Master's Degree in software development and architecture",
        description: <>La Salle - Ramon Llull University</>,
      },
      {
        name: "Bachelor's Degree in informatics engineering",
        description: <>Polytechnic University of Catalonia</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about architecture and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Architecture and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
