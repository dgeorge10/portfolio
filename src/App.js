import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/loading/loading.js';

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

			<body className="App-body">
				Hello I am Dennis George	
			</body>


		 }
		 </div>
	  )
	};
}

export default App;
