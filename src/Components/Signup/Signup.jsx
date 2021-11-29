import "./signup.css";

export default function Signup() {
  return (
    <div id="signup">
      <h2>Signup Page</h2>
      <input type="text" placeholder="Enter Name" alt="name" required />
      <input type="text" placeholder="Enter Username" alt="email" required />
      <input
        type="password"
        placeholder="Enter Username"
        alt="password"
        required
      />
      <br />
      <br />
      <button>Sign up</button>
    </div>
  );
}
