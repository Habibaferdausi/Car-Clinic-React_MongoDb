import React from "react";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivetRouter;