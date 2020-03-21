import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
   
    
    render() {
        const {items, clearList, handleDelete ,handleEdit , filterText} = this.props
       
        const TodoList = items
        
        .filter(item => {
            return item.item.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        } )
        .map (item => {
            return (
               <TodoItem key={item.id} 
                           title={item.title}
                           handleDelete={ () => handleDelete (item.id)}
                           handleEdit={ () => handleEdit (item.id)}
                           
                               /> 
            )
        })
        return (
          
           <ul className="list-group my-4">
          
               
{TodoList}
               <button onClick={clearList} 
               type = "button" className = "btn btn-danger btn-block text-capitalize mt-5">
                   clear list
               </button>
           </ul>
        )
    }
}
