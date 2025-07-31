import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../queries/getPosts";


const PostDashboard = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })

    if (isLoading) return <div>Loading...</div>;
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