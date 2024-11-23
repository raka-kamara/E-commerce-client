import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import axios from "axios";
import { app } from "../firebase-config/firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios.post(`https://gadget-shop-server-three.vercel.app/authentication`, {
          email: currentUser.email,
        }).then((data)=>{
          if(data.data){
            localStorage.setItem("access-token", data?.data?.token);
            setLoading(false);
          }
        });
      }
      else{
        localStorage.removeItem("access-token");
        setLoading(false);
      }

    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    CreateUser,
    Login,
    Logout,
    GoogleLogin,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
