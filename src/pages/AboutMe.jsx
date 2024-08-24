import "../styles/style.css";

// main About component
export default function About() {
  // content for the About section
  const profileImageSrc = "/images/profilePicture.jpg";
  const profileImageAlt = "Image of self";
  const aboutTitle = "About Me:";
  const aboutParagraphs = [
    "Hi, I'm Kaila! A budding full-stack developer, currently enhancing my skills through a coding bootcamp. Driven by curiosity and a love for problem-solving, I'm passionate about combining creativity with technical skills to create smooth and effective digital experiences.",
    "Outside the world of code, you'll find me delving into the intriguing world of true crime, losing myself in books, finding balance with yoga, gliding on roller skates, or enjoying quality time with my loyal pug. My diverse interests not only fuel my creativity but also bring a unique perspective to my work in technology.",
  ];

  // render the component
  return (
    <div className="about-container page-container">
      <div className="about-content">
        {/* profile image section */}
        <div className="profile-image">
          <img
            src={profileImageSrc}
            alt={profileImageAlt}
            className="profile-img"
          />
        </div>

        {/* about text section */}
        <div className="about-text">
          <h1>{aboutTitle}</h1>
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
