import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Sorry</h2>
      <p>The page not found</p>

      <Link to="/">
        <button>Back to homepage...</button>
      </Link>
    </div>
  );
};

export default NotFound;
