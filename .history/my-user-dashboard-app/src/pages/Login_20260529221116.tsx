import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Viewer");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      username,
      role: role as "Admin" | "Editor" | "Viewer",
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option>Admin</option>
        <option>Editor</option>
        <option>Viewer</option>
      </select>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;