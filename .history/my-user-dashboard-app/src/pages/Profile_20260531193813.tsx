import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <h1>Profile</h1>

      <div className="welcome-box">
      <h2>Name: {user?.username}</h2>
      <p>Role: {user?.role}</p></div>
      </div>
    </div>
  );
};

export default Profile;