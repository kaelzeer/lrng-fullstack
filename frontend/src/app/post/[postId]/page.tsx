'use client'
import React, { useEffect, useState } from "react";
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import PostBlock from '@/components/postBlock';
import axios from "axios";

export default function PostDetails({ params }: { params: { postId: string } }) {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api");
        const postsData = response.data;
        const post = postsData.find((post: any) => post._id === params.postId);
        setPostData(post);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    getData();
  }, [params.postId]);

  if (!postData) {
    return (
      <div>
        <Header />
        <div className={"mainPageComponent"}>
          <div className={"mainLeft"}></div>
          <div className={"mainMid"}>Post not found</div>
          <div className={"mainRight"}></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className={"mainPageComponent"}>
        <div className={"mainLeft"}></div>
        <div className={"mainMid"}>
          <PostBlock post={postData} />
        </div>
        <div className={"mainRight"}></div>
      </div>
      <Footer />
    </div>
  );
}
