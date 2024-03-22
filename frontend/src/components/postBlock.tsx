import React from 'react';

const PostBlock: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div className={"postBlock"}>
      <h2 className={"blockHeader"}> Header: {post.header}</h2>
      <p className={"content"}>Text: {post.text}</p>
      <div className={"statistics"}>
        {/* Временно уберу */}
        {/* <span className={"likes"}>Likes: {post.likes}</span>
        <span className={"views"}>Views: {post.views}</span>
        <button className={"actionButton"}>Share</button> */}
      </div>
    </div>
  );
};

export default PostBlock;