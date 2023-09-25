import s from './actions.module.scss'
import { FC } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { BsFillTrashFill } from 'react-icons/bs'

interface IActions {
	activeModify: boolean
	setActiveModify: (value: boolean) => void
	update: () => void
	toggle: (id: { id: string }) => void
	remove: (id: { id: string }) => void
	id: string
}

const Actions: FC<IActions> = ({ activeModify, setActiveModify, update, toggle, remove, id }) => {
	return (
		<div className={s.actions}>
			<AiOutlineCheckCircle onClick={() => (activeModify ? update() : toggle({ id }))} />
			{!activeModify && (
				<>
					<BiEdit onClick={() => setActiveModify(true)} />
					<BsFillTrashFill onClick={() => remove({ id })} />
				</>
			)}
		</div>
	)
}

export default Actions
