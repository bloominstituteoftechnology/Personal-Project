import React, { Component } from 'react'; 

class classGoogleMapUpdatingState extends Component {
    constructor() {
        super()
        this.state = {
            aLocation: a
   };
}

increment = () => 
//this.state.aLocation++;
let n = this.state.aLocation;
this.setState( { aLocation: ++n } );
}

decrement = <> == {
//this.state.aLocation--; 
this.setState( { aLocation: --n} );

}
render() {
    return [
        <div>'OurLocation: $(this.state.OurLocation</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>+</button>
        </div>
};
}
}

export default ClassGoogleMapUpdatingState; 