import React, { Component } from 'react'; 

class googleMaps extends Component {
    constructor() {
        super()
        this.state = {
            googleMaps: [a, b, c, d, e];
            newLocation;
   };
}

handleGoogleMapsInput= (location) => {
    this.setState({ newlocation: event.target.value });
}

addLocation = (location) => {
  location.preventDefault(); 
  const googleMap = this.state.googlemap;
  LocationList.push(this.state.newLocation);
  this.setState({
      newLocation: '',
      Location: locationList
  });
}

render() {
    return (
        <div>
            {this.state.location.map(location => <ChildComponent>}
            <form onSubmit={this.addlocation}>
               <input onChange={this.handlelocationInput} placeholder
            </form>
            </div>
    );
}
  }
export default ClassGoogleMaps;