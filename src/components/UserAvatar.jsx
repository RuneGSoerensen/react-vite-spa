import { useState, useEffect } from "react";

export default function UserAvatar({ uid }) {
  const [user, setUser] = useState(null);
  const url = `https://your-firebase-rest-endpoint.com/users/${uid}.json`;

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    getUser();
  }, [url]);

  if (!user) {
    return <p>Loading user info...</p>; // Return loading state until user is fetched
  }

  return (
    <div>
      <img src={user.image} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.title}</p>
      </div>
    </div>
  );
}
