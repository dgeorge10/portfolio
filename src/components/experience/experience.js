import React from 'react';

import './experience.css';


export default class Experience extends React.Component{

	render() {
	   	const description = this.props.description;
	   	const descriptionItems = description.map((item, key) => 
			<li key={key}>{item}</li>
		);
		return(
		  	<div className="experience">
				<h4>{this.props.name}</h4>
				<p id="job-title">{this.props.title}</p><p>{this.props.dates}</p>
		   		<ul id="job-description">{descriptionItems}</ul>
		   	</div>
		)
	}
}
