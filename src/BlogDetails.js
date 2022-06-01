import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blogDetails">
      {isLoading && <div>Loading...</div>}
      {error && { error }}
      {blog && (
        <div className="blogartdiv">
          <article className="blogDetailsArt">
            <div className="headerBlog">
              <h2>{blog.title}</h2>
              <h4>by {blog.author}</h4>
            </div>
            <p>{blog.body}</p>
            <button onClick={handleClick}>Delete</button>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
