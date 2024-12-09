import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase_init";

export const contextProvider = createContext(null)
const AuthContext = ({ children }) => {
  const [user, setuser] = useState(null)
  const [loader,setLoader]=useState(true)


  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, provider)

  }

  const createuser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginuser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateuser=(updateuserprofile)=>{
    return updateProfile(auth.currentUser,updateuserprofile)
  }

  const logout = () => {
    setLoader(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setuser(currentUser)
        setLoader(false)
      }
      else {
        setuser(null)
        setLoader(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authinfo = { googleLogin, createuser, loginuser,user, logout,loader,updateuser }
  return (
    <div>
      <contextProvider.Provider value={authinfo}>
        {
          children
        }
      </contextProvider.Provider>
    </div>
  );
};

export default AuthContext;