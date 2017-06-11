import React from 'react';
import ShowMore  from './show_moreBtn.jsx';
import ItemFrame  from './item_frame.jsx';
import ItemDetails from'./item_details.jsx';
import Button from'./item_actions.jsx';


//-FavoritesBtn -class//
class FavButton extends React.Component{
  constructor(){
    super();
    this.state = {
      active: this.active
    };
  }
  setInActive(){
    this.setState({
      active : true
    });
    this.props.passedState.addToFavHandler();
    console.log(this.props.passedState.stateList);
  }
  setActive(){
    this.setState({
      active : false
    });
    this.props.passedState.removeFromFavHandler();
  }
  render(){
    if(this.state.active){
      return <Button label="Remove from favorites" icon="star" className="btn btn-warning" onClick={this.setActive.bind(this)}/>  
      }else{
       return  <Button label="Add to favorites" icon="star-empty" onClick={this.setInActive.bind(this)}/>
      } 
  }
}
class RemoveFavBtn extends React.Component{
  inFavRemove(){
    console.log(this.props);
    this.props.passedMethod();
  }
  render(){
    return(
      <Button label="Remove from favorites" icon="star" className="btn btn-warning" onClick={this.inFavRemove.bind(this)}/>
      )
  }
}
var ItemActions = (props) =>(
  <div className="btn-group pull-right">
    <Button label="More details" />
    <FavButton passedState={props}/>
  </div>
        )
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
      fav_map: {}
    }
}
// componentDidMount(){
//   AppState.addListener((state) =>{
//     this.setState({
//       page: state.page,
//       list: state.element,
//       fav_list: state.fav_list
//     })
//   })
// }
onButtonClick(){
  this.setState({
    page: this.state.page+1
  })
}
addToFav(name){
  var newArray = this.state.fav_list;
  newArray.push(this.state.listOfAll[name-1]);
  this.setState({
  fav_list: newArray
  })
}
removeFromFav(name){
  console.log('removed from outside');
  let index = this.state.fav_list.findIndex((x)=>x.name === name)
  var newArray = this.state.fav_list;
  newArray.splice(index, 1)
  this.setState({
  fav_list: newArray
  })
}
FavBtn(name){
  console.log('removed from inside, element : ' + name);
  let index = this.state.fav_list.findIndex((x)=>x.name === name)
  var newArray = this.state.fav_list;
  newArray.splice(index, 1)
  this.setState({
  fav_list: newArray
})
  }

/*List of Items in Basket */
/*     // <Button label="Remove from favorites" onClick={this.setActive} icon="star"/>  */
favList(){
  return (
    <div>
    <h1>Favorites</h1>
    <hr />
    {this.state.fav_list.length == 0 ? <p className="text-center">There are no items in your favorite list.</p> : null}
    {this.state.fav_list.map(data => 
      <div>
        <ItemFrame data={data} key={data.name} details={ItemDetails}>
          <RemoveFavBtn passedMethod={()=> this.removeFromFav()}/>
        </ItemFrame>
      </div>
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
      <ItemFrame data={data} key={data.name} details={ItemDetails}>
        <ItemActions stateList={this.state.fav_list} addToFavHandler={()=>this.addToFav(data.name)} removeFromFavHandler={()=>this.removeFromFav(data.name)}/>
      </ItemFrame>
       )}
    <hr />
    </div>
    )
}
render() {
  return (
    <div> 

    { this.favList() }
    { this.itemList() }
  
    <ShowMore onButtonClick={this.onButtonClick.bind(this)} />
    </div>
      )
    }
}



