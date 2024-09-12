import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `A highly motivated Computer Science and Engineering student at Jain University who specializes in full-stack and mobile app development in Java, Kotlin, and Python. I have extensive experience creating Android applications and scalable web platforms, as well as a good understanding of agile development processes. Passionate about using technical expertise to create effective solutions and drive innovation.`;

export const ABOUT_TEXT = `A highly motivated Computer Science and Engineering student at Jain University with an 8.1 CGPA who specializes in full-stack and mobile app development in Java, Kotlin, and Python. I have extensive experience creating Android applications and scalable web platforms, as well as a good understanding of agile development processes. Passionate about using technical expertise to create effective solutions and drive innovation.`;

export const INTERNSHIPS = [
  {
    year: "July 2023 - August 2023",
    role: "Full Stack Development Intern",
    company: "Capabl (ETG Career Labs Pvt. Ltd.)",
    description: `Gained practical skills in front-end and back-end technologies. Integrated APIs and contributed to projects such as developing a Tic-Tac-Toe game. Enhanced user experience by optimizing front-end performance.`,
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
  },
  {
    year: "August 2023 - September 2023",
    role: "Data Science and Machine Learning Intern",
    company: "YBI Foundation",
    description: `Collaborated on data analysis projects to derive actionable insights. Developed and fine-tuned machine learning algorithms for predictive modeling. Utilized Python and TensorFlow to build scalable models.`,
    technologies: ["Python", "Pandas", "Matplotlib & Seaborn", "Scikit-learn", "TensorFlow", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Chat Application",
    image: project1,
    description: `Developed a real-time chat app for Android using Java, Firebase, and Android SDK. Implemented user authentication and real-time messaging with Firebase Authentication and Firestore. Designed custom UI components for chat messages using RecyclerView and CircleImageView.`,
    technologies: ["Java", "Firebase Realtime Database", "Firebase Authentication", "Android SDK", "Glide"],
  },
  {
    title: "Student Complaint Box",
    image: project2,
    description: `Built a web-based platform using PHP and SQL for students to submit inquiries about university administration. Applied natural language processing techniques to categorize complaints.`,
    technologies: ["PHP", "SQL"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description: `A personal portfolio website showcasing projects, skills, and contact information.`,
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Multivariate Data Clustering",
    image: project3,
    description: `Developed a heuristic algorithm for clustering multivariate data. Used distance calculations, centroid updates, and user feedback to enhance clustering accuracy and user satisfaction.`,
    technologies: ["Python", "K-Means Clustering", "Hierarchical Clustering", "Scikit-learn", "Matplotlib & Seaborn"],
  },
];

export const CONTACT = {
  address: "Kanakapura, Bangalore, Karnataka, India, 562112",
  phoneNo: "+91 7975781147",
  email: "kamalsinghbs347@gmail.com",
};
