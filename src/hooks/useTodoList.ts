import { ITodoItem } from '@/interfaces/todo-item'
import { useTypedSelector } from './useTypedSelector'
import { useSearchParams } from 'next/navigation'

export const useTodoList = () => {
	const todoList = useTypedSelector(state => state.todos)

	const searchParams = useSearchParams()

	const sortBy = searchParams.get('sortBy') || 'by name'
	// @ts-ignore
	const sortedByDate = [...todoList].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
	const sortedByName = [...todoList].sort((a, b) => a.title.localeCompare(b.title))

	return { todoList: sortBy === 'by date' ? sortedByDate : sortedByName }
}
