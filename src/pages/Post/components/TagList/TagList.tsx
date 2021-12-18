import { Link } from 'react-router-dom';

export interface TagListProps {
  tags: string[];
}

export const TagList = ({ tags }: TagListProps) => (
  <div className="my-10 text-gray-500 md:text-sm">
    <span>Tags: </span>
    {tags.map((tag, i) => (
      <span key={tag}>
        {i > 0 && ', '}
        <Link
          to={`/tags/${tag}`}
          className="text-base text-pink-400 no-underline md:text-sm hover:underline"
        >
          {tag}
        </Link>
      </span>
    ))}
  </div>
);
