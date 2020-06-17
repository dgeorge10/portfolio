import React from 'react';
import './App.css';
import Loading from './components/loading/loading.js';
import Introduction from './components/intro/intro.js'

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
			<Introduction></Introduction>	
		 }
		 </div>
	  )
	};
}

export default App;
