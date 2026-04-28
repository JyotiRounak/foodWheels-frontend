import { useEffect, useState } from "react";
import { Restruant } from "@utils/types";
export const useRestruntMenu = (resId: number) => {
   const[resInfo, setResInfo] = useState<Restruant[]>([]);
   const fetchMenu = async () => {
  try {
    // Call your backend proxy instead of Swiggy directly
    const response = await fetch(`http://localhost:5000/api/menu/${resId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonData = await response.json();
    setResInfo(jsonData.data || []);
  } catch (err) {
    console.error("Fetch error:", err);
  }
};

  useEffect(()=>{
     fetchMenu();
  }, []);
    return resInfo;
}