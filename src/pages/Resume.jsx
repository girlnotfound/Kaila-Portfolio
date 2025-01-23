function Resume() {
  // front-end skills
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web APIs",
    "OOP",
    "React",
  ];

  // back-end skills
  const backEndSkills = ["Express", "SQL", "ORM", "MVC", "NoSQL", "PWA"];

  const h2Style = {
    color: "#474a56",
  };

  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="skills-container">
        <section className="skills-section">
          <h2 style={h2Style}>Front-End Skills</h2>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2 style={h2Style}>Back-End Skills</h2>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="coming-soon">
        <a
          href="/resume.pdf"
          download="Kaila-Ronquillo-FullStackDeveloper-Resume.pdf"
          className="download-link"
        >
          Download My Resume!
        </a>
      </div>
    </div>
  );
}

export default Resume;
