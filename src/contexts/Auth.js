import React, {useContext, useState} from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = async ({userName, userPassword}) => {
    // login logic
    setIsLogged(true);
  };

  const handleSignup = async ({userName, userEmail, userPassword}) => {
    // signup logic
    setIsLogged(true);
  };

  const handleLogout = async () => {
    // logout logic
    setIsLogged(false);
  };

  const value = {
    handleLogin,
    handleSignup,
    isLogged,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
