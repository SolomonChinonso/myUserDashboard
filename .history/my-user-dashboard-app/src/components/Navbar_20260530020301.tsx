import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Navbar.css"

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
     <div></div>

      <span>
        {user?.username} ({user?.role})
      </span>

      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;