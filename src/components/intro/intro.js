import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './intro.css';

export default class Introduction extends React.Component {
	render () {
	  return (
			<div id="intro">
				<Container fluid>
				  <Row>
					<Col lg="6">
						<div id="profile-pic-container">
						   <img id="profile-pic" src="img/me.jpg" alt="personality pic"/> 	
						</div>
					</Col>
					<Col lg="6">
						<div id="i-am-a-container">
							<h1 id="i-am-a"><strong>I am a developer.</strong></h1>
							<br/>
							<h6 id="mission">Committed to collaborative problem solving, elegant design, and creating a quality product.</h6>
						</div>
					</Col>
				  </Row>
				</Container>
			</div>
	  	)
	};
}
