import { ITodoItem } from '@/interfaces/todo-item'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState: ITodoItem[] = []

const todoSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		addToList(state, action: PayloadAction<ITodoItem>) {
			state.push({
				id: action.payload.id,
				title: action.payload.title,
				completed: action.payload.completed,
				createdAt: action.payload.createdAt,
			})
		},
		toggleComplete(state, action: PayloadAction<{ id: string }>) {
			const toggledTodo = state.find(todo => todo.id === action.payload.id)
			if (toggledTodo) {
				toggledTodo.completed = !toggledTodo.completed
			} else {
				return
			}
		},
		updateTodo(state, action: PayloadAction<{ id: string; title: string }>) {
			const todo = state.find(todo => todo.id === action.payload.id)

			const isExists = state.some(todo => todo.title === action.payload.title)

			if (todo && !isExists) {
				todo.title = action.payload.title
			}
		},
		removeTodo(state, action: PayloadAction<{ id: string }>) {
			const isExists = state.some(r => r.id === action.payload.id)
			if (isExists) {
				const index = state.findIndex(item => item.id === action.payload.id)
				if (index !== -1) {
					state.splice(index, 1)
				}
			}
		},
	},
})

export { todoSlice }

export default todoSlice.reducer
