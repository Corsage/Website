import React from 'react';

import Experience from '../../models/experience';

import Bullet from '../../assets/svg/bullet.svg';

interface Props {
  experience: Experience;
}

const ExperienceItem = ({ experience }: Props) => {
  return (
    <div className="container flex flex-col gap-3">
      <div className="flex w-full justify-between font-mono">
        <h3 className="text-2xl uppercase">{experience.title}</h3>
        <h3 className="text-2xl text-cyan uppercase">{experience.company}</h3>
      </div>

      <ul className="flex w-full gap-3">
        {experience.skills.map((skill, index) => {
          return (
            <li
              key={`${experience.company}-skill-${index}`}
              className="rounded bg-accent text-black text-sm font-mono font-semibold px-2 py-1"
            >
              {skill}
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col w-full gap-4 mt-4">
        {experience.description.map((desc, index) => {
          return (
            <li
              key={`${experience.company}-desc-${index}`}
              className="flex text-white gap-6"
            >
              <Bullet className="flex-none text-cyan h-fit mt-2" width={30} />
              <span>{desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;
