import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { AuthProvider } from "./context/AuthProvider";
import { AuthProvider } from "./context/AuthProvider";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />

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
      </Routes>
    </>
  );
}

export default App;