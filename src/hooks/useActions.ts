import { todoSlice } from '@/store/todo.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

const rootActions = {
	...todoSlice.actions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
