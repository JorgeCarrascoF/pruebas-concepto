
import NavButton from "../components/NavButton";
import PostDashboard from "../components/PostDashboard";

const Posts = () => {
  return (
    <>
      <h1>Posts</h1>
      <NavButton text="Go to Home" route="/" />
      <PostDashboard />
    </>
  );
};

export default Posts;
