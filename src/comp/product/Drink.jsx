import {useEffect, useState} from "react"
import ProductCard from "./ProductCard"
import SidebarName from "../sidebarname/SidebarName"
import axios from "axios"
import './style.css'

const Drink = () => {
  const [dataDrink, setDataDrink] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/prod/drink`);
    setDataDrink(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let addBtn = (id) => {
    let product = []
    if (localStorage.getItem('prod')){
      product = JSON.parse(localStorage.getItem('prod'))
      };
    const res = dataDrink.find(elem => elem._id === id)
    res.qty = 1
    let resIndex = product.findIndex(
      (elem) => elem._id === res._id
    );
      console.log(resIndex, 'res')
    if (resIndex < 0) {
      product.push(res)
    }
    localStorage.setItem('prod', JSON.stringify(product))
  }

  return (
    <div className='top-main'>
    <div className='sidebar'><SidebarName /></div>
    <div className="wrap-eat">
    {dataDrink && dataDrink.map((elem) => {
      return (<ProductCard key={elem._id} prod={elem} addBtn={addBtn}/>)
    })}
    </div>
   </div>
  )
}

export default Drink