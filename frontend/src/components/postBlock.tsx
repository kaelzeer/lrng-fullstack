import React from 'react';

const PostBlock: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div className={"postBlock"}>
      <div className={"metadata"}>
        <span className={"author"}> {post.author}</span>
        <span className={"publicationDate"}> {post.publicationDate}</span>
      </div>
      <h2 className={"blockHeader"}>{post.title}</h2>
      <p className={"content"}>{post.content}</p>
      <div className={"statistics"}>
        <span className={"likes"}>Likes: {post.likes}</span>
        <span className={"views"}>Views: {post.views}</span>
        <button className={"actionButton"}>Share</button>
      </div>
    </div>
  );
};

export default PostBlock;