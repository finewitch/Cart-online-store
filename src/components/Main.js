import React from 'react';
// import Buttons from './buttons';
import Item from './item.jsx';


class App extends React.Component {
  render() {
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12">
    				<div id="root">
	    					<Item />
    				</div>
    			</div>
    		</div>
        </div>
    )
  }
}
export default App;