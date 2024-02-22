import { useContext } from "react";
import { Navigate,  } from "react-router-dom";
import { AuthContext } from "./Authprovider/Authprovider";



// eslint-disable-next-line react/prop-types
const Privetroute = ({children}) => {
    const { user} = useContext(AuthContext);
    



    if (user) {
        return children;
    }
    return <Navigate to="/login" ></Navigate>
};

export default Privetroute;