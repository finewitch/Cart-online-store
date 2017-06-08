import React from 'react';
 
class ItemFrame extends React.Component {
  render () {

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
    
  
}
 
export default ItemFrame;
