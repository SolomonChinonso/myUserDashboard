import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <h1>Dashboard</h1>

      <div className="dashboard-card">
       <div className="intro">
         <h3>Welcome, {user?.username}</h3>
       </div>
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
      </div>
    </div>
  );
};

export default Dashboard;
