

import { useContext } from "react";
import { AppContext } from "../../Authprovider/Authprovider";






const useAuthcontext = () => {
    const context = useContext(AppContext);
      return context;
};

export default useAuthcontext;