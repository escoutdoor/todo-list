import s from './todo-list-item.module.scss'
import { useActions } from '@/hooks/useActions'
import { ITodoItem } from '@/interfaces/todo-item'
import { FC, useState } from 'react'
import Actions from './actions/Actions'
import ItemTitle from './item-title/ItemTitle'

const TodoListItem: FC<ITodoItem> = ({ title, completed, createdAt, id }) => {
	const [text, setText] = useState(title)

	const [activeModify, setActiveModify] = useState(false)
	const { toggleComplete, removeTodo, updateTodo } = useActions()

	const update = () => {
		updateTodo({ id: id, title: text })
		setActiveModify(false)
	}

	return (
		<li className={s.item}>
			<ItemTitle
				title={title}
				active={activeModify}
				setActive={setActiveModify}
				completed={completed}
				text={text}
				setText={setText}
			/>
			<Actions
				activeModify={activeModify}
				setActiveModify={setActiveModify}
				update={update}
				toggle={toggleComplete}
				remove={removeTodo}
				id={id}
			/>
		</li>
	)
}

export default TodoListItem
