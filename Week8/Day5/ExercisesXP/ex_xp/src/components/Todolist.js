import React from 'react';
import './todo.css'

class Todolist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos: ['Buy some milk', 'Do my homework']
        }
    }

deleteTodo(index){ 
    this.state.todos.splice(index, 1)
    this.setState({todos: this.state.todos})
}

addTodo = (e) => {
    e.preventDefault()
    const form = e.target
    this.state.todos.push(form.elements.todo.value)
    this.setState({todos: this.state.todos})
}

noTodos() {
    if(this.state.todos.length ===0) {
       return <p className='no-todos'>You have no todos left, yay ! </p>
    } 
}

render() {
    return (
    <div className="container">
        <h1>ToDo's List</h1>

        <ul>
            {this.state.todos.map((item,index)=>{
                return <li key={index} onClick={() =>this.deleteTodo(index)}>{item}</li>
            })}
       </ul>
        {
           this.noTodos()
        }
        
        <form className="form" onSubmit={this.addTodo}>
            <label htmlFor="todo">Add a new ToDo</label> <br></br>
            <input type="text" id="todo"></input>
        </form>
    </div>

)}
}



export default Todolist

