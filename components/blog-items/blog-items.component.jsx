import Link from "next/link";

const Posts = (props) => (
  <div className="wrapper">
    {props.posts.map((post) => (
      <div key={post.id} {...post}>
        <div>
          <h2>{post.title}</h2>
          <h3>{post.heading}</h3>
          <p>{post.preview}</p>
          <br />
          <br />
          <Link href="/blog/[id]" as={`/blog/${post.id}`}>
            <a className="button">
              <b>{post.title}</b>
            </a>
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>
    ))}
  </div>
);

export default Posts;
