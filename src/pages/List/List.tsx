import data from '../../data.json';
import { PostData } from '../../types';

const posts: PostData[] = Object.values(data);

export const List = () => (
  <div>
    <h1 className="font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">Posts</h1>

    <div className="mt-12">
      {posts.map((post: PostData, index: number) => (
        <div
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
            <h2 className="py-3 text-xl font-bold text-gray-900 break-normal md:text-2xl">
              {post.title}
            </h2>
            <p className="text-gray-400">{post.subtitle || post.preview}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
