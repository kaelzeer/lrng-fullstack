"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PostBlock from "@/components/postBlock";
import postsData from "@/data/postsData";
import axios from "axios";

const MainPageComponent: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api");
      setData(data);
    };
    getData();
  }, []);
  return (
    <div className={"mainPageComponent"}>
      <div className={"mainLeft"}>Hello, World1</div>
      <div className={"mainMid"}>
        {data.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <PostBlock post={post} />
          </Link>
        ))}
      </div>
      <div className={"mainRight"}>Hello, World3</div>
    </div>
  );
};

export default MainPageComponent;
