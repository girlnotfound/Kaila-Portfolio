import Project from "../components/project";
import "../styles/style.css";

// project data
const projectData = [
  {
    title: "Papercut Pals",
    image: "/images/Screenshot-PapercutPals.png",
    projectLink: "https://papercut-pals.onrender.com",
    githubLink: "https://github.com/girlnotfound/PAPERCUT-PALS",
  },
  {
    title: "U-Plan-It",
    image: "/images/Screenshot-U-Plan-It.png",
    projectLink: "https://u-plan-it.onrender.com/login",
    githubLink: "https://github.com/Felipe1995c/U-Plan-it",
  },
  {
    title: "Domain Hunter HQ",
    image: "/images/Screenshot-Domain-Hunter.png",
    projectLink: "https://girlnotfound.github.io/Domain-Hunter-HQ/",
    githubLink: "https://github.com/girlnotfound/Domain-Hunter-HQ",
  },
  {
    title: "HTML Portfolio",
    image: "/images/Screenshot-HTML-Portfolio.png",
    projectLink: "https://girlnotfound.github.io/Kailas-Dev-Diary/",
    githubLink: "https://github.com/girlnotfound/Kailas-Dev-Diary",
  },
  {
    title: "Blog & Key",
    image: "/images/Screenshot-BlogandKey.png",
    projectLink: "https://girlnotfound.github.io/Blog-and-Key/",
    githubLink: "https://github.com/girlnotfound/Blog-and-Key",
  },
  {
    title: "PWA-EditorEase",
    image: "/images/Screenshot-PWA-EditorEase.png",
    projectLink: "https://pwa-editorease.onrender.com",
    githubLink: "https://github.com/girlnotfound/PWA-EditorEase",
  },
  {
    title: "Task Nest",
    image: "/images/Screenshot-Task-Nest.png",
    projectLink: "https://girlnotfound.github.io/Task-Nest/",
    githubLink: "https://github.com/girlnotfound/Task-Nest",
  },
];

// portfolio component
const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portfolioHeading">Portfolio</h1>
      <div className="portfolioGrid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
