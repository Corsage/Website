import React from 'react';

import Job from '../../models/experience';

import Bullet from '../../assets/svg/bullet.svg';

interface Props {
  job: Job;
}

const Experience = ({ job }: Props) => {
  return (
    <div className="container flex flex-col gap-3">
      <div className="flex w-full justify-between font-mono">
        <h3 className="text-2xl">{job.title.toUpperCase()}</h3>
        <h3 className="text-2xl text-cyan">{job.company.toUpperCase()}</h3>
      </div>

      <ul className="flex w-full gap-3">
        {job.skills.map((skill, index) => {
          return (
            <li
              key={`${job.company}-skill-${index}`}
              className="rounded bg-accent text-black text-sm font-mono font-semibold px-2 py-1"
            >
              {skill}
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col w-full gap-4 mt-4">
        {job.description.map((desc, index) => {
          return (
            <li
              key={`${job.company}-desc-${index}`}
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

export default Experience;
