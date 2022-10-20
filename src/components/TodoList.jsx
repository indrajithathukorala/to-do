import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: [{ todo: "asdas" }, { todo: "sdasdas" }, { todo: "vvvvv" }]
        }

        this.addNewTodo = this.addNewTodo.bind(this)
    }

    add() {
        console.log('add')
    }

    delete() {
        console.log('delete')
    }

    addNewTodo(newTodo){
       
        this.setState({
            todo: [...this.state.todo, newTodo]
        })
    }

    render() {

        const todo = this.state.todo.map((todo, index) => (
            <Todo key={index} todo={todo.todo} />
        ))

        return (
            <div>
                <ul>
                    {todo}
                    <TodoForm submitTodo={this.addNewTodo} />
                </ul>
            </div>
        )
    }
}

export default TodoList;
