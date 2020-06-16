import React from 'react';
import './App.css';
import Loading from './components/loading/loading.js';
import Fade from 'react-reveal/Fade';

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
			<Fade bottom>
			   <div id="content">
				  Welcome
			   </div>
			</Fade>
	     }
		 </div>
	  )
	};
}

export default App;
