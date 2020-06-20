import React from 'react';
import { DiPython, DiJava, DiJavascript1, DiHtml5 } from "react-icons/di";
import { IconContext } from "react-icons";

import './skills.css';

export default class Skills extends React.Component{
	render() {
		return (
		   <IconContext.Provider value={{size: "64px", className:"skill-icon"}}>
			<div id="skills-icons">
				  <DiPython />
				  <DiJava />
				  <DiJavascript1 />
				  <DiHtml5 />
			</div>
		   </IconContext.Provider>
		);	
	}
}
