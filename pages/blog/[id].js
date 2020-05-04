import fetch from "isomorphic-unfetch";
import BlogDetail from "../../components/blog-detail/blog-detail.component";

const Post = (props) => (
  <div>
    <div className="wrapper">
      <BlogDetail {...props} />
    </div>
  </div>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-awesom-blog-api-crf.herokuapp.com/api/${id}`
  );
  const post = await res.json();

  return { post };
};

export default Post;
