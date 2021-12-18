import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getPost } from '../../services';
import { AuthorPanel, TagList } from './components';
import { PreviousAndNextPosts } from './components/PreviousAndNextPosts';

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = getPost(id as string);
  if (!post) {
    navigate('/404');
  }

  return !post ? (
    <></>
  ) : (
    <>
      <div className="text-xl leading-normal text-gray-800">
        <h1 className="pb-2 text-3xl font-bold text-gray-900 break-normal md:text-4xl">
          {post.title}
        </h1>

        <p className="text-sm font-normal text-gray-600 md:text-base">
          {new Date(post.date).toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <div className="text-xl leading-normal" dangerouslySetInnerHTML={{ __html: post.content }} />

      <TagList tags={post.tags} />
      <AuthorPanel />
      <PreviousAndNextPosts currentPostId={post.id} />
    </>
  );
};
