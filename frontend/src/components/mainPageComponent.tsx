import React from 'react';

const PostBlock: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div className={"postBlock"}>
      <div className={"metadata"}>
        {/* Метаданные: автор, время публикации*/}
        <span className={"author"}> {post.author}</span>
        <span className={"publicationDate"}> {post.publicationDate}</span>
      </div>
      {/* Пост */}
      <h2 className={"blockHeader"}>{post.title}</h2>
      <p className={"content"}>{post.content}</p>
      {/* Блок со статистикой */}
      <div className={"statistics"}>
        <span className={"likes"}>Likes: {post.likes}</span>
        <span className={"views"}>Views: {post.views}</span>
        {/* Дополнительные действия */}
        <button className={"actionButton"}>Share</button>
      </div>
    </div>
  );
};

const postData = {
  author: 'Author',
  publicationDate: '29.02.2024',
  title: 'Учебный проект по дисциплине Коллективная разработка',
  content: 'Общие правила разработки:',
  likes: 123,
  views: 321,
};

const MainPageComponent: React.FC = () => {
  return (
    <div className="mainPageComponent">
      <div className={"mainLeft"}>Hello, World1</div>
      <div className={"mainMid"}>
        <PostBlock post={postData}/>
        <PostBlock post={postData}/>
        <PostBlock post={postData}/>
        <PostBlock post={postData}/>
        <PostBlock post={postData}/>
        <PostBlock post={postData}/>
        <PostBlock post={postData}/>
      </div>
      <div className={"mainRight"}>Hello, World3</div>
    </div>
  );
};

export default MainPageComponent;