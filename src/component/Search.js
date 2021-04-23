import React, { Component } from 'react'

export default class Search extends Component {

 
    render() {
      
        const {handleInput} = this.props
        return (
            <div>
            <h3 className="text-capitalize text-center">
                   todo list
               </h3>
            <input type="text"
              className="form-control text-capitalize"
                  onChange={handleInput} 
                  placeholder="Search..." />
            </div>
        )
    }
}
