import "./App.css";

function App() {
  function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log({
      username: username,
      password: password,
    });

    if (username === "rohit" && password === "1234") {
      alert("Login Successful!!");
    } else {
      alert("Login Failed!!");
    }
    event.target.reset();
  }
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
