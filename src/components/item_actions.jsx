import React from 'react';
import Button from './item_btn_frame.jsx';

export default class ItemActions extends React.Component {
    render() {
        let button = <Button label="add to favorites" icon="heart-empty" onClick={()=> this.props.addToFav(this.props.item)} />;
        for(var i = 0; i < this.props.favList.length; i++) {
            if(this.props.item == this.props.favList[i]) {
                button = <Button label="" icon="heart" className="btn btn-fav" onClick={()=> this.props.addToFav(this.props.item)} />;
            }
        }
        return(
            <div className="btn-group pull-right">
				    <Button label="more details" />
				    {button}
				  </div>
        )
    }
}
