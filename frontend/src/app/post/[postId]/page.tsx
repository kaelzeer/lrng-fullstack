import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export default function postDetails ({
  params, 
}:{
  params : { postId: string};
}) {
  return (
    <div>
      <Header />
      <div className="mainPageComponent">
        <div className={"mainLeft"}></div>
        <div className={"mainMid"}>
          {params.postId}
        </div>
        <div className={"mainRight"}></div>
      </div>
      <Footer />
    </div>
  );
}