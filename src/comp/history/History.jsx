import { useState } from "react"
import axios from "axios"
import './style.css'

const History = () => {
  const[email, setEmail] = useState('')
  const[error, setError] = useState(false);

  const allShoppers = async () => {
    
    const res = await axios.get("http://localhost:5000/api/prod/allshoppers")
    if(res){
      localStorage.setItem("history", JSON.stringify(res.data))
      document.location.reload()
    }
  }

  const formSubmit = async () => {
    if (!email ) {
      setError(true);
      return false;
    }
    const data = {email}
    const res = await axios.post('http://localhost:5000/api/prod/shopper', data)
    
   if(res){
     setEmail('')
     localStorage.setItem("history", JSON.stringify(res.data))
   }
  }

  const clear = () => {
    localStorage.removeItem('history')
    document.location.reload()
  }

  let shpopper = JSON.parse(localStorage.getItem('history'))
  
  return (
    <div className="history-wrapper">
      <h2>History Shopper</h2>
      <div className="form-for-history">
        <div>
              {shpopper && <button className="btn-clear" onClick={clear}>clear</button>} 
          </div> 
        <form onSubmit={e => e.preventDefault()}>
          {error && !email && (
                <span className="inp-valid">Enter valid email</span>
              )}
          <div>
            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} className='search' placeholder="search for email"/>
          </div>
          <div>
            <button className="btn-history" onClick={formSubmit}>search</button>
          </div>
          <div>
            <button className="btn-all-shopper" onClick={allShoppers}>allShoppers</button>
          </div>
        </form>
      </div>
      <div>
          {shpopper && shpopper.map(elem => (
            <div key={elem._id}>
              <h2>Name: {elem.name}</h2>
              <p className="info">City: {elem.location} / Email: {elem.email} / Phone: {elem.phone} / Total: {elem.total} </p>
              <div className="info-user-hist">
                {elem.items.map((item) => (
                  <div key={item._id} className="img-his">
                  <p>{item.name} - {item.qty} x {item.price}</p>
                  <div className="box-img-history"><img src={item.imgUrl} alt="???" className="img-history"/></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default History