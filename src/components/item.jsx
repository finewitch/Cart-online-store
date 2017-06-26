import React from 'react';
// bottom btn to show more items
import ShowMoreItems  from './ShowMoreItems_btn.jsx';

import ItemActions  from './item_actions.jsx';

import ItemFrame  from './item_frame.jsx';

import ItemDetails from'./item_details.jsx';

import CartButton from './CartButton.jsx';

import FavButton from './favButton.jsx';

//-Item -class//
export default class Item extends React.Component {
constructor(){
  super();
    this.state = {
      page: 1,
      perpage: 3,
      count: 3,
      listOfAll : items,
      list: items.slice(0, 3),
      fav_list: [],
      cart_list: []
    };
}
//shows more items //related to button on the bottom
showMoreItems(){
  this.setState({
    page: this.state.page+1
  });
}
// adding items to favorite List
addToFav(item){
  let favList = this.state.fav_list;
  for(var i=0; i < favList.length; i++){
    if(item == favList[i]){
      alert('PRODUCT IS ALREADY IN YOUR FAVORITES LIST');
      return;
    }
  }
  //push item to favorites list
  favList.push(item);
  this.setState({
    fav_list : favList 
  });
  }
//removing from favorites
removeFromFav(item){
  let favList = this.state.fav_list;
  let itemIndex = favList.indexOf(item);
  if(itemIndex != -1){
    favList.splice(itemIndex, 1);
  }
    this.setState({
    fav_list: favList
    });
}
//adding to cart
addToCart(item) {
    let cartList = this.state.cart_list;
    //push item to favorites list
      cartList.push(item);    
      this.setState({
          cart_list: cartList
      });
    }
//removin from cart
removeFromCart(item) {
    let cartList = this.state.cart_list;
    let itemIndex = cartList.indexOf(item);
    if(itemIndex != -1) {
        cartList.splice(itemIndex, 1);
    }
    this.setState({
        cart_list: cartList
    });
}
/*List of fav items */
favList(){
  return (
    <div>
    <h1>Favorites</h1>
    <hr />
    {this.state.fav_list.length == 0 ? <p className="text-center">There are no items in your favorite list.</p> : null}
    {this.state.fav_list.map((data, i) => 
        <ItemFrame itemDesc = {data.description} data = {data} key = {i} img = {data.smallThumb}>
          <FavButton item = {data} removeFromFav = {this.removeFromFav.bind(this)}/>
        </ItemFrame>
       )}  
    </div>
  )
}
/* List of Items */
itemList(){
  this.state.count = this.state.page * this.state.perpage;
  this.state.list = items.slice(0,this.state.count);
  return (
    <div>
    <h1>Items</h1>
    <hr />
    {this.state.list.map((data) => 
      <ItemFrame itemDesc = {data.description} data = {data} key = {data.name} details = {ItemDetails} img = {data.thumbnailUrl} addToCart = {this.addToCart.bind(this)}>
        <ItemActions favList = {this.state.fav_list} state = {this.state} item = {data} addToFav = {this.addToFav.bind(this)}/>
      </ItemFrame>
       )}
    <hr />
    </div>
    )
}
/*List of item in cart */
cartList(){
  let cartList = this.state.cart_list;
  var totalPrice = 0;
  //count the price
  if(!cartList.length){
    totalPrice = 0;
  }else{
    cartList.reduce((prev,current)=>{
      totalPrice = prev + current["price"];
      return totalPrice;
    }, 0)
  }
  return (
    <div>
      <div className="cart">
        <h1>Cart</h1> 
        <hr />
        <span className="total-price">{totalPrice} $</span>
        <hr />
      </div>
   
    {this.state.cart_list.length == 0 ? <p className="text-center">There are no items in your cart.</p> : null}
    {this.state.cart_list.map((data, i) => 

        <ItemFrame data = {data} key = {i} price = {data.price} shipping = {data.extraInfo}>
          <CartButton item = {data} removeFromCart = {this.removeFromCart.bind(this)}/>
        </ItemFrame>
       )}  
    </div>
  )
}
render() {
  return (
    <div className="flex-container">
    <div className="favoritesList"> 
    { this.favList() }
    </div>
    <div className="items">
    { this.itemList() }
    <ShowMoreItems onBtnClick={this.showMoreItems.bind(this)} />
    </div>
    <div className="itemsInCart">
    { this.cartList() }
    </div>
    </div>
      )
    }
}