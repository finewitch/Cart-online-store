import React from 'react';
// import Buttons from './buttons';
import Item from './item.jsx';


class App extends React.Component {
  render() {
    return (
    	<div className="wrapper">
			<div id="root">
					<Item />
			</div>
        </div>
    )
  }
}
export default App;