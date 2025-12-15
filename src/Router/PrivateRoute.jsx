import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

import { Oval } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
