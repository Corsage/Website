import React, { useState } from 'react';
import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../components/seo';
import Experience from '../models/experience';
import Project from '../models/project';

import ExperienceItem from '../components/portfolio/experience-item';
import ProjectItem from '../components/portfolio/project-item';

import useExperiences from '../hooks/use-experiences';
import useProjects from '../hooks/use-projects';

const Portfolio = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);
  const [expIndex, setExpIndex] = useState(0);

  const experiences = useExperiences();
  const projects = useProjects();

  /** Emojis found in ../assets/images. */
  const emojis = [
    'corsage',
    'corsage-f2',
    'corsage-f4',
    'corsage-f5',
    'corsage-f6',
    'corsage-rage',
    'corsage-love',
    'corsage-hurt',
    'corsage-twinkle',
    'corsage-sparkles',
    'corsage-wink'
  ];

  const generateEmoji = () => {
    let index;
    do {
      // Generate random between 0 - emojis.length.
      index = Math.floor(Math.random() * emojis.length);
    } while (index === emojiIndex);

    setEmojiIndex(index);
  };

  return (
    <div className="w-full my-10 mx-6 sm:mx-0">
      <div className="hidden lg:flex self-start absolute">
        <span className="w-0.5 h-40 bg-accent" />
        <span className="w-40 h-0.5 bg-accent" />
      </div>

      <div className="flex flex-col lg:flex-row lg:self-start lg:items-center lg:ml-10 text-white bg-black">
        <div className="relative flex items-center justify-center text-cyan hover:text-light-cyan bg-white">
          <StaticImage
            height={375}
            aspectRatio={1 / 1}
            imgClassName="bg-dark-cyan"
            className={`rounded ${emojiIndex === 0 ? '' : 'hidden'} `}
            src="../assets/images/corsage.png"
            alt="Corsage"
          />
        </div>

        <span className="hidden lg:block w-60 h-0.5 -ml-10 mt-4 bg-white z-10" />

        <div className="flex ml-6">
          <div className="flex flex-col ml-6 gap-3">
            <h1 className="text-4xl font-semibold uppercase">Jay Chowdhary</h1>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => setAboutIndex(0)}
                className={`px-4 py-2 rounded hover:bg-green-50/25 ${
                  aboutIndex === 0 && 'bg-dark-cyan'
                }`}
              >
                Myself
              </button>
              <button
                onClick={() => setAboutIndex(1)}
                className={`px-4 py-2 rounded hover:bg-green-50/25 ${
                  aboutIndex === 1 && 'bg-dark-cyan'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setAboutIndex(2)}
                className={`px-4 py-2 rounded hover:bg-green-50/25 ${
                  aboutIndex === 2 && 'bg-dark-cyan'
                }`}
              >
                Education
              </button>
            </div>

            <div
              style={{ maxWidth: 520, minHeight: 140 }}
              className="flex flex-col whitespace-pre-line mb-3 justify-center"
            >
              {aboutIndex === 0 && (
                <>
                  <p className="mb-2">
                    Hi, I enjoy making and breaking things. I have a personal
                    interest in reverse engineering, malware analysis, and data
                    mining.
                  </p>

                  <p>
                    Professionally, building innovative products or finding
                    optimized solutions drives my passion to code. My interests
                    include but are not limited to health care, fashion, and
                    gaming.
                  </p>
                </>
              )}

              {aboutIndex === 1 && (
                <>
                  <h4 className="font-semibold mb-1">Languages</h4>
                  <p className="mb-4">
                    C#, C++, Java, Javascript/Node.js, Kotlin, Python,
                    TypeScript, SQL
                  </p>
                  <h4 className="font-semibold mb-1">Technologies</h4>
                  <p>
                    AWS, Azure, Docker, ElasticSearch, Firebase, GraphQL,
                    MongoDB, MySQL, Linux, Pandas, React Native, React.js, SciPy
                  </p>
                </>
              )}

              {aboutIndex === 2 && (
                <>
                  <h4 className="font-semibold mb-1">Ryerson University</h4>
                  <p>
                    B.S. Computer Science{'\n'}
                    Minor in Mathematics and Philosophy{'\n'}
                    <span className="text-cyan">Sept. 2018 - Apr. 2022</span>
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-row gap-3">
              <a
                href="../../Jay Chowdhary - Resume (2022).pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="flex flex-row w-fit h-fit px-4 py-2 rounded bg-accent text-black hover:bg-accent/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download CV
                </button>
              </a>

              <button className="w-fit h-fit px-4 py-2 rounded border border-accent hover:border-accent/80 text-accent hover:text-accent/80">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full my-10 items-center">
        <div className="flex w-full items-center mb-6">
          <h2 className="text-4xl font-semibold uppercase">Work Experience</h2>
          <span className="h-0.5 flex-1 ml-6 bg-white" />
        </div>

        <div style={{ width: 1000, height: 500 }} className="flex mt-6">
          <ol className="flex flex-col gap-3 items-center justify-center mr-4">
            {experiences.map(
              ({ node }: { node: Experience }, index: number) => {
                return (
                  <li key={`experience-${index}`}>
                    <button
                      className={`rounded px-3 py-3 hover:bg-dark-cyan ${
                        expIndex === index && 'bg-dark-cyan'
                      }`}
                      onClick={() => setExpIndex(index)}
                    >
                      <img
                        width={48}
                        src={`../../${node.logo}`}
                        alt={node.company}
                      />
                    </button>
                  </li>
                );
              }
            )}
          </ol>

          <span className="ml-4 w-0.5 h-full bg-accent" />

          <div className="flex w-full my-6 p-6 bg-dark-cyan">
            {<ExperienceItem experience={experiences[expIndex].node} />}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full my-10 items-center">
        <div className="flex w-full items-center mb-6">
          <span className="h-0.5 flex-1 mr-6 bg-white" />
          <h2 className="text-4xl font-semibold uppercase">
            Personal Projects
          </h2>
        </div>

        <ol className="flex flex-row flex-wrap mt-6 gap-3 justify-center">
          {projects.map(({ node }: { node: Project }, index: number) => {
            return (
              <li key={`project-${index}`}>
                <ProjectItem project={node} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

const styles = {
  company: {
    width: 60,
    height: 60
  }
};

export default Portfolio;
export const Head: HeadFC = () => <SEO title="Portfolio" />;
