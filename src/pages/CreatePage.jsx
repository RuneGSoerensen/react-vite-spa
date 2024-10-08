import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CreatePage() {
    const navigate = useNavigate()
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");


    async function handleOnSubmit(event){
        event.preventDefault();

        const newPost = {
            caption: caption,
            image: image,

        };
        newPost.uid = "fTs84KRoYw5pRZEWCq2Z";

        const url = "https://react-firebase-15abe-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost)
        });
        if(response.ok){
            navigate("/")
        }

    };

    return (
        <section className="page">
            <h1>Create New Post</h1>
            <form onSubmit={handleOnSubmit}>

                <label htmlFor="caption">Caption</label>
                <input
                    id="caption"
                    type="text"
                    value={caption}
                    placeholder="Type a title"
                    onChange={(e) => setCaption(e.target.value)}
                />

               
                <label htmlFor="image">Image URL</label>
                <input
                    id="image"
                    type="url"
                    value={image}
                    placeholder="Paste image URL"
                    onChange={(e) => setImage(e.target.value)}
                />

             
                <img
                src={image}
                alt="Preview"
                />
                
                <button type="submit">Save</button>
            </form>
        </section>
    );
}
