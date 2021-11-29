import "./login.css";

export default function Login() {
  return (
    <div id="login">
      <h1>Login page</h1>
      <input type="text" placeholder="Enter Username" alt="email" required />
      <input
        type="password"
        placeholder="Enter Username"
        alt="password"
        required
      />
      <br />
      <br />
      <button>Login</button>
    </div>
  );
}
