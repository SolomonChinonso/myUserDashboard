import { useAuth } from "../hooks/useAuth";
import "./global.css"

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="card">
        
      </div>
    </div>
  );
};

export default Dashboard;

// import { useAuth } from "../hooks/useAuth";
// import "./global.css";

// const Dashboard = () => {
//   const { user } = useAuth();

//   return (
//     <div className="dashboard-page">
//       <div className="dashboard-card">
//         <h1>Dashboard</h1>

//         <div className="welcome-box">
//           <h2>Welcome, {user?.username} 👋</h2>
//           <p>Role: {user?.role}</p>
//         </div>

//         {user?.role === "Admin" && (
//           <div className="role-panel admin-panel">
//             <h2>Admin Controls</h2>
//             <p>
//               Manage users, permissions, settings,
//               and system configurations.
//             </p>
//           </div>
//         )}

//         {user?.role === "Editor" && (
//           <div className="role-panel editor-panel">
//             <h2>Editor Panel</h2>
//             <p>
//               Create, edit, and manage content
//               across the platform.
//             </p>
//           </div>
//         )}

//         {user?.role === "Viewer" && (
//           <div className="role-panel viewer-panel">
//             <h2>Read Only Reports</h2>
//             <p>
//               View reports and analytics without
//               editing privileges.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
