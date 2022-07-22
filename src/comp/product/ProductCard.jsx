import React from 'react'

const ProductCard = ({prod, addBtn}) => {

  return (
   <div className="prod-card" key={prod._id}>
      <div className="card-name">{prod.name}</div>
      <div className="prod-image"><img src={prod.imgUrl} alt='???' className="image"/></div>
      <div className="prod-info">
      <div className="prod-rice">{prod.price} hrn</div>
      <button className="prod-butt" onClick={() => addBtn(prod._id)}>add</button>
      </div>
   </div>
  )
}

export default ProductCard