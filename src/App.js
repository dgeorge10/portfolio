import React from 'react';
import './App.css';
import Loading from './components/loading/loading.js';
import Introduction from './components/intro/intro.js';
import Skills from './components/skills/skills.js';
import Experience from './components/experience/experience.js';

import Slide from 'react-reveal/Slide';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class App extends React.Component {
	constructor(props){
	   super(props);
	   this.state = {
		  loading:false
	   }
	}

   	componentDidMount(){
	   setTimeout(() => {
	   	this.setState({loading:false}) 
	   }, 2000)
	}

	render () {
	  const { loading } = this.state;
	  return (
		 <div className="App">
		 {loading ? <Loading></Loading> :
			<div id="portfolio-body">
				<Slide left>
					<Introduction></Introduction>	
			   	</Slide>
				<section id="about-me-section">
					<h1 className="section-header">about me</h1>	
				  	<p className="section-body-text">
					 I am a senior at Drexel University blah blah and I play Valorant sometimes
					 even more blah blah.
				  	</p>
				</section>

				<section id="skills-section">
					<h1 className="section-header">skills</h1>	
					<Skills />	
				</section>
				
				<section id="awards-section">
					<h1 className="section-header">awards</h1>	
					<div>
					<h2>Philly Codefest 2019</h2>
					<ul id="awards-list">
						<li>Best Hack for Social Good</li>
						<li>People's Choice Award</li>
						<li>American Water Volunteer App - Give/Receive Together</li>
						<li>Google Best Use of Google Cloud Platform</li>
						<li>Comcast Low Cost Internet for Students</li>
					</ul>
					</div>
				</section>

				<section id="experiences-section">
					<h1 className="section-header">experiences</h1>
					<Experience name="Susquehanna International Group, LLC" 
								dates="September 2018 - April 2019"
								title="Software Developer"
								description={["I worked here very hard", "so did i"]}/>
					<Experience name="Drexel University" 
								dates="April 2019 - Present"
								title="Teaching Assistant"
								description={["I taught the things to many people"]}/>
				</section>
				
				<section id="projects-section">
					<h1 className="section-header">projects</h1>	
					<div id="project-timeline">
					<VerticalTimeline>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="May 2019"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">GimmeShelter</h3>
						   <h4 className="vertical-timeline-element-subtitle">Lead Developer</h4>
						   <ul>
								<li>Created a service for the homeless people of Philly</li>	
						   </ul>
						</VerticalTimelineElement>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="May 2019"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">MNIST Drawer</h3>
						   <h4 className="vertical-timeline-element-subtitle">Side Project</h4>
						   <ul>
								<li>Draw a number and it will be predicted</li>	
						   </ul>
						</VerticalTimelineElement>

					</VerticalTimeline>
					</div>
				</section>

			</div>
		 }
		 </div>
	  )
	};
}

export default App;
