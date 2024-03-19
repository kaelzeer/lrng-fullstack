import React from 'react';
import Link from 'next/link';
import PostBlock from '@/components/postBlock';

const postData1 = {
  id: 'abcd-efgh',
  author: 'Author',
  publicationDate: '29.02.2024',
  title: 'Учебный проект по дисциплине Коллективная разработка',
  content: 'Общие правила разработки:',
  likes: 123,
  views: 321,
};

const postData2 = {
  id: 'efgh-abcd',
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
        <Link href={`/post/${postData1.id}`}>
          <PostBlock post={postData1} />
        </Link>
        <Link href={`/post/${postData2.id}`}>
          <PostBlock post={postData2} />
        </Link>
        <PostBlock post={postData1}/>
        <PostBlock post={postData1}/>
        <PostBlock post={postData1}/>
        <PostBlock post={postData1}/>
        <PostBlock post={postData1}/>
      </div>
      <div className={"mainRight"}>Hello, World3</div>
    </div>
  );
};

export default MainPageComponent;