import React from 'react';
import { Link } from 'gatsby';

import BlogPost from '../../models/blog-post';

interface Props {
  post: BlogPost;
}

const PostItem = ({ post }: Props) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="flex flex-col p-6 bg-cyan/20 hover:bg-cyan/40 text-white rounded shadow-lg"
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
  );
};

export default PostItem;
