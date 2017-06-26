import React from 'react';
 
class ShowMoreItems extends React.Component {
  render () {
    return <button className="btn btn-default btn-block" id="show_more" onClick={this.props.onBtnClick}>
    <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span> Show more products . . .</button>;
  }
}
 
export default ShowMoreItems;
