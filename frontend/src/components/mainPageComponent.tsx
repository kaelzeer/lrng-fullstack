'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import PostBlock from '@/components/postBlock';
import axios from "axios";
import postsData from '@/app/data/postsData'

const MainPageComponent: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/posts");
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className={"mainPageComponent"}>
      <div className={"mainLeft"}></div>
      <div className={"mainMid"}>
        {data.map(post => 
        (
          <Link href={`/post/${post._id}`} key={post._id} className="linkStyle">
            <PostBlock post={post} />
          </Link>
        )) 
        }        
      </div>
      <div className={"mainRight"}></div>
    </div>
  );
};

export default MainPageComponent;