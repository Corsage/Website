import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import Project from '../../models/project';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div
      style={{ width: 350 }}
      className="bg-dark-cyan rounded-lg shadow-md hover:shadow-2xl"
    >
      <div
        style={{ height: 200 }}
        className="project-image flex rounded-t-lg justify-center items-center"
      >
        <OutboundLink
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height={200}
            src={`../../${project.image}`}
            alt={project.title}
          />
        </OutboundLink>
      </div>

      <div className="flex flex-col p-5 gap-3">
        <h4 className="text-xl font-mono tracking-tight text-white uppercase">
          {project.title}
        </h4>

        <p className="font-normal text-light-cyan">{project.description}</p>

        <ul className="flex flex-row flex-wrap gap-3">
          {project.skills.map((skill, index) => {
            return (
              <li
                key={`${project.title}-skill-${index}`}
                className="rounded bg-cyan text-black text-sm font-mono font-semibold px-2 py-1"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
