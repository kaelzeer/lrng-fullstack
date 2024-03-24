import React, { useState } from 'react';
import { HeartIcon, EyeIcon, ShareIcon } from '@heroicons/react/16/solid';

const PostBlock: React.FC<{ post: any }> = ({ post }) => {

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className={"postBlock"}>
      <h2 className={"blockHeader"}> Header: {post.header}</h2>
      <p className={"content"}>Text: {post.text}</p>
      <div className={"statistics"}>
        <a className="icon" onClick={(e) => { e.preventDefault(); toggleLike(); }}>
          <HeartIcon className={`icon ${isLiked ? 'liked' : ''}`} />
        </a>
        <EyeIcon className="icon" />
        <ShareIcon className="icon" />
      </div>
    </div>
  );
};

export default PostBlock;