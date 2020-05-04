import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "html-react-parser";

const BlogDetail = (props) => (
  <div className="wrapper">
    <h1>{props.post.title}</h1>
    <br /> <br />
    <h2>{props.post.heading}</h2>
    <br /> <br />
    <div className="preview"> {ReactHtmlParser(props.post.preview)}</div>
    <br />
    <br />
    <div className="content">{ReactHtmlParser(props.post.content)}</div>
  </div>
);

export default BlogDetail;
