import React, { useRef } from 'react'
import { TodoFormProps } from '../interfaces'

export const TodoForm: React.FC<TodoFormProps> = props => {

  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (!ref.current!.value.trim()) return

    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }

  return (
    <div className="todo-form">
      <label className="todo-form__label" htmlFor="title">
        Введите название дела:
      </label>
      <input
        className="todo-form__input"
        ref={ref}
        type="text"
        id="title"
        placeholder="Поле ввода..."
        onKeyPress={keyPressHandler}
        autoComplete="off"
      />
    </div>
  )
}
