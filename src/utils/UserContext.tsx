
import {createContext } from "react";
interface ContextProps {
    loggInUser: string;
}
const UserContext = createContext<ContextProps>({
    loggInUser: "Default User"
});

export const UserProvider = ({children}: {children: React.ReactNode})=>{
    const loggInUser = "Jyoti"
    return (
     <UserContext.Provider value= {{loggInUser}}>
    {children}
  </UserContext.Provider>
);
    
};


export default UserContext;