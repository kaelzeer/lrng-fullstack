'use client'
import React, { useState, useEffect } from 'react';
import { HeartIcon, EyeIcon, ShareIcon } from '@heroicons/react/16/solid';

const PostBlock: React.FC<{ post: any }> = ({ post }) => {

  const [imageOrientation1, setImageOrientation1] = useState<string>('');

  useEffect(() => {
    const checkImageOrientation = async (imageUrl: string, setImageOrientation: React.Dispatch<React.SetStateAction<string>>) => {
      const img = new Image();
      img.src = imageUrl;
      await img.decode();
      const vertical = img.height > img.width;
      setImageOrientation(vertical ? 'postImageVertical' : 'postImage');
    }
    if(post.image_1){
      checkImageOrientation(`http://185.250.46.244:7293/api/image/${post.image_1}`, setImageOrientation1);
    }
  }, [post.image_1]);

  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={"postBlock"}>
      <h2 className={"blockHeader"}> {post.header}</h2>
      <div className="postImageContainer">
        <img 
          src={`http://185.250.46.244:7293/api/image/${post.image_1}`} 
          alt="Post Image" 
          className={imageOrientation1} />
      </div>
      <p className={"content"}> {post.text_1}</p>
      <div className={"statistics"}>
        <HeartIcon className={`icon ${isLiked ? 'liked' : ''}`} onClick={(e) => { e.preventDefault(); toggleLike(); }}/>
        <EyeIcon className="icon" />
        <ShareIcon className="icon" />
      </div>
    </div>
  );
};

export default PostBlock;