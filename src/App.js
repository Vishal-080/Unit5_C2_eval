import "./styles.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
