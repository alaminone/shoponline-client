import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import globalAuth from '../Firebase.config';


const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const loginUserWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(globalAuth, googleProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(globalAuth, githubProvider);
  };

  const profileUpdate = (name, photoUrl) => {
    return updateProfile(globalAuth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const info = {
    createUserWithEmail,
    loginUserWithEmail,
    user,
    loading,
    profileUpdate,
    logOut,
    googleLogin,
    githubLogin,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
