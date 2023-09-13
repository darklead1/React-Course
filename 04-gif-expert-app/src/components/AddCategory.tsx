import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

interface MyComponentProps {
  onNewCategory: () => void; 
}

export const AddCategory: FC<MyComponentProps> = () => {


const [inputValue, setInputValue] = useState<string>('');

	const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		// console.log(target.value)
		setInputValue(target.value);
	}
	
	const onSubmit = ( event : React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(inputValue)
	}

	return (
		<form onSubmit={(event) => onSubmit(event)}>

			<input type="text"
			placeholder="Buscar Gif"
			value={inputValue}
			onChange={handleInputChange}
			/>
			</form>
	)
	}
