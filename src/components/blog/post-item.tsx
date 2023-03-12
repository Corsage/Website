import React from 'react';
import { Link } from 'gatsby';

import BlogPost from '../../models/blog-post';

interface Props {
  post: BlogPost;
}

const PostItem = ({ post }: Props) => {
  return (
    <div className="inline-block">
      <Link
        to={`/blog/${post.id}`}
        className="flex flex-col p-6 bg-medium-cyan hover:bg-dark-cyan text-white rounded shadow-lg mb-6"
      >
        <ul className="flex flex-row flex-wrap gap-3">
          {post.tags.map((tag, index) => {
            return (
              <li
                key={`${post.title}-tag-${index}`}
                className="rounded bg-accent text-black text-sm font-mono font-semibold px-2 py-1"
              >
                {tag}
              </li>
            );
          })}
        </ul>

        <h2 className="mt-3 text-2xl font-mono font-semibold">{post.title}</h2>
        <p className="mt-6">{post.excerpt}</p>

        <div className="flex w-full justify-between mt-3">
          <span className="font-mono">{post.date}</span>
          <span>{post.timeToRead} min(s)</span>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
