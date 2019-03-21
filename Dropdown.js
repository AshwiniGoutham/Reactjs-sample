import React from 'react'
import { Select } from './Select';

class DropDown extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            defaultSelectedState:'',
            stateslist:['Karnataka','Maharastra','TamilNadu'],
            citieslist: { "Karnataka" : ["Bangalore","Mysore"],
            "Maharastra" : ["Pune","Mumbai"],
            "TamilNadu" : ["Chennai"] },
            loadCityForSelectedState:[]
           
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState(newStateSelected){
        let selectedStateCities = this.state.citieslist[newStateSelected]
        this.setState({
            defaultSelectedState:newStateSelected,
           loadCityForSelectedState:selectedStateCities
        });    
    }

    render(){
        return  (
        <div>
            <Select stateslist={this.state.stateslist} onChange={this.updateState} citieslist={this.state.loadCityForSelectedState}/>
        </div>
        )
        
    }
}

export default DropDown;
