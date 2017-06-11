import React from 'react';
 
 var ItemPic = ({element}) => (<img src={element.thumbnailUrl} alt ="cover"/>);

var ItemFrame = (props) => {

  var element = props.data;
  var details = props.details;
  var removeFromFavBtn = props.removeFromFavBtn;
  return (
        <div className="media">
          <div className="media-left">
              <ItemPic element = {element} />
          </div>
          <div className="media-body">
            {removeFromFavBtn}
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
 
export default ItemFrame;
