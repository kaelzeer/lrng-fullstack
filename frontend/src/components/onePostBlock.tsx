'use client'
import React, { useState, useEffect } from 'react';
import { HeartIcon, EyeIcon, ShareIcon } from '@heroicons/react/16/solid';

const PostBlock: React.FC<{ post: any }> = ({ post }) => {

  const [imageOrientation1, setImageOrientation1] = useState<string>('');
  const [imageOrientation2, setImageOrientation2] = useState<string>('');

  useEffect(() => {
    const checkImageOrientation = async (imageUrl: string, setImageOrientation: React.Dispatch<React.SetStateAction<string>>) => {
      const img = new Image();
      img.src = imageUrl;
      await img.decode();
      const vertical = img.height > img.width;
      setImageOrientation(vertical ? 'postImageVertical' : 'postImage');
    }

    checkImageOrientation(`/image/${post.image_1}.jpg`, setImageOrientation1);
    checkImageOrientation(`/image/${post.image_2}.jpg`, setImageOrientation2);
  }, [post.image1, post.image_2]);

  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={"postBlock"}>
      <h2 className={"blockHeader"}> {post.header}</h2>
      <div className="postImageContainer">
        <img 
          src={`/image/${post.image_1}.jpg`} 
          alt="Post Image" 
          className={imageOrientation1} />
      </div>
      <p className={"content"}> {post.text_1}</p>
      <p className={"content"}> {post.text_2}</p>
      <div className="postImageContainer">
        <img 
          src={`/image/${post.image_2}.jpg`} 
          alt="Post Image" 
          className={imageOrientation2} />
      </div>
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