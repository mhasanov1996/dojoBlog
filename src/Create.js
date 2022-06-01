import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("-select-");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setLoading(false);
        history.push("/");
        console.log("post done");
      });
    }, 500);
  };

  return (
    <div className="create">
      <h2 className="cretae-header">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          className="blogtitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          className="blogbody"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="-select-">-select-</option>
          <option value="yoshi">yoshi</option>
          <option value="mario">mario</option>
        </select>
        <button>{isLoading ? "Adding Blog..." : "Add Blog"}</button>
      </form>
    </div>
  );
};

export default Create;
