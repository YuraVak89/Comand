import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import SidebarName from "../sidebarname/SidebarName"
import axios from 'axios'
import "./style.css"

const Burger = () => {
  const [dataBurger, setDataBurger] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/prod/burger`);
    setDataBurger(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let addBtn = (id) => {
    let product = []
    if (localStorage.getItem('prod')){
      product = JSON.parse(localStorage.getItem('prod'))
      };
    const res = dataBurger.find(elem => elem._id === id)
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
    {dataBurger && dataBurger.map((elem) => {
      return (<ProductCard key={elem._id} prod={elem} addBtn={addBtn}/>)
    })}
    </div>
   </div>
  )
}

export default Burger