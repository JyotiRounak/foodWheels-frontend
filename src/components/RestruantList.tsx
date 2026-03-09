import { useEffect, useRef, useState } from "react";
import RestruantCard from "@components/RestruantCard";
import Shimmer from "@components/Shimmer";
import { useQuery } from "@tanstack/react-query";
import { fetchRestruant } from "@utils/api";
import {Restruant, FoodType} from "@utils/types";
import { useFilter } from "@utils/useFilter";
import useIntersectionObserver from "@utils/useIntersectionObserver";


export const RestruantList: React.FC = () => {
const[ratingFilter, setRatingFilter] = useState<number>(0);
const[searchTerm, setSearchTerm] = useState<string>("");
const[debounceSearchTerm, setDebounceSearchTerm] = useState<string>("");
const [foodType, setFoodType] = useState<FoodType>("All");
//const loadMoreref = useRef <HTMLDivElement |  null>(null);
const {targetRef, intersectionEntry} = useIntersectionObserver();

  const { data, isLoading, isError } = useQuery<Restruant[]>({
    queryKey:["restruant", debounceSearchTerm, ratingFilter], // unique cache key
    queryFn: () =>fetchRestruant( debounceSearchTerm, ratingFilter),
    staleTime: 1000 * 60 * 5,      // ✅ data fresh for 5 minutes
    //cacheTime: 1000 * 60 * 5,     // ✅ keep cache 30 minutes
     refetchOnMount: false,         // ✅ don't refetch on remount
  refetchOnWindowFocus: false,   // ✅ don't refetch on tab switch
  refetchOnReconnect: false,     // ✅ don't refetch on wifi change
    retry: 1,
  } );
  const {filteredData, uniqueRatings} = useFilter(data ?? [], debounceSearchTerm, ratingFilter, foodType);
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
     setDebounceSearchTerm(searchTerm);
    }, 300)
    return () => clearTimeout(timer);
  }, [searchTerm]);

  

  // conditonal rendering 
  if(isError) return <div>Error in fetching data</div>;

   console.log("Fetched restaurants:", data);
  return isLoading ? (<Shimmer/>) : (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters Section */}
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select value={ratingFilter} onChange={(e)=> setRatingFilter(Number(e.target.value))} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium">
          <option value="0">All Ratings</option>
          {uniqueRatings?.map((rating: Restruant) => (
            <option key={rating.info.id} value={rating.info.avgRating}>Ratings {rating.info.avgRating}+</option>
          ))
          }
        </select>
        <div className="flex items-center gap-4">

          <button
          aria-label="toogle food type"
  onClick={() => setFoodType(foodType === "veg" ? "All" : "veg")}
  className={`w-20 h-8 flex items-center rounded-full p-1 transition duration-300 ${
    foodType === "veg" ? "bg-green-600" : foodType === "All" ? "bg-gray-600" : "bg-red-600"
  }`}
>
  <div
    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ${
      foodType === "veg" ? "translate-x-0" : foodType === "All" ? "translate-x-0" : "translate-x-12"
    }`}
  />
</button>

<p className="mt-2 text-sm font-medium">
  {foodType === "veg" ? "Veg" : ""}
</p>

        </div>
        <input 
          type="text"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          placeholder="🔍 Search for Restaurant..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
        />
      </div>

      {/* Cards Grid */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData?.map((restrunants: Restruant) => (
          <RestruantCard
            key={restrunants.info.id}
            image={restrunants.info.cloudinaryImageId}
            avgRating={restrunants.info.avgRating}
            title={restrunants.info.name}
            costForTwo={restrunants.info.costForTwo}
            sla={restrunants.info.sla?.slaString}
            description={restrunants.info.cuisines.join(", ")}
          />
        ))}
      </div>
      <div ref={targetRef} className="h-10 flex justify-center items-center">
           Loading more...
      </div>

      {/* No Results Message */}
      {filteredData && filteredData.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-500 font-medium">
            No restaurants found 😔
          </p>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
};
