import React from 'react';  
import Button from'./item_btn_frame.jsx';
var ItemDetails = (props) =>(
		<div className="item-details-box">
			<div className="price-label">{props.data.price}$</div>
			<div>{props.data.extraInfo}</div>
			<Button label="" icon="shopping-cart" className="btn btn-success" onClick = {()=>props.addToCart(props.data)}/>
		</div>
		)
export default ItemDetails;