// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import "./Login.css"

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("Viewer");

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     login({
//       username,
//       role: role as "Admin" | "Editor" | "Viewer",
//     });

//     navigate("/dashboard");
//   };

//   return (
//     <div className="login-page">
//       <h1>Login</h1>

//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <select
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//       >
//         <option>Admin</option>
//         <option>Editor</option>
//         <option>Viewer</option>
//       </select>

//       <button onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Login.css";

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
    <div className="login-page">
      <div className="login-card">
        <h1>User Log In</h1>
        <p className="subtitle">
          Sign in to continue
        </p>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
          >
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;