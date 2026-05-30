import { useAuth } from "../hooks/useAuth";

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

import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const {
    user,
    login,
    logout,
  } = useAuth();

  return (
    <div>
      <h1>
        Welcome{" "}
        {user?.name || "Guest"}
      </h1>

      <button
        onClick={() =>
          login({
            id: 1,
            name: "Chinonso",
            email:
              "chinonso@gmail.com",
          })
        }
      >
        Login
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;