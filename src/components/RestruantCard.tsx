import React from "react";
import {IMAGE_API} from "@utils/constant";
import { MdStars } from "react-icons/md";

interface CardProps{
    image: string;
    title: string;
    avgRating: number;
    description: string;
    costForTwo: string;
    sla?: string;
}

const RestruantCard: React.FC<CardProps> = ({ image, title, avgRating, description, sla, costForTwo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition duration-300 transform hover:scale-105">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img src={IMAGE_API +image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center gap-1">
            <span className="bg-green-700 text-white text-sm font-bold px-2 py-1 rounded">{avgRating}</span>
            <MdStars color="#22c55e" size={18}/>
          </div>
          {sla && <span className="text-sm text-gray-600 font-medium">{sla}</span>}
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RestruantCard);
