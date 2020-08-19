import React from 'react'
import TodoItem from './TodoItem'


function TodoList(props)  {
   
    
        const TodoList = props.filteredItems.map ((item) => {
            return (
               <TodoItem key={item.id} 
                           title={item.title}
                           handleDelete={ () => props.handleDelete (item.id)}
                           handleEdit={ () => props.handleEdit (item.id)}
                    /> 
            )
        })




        return (
          
           <ul className="list-group my-4">
          
               
               {TodoList}
               <button onClick= {props.clearList}
               type = "button" className = "btn btn-danger btn-block text-capitalize mt-5">
                   clear list
               </button>

               
           </ul>
        )
    }
export default TodoList