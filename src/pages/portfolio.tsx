import React, { useState } from 'react';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Bld from '../assets/svg/bld.svg';
import Shomigo from '../assets/svg/shomigo.svg';
import Linggo from '../assets/svg/linggo.svg';
import Alyze from '../assets/svg/alyze.svg';
import OH from '../assets/svg/OH.svg';

const Portfolio = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);

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
    <div className="flex flex-col w-full items-center text-white">
      <div className="flex self-start absolute">
        <span className="w-0.5 h-40 bg-green-cyan" />
        <span className="w-40 h-0.5 bg-green-cyan" />
      </div>

      <div className="flex self-start items-center ml-10 mt-10 text-white">
        <StaticImage
          height={375}
          aspectRatio={1 / 1}
          imgStyle={{ background: '#222222' }}
          className={`rounded ${emojiIndex === 0 ? '' : 'hidden'} `}
          src="../assets/images/corsage.png"
          alt="Corsage"
        />

        <span style={{ zIndex: 1 }} className="w-60 h-0.5 -ml-10 bg-white" />

        <div style={{ width: 500, height: 275 }} className="flex flex-col ml-6">
          <div className="flex flex-row mb-4">
            <button
              onClick={() => setAboutIndex(0)}
              className={`px-4 py-2 rounded hover:bg-green-50/25 ${
                aboutIndex === 0 && 'bg-green-cyan/20'
              }`}
            >
              Myself
            </button>
            <button
              onClick={() => setAboutIndex(1)}
              className={`px-4 py-2 rounded hover:bg-green-50/25 ${
                aboutIndex === 1 && 'bg-green-cyan/20'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setAboutIndex(2)}
              className={`px-4 py-2 rounded hover:bg-green-50/25 ${
                aboutIndex === 2 && 'bg-green-cyan/20'
              }`}
            >
              Education
            </button>
          </div>

          {aboutIndex === 0 && (
            <div className="my-auto whitespace-pre-line">
              <p className="mb-2">
                Hi, I enjoy making and breaking things. I have a personal
                interest in reverse engineering, malware analysis, and data
                mining.
              </p>

              <p>
                Professionally, building innovative products or finding
                optimized solutions drives my passion to code. My interests
                include but are not limited to health care, fashion, and gaming.
              </p>
            </div>
          )}

          {aboutIndex === 1 && (
            <div className="my-auto whitespace-pre-line">
              <h4 className="font-bold mb-1">Languages</h4>
              <p className="mb-4">
                C#, C++, Java, Javascript/Node.js, Kotlin, Python, TypeScript,
                SQL
              </p>
              <h4 className="font-bold mb-1">Technologies</h4>
              <p>
                AWS, Azure, Docker, ElasticSearch, Firebase, GraphQL, MongoDB,
                MySQL, Linux, Pandas, React Native, React.js, SciPy
              </p>
            </div>
          )}

          {aboutIndex === 2 && (
            <div className="my-auto whitespace-pre-line">
              <h4 className="font-bold mb-1">Ryerson University</h4>
              <p>
                B.S. Computer Science{'\n'}
                Minor in Mathematics and Philosophy{'\n'}
                <span className="text-green-cyan">Sept. 2018 - Apr. 2022</span>
              </p>
            </div>
          )}

          <div className="flex flex-row mt-auto">
            <a
              href="../../Jay Chowdhary - Resume (2022).pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="flex flex-row w-fit h-fit px-4 py-2 rounded bg-green-cyan text-black">
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

            <button className="w-fit h-fit ml-4 px-4 py-2 rounded border border-green-cyan hover:border-light-green-cyan text-green-cyan hover:text-light-green-cyan">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-6 items-center">
        <div className="flex w-full items-center">
          <h2 className="text-4xl">MY WORK EXPERIENCE</h2>
          <span className="h-0.5 flex-1 ml-6 bg-white" />
        </div>

        <div className="flex mt-6 items-center w-fit">
          <div className="flex flex-col my-4 gap-4">
            <button
              onClick={() => setWorkIndex(0)}
              className={`p-3 rounded hover:bg-green-cyan/25 ${
                workIndex === 0 && 'bg-green-cyan/20'
              }`}
            >
              <Bld width="48" height="48" />
            </button>

            <button
              onClick={() => setWorkIndex(1)}
              className={`p-3 rounded hover:bg-green-cyan/25 ${
                workIndex === 1 && 'bg-green-cyan/20'
              }`}
            >
              <Shomigo width="48" height="48" />
            </button>

            <button
              onClick={() => setWorkIndex(2)}
              className={`p-3 rounded hover:bg-green-cyan/25 ${
                workIndex === 2 && 'bg-green-cyan/20'
              }`}
            >
              <Linggo width="48" height="48" />
            </button>

            <button
              onClick={() => setWorkIndex(3)}
              className={`p-3 rounded hover:bg-green-cyan/25 ${
                workIndex === 3 && 'bg-green-cyan/20'
              }`}
            >
              <Alyze width="48" height="48" />
            </button>

            <button
              onClick={() => setWorkIndex(4)}
              className={`p-3 rounded hover:bg-green-cyan/25 ${
                workIndex === 4 && 'bg-green-cyan/20'
              }`}
            >
              <OH width="48" height="48" />
            </button>
          </div>

          <span className="w-0.5 h-full bg-green-cyan ml-6" />

          <div className="relative">
            <div
              style={{ width: 750 }}
              className="flex flex-col my-4 p-4 bg-green-cyan/20"
            >
              <div
                style={{ background: '#222222' }}
                className="flex p-2 rounded"
              >
                <h2 className="text-2xl">
                  SOFTWARE ENGINEER <span className="font-bold">|</span> LINGGO
                </h2>
              </div>

              <div className="bg-green-cyan px-2 py-1 rounded w-fit">
                <p className="text-black">
                  React Native, Python &#38; Django, Firebase
                </p>
              </div>

              <div className="mt-4">
                <p className="mb-2">
                  Modified an existing application to include in-app data
                  tracking to speed up building datasets for classification
                  analysis, resulting in 80%+ accuracy.
                </p>

                <p className="mb-2">
                  Created a tool to visualize training metrics for PyTorch and
                  Tensorflow to present to stakeholders, increasing confidence
                  on 4 projects for funding.
                </p>

                <p className="mb-2">
                  Created and released a partnered application using React
                  Native, Firebase, and Django; achieved 1000+ daily active
                  users.
                </p>

                <p>
                  Integrated a single sign-on (SSO) middleware for existing
                  users onto the new mobile app and web platform, increasing
                  retention rate from 60% to 85%.
                </p>
              </div>
            </div>

            <div className="self-end absolute -bottom-2 right-10">
              <button className="w-fit h-fit px-4 py-2 rounded bg-green-cyan text-black">
                VISIT COMPANY WEBSITE
              </button>
            </div>
          </div>
        </div>
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

export const Head: HeadFC = () => <title>Corsage - About</title>;
