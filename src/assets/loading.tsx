import { ReactNode } from 'react'

type LoadingProps = {
	isLoading: boolean
	children: ReactNode
}

export function Loading({ isLoading, children }: LoadingProps) {
	return isLoading ? <span>Carregando...</span> : children
}
