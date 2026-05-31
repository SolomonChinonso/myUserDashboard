import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      div.card
    </div>
  );
};

export default Profile;