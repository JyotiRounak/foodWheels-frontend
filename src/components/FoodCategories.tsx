import React, { useState,useEffect } from 'react';
import {RESTRUANT_API, IMAGE_API} from '@utils/constant';
import { Category } from '@utils/types';

const FoodCategories: React.FC= () => {
const[heading, setHeading] = useState<string>("");
const[categories, setCategories] = useState<Category[]>([]);
const[activeIndex, setActiveIndex] = useState<number>(0);
 const fetchCategories = async()=>{
    const response = await fetch(RESTRUANT_API);
    const jsonData = await response.json();
    
  console.log("Full API 👉", jsonData);

  const categoryCard = jsonData?.data?.cards?.find(
    (card: any) => card?.card?.card?.imageGridCards
  );

  if (!categoryCard) return;

  setHeading(categoryCard.card.card.header.title);
  setCategories(categoryCard.card.card.imageGridCards.info);
 }
 useEffect(()=>{
    fetchCategories();
 }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 relative">

    <h2 className="text-3xl font-bold mb-8">
      {heading}
    </h2>

    <div className="absolute right-6 top-12 flex gap-3">
      <button 
      aria-label="previous category"
      onClick={()=> setActiveIndex((prev)=>prev > 0 ? prev-1 : 0)}
      className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200 transition">
        ←
      </button>
      <button 
      aria-label="next category"
      onClick={()=> setActiveIndex((prev)=>prev < categories.length - 1 ? prev +1 : prev)}
      className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200 transition">
        →
      </button>
    </div>

    <div className="flex gap-12 overflow-x-auto scrollbar-hide">

      {categories.map((category: Category, index: number)=>{
        const isActive = index === activeIndex;
        return (
            <div 
            key={category.id}
            onClick={()=> setActiveIndex(index)}
             className={`flex flex-col items-center min-w-[120px] cursor-pointer transition duration-300
        ${isActive ? "scale-110" : "hover:scale-105"}
      `}>
        <img 
        src={IMAGE_API + category.imageId} 
        alt={category.action.text}
        className={`w-28 h-28 object-contain mb-3 transition
          ${isActive ? "ring-2 ring-black rounded-full" : ""}
        `} />
        <p  className={`text-lg transition
          ${isActive ? "text-black font-semibold" : "text-gray-500"}
        `}>{category.action.text}</p>
      </div>
        )
      })}
    </div>

  </div>

  )
}

export default FoodCategories