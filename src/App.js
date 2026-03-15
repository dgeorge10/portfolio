import React from 'react';
import './App.css';
import Loading from './components/loading/loading.js';
import Introduction from './components/intro/intro.js';
import Skills from './components/skills/skills.js';
import Experience from './components/experience/experience.js';

import Slide from 'react-reveal/Slide';
import { Container, Row, Col } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import github_link from './assets/github-link.svg';
import twitter_link from './assets/twitter-link.svg';
import linkedin_link from './assets/linkedin-link.svg';
import riven from './assets/riven.jpg';

class App extends React.Component {
	constructor(props){
	   super(props);
	   this.state = {
		  loading:true
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
						I was an honors student at Drexel University that majored in Computer Science.
            I took 20 credits a term to finish the 5 year program in only 4.
						<br />
						<br />
						I grew up in South Jersey, about 10 minutes from the beach. As soon as I
						could open my eyes, my parents had me on the beach. I wanted to go to a
						school that was far enough away so that I had to move out, but also close
						enough for me to take quick trips home whenever I wanted. Drexel met this
						requirement, and had an added bonus of having Computer Science in its own
						college instead of being with Arts & Sciences.
						<br />
						<br />
						Ever since, I have been in love with Philly. I connect with the grit, the passion, the realness. 
            I got married in Philly in 2025, and now live in Fishtown.
						<br />
            A few fun facts about me:
				  	</p>
					 <ul>
						   <li>I can solve a Rubik's cube in less than 60 seconds.</li>
						   <li>I have been playing coed 7v7 soccer on a team called the Thunder Ducks for the past 4 years.</li>
						   <li>I can cook a mean cheesesteak. I used to make the best cheesesteaks on the Ocean City Boardwalk. This is where I met my beautiful wife, Kirstin</li>
						   <li>I have a 4.5 year old Australian Shepherd named Riven. He smiles when he is happy.</li>

							<img src={riven} alt="riven" style={{width: "400px", height:"auto"}}/>
						   <li>I was at the <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=FKcSEGnCID8">Harper! The swing of his life!</a> game in 2022.</li>
						   <li>I witnessed the Ritz Carlton awning collapse in 2017 when the Eagles won their first Super Bowl.</li>
						   <li>If I could choose to be any part of a salad, it would be the crouton.</li>
					 </ul>
				</section>

				<section id="skills-section">
					<h1 className="section-header">skills</h1>	
					<Skills />	
        <p>and more ...</p>
				</section>
				
				<section id="awards-section">
					<h1 className="section-header">awards</h1>	
          <p>While I was in college, I did some fun projects & won some fun awards!</p>
       <br />
					<div>
						<h2>Philly Codefest 2020</h2>
						<ul id="awards-list">
							<li>Philly Codefest 2020 Student team Award</li>
							<li>American Water Volunteer App - Predicting Water Usage needs based on the weather</li>
			 				<li><a target="_blank" rel="noopener noreferrer"  href="https://devpost.com/software/watery-doing-in-philly">Check it out!</a></li>
			 			</ul>
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
								dates="September 2021 - Present"
								title="Full Stack Developer on Corporate Applications"
								description={
								   ["Lead developer for the firm’s next-generation research platform, designing and implementing core infrastructure used by research and traders.",
  "Build full stack applications with hundreds of daily users globally that translate complex research data into intuitive interfaces used by traders and researchers for decision-making.",
  "Collaborated with trading desks, research analysts, and technical teams to build internal tools supporting business workflows and decision processes.",
  "Develop machine learning pipelines to automatically categorize complex datasets, incorporating user feedback for continuous improvement.",
  "Develop systems that ingest real-time news from external vendors and deliver it to traders and researchers, supporting rapid analysis and decision-making."
								   ]}/>

					<Experience name="Susquehanna International Group, LLC" 
								dates="September 2018 - April 2019"
								title="Full Stack Developer on Corporate Applications"
								description={
								   ["Used the ASP.NET MVC framework to create and maintain intranet web apps used by corporate employees across the firm worldwide",
								   "Used SQL Server tables, views, linked servers, and stored procedures in order to populate the front end",
								   "Used the Kendo ASP.NET MVC framework in order to populate grids, tables, dropdownlists",
								   "Migrate multiple apps from SIG intranet to Azure Cloud",
								   "Created C# console apps to automate data updates across multiple apps",
								   "Created a windows service to monitor an Outlook Mailbox for synchronizing work assignments across platforms (Jira - Azure)",
								   "Updated a program that scraped CAD diagrams to populate a map that displays employees, conference rooms, and points of interests for each floor in the firm"
								   ]}/>


					<Experience name="Susquehanna International Group, LLC" 
								dates="September 2019 - April 2020"
								title="Software Developer on Instruments"
								description={["Created applications that process large amounts of external client reference data and transform it into high quality database centered sets to be used by internal clients",
								"Added schema changes to internal tables so the firm could begin trading new Canadian Options",
								"Added API endpoint for other teams in the firm to create OTC Options in the database",
								"Rewrote an application which replaced multiple $10,000 computers. Multiple teams relied on the accuracy of this data for their production environment",
								"Worked with multiple downstream teams in order to figure out project requirements"]}/>

					<Experience name="Drexel University" 
								dates="April 2019 - Present"
								title="Teaching Assistant"
								description={[
								   "Assist students in a core Sophomore year computer science course",
								   "Write auto grading scripts to assist in the grading process",
								   "Assist students with their individual freshman design projects",
								   "Have office hours where students can receive individualized help",
								   "Shepherd groups in a lab section to ensure they are completing required tasks"
								]}/>
				</section>
				
				<section id="projects-section">
					<h1 className="section-header">college projects</h1>	
					<div id="project-timeline">
					<VerticalTimeline>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="December 2020"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">Watery doing in Philly</h3>
						   <h4 className="vertical-timeline-element-subtitle">Side Project</h4>
						   <ul>
								<li>All-in-one water consumption dashboard that leverages a novel IoT hardware solution that can easily be placed on water outlets to visualize water usage and compete against friends in water reduction.</li>
						   </ul>
						   <a href="http://github.com/dgeorge10/codefest-2020">
							<img className="github-link" src={github_link} alt="github"/>
						   </a>
						</VerticalTimelineElement>


						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="March 2020"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">MNIST Canvas</h3>
						   <h4 className="vertical-timeline-element-subtitle">Side Project</h4>
						   <ul>
								<li>Trained a basic KNN classifyer to the MNIST handwritten numbers dataset</li>	
								<li>Added a UI on so that a user can test out the model by drawing a number on a canvas</li>
						   </ul>
						   <a href="http://github.com/dgeorge10/mnist">
							<img className="github-link" src={github_link} alt="github"/>
						   </a>
						</VerticalTimelineElement>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="May 2019"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">GimmeShelter</h3>
						   <h4 className="vertical-timeline-element-subtitle">Codefest Project</h4>
						   <ul>
								<li>Created a service for the homeless community of Philly</li>	
								<li>Developed fully functional front-end website using HTML, JQuery, CSS, and JavaScript that allowed users to see schedules for local homeless shelters and food banks
								</li>	
								<li>Developed a Node.JS API to communicate with our MySQL database that stored user and shelter/food bank information
								</li>
								<li>
								Created a Python SMS gateway to be able to send/receive texts using the Google Voice and Twilio APIs
								</li>
								<li>
								Used basic language processing to be able to analyze incoming texts from users.	
								</li>
						   </ul>
						   <a href="http://github.com/dgeorge10/codefest-2019">
							<img className="github-link" src={github_link} alt="github"/>
						   </a>
						   
						</VerticalTimelineElement>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="January 2019"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">Super Chat</h3>
						   <h4 className="vertical-timeline-element-subtitle">Side Project</h4>
						   <ul>
								<li>Created a chat room web application using Sockets.io</li>
						   </ul>
						   <a href="http://github.com/dgeorge10/chat">
							<img className="github-link" src={github_link} alt="github"/>
						   </a>
						</VerticalTimelineElement>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="June 2018"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">Baked Up Miami</h3>
						   <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
						   <ul>
								<li>Develoed the Baked Up Miami website to create an easier user experience</li>
								<li>Improved the Baked Up Miami brand</li>
								<li>Incorporated analytical tools to track revenue and manage the progress or orders</li>
								<li>Integrated Firebase, Calendar API, and Instagram API to create orginizational business tools.</li>
								<li>Increased sales and received <strong>9.8K unique visitors and over 200K hits over one year</strong></li>
						   </ul>
						   <a href="http://github.com/mattognibene/cupcakes">
							<img className="github-link" src={github_link} alt="github"/>
						   </a>
						</VerticalTimelineElement>

						<VerticalTimelineElement
						   className="vertical-timeline-element--work"
						   contentStyle={{ background: '#B15353', color: '#fff' }}
						   contentArrowStyle={{ borderRight: '7px solid #B15353' }}
						   date="May 2018"
						   iconStyle={{ background: '#B15353', color: '#fff' }}
						>
						   <h3 className="vertical-timeline-element-title">TravelTimeToGo</h3>
						   <h4 className="vertical-timeline-element-subtitle">Codefest Project</h4>
						   <ul>
								<li>Used the Twitter, Uber, and Lyft APIs to develop a fully functional Twitter bot that displays the cheapest service and offers direct ordering
								</li>
						   </ul>
						   <a href="http://github.com/dgeorge10/codefest-2018">
							<img className="github-link" src={github_link} alt="github"/>
						   </a>
						</VerticalTimelineElement>


					</VerticalTimeline>
					</div>
				</section>

				<section id="contact-section">
					<h1 className="section-header">contact me</h1>	
					<Container>
						<Row>
							<Col lg="6">
							  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
							  
								 <a href="mailto:djg365@drexel.edu"><p id="email">dennisgeorge10@gmail.com</p></a>
							</Col>
						   <Col lg="6">
			 				<div style={{paddingTop: "10px"}}>
							  <a href="https://github.com/dgeorge10">
								 <img className="contact-icon" id="contact-icon" alt="github" src={github_link} />
							  </a>
							  <a href="https://www.linkedin.com/in/dennis-george-34aa4415a/">
								 <img className="contact-icon" alt="linkedin" src={linkedin_link} />
							  </a>
			 				</div>
						   </Col>
						</Row>
					</Container>
				</section>
				

			</div>
		 }
		 </div>
	  )
	};
}

export default App;
