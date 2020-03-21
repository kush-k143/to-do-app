import React, { Component } from 'react'

export default class Search extends Component {

    filterUpdate() {
        const val = this.myValue.value
        
       this.props.filterUpdate(val)
    }
    render() {

      
        return (
            <div>
            <h3 className="text-capitalize text-center">
                   todo list
               </h3>
            <input type="text"
            ref = { (value) => 
            { 
                this.myValue = value
            }}
                 className="form-control text-capitalize"
                  onChange={this.filterUpdate.bind(this)} 
                  placeholder="Search..." />
            </div>
        )
    }
}
