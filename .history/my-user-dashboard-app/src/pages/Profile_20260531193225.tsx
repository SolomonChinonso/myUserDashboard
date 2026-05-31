import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <h1>Profile</h1>

      div
      </div>
    </div>
  );
};

export default Profile;