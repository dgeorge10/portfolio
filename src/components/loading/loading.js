import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

import './loading.css'

export default class Loading extends React.Component{
   render(){
	  return (
		 <div id="loadingChild">
		 	<p>Hi, I'm Dennis :)</p>
		 	<center>
		 		<BounceLoader color={"#B15353"} />
		 	</center>
		 </div>
	  );
   }
}

