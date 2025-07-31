
import NavButton from "../components/NavButton";
import PaginatedPostDashboard from "../components/PaginatedPostDashboard";
import PostDashboard from "../components/PostDashboard";

const Posts = () => {
  return (
    <>
      <h1>Posts</h1>
      <NavButton text="Go to Home" route="/" />
      {/* <PostDashboard /> */}
      <PaginatedPostDashboard />
    </>
  );
};

export default Posts;
