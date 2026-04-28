
import {useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ItemList from "./ItemList";

interface CategoryProps {
    title: string;
    index: number;
    openIndex: number | null;
    setOpenIndex: (index: number| null) => void;
    items: any[];
}

const RestruantCategory = ({title, index, openIndex, setOpenIndex, items}: CategoryProps) => {
 const isOpen = openIndex === index;
 //console.log("itemCrds", itemCards)
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="border-b">
          
          {/* Header */}
          <button
            className="w-full flex items-center justify-between p-5 text-left font-semibold text-lg"
            onClick={() => {
              setOpenIndex(isOpen ? null : index)
            }
          }
          >
            <span>
              {title}
            </span>

            <FaChevronDown className="text-gray-500" size={18} />
          </button>

            {/* Content */}
            {isOpen && (
                <ItemList items= {items} />
            )}
    
    </div>
    </div>
  )
}

export default RestruantCategory