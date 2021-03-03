import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

  if (todos.length === 0) return <p className="todo-list__empty">Нет ни одного дела!</p>

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.stopPropagation()
    onRemove(id)
  }

  return (
    <ul

      className="todo-list"
    >
      {todos.map(todo => {
        const classes = ['todo-list__item']
        if (todo.completed) {
          classes.push('todo-list__item--completed')
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <div className="todo-list__item-desc" onClick={() => onToggle(todo.id)}>
              <span className="todo-list__item-title">
                {todo.title}
              </span>
              <button className="todo-list__item-btn" onClick={event => removeHandler(event, todo.id)}>
                Удалить
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
