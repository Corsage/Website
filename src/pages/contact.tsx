import React from 'react';
import { HeadFC } from 'gatsby';

import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { useDispatch } from 'react-redux';

import SEO from '../components/seo';

import { add } from '../redux/slices/notificationSlice';

import Discord from '../assets/svg/discord.svg';
import Steam from '../assets/svg/steam.svg';
import Leetcode from '../assets/svg/leetcode.svg';
import Hackerrank from '../assets/svg/hackerrank.svg';

const Contact = () => {
  const dispatch = useDispatch();

  const discordLink = () => {
    navigator.clipboard.writeText('Corsage');
    dispatch(
      add({
        title: 'Discord',
        description: 'Copied discord tag to clipboard.',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        )
      })
    );
  };

  return (
    <div className="text-center w-full self-center">
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-cyan/20 text-white rounded shadow-lg">
        <div className="flex flex-col justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl uppercase font-semibold leading-tight">
              Socials
            </h2>
            <div className="text-light-cyan mt-3">
              Hate forms? Send me a message elsewhere.
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center justify-center">
                <button
                  className="text-accent hover:text-accent/80"
                  onClick={discordLink}
                >
                  <Discord width={60} />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <OutboundLink
                  className="text-accent hover:text-accent/80"
                  href="https://steamcommunity.com/id/xtcstr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Steam width={60} />
                </OutboundLink>
              </div>
              <div className="flex items-center justify-center">
                <OutboundLink
                  className="text-accent hover:text-accent/80"
                  href="https://leetcode.com/Corsage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Leetcode width={60} />
                </OutboundLink>
              </div>
              <div className="flex items-center justify-center">
                <OutboundLink
                  className="text-accent hover:text-accent/80"
                  href="https://www.hackerrank.com/Corsage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Hackerrank width={60} />
                </OutboundLink>
              </div>
            </div>

            <div className="mt-6 flex flex-col">
              <div className="flex gap-3 items-center justify-center">
                <span className="flex-1 h-0.5 bg-dark-cyan" />
                <h3 className="text-xl uppercase font-mono font-semibold">
                  FAQ
                </h3>
                <span className="flex-1 h-0.5 bg-dark-cyan" />
              </div>

              <ul className="flex flex-col mt-6 text-left text-sm gap-3">
                <li className="font-mono">
                  I <span className="font-semibold">do not</span> do freelance
                  work.
                </li>
                <li className="font-mono">
                  I usually reply to emails within 2 days.
                </li>
                <li className="font-mono">
                  I enjoy working together on any project(s).
                </li>

                <li className="font-mono">
                  Any and all feedback is appreciated.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span className="uppercase text-sm text-light-cyan font-mono font-semibold">
              Full Name
            </span>
            <input
              className="w-full bg-white text-dark-cyan mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-light-cyan font-mono font-semibold">
              Email
            </span>
            <input
              className="w-full bg-white text-dark-cyan mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-light-cyan font-mono font-semibold">
              Message
            </span>
            <textarea className="w-full h-32 bg-white text-dark-cyan mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-accent text-black p-3 rounded-lg w-full hover:bg-accent/80">
              Send Message
            </button>

            <p className="mt-3 uppercase font-mono text-white text-sm">
              All messages are encrypted with my{' '}
              <OutboundLink
                className="underline hover:text-accent"
                href="https://www.openpgp.org/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                public PGP key
              </OutboundLink>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
export const Head: HeadFC = () => <SEO title="Contact" />;
