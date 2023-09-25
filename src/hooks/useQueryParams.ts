import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const updateQueryParams = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			let newQueryString = ''
			let newUrl = ''

			params.set(name, value)

			newQueryString = params.toString()
			newUrl = `${router.pathname}${newQueryString ? `?${newQueryString}` : ''}`

			router.push(newUrl, undefined, { shallow: true, scroll: false })
		},
		[searchParams, router]
	)

	return updateQueryParams
}
