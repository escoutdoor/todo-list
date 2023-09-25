import { sortingBar } from '@/data/sorting-bar.data'
import s from './sotring-bar.module.scss'
import { FC, useState } from 'react'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useSearchParams } from 'next/navigation'
import { BiChevronDown } from 'react-icons/bi'

const SortingBar: FC = () => {
	const updateQueryParams = useQueryParams()
	const searchParams = useSearchParams()

	const sortBy = searchParams.get('sortBy') || 'by name'

	const [active, setActive] = useState(false)

	return (
		<div className={s.bar}>
			<div onClick={() => setActive(!active)} className={s.content}>
				<h1 className={s.title}>Sort By:</h1>
				<div className={s.right}>
					<div className={s.header}>
						<h1>{sortBy}</h1>
						<BiChevronDown />
					</div>
					<ul className={active ? `${s.list} ${s.active}` : s.list} onClick={e => e.stopPropagation()}>
						{sortingBar.map(item => (
							<li
								className={item === sortBy ? `${s.list__item} ${s.active}` : s.list__item}
								onClick={() => {
									updateQueryParams('sortBy', item)
									setActive(false)
								}}
								key={item}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SortingBar
