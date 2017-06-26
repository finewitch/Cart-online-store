import React from 'react';
import Button from'./item_btn_frame.jsx';

class CartButton extends React.Component{
  render(){
      return <Button label="" icon="remove" className="btn btn-in-fav" onClick={()=> this.props.removeFromCart(this.props.item)}/>    
  }
}
export default CartButton;