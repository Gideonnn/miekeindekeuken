import { Link } from 'react-router-dom';

import { ArrowCircleRight } from '../../components';
import { getPosts } from '../../services';
import { PostData } from '../../types';

export const List = () => {
  const posts: PostData[] = getPosts(5);

  return (
    <div>
      <h1 className="font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Posts</h1>

      <div className="mt-12">
        {posts.map((post: PostData, index: number) => (
          <div
            key={post.id}
            className={`flex mb-12 rounded-lg shadow ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <img
              className={`flex-shrink-0 object-cover w-1/2 h-60 ${
                index % 2 === 0 ? 'rounded-l-lg' : 'rounded-r-lg'
              }`}
              src={post.image}
              alt="featured image"
            />
            <div className="p-4">
              <span className="text-xs text-gray-400">{post.date}</span>
              <h2 className="my-3 text-xl font-bold text-gray-900 break-normal md:text-2xl">
                {post.title}
              </h2>
              <p className="text-gray-400">{post.subtitle || post.preview}</p>
              <Link to={`/posts/${post.id}`} className="flex items-center mt-3 text-pink-400">
                <span className="mr-1 hover:underline">Bekijk post</span>
                <ArrowCircleRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
