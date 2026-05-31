import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Navbar.css"
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <div className="logo"><h2>LO</h2><h2>GO</h2></div>
     <div className="links">
       <Link to="/dashboard">Dashboard </Link>
      <Link to="/profile">Profile</Link>

      {user?.role === "Admin" && (
        <Link to="/settings">Settings</Link>
      )}
     </div>

     <div className="profile">
       <span>
         <FaUserCircle size={35} />
         {user?.role}: {user?.username}
      </span>

      <button onClick={handleLogout}>
        Logout
      </button>
     </div>
    </nav>
  );
};

export default Navbar;