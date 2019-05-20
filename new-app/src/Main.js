import React from 'react';
import TodoItem from './TodoItem';
import TodosData from './TodosData';

import './style.css';

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            todos:TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const Updatedtodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return{
                todos: Updatedtodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
            handleChange={this.handleChange} />)
        return(
            <main>
                <div className="todo-list">
                {todoItems}
                </div>
                
            </main>
        );
    }

    
}

export default Main