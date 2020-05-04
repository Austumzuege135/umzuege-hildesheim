import Link from "next/link";
import ReactHtmlParser from "html-react-parser";

const Posts = (props) => (
  <div className="wrapper">
    {props.posts.map((post) => (
      <div key={post.id} {...post}>
        <div>
          <br />
          <br />
          <h2>{ReactHtmlParser(post.title)}</h2>
          <br /> <br />
          <h3>{ReactHtmlParser(post.heading)}</h3>
          <br /> <br />
          <p>{ReactHtmlParser(post.preview)}</p>
          <br /> <br />
          <br />
          <br />
          <Link href="/blog/[id]" as={`/blog/${post.id}`}>
            <a className="button">
              <b>{post.slug}</b>
            </a>
          </Link>
          <br />
          <br />
          <br />
        </div>
        <hr />
      </div>
    ))}
  </div>
);

export default Posts;
