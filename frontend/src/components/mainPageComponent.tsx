import React from 'react';
import Link from 'next/link';
import PostBlock from '@/components/postBlock';
import postsData from '@/data/postsData';

const MainPageComponent: React.FC = () => {
  return (
    <div className={"mainPageComponent"}>
      <div className={"mainLeft"}>Hello, World1</div>
      <div className={"mainMid"}>
        {postsData.map(post => 
        (
          <Link href={`/post/${post.id}`} key={post.id}>
            <PostBlock post={post} />
          </Link>
        )) 
        }
      </div>
      <div className={"mainRight"}>Hello, World3</div>
    </div>
  );
};

export default MainPageComponent;