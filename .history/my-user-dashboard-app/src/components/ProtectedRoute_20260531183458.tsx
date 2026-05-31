import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute = ({
  children,
  adminOnly,
}: Props) => {
  const { user } = useAuth();

  
  if (!user) {
    return <Navigate to="/login" />;
  }

  
  if (adminOnly && user.role !== "Admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;