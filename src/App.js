import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Messaging App</h1>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default App;
