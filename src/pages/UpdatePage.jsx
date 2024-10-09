import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

export default function UpdatePage() {
  const { postid } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const url = `https://react-firebase-15abe-default-rtdb.europe-west1.firebasedatabase.app/posts/${postid}.json`;

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setPost(data);
        setCaption(data.caption);
        setImage(data.image);
      }
      setLoading(false);
    }
    fetchPost();
  }, [postid]);

  async function handleDelete(event) {
    event.preventDefault();
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      window.confirm("sdfgsdfg ???");
      navigate("/");
    }
  }

  async function handleUpdateSubmit(event) {
    event.preventDefault();

    const updatedPost = {
      caption: caption,
      image: image,
      uid: post.uid,
    };

    const response = await fetch(url, {
      method: "PUT", // Put står for update
      body: JSON.stringify(updatedPost),
    });
    if (response.ok) {
      navigate("/");
    }
  }

  if (loading) {
    <p>Loading post data..</p>;
  }

  return (
    <section className="page">
      <h1>Update Post</h1>
      <form onSubmit={handleUpdateSubmit}>
        <label htmlFor="caption">Caption</label>
        <input
          id="caption"
          type="text"
          value={caption}
          placeholder="Update the caption"
          onChange={(e) => setCaption(e.target.value)}
        />

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="url"
          value={image}
          placeholder="Update the image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <img src={image} alt="Preview" />

        <button type="submit">Save</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </section>
  );
}
