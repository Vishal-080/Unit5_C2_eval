import "./home.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="container">
      <h1>Book My Show</h1>
      <Link to="/book">
        <button>Book a movie</button>
      </Link>
    </div>
  );
}
