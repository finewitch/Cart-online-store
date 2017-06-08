import React from 'react';


import ShowMore  from './show_moreBtn.jsx';
// import ItemFrame  from './item_frame.jsx';

var Button = (props) => ( 
  <button className="btn btn-default"  {...props}>
  {props.icon ? <span className={ "glyphicon glyphicon-" + props.icon }></span> :  null }
  {' '}
  {props.label}
  </button> )

var CartButton = (props) => ( 
    (props.in_cart? 
    <Button className="btn btn-danger btn-block" icon="remove" label ="Remove" /> :
    <Button className="btn btn-success btn-block" icon="shopping-cart" label ="Add" /> 

    )
  )

var ItemActions = () =>(
  <div className="btn-group pull-right">
    <Button label="More details" />
    <FavButton />
  </div>
        )

var ItemPic = ({element}) => (<img src={element.thumbnailUrl} alt ="cover"/>)

var ItemPrice = ({data}) => (
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <th>price</th>
                  <td>{data.price} $</td>
                </tr>
                <tr>
                  <th>more info...</th>
                  <td>{data.extraInfo}</td>
                </tr>
              </tbody>
            </table>
            <CartButton in_cart ={false}/>
          </div>
          )
var CartButtonBuy = (props) =>(
  <CartButton in_cart ={true}/>
  )
var ItemFrame = (props) => {
  var element = props.data;
  var details = props.details;

  return (
        <div className="media">
          <div className="media-left">
              <ItemPic element = {element} />
          </div>
          <div className="media-body">
            <h3>Product {element.name}</h3>
            <p>{element.description}</p>
                  
              {props.children}
          </div>
          {details?
            <div className="media-right">
            {<props.details {...props}/>}
            </div>: null}
        </div>
        )
}
  // var page = 1;
  // var perpage = 3;
class FavButton extends React.Component{
  constructor(){
    super();
    this.state = {
      active: this.active
    }
  }
  setInActive(){
    this.setState({
      active : false
    }) 
  }
  setActive(){
    this.setState({
      active : true
    }) 
  }
  render(){
    return(this.state.active?
      <Button label="Remove from favorites" icon="star" onClick={this.setInActive.bind(this)}/>:
      <Button label="Add to favorites" icon="star-empty" onClick={this.setActive.bind(this)}/>
      )
  }
}
class Item extends React.Component {
constructor(){
    super();
    this.state = {
      page: 1,
      perpage: 3
    }
}
onButtonClick(){
  this.setState({
    page: this.state.page+1
  })
}
/*List of Items in Basket */
shoppingItemList(element){
  var count = 1
  var element = items.slice(0,count);
  return (
    <div>
    <h1>Your cart</h1>
    <hr />
    {element.map(data => 
      <ItemFrame data={data} key={data.name} details={CartButtonBuy}>
      <Button label="Move to favorites" icon="star"/>
      </ItemFrame> )}  
    </div>
  )
}
/* List of Items */
itemList(element){
  var count = this.state.page * this.state.perpage;
  var element = items.slice(0,count);
  return (
    <div>
    <h1>Items</h1>
    <hr />
    {element.map(data => 
      <ItemFrame data={data} key={data.name} details={ItemPrice}>
      <ItemActions />
      </ItemFrame>
       )}  
    </div>
    )
}
render() {
  return (
    <div> 

    { this.shoppingItemList() }
    { this.itemList() }
  
    <ShowMore onButtonClick={this.onButtonClick.bind(this)} />
    </div>
      )
    }
}
export default Item;
