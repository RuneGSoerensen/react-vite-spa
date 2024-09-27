import { useState, useEffect } from "react";
import Post from "../components/Posts";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const url =
        "https://fir-test-learning-33cf6-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
      const response = await fetch(url);
      const data = await response.json();
      const postArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setPosts(postArray);
    }
    getPosts();
  }, []);

  return (
    <section className="grid">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
}
