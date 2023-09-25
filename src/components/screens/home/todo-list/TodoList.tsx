import s from './todo-list.module.scss'
import { ITodoItem } from '@/interfaces/todo-item'
import { FC } from 'react'
import TodoListItem from './todo-list-item/TodoListItem'
import { useTodoList } from '@/hooks/useTodoList'

const TodoList: FC = () => {
	const { todoList } = useTodoList()

	console.log(todoList)

	return (
		<ul>
			{todoList.length ? (
				todoList.map(item => (
					<TodoListItem
						key={item.id}
						id={item.id}
						title={item.title}
						completed={item.completed}
						createdAt={item.createdAt}
					/>
				))
			) : (
				<p className={s.no__results}>Add Your Tasks</p>
			)}
		</ul>
	)
}

export default TodoList
