import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}

      <Routes>
        {/* Redirect homepage to login */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute adminOnly>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
}

export default App;