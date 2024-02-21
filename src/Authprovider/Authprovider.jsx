import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


import usePublicApi from "../hook/publicApi/usePublicApi";
import { app } from "../Firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const Authprovider = ({ children }) => {
    const axiosopenApi = usePublicApi()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth , provider)
      };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        
            
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosopenApi])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logInWithGoogle,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;