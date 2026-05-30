import { useAuth } from "../hooks/useAuth";
import ""

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      {user?.role === "Admin" && (
        <div>
          <h2>Admin Controls</h2>
        </div>
      )}

      {user?.role === "Editor" && (
        <div>
          <h2>Editor Panel</h2>
        </div>
      )}

      {user?.role === "Viewer" && (
        <div>
          <h2>Read Only Reports</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

