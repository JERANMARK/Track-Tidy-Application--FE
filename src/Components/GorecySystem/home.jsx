import Hero from "./home/hero";
import RecentProducts from "./home/recentProducts";
import Information from "./home/information";
import ProductCategories from "./home/productCategories";
import TopBrands from "./home/topBrands";
import AppHeader from './commonn/header';
import AppShop from "./shop";

function TrackGroceryHome() {
  return(  
    <div className="container">
      <AppHeader />
      
      <Hero />
     
      <Information/>
      <ProductCategories/>
      <TopBrands/>
      
      
      </div>

  )
}
export default TrackGroceryHome;