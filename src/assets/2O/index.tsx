import { Loading } from '../loading'

type ButtonProps = {
	label: string
}

export function Button({ label }: ButtonProps) {
	return (
		<Loading isLoading={false}>
			// O loading não está dentro do componente button, ele é outro componente que pode ser usado em qualquer parte do
			// sistema e também permite outras customizações, sem alterar o código do componente button
			<button>{label}</button>
		</Loading>
	)
}
