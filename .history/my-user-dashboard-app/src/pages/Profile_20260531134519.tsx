import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Profile</h1>

      <p>Name: {user?.username}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default Profile;