import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './intro.css';

export default class Introduction extends React.Component {
	render () {
	  return (
			<div id="intro">
				<Container>
				  <Row>
					<Col>
						<div id="profile-pic-container">
						   <img id="profile-pic" src="img/me.jpg" alt="personality pic"/> 	
						</div>
					</Col>
					<Col>
						<div id="i-am-a-container">
							<h1 id="i-am-a"><strong>I am a developer.</strong></h1>
							<br/>
							<h3 id="mission">lil baby statement.</h3>
						</div>
					</Col>
				  </Row>
				</Container>
			</div>
	  	)
	};
}
