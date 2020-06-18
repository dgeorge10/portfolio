import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

import './loading.css'

export default class Loading extends React.Component{
   render(){
	  return (
		 <div id="loadingChild">
		 	<p><strong>Hi, I'm Dennis :)</strong></p>
		 	<center>
		 		<BounceLoader color={"#B15353"} />
		 	</center>
		 </div>
	  );
   }
}

