import { useEffect, useState } from "react";
import axios from "axios";
const Posts = () => {
  //useState
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //useEffect hook
  useEffect(() => {
    //logic goes here
    //make http request
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((post) => {
        //update loading state
        setLoading(false);
        //update post states
        setPosts(post.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [loading, error]);

  //display loading
  if (loading) return <div>Loading</div>;
  //display error
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <h2>Network Request</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
