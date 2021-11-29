import "./home.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  async function handleChange() {
    var data = await fetch("http://www.omdbapi.com/?apikey=[yourkey]&");
  }

  return (
    <div id="container">
      {/* <Navbar /> */}
      <h1>Book My Show</h1>
      <Link to="/book">
        <button>Book a movie</button>
      </Link>
    </div>
  );
}
