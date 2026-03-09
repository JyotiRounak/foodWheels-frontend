import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useRestruntMenu } from "@hooks/useRestruantMenu";

const RestruantMenu:React.FC = () => {
 const {resId} = useParams();
 const resInfo = useRestruntMenu(Number(resId));
 console.log("res", resId)
  
  
  return resInfo.length === 0 ?
   <Shimmer/> :(
    <>
    {resInfo.map((item: any)=>{
        return (
            <div key={item.info?.id} className="flex justify-between border-b py-6">

      {/* LEFT SIDE */}
      <div className="w-9/12 pr-6">

        {/* veg icon */}
        <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center mb-2">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        </div>

        {/* title */}
        <h3 className="text-lg font-semibold text-gray-800">
          {item.info?.name}
        </h3>

        {/* price */}
        <p className="text-gray-800 font-medium mt-1">
          ₹{item.info?.costForTwo / 100} for two
          <span className="text-green-700 text-sm ml-2">
            60% OFF USE TRYNEW
          </span>
        </p>

        {/* rating */}
        <p className="text-green-700 text-sm mt-1">
          ⭐ {item.info?.avgRating} ({item.info?.totalRatings})
        </p>

        {/* description */}
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          {item.info.description}
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative w-32 h-28">

        {/* <img
          src={IMG_URL + imageId}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        /> */}

        {/* ADD button */}
        <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border shadow px-6 py-1 rounded-md text-sm text-green-600 font-semibold">
          ADD
        </button>
      </div>

    </div>

        )
    }
      
    )}
    </>

)
}

export default RestruantMenu