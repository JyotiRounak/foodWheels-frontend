import { useMemo} from 'react';
import { FoodType, Restruant } from './types';
interface FilterReturn {
  filteredData: Restruant[];
  uniqueRatings: Restruant[];
}

interface filterProps{
    data: Restruant[];
    debounceSearchTerm: string;
    ratingFilter: number;
    foodType: FoodType

}
export const useFilter = (data: Restruant[], debounceSearchTerm: string, ratingFilter: number, foodType: FoodType): FilterReturn => {
    const filteredData = useMemo(()=>{
       if(!data) return [];
       return data?.filter((res)=> {
        const matchedSearch = res.info.name.toLowerCase().includes(debounceSearchTerm.toLowerCase());
        const ratingMatch = res.info.avgRating >= ratingFilter;
        const vegMatch = foodType === "All" ? true : res.info.veg === (foodType === "veg");
        return ratingMatch  && matchedSearch && vegMatch;
      });
     }, [data, debounceSearchTerm, ratingFilter, foodType]);
    
      const uniqueRatings = useMemo(()=>{
        if(!data) return [];
        const set = new Set<number>();
       return data?.filter((res) => {
        if(set.has(res.info.avgRating)) return false;
        set.add(res.info.avgRating);
        return true;
       }).sort((a,b) => b.info.avgRating - a.info.avgRating)
      }, [data]);
      return { filteredData, uniqueRatings}
}