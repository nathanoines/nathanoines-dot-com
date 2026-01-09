import { ProjectCard } from '../ProjectCard/ProjectCard';
import './Projects.scss';

export function Projects() {
  const projects = [
    {
      title: 'Arizona Railway Museum',
      description:
        'Full-stack website for a non-profit organization dedicated to preserving railroad history. Features include events calendar, equipment roster, artifact collection, membership management, donation processing, and more.',
      technologies: ['Foundation', 'PHP', 'Node.js', 'MySQL'],
      link: 'https://arizonarailwaymuseum.org/',
      github: 'https://github.com/nathanoines/arizona-railway-museum',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio built with Preact and Vite, featuring clean design and smooth user experience.',
      technologies: ['Preact', 'Vite', 'SCSS'],
      github: 'https://github.com/nathanoines/nathanoines-dot-com',
    },
  ];

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
