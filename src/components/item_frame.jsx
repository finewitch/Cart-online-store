import React from 'react';
 
var ItemPic = ({img}) => (<img src={img} alt ="cover"/>);
var ItemFrame = (props) => {

  var item = props.data;
  var details = props.details;
  var img = props.img;
  var price = props.price;
  var shipping = props.shipping;
  var description = props.itemDesc;
  return (
        <div className="item-container">
          <div className="item-pic">
              {img?
                <ItemPic img = {img} />
              :null}
          </div>
          <div className="item-content">

            <h3>{item.name}</h3>
              {description?
            <p>{item.description}</p>
            :null}
                  
              {props.children}
          </div>
          {details?
            <div className="item-details">
              {<props.details {...props}/>}
            </div>: null}
          {price && shipping?
            <div className="item-in-cart-price">
              <div className="price-label">{price}$</div>
              <div className="shipping-label">{shipping}</div>
            </div>
          : null}
        </div>

        )
}
export default ItemFrame;
