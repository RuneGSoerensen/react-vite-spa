import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/update">Update</NavLink>
      <NavLink to="/create">Create</NavLink>
    </nav>
  );
}
