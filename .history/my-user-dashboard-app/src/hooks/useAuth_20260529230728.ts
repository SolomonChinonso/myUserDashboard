import { useContext } from "react";
import { AuthProvider } from "../context/AuthProvider";

export const useAuth = () => {
  const context = useContext(Auth);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};

