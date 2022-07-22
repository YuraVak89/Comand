import {Routes, Route} from "react-router-dom"
import Main from './comp/main/Main';
import Header from './comp/header/Header';
import ShopCard from './comp/shopCard/ShopCard';
import Page404 from './comp/Page404'
import Dessert from "./comp/product/Dessert";
import Drink from "./comp/product/Drink";
import Burger from "./comp/product/Burger";
import History from "./comp/history/History";
import './App.css';

const App = () => {
  return (
    <div className='topWrapper'>
      <div>{<Header />}</div>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/shopcard" element={<ShopCard />}/>
      <Route path='/dessert' element={<Dessert />}/>
      <Route path='/drink' element={<Drink />}/>
      <Route path='/burger' element={<Burger />}/>
      <Route path='/history' element={<History />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
    </div>
  )
}

export default App;
