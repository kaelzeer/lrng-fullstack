import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import PostBlock from '@/components/postBlock';
import postsData from '@/data/postsData';

export default function PostDetails({ params }: { params: { postId: string } }) {

  const post = postsData.find(post => post.id === params.postId);

  if (!post) {
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
          <PostBlock post={post} />
        </div>
        <div className={"mainRight"}></div>
      </div>
      <Footer />
    </div>
  );
}