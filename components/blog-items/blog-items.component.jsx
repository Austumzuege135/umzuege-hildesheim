import fetch from "isomorphic-unfetch";

const Post = (props) => (
  <div>
    Hallo welt
    <br />
    Hier finden wir die Blog übersicht
  </div>
);

Blog.getInitialProps = async function () {
  const res = await fetch("https://my-awesom-blog-api-crf.herokuapp.com/api/");
  const data = await res.json();

  return {
    posts: data,
  };
};

export default Post;
