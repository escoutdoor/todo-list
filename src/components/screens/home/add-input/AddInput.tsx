import { useActions } from '@/hooks/useActions'
import s from './add-input.module.scss'
import { useTodoList } from '@/hooks/useTodoList'
import { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import { useQueryParams } from '@/hooks/useQueryParams'
import AddButton from './add-button/AddButton'
import { v4 } from 'uuid'

const AddInput: FC = () => {
	const { todoList } = useTodoList()
	const { addToList } = useActions()

	const updateQueryParams = useQueryParams()

	const searchParams = useSearchParams()

	const text = searchParams.get('q') || ''

	const disabled = todoList.some(i => i.title === text) || !text

	const handleEnter = (value: React.KeyboardEvent<HTMLInputElement>) => {
		if (value.key === 'Enter' && !disabled) {
			addToTodoList()
		}
	}

	const addToTodoList = () => {
		addToList({
			id: v4(),
			title: text,
			completed: false,
			createdAt: new Date().toISOString(),
		})
		updateQueryParams('q', '')
	}

	return (
		<div className={s.input__wrapper}>
			<input
				onKeyDown={handleEnter}
				className={s.input}
				onChange={e => {
					updateQueryParams('q', e.target.value.toString())
				}}
				value={text}
				type="text"
				placeholder="Enter your task title here"
			/>
			<AddButton addToTodoList={addToTodoList} disabled={disabled} />
		</div>
	)
}

export default AddInput
