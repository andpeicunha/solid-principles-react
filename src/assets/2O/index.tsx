import { Loading } from '../loading'

type ButtonProps = {
	label: string
}

export function Button({ label }: ButtonProps) {
	return (
		<Loading isLoading={false}>
			<button>{label}</button>
		</Loading>
	)
}
