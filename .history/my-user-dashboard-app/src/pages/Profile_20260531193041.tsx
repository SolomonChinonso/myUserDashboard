import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <h1>Profile</h1>

      <p>Name: {user?.username}</p>
      <p className="">Role: {user?.role}</p>
      </div>
    </div>
  );
};

export default Profile;