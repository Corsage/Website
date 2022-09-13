import React, { useState } from 'react';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Bld from '../assets/svg/bld.svg';
import Shomigo from '../assets/svg/shomigo.svg';
import Linggo from '../assets/svg/linggo.svg';
import Alyze from '../assets/svg/alyze.svg';
import OH from '../assets/svg/ontario_health.svg';

const Portfolio = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);

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
    <div className="flex flex-col w-full items-center ">
      <div className="grid grid-cols-3 gap-2 w-full py-5">
        <div className="col-span-3 flex flex-col items-center mb-5">
          <h1 className="text-white font-bold text-5xl mb-5">Jay Chowdhary</h1>

          <a
            href="../../Jay Chowdhary - Resume (2022).pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="flex bg-green-cyan hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
              Resume
            </button>
          </a>
        </div>

        <div className="text-left">
          <h2 className="text-green-cyan mb-4">Languages</h2>
          <p className="text-white whitespace-pre-line">
            C#, C++, Java,{'\n'}
            Javascript/Node.js, Kotlin,{'\n'}
            Python, SQL, Swift
          </p>
        </div>

        <div
          className="flex row-span-2 justify-center cursor-pointer"
          onClick={() => generateEmoji()}
        >
          <StaticImage
            height={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 0 ? '' : 'hidden'
            } `}
            src="../assets/images/corsage.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 1 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-f2.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 2 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-f4.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 3 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-f5.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 4 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-f6.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 5 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-rage.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 6 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-love.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 7 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-hurt.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 8 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-twinkle.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 9 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-sparkles.png"
            alt="Corsage"
          />

          <StaticImage
            width={400}
            aspectRatio={1 / 1}
            className={`rounded-full border-2 border-green-cyan ${
              emojiIndex === 10 ? '' : 'hidden'
            }`}
            src="../assets/images/corsage-wink.png"
            alt="Corsage"
          />
        </div>

        <div className="text-right">
          <h2 className="text-green-cyan mb-4">Education</h2>
          <p className="text-white whitespace-pre-line">
            <b>Ryerson University</b>
            {'\n'}
            B.S. Computer Science{'\n'}
            Minor in Mathematics{'\n'}
            Minor in Philosophy
          </p>
        </div>

        <div className="text-left">
          <h2 className="text-green-cyan mb-4">Technologies</h2>
          <p className="text-white whitespace-pre-line">
            AWS, Azure, Docker,{'\n'}
            ElasticSearch, Firebase,{'\n'}
            MongoDB, MySQL, OpenShift,{'\n'}
            Pandas, React Native, React.js,{'\n'}
            SciPy
          </p>
        </div>

        <div className="text-right">
          <h2 className="text-green-cyan mb-4">Relevant Coursework</h2>
          <p className="text-white whitespace-pre-line">
            Applied Cryptography,{'\n'}
            Compilers and Interpreters,{'\n'}
            Data Mining, Data Structures &#38;{'\n'}
            Algorithms, Operating Systems,{'\n'}
            Project Management
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between py-8">
        <Bld />
        <Shomigo />
        <Linggo />
        <Alyze />
        <OH />
      </div>
    </div>
  );
};

export default Portfolio;

export const Head: HeadFC = () => <title>Corsage - About</title>;
