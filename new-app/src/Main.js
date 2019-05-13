import React from 'react';
import TodoItem from './TodoItem';
import TodosData from './TodosData';

import './style.css';

function Main(){

    const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item}/>)
    return(
        <main>
            <div className="todo-list">
            {todoItems}
            </div>
            
        </main>
    );
}

export default Main