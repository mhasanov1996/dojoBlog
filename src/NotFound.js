import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>Sorry</h2>
      <p>The page not found</p>
      <Link to="/">Back to homepage...</Link>
    </>
  );
};

export default NotFound;
