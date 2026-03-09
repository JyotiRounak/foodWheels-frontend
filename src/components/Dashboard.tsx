import Footer from "@components/Footer";
import { Header } from "@components/Header"
import { RestruantList } from "@components/RestruantList"
import FoodCategories from "./FoodCategories";

const Dashboard = () => {
  return (
    <>
         
         <FoodCategories/>
         <RestruantList/>
        </>
  )
}

export default Dashboard;