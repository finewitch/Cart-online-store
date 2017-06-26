import React from 'react';  

var Button = (props) =>( 
	<button className="btn btn-default" {...props}>
		{props.icon ? <span className={"glyphicon myIcon glyphicon-" + props.icon }></span> : null }
		{' '}
		{props.label}
	</button>)

export default Button;