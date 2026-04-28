import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useRestruntMenu } from "@hooks/useRestruantMenu";
import RestruantCategory from "./RestruantCategory";
import { useState } from "react";

type Category = {
  card: {
    card: {
      title: string;
      itemCards: any[];
    };
  };
};

const RestruantMenu:React.FC = () => {
 const {resId} = useParams();
 const resInfo = useRestruntMenu(Number(resId));
 const[openIndex, setOpenIndex] = useState<number | null>(null);
 const {name, costForTwo, cuisines, avgRating, totalRatingsString} = resInfo?.cards?.[2]?.card?.card?.info || {};
 const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

let category = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item: any)=> item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 
  console.log("item", itemCards);
  
  return (
    <div className="space-y-2 max-w-2xl mx-auto">

      {/* Rating + price row */}
      <div className="flex items-center text-gray-800 font-semibold text-lg">

            {/* Category link */}
      <div
        className="text-orange-500 font-semibold text-lg"
      >
        {name}
      </div>

        {/* Rating badge */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white text-sm mr-2">
          ★
        </div>

        {/* Rating text */}
        <span className="mr-2">{avgRating} ({totalRatingsString})</span>

        {/* Dot */}
        <span className="mx-2 text-gray-400">•</span>

        {/* Price */}
        <span>{costForTwo}</span>
      </div>
       {category?.map((item:Category, index: number)=> (  
              <RestruantCategory 
              key={item.card?.card?.title ?? index} 
              title={item.card?.card?.title} 
              items = {item.card?.card?.itemCards || []}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              />
     ) )} 
     
  

    </div>

    
)
}

export default RestruantMenu;