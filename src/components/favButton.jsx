import React from 'react';
import Button from'./item_btn_frame.jsx';

class FavButton extends React.Component{
  render(){
      return <Button label="remove" icon="remove" className="btn btn-in-fav" onClick={()=> this.props.removeFromFav(this.props.item)}/>    
  }
}
export default FavButton;