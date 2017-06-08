import React from 'react';
 
class ShowMore extends React.Component {
  render () {
    return <button className="btn btn-default btn-block" id="show_more" onClick={this.props.onButtonClick}> Show more...</button>;
  }
}
 
export default ShowMore;
