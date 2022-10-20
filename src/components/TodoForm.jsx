import React, { Component } from 'react'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
        this.formSubmit = this.formSubmit.bind(this)
        this.todoForm = this.todoForm.bind(this)
    }

    todoForm(e) {
        this.setState({
            todo: e.target.value
        })
    }

    formSubmit(e) {
        e.preventDefault()
        console.log(e.target.value)
        this.props.submitTodo(this.state)
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor=""></label>
                    <input type="text"
                        value={this.state.todo}
                        id="todoItem" 
                        name="todoItem"
                        placeholder="Enter new todo"
                        onChange={this.todoForm}
                    />
                    <button  type="submit" >Submit</button>
                </form>
                <h1>{this.state.todoItem}</h1>
            </div>
        )
    }
}

export default TodoForm;
