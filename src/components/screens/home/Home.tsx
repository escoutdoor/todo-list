import s from './home.module.scss'
import { NextPage } from 'next'
import TodoList from './todo-list/TodoList'
import AddInput from './add-input/AddInput'
import SortingBar from './sotring-bar/SortingBar'

const Home: NextPage = () => {
	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<div className={s.content}>
					<h1 className={s.title}>Todo List</h1>
					<div className={s.list__block}>
						<AddInput />
						<SortingBar />
						<TodoList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
