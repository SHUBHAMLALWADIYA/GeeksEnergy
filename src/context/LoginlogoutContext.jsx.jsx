import { createContext, useState } from "react";
export const LoginlogoutContext = createContext();
const LoginlogoutContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
  
    return (
      <>
        <LoginlogoutContext.Provider value={{ login, setLogin }}>
          {children}
        </LoginlogoutContext.Provider>
      </>
    );
  };
  
  export default LoginlogoutContextProvider;