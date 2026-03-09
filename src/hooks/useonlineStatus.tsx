import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
   // check if online
   const[onlineStatus, setOnlineStatus] = useState(navigator.onLine);


   useEffect(()=>{
      const handleOnline = () => {
      setOnlineStatus(true);
    };

    const handleOffline = () => {
      setOnlineStatus(false);
    };
      window.addEventListener("offline", handleOffline);
      window.addEventListener("online", handleOnline);

   return () =>{
    window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
   }
   }, []);

    return onlineStatus;
}

export default useOnlineStatus;