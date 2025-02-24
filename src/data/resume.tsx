import { Icons } from "@/components/icons";
import { HomeIcon, Mail, MapPin } from "lucide-react";

export const DATA = {
  name: "Pratik Kumar",
  initials: "PK",
  url: "https://dillion.io",
  location: "Gurugram, India",
  locationLink: "",
  description:
    "Software Engineer with a passion to build great products and helping people.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "I’m a full-stack developer and DevOps enthusiast with a strong foundation in building high-quality web applications and cloud infrastructure. I graduated in 2024 with a CGPA of 8.3 and bring around 1.5 years of experience working on industry-grade projects. My skill set includes trending frontend frameworks like NextJS and NestJS with AWS, Kubernetes, Docker, CI/CD, and GitOps, along with an eye for scalable, efficient solutions. Whether it’s creating robust ELT pipelines, setting up automated workflows, or developing user-focused interfaces, I’m passionate about delivering impactful, high-performance solutions that enhance user experiences.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "React Query",
    "Next.js",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Node.js",
    "Nest.js",
    "Golang",
    "Python",
    "Postgres",
    "MongoDB",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Serverless",
    "Jenkins",
    "Airbyte",
    "DBT",
    "ELT",
    "Redis",
    "Queues",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "https://medium.com/@prateektiwari378", icon: NotebookIcon, label: "Blog" },
  ],
  about: [
    {
      icon: <Mail className="p-1" />,
      value: 'prateektiwari378@gmail.com'
    },
    {
      icon: <MapPin className="p-1" />,
      value: 'Gurugram'
    },
  ],
  contact: {
    email: "prateektiwari378@gmail.com",
    tel: "+918978936442",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PratikKumar125",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pratikkumar22",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "LinkedIn",
        url: "https://medium.com/@prateektiwari378",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Squareboat Solutions",
      href: "https://squareboat.com/",
      badges: [],
      location: "Gurugram",
      title: "Software Engineer L1",
      logoUrl: "/sqb.png",
      start: "July 2024",
      end: "Present",
      description:
        "Developed scalable data pipelines and integrations for platforms like Google Ads, Shopify, and TikTok, optimizing ETL workflows with tools like Airbyte, DBT, and AWS ECS. Strengthened application security with AWS Secrets Manager and Serverless integrations. Additionally, contributed to mobile and web development as a frontend and React Native developer, creating user-friendly interfaces across ReactJS, Next.js, and Android Studio, enhancing user engagement and experience across multiple platforms.",
    },
    {
      company: "Squareboat Solutions",
      badges: [],
      href: "https://squareboat.com/",
      location: "Gurugram",
      title: "Software Engineer L0",
      logoUrl: "/sqb.png",
      start: "July 2023",
      end: "July 2024",
      description:
        "Built full-stack solutions with NestJS, ReactJS. Integrated notifications system with support for FCM, Slack and Email from scratch using AWS-SQS. Added RBAC & ABAC at the full-stack level for enhanced authorization. Led the frontend revamp leading to user engagement up by 700%. Built a CSV file export and upload feature, utilizing AWS S3 for efficient uploads, scalability, and seamless integrations.",
    },
  ],
  education: [
    {
      school: "GLA University",
      href: "https://www.gla.ac.in/",
      degree: "B-Tech",
      logoUrl: "/gla.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "The Storyteller",
      href: "https://thestoryteller.tech/",
      dates: "Oct 2023 - Aug 2024",
      active: true,
      description:
        "A powerful AI-driven platform transforming ad campaigns with audience discovery, creative fatigue prediction, and competitor insights. Led full-stack development, including a complete frontend overhaul that boosted user engagement by over 700%, implemented FCM, Slack, and email notifications, and enforced RBAC and ABAC controls.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Shadcn UI",
        "Typescript",
        "NestJS",
        "MongoDB",
        "Bigquery",
        "Airbyte",
        "Queues",
        "Redis"
      ],
      links: [
        {
          type: "Website",
          href: "https://thestoryteller.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/storyteller.png",
      video:
        "",
    },
    {
      title: "Regisedge",
      href: "https://demoapp.regisedge.com/",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Developed a robust ELT pipeline handling data from platforms like Google Ads, Shopify, Facebook, and TikTok using Airbyte. Automated dbt transformations with AWS ECS, integrated Secrets Manager with Lambda, and streamlined operations with the Serverless Framework.",
      technologies: [
        "NestJS",
        "Typescript",
        "MongoDB",
        "Airbyte",
        "DBT",
        "Bigquery",
        "Serverless",
        "AWS-ECS",
        "AWS",
        "Redis",
        "Docker",
        "CI-CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://demoapp.regisedge.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/regisedge.png",
      video: "",
    },
    {
      title: "GO-Gopher",
      href: "https://github.com/PratikKumar125/go-gopher",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Open-source production-ready Go boilerplate featuring CRON jobs, Redis integration, MongoDB, pagination, and modular architecture with dependency injection using Uber's Dig.",
      technologies: [
        "Golang",
        "Redis",
        "MongoDB",
        "AWS-SQS",
        "AWS-S3",
        "CRON",
        "Dependency Injection (Dig)",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/PratikKumar125/go-gopher",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/golang.gif",
      video: "",
    },
    {
      title: "Via-Fans",
      href: "",
      dates: "April 2024 - present",
      active: true,
      description:
        "A platform for creators to connect with their audience through exclusive content. Designed and implemented secure media storage, real-time data handling, efficient caching, and seamless payment processing. Built to scale with a user-friendly interface that supports high-performance and reliability.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "React Query",
        "PostgreSQL",
        "AWS-S3",
        "AWS-SQS",
        "Redis",
        "Lemon Squeezy",
        "Serverless",
        "Kubernetes",
        "Docker",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/fans.png",
      video:
        "",
    },
  ],
  blogs: [
    {
      title: "Effortless Storage and Queue Management in Go: Building AWS-S3 Storage and Redis Queues Packages.",
      href: "/",
      dates: "Dec 2024",
      active: true,
      description:
        "The current implementation of the queue and storage systems demonstrates a powerful and flexible way to handle asynchronous job dispatching and processing using Go. The use of concurrency ensures that jobs are processed swiftly and reliably while maintaining simplicity in the design. This structure allows for scaling and adding more functionality over time.",
      technologies: [
        "Golang",
        "Redis",
        "AWS-S3"
      ],
      links: [
        {
          type: "Website",
          href: "https://medium.com/@prateektiwari378/effortless-storage-and-queue-management-in-go-building-aws-s3-storage-and-redis-queues-packages-558d9e296696",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "NestJS + GraphQL: A Comprehensive Guide to Code-First API Design",
      href: "/",
      dates: "Sept 2024",
      active: true,
      description:
        "GraphQL is a query language for APIs that allows clients to request exactly the data they need, making it highly efficient and flexible. Unlike REST, which requires multiple endpoints for different resources, GraphQL consolidates everything into a single endpoint where clients can specify the structure of the response.",
      technologies: [
        "NestJS",
        "GraphQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://medium.com/@prateektiwari378/nestjs-graphql-a-comprehensive-guide-to-code-first-api-design-9064a581fc10",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "NestJS Monorepo to Kubernetes with MongoDB Statefulset.",
      href: "/",
      dates: "Aug 2024",
      active: true,
      description:
        "In this blog post, I’ll walk you through the process of migrating a NestJS monorepo application to Kubernetes, using Minikube for local development. The project consists of two monorepo :- control-panel and auth, both of which rely on MongoDB for data storage and Redis for caching. The MongoDB instance is set up with a master-slave architecture using a StatefulSet, while Redis is deployed as a single pod.",
      technologies: [
        "NestJS",
        "MongoDB",
        "Docker",
        "Kubernetes"
      ],
      links: [
        {
          type: "Website",
          href: "https://medium.com/@prateektiwari378/nestjs-monorepo-to-kubernetes-with-mongodb-statefulset-a5dbaeb1ecd2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
