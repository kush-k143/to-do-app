import React, { Component } from 'react'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'
import Search from './component/Search'
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid'

export default class App extends Component {
 
    state = {
               items: [{
                   id : 0,
                   title : 'wake up early in the morning',
        
                      } , {
                   id : 1,
                   title : 'go to saloon',
        
                      } , {
                   id : 2,
                   title : 'wash your hands',
       
                      }],
               id : uuid(),
               item : "",
               editItem : false,
               SearchNote : ''
             }


  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({
        SearchNote : e.target.value
    })
  }

  handleChange = (e) => {
  
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      title:this.state.item
    }
    

    const updatedItems = [...this.state.items,newItem]
     this.setState({
       items:updatedItems,
       item : '',
       id: uuid(),
       editItem : false,
       
     })
  }
  clearList = () => {
    this.setState({
      items : []
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
      
      this.setState({
      items : filteredItems
      })
    //  console.log("heelo from delete", id)
  }
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => 
      item.id !== id)

      const selectedItem = this.state.items.find(item => item.id ===id)
    
          
      this.setState({
        items : filteredItems,
        item : selectedItem.title,
        editItem : true,
        id : id
      })

  }

  render() {
    
    let filteredItems = this.state.items.filter((item) => {
      return item.title.toLowerCase().includes(this.state.SearchNote.toLowerCase())
    })
    return (
      <div className="container">
        <div className="row">
          <div className="
          col-10 mx-auto col-md-8 mt-4">
           
            <Search 
              handleInput = {this.handleInput}/>
           
            <TodoList 
            items={this.state.items} 
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            filteredItems = {filteredItems}
            />
           
            <h3 className="text-capitalize text-center">
              todo input
            </h3>
           
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            />
          </div>
        </div>
      </div>
    
    )
  }
}

