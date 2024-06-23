import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    
    if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-info">Loading</span>
        </div>
    }
    
    if(!user){
        return <Navigate to='/login' state={location.pathname} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;