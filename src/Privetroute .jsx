import { useContext } from "react";
import { Navigate,  } from "react-router-dom";
import { AuthContext } from "./Authprovider/Authprovider";



// eslint-disable-next-line react/prop-types
const Privetroute = ({children}) => {
       
        const { user, loading} = useContext(AuthContext);
    

if (loading) return <span className="loading loading-bars loading-lg"></span>

    if (user) {
        return children;
    }
    return <Navigate to="/login" ></Navigate>
};

export default Privetroute;