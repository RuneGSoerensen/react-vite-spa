import { useEffect, useState } from "react";
export default function UserAvatar({ uid }) {
  const url = `https://react-firebase-15abe-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
  const [users, setUser] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    }
    getUsers();
  }, [url]);

  return (
    <div>
      <h2>{users.name}</h2>
      <img src={users.image} alt={users.name} />
      <p>{users.title}</p>
    </div>
  );
}
