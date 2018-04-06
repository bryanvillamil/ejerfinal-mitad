import React, {Component} from 'react';
import { Link} from 'react-router-dom';


class Back extends Component {

	onAtras() {
		console.log(8);
	};

  	render() {
	    return (
      		<button 
      			className="btn atras" 
      			type="button" 
      			onClick={this.onAtras} >
      		</button>
	    )
  	}
}

export default Back;



