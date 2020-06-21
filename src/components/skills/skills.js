import React from 'react';
import java from '../../assets/java.svg';
import csharp from '../../assets/csharp.svg';
import python from '../../assets/python.svg';
import javascript from '../../assets/javascript.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import node from '../../assets/node.svg';
import sql from '../../assets/sql.svg';
import git from '../../assets/git.svg';

import './skills.css';

//https://icongr.am/devicon

export default class Skills extends React.Component{
	render() {
		const skills = [java, csharp, python, javascript, html, css, node, sql, git]
		return skills.map( (skill, key) => 
			  <img className="skill-icon" alt="skill" key={key} src={skill} />
		);
	}
}
