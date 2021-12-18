import { getNextPost, getPreviousPost } from '../../../../services';

export interface PreviousAndNextPostsProps {
  currentPostId: string;
}

export const PreviousAndNextPosts = ({ currentPostId }: PreviousAndNextPostsProps) => {
  const previousPost = getPreviousPost(currentPostId);
  const nextPost = getNextPost(currentPostId);

  return (
    <div className="flex justify-between px-4 pb-12 mt-6 font-sans">
      <div className="text-left">
        <div className="text-xs text-gray-600 md:text-sm">&lt; Vorige Post</div>
        {previousPost && (
          <a
            href={`/posts/${previousPost.id}`}
            className="font-bold text-pink-400 md:text-sm hover:underline"
          >
            {previousPost.title}
          </a>
        )}
      </div>

      <div className="text-right">
        <div className="text-xs text-gray-600 md:text-sm">Volgende Post &gt;</div>
        {nextPost && (
          <a
            href={`/posts/${nextPost.id}`}
            className="font-bold text-pink-400 md:text-sm hover:underline"
          >
            {nextPost.title}
          </a>
        )}
      </div>
    </div>
  );
};
