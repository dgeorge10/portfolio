import React from 'react';
import ReactLoading from "react-loading";

import './loading.css'

export default class Loading extends React.Component{
   render(){
	  return (
		 <div id="loadingParent"> 
		 	<div id="loadingChild">
			   <p>Welcome</p>
			   <ReactLoading type={"bubbles"} color={"blue"} />
		 	</div>
		 </div>
	  );
   }
}

