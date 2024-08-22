import "../styles/style.css";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// component for a clickable link in the card
const CardLink = ({ href, icon: Icon, text }) => (
  <Card.Link
    className="portfolioCardLink"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon /> {text}
  </Card.Link>
);

// prop type checking for CardLink
CardLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

// component for a project card
const Project = ({ title, image, projectLink, githubLink }) => (
  <div className="cardContainer">
    <Card
      className="portfolioCard"
      style={{ width: "18rem", margin: "20px 0" }}
    >
      <Card.Img
        className="portfolioCardImg"
        variant="top"
        src={image}
        alt={title}
      />
      <Card.Body>
        <Card.Title className="portfolioCardTitle">{title}</Card.Title>
        <CardLink
          href={projectLink}
          icon={FaExternalLinkAlt}
          text="Project Link"
        />
        <CardLink href={githubLink} icon={FaGithub} text="GitHub" />
      </Card.Body>
    </Card>
  </div>
);

// prop type checking for Project
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
