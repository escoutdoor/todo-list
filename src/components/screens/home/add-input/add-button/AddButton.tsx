import s from './add-button.module.scss'
import { FC } from 'react'

interface IAddButton {
	addToTodoList: () => void
	disabled: boolean
}

const AddButton: FC<IAddButton> = ({ addToTodoList, disabled }) => {
	return (
		<button
			onClick={() => !disabled && addToTodoList()}
			disabled={disabled}
			className={disabled ? `${s.button} ${s.disabled}` : s.button}
		>
			Add
		</button>
	)
}

export default AddButton
