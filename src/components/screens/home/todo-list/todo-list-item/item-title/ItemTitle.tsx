import s from './item-title.module.scss'
import { FC, useRef, useEffect } from 'react'

interface IItemTitle {
	title: string
	active: boolean
	setActive: (value: boolean) => void
	completed: boolean
	text: string
	setText: (value: string) => void
}

const ItemTitle: FC<IItemTitle> = ({ title, active, setActive, completed, text, setText }) => {
	return (
		<div className={active ? `${s.block} ${s.active}` : s.block}>
			<h1 className={completed ? `${s.title} ${s.completed}` : s.title}>{title}</h1>
			<input autoFocus className={s.input} type="text" value={text} onChange={e => setText(e.target.value)} />
		</div>
	)
}

export default ItemTitle
