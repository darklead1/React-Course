import React from 'react'
import { Button } from './components/Button'
import { HeaderOne } from './components/HeaderOne'

interface Props {
	value: number;
}

export const CounterApp: React.FC<Props> = ({ value }) => {
	const [counter, setCounter] = React.useState(value)

	const handleAdd = () => setCounter(counter + 1)
	const handleSubstract = () => setCounter(counter - 1)
	const handleReset = () => setCounter(value)

	return (
		<>
			<HeaderOne>CounterApp</HeaderOne>
			<h2> {counter} </h2>
			<Button onClick={handleAdd}>+1</Button>
			<Button onClick={handleSubstract}>-1</Button>
			<Button onClick={handleReset}>reset</Button>
		</>
	)

}