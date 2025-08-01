import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../queries/getPosts";
import { ClipLoader } from "react-spinners";


const PostDashboard = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })

    if (isLoading) return <ClipLoader color="#36d7b7" size={50} />;
    if (isError) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      {data.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDashboard;