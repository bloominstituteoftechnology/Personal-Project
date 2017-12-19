import React, { Component } from 'react'; 

class GoogleMapsclassComponentIteratingState extends Component {
    constructor() {
        super()
        this.state = {
            locations: ['sf', 'nyc', 'dallas', 'la', 'miami'];
            newLocation
   };
}

handleLocationInput= (event) => {
    this.setState({ newLocation: event.target.value });
}

addLocation = (event) => {
  event.preventDefault(); 
  const locationList = this.state.locations;
  locationList.push(this.state.newLocation);
  this.setState({
      newLocation: '',
      Locations: locationsList
  });
}

render() {
    return (
        <div>
            {this.state.locations.map(location => <ChildComponent>}
            <form onSubmit={this.addLocations}>
               <input onChange={this.handleLocationInput} placeholder
            </form>
            </div>
    );
}
  }
export default GoogleMapsClassComponentIteratingState; 
