import { useAuth } from "../hooks/useAuth";
import "./L"

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile</h1>

      <p>Name: {user?.username}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default Profile;