export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  iconType: 'database' | 'cloud' | 'brain' | 'award' | 'shield';
  bgImage?: string;
  buttonText?: string;
}

export const topCertificates: Certificate[] = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL / IIIT Hyderabad",
    date: "Jan-Apr 2025",
    description: "Elite certification funded by MoE, Govt. of India covering online safety and privacy.",
    link: "https://onlinecourses.nptel.ac.in/noc25_cs79/preview",
    iconType: "shield",
    bgImage: "/nptel_privacy.png",
    buttonText: "Visit Site"
  },
  {
    title: "Training in DSA with CipherSchool",
    issuer: "CipherSchool",
    date: "Jul 2025",
    description: "Completed training in Data Structures and Algorithms with Cipherschools.",
    link: "https://www.cipherschools.com/",
    iconType: "award",
    bgImage: "/cipherschool_dsa.png",
    buttonText: "Visit Site"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Applied supervised & unsupervised learning algorithms to solve real-world problems.",
    link: "#",
    iconType: "brain"
  }
];

export const allCertificates: Certificate[] = [
  ...topCertificates,
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "IIT Kharagpur",
    date: "2025",
    description: "Intensive training on securing digital identities and online safety.",
    link: "#",
    iconType: "shield"
  },
  {
    title: "Training in DSA with CipherSchool",
    issuer: "CipherSchool",
    date: "2025",
    description: "Completed 2-month course on Data Structures and Algorithms in Java.",
    link: "#",
    iconType: "award"
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    date: "2024",
    description: "Querying and managing data in relational database management systems.",
    link: "#",
    iconType: "database"
  }
];
