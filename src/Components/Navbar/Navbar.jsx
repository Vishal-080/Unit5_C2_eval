import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <img src="https://bit.ly/3E72N2q" />
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign-up</button>
      </Link>
    </div>
  );
}
