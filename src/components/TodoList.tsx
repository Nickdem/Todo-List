import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => { 
    if (todos.length === 0) {
        return <p style={{textAlign: 'center'}}>Нет ни одного дела!</p>
    }   

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.stopPropagation()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <div onClick={() => onToggle(todo.id)}>
                            <span>
                                {todo.title}
                            </span>
                            <button onClick={event => removeHandler(event, todo.id)}>
                                Удалить
                            </button>
                        </div>
                    </li>
                )
            })}            
        </ul>
    )
}