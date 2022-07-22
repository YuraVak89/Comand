import "./style.css"

const ProdCard = ({prod}) => {

   console.log(prod, "prodCard")
  return (
      <div className="prod-card">
         <div className="prod-image"><img src={prod.imgUrl} alt='???' className="image"/></div>
         <div className="prod-info">
            <div className="prod-rice">{prod.price} hrn</div>
            <button className="prod-butt">add</button>
         </div>
      </div>
    
  )
}

export default ProdCard