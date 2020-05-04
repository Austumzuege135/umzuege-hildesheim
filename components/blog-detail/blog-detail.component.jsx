import ReactHtmlParser from "html-react-parser";

const BlogDetail = (props) => (
  <div>
    <h1>{ReactHtmlParser(props.post.title)}</h1>
    <br /> <br />
    <h2>{ReactHtmlParser(props.post.heading)}</h2>
    <br /> <br />
    <div className="preview"> {ReactHtmlParser(props.post.preview)}</div>
    <br />
    <br />
    <div className="content">{ReactHtmlParser(props.post.content)}</div>
  </div>
);

export default BlogDetail;
