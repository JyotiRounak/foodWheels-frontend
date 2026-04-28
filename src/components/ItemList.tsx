import { useDispatch } from "react-redux"
import { addToCart } from "store/cartSlice";

interface ItemListProps {
  items: any[];
  cartItems?: any[];
}

const ItemList = ({items}: ItemListProps) => {
  const dispatch = useDispatch();

  const handleAddTocart = (items: any)=>{
    dispatch(addToCart(items.card.info));
  }
  return (
    <div className="flex justify-between items-start border-b pb-6 mb-6">
          {  items.map((item, index) => (
        <div key={index} className="flex-1 pr-4">
          
          {/* Item name */}
          <h2 className="text-lg font-semibold text-gray-900">{item?.card?.info?.name}</h2>

           <div className="mt-1 flex items-center gap-2">
          <span className="text-gray-500 text-sm">${item?.card?.info?.price/100}</span>
        </div>

          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          {item?.card?.info?.description}
        </p>

          {/* Add button */}
          <button
            className="ml-2 px-3 py-1 bg-orange-700 text-white rounded hover:bg-orange-900 shadow-md transition duration-300"
            onClick={() => handleAddTocart(item)}   // ✅ pass item
          >
            Add
          </button>

        </div>
      ))}
              
    </div>
  )
}

export default ItemList