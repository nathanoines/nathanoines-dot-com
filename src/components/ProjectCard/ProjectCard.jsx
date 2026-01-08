import './ProjectCard.scss';

export function ProjectCard({ title, description, technologies, link, github }) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="project-card__tech">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="project-card__links">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            View Project
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
