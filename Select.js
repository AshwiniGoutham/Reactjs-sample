import React from 'react'


export class Select extends React.Component{
    constructor(props){
        super(props);
        this.updateState=this.updateState.bind(this);
    }
    updateState(e){
        this.props.onChange(e.target.value);
    }

   render(){
        return ( 
            <div>
               <select id="states" onChange={this.updateState}>
               <option>Select State</option>
               { 
                   this.props.stateslist.map((list,index) => 
                        <option key={index}>{list}</option>
                   ) 
               }
               </select>
              <select>
                  <option>Select Cities</option>
                  { 
                   this.props.citieslist.map((list,index) => 
                        <option key={index}>{list}</option>
                   ) 
               }
              </select>
           </div>
        )
    }
}

