import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import './style.css'

const ShopCard = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState(false);
  const [mess, setMess] = useState(false)
  
  let dataCard = []
  let suma = 0

  if (localStorage.getItem('prod')){
    dataCard = JSON.parse(localStorage.getItem('prod'))

    let total = dataCard.map(elem => {
      return elem.qty * elem.price
    })
    suma = total.reduce((t, e) => t + e)  
  };

  let plus = (id) => {
    let resIndex = dataCard.findIndex(
      (elem) => elem._id === id
    );
    if (resIndex >= 0) {
      dataCard[resIndex].qty += 1;
    }
    localStorage.setItem('prod', JSON.stringify(dataCard))
    document.location.reload()
  }

  let minus = (id) => {
    let resIndex = dataCard.findIndex(
      (elem) => elem._id === id
    );
    if (dataCard[resIndex].qty > 1) {
      dataCard[resIndex].qty -= 1;
    }
    localStorage.setItem('prod', JSON.stringify(dataCard))
    document.location.reload()
  }

  
  const formSubmit = async () => {
    if (!email || !phone || !location || !name) {
      setError(true);
      return false;
    }
    
    const data = {name, email, phone, location, total: suma, dataCard}
    const res = await axios.post('http://localhost:5000/api/prod/korzina', data)
    
    if(res){
      setName('')
      setEmail('')
      setPhone('')
      setLocation('')
      setMess(res.data)
      localStorage.clear("prod")
    }
  }
  
  const delItems = () => {
    localStorage.removeItem("prod")
    document.location.reload()
  }
  
  return (
    <>
    <div className='shop-card-wrapper'>
      <div className='user-info'>
        <h3>shopper info</h3>
        <div className='form-div'>
          <form onSubmit={(e)=> e.preventDefault()}>
            {error && !name && (
                <span className="inp-valid">Enter valid name</span>
              )}
            <div className='form-div-inp'>
              <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            {error && !email && (
                <span className="inp-valid">Enter valid email</span>
              )}
            <div className='form-div-inp'>
              <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            {error && !location && (
                <span className="inp-valid">Enter valid location</span>
              )}
            <div className='form-div-inp'>
              <input type="text" placeholder='locatin' value={location} onChange={e => setLocation(e.target.value)}/>
            </div>
            {error && !phone && (
                <span className="inp-valid">Enter valid phone</span>
              )}
            <div className='form-div-inp'>
              <input type="text" placeholder='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
            </div>
          </form>
        </div>
      </div>
      <div className='all-prod'>
        {dataCard == 0 && <Link to='/burger'>
          <p>Click here!!! Go to shop</p></Link>}
        {dataCard && dataCard.map((elem) => (
          <div key={elem._id} className='wrapper-card'>
            <div><img src={elem.imgUrl} alt="???" className='image-card'/></div>
            <div className='card-info'>
              <div>{elem.price} * {elem.qty} </div>
              <div>
                <div onClick={() => plus(elem._id)}><span className='plus-minus'>plus</span></div>
                <div onClick={() => minus(elem._id)}><span className='plus-minus'>minus</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {mess && <div>
      <span className='response'>{mess.message}</span>
      </div>}
    <div className='block-shop-card'>
      {dataCard.length > 0 && <>
      <div className='total'>Total: {suma}</div>
        <button className='shop-card-butt' type="submit" onClick={formSubmit}
        >Submit</button>
        <button className='shop-reset' onClick={delItems}
        >X</button></>}
    </div>
    </>
  )
}

export default ShopCard