import { ChangeEvent, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import React from 'react'


export const GifExpertApp = () => {
	
	const [categories, setCategories] = useState(["One Punch", "Dragon Ball"])

	const onAddCategory = () => { 
		setCategories(["Hello world", ...categories,])
  };
	
	return (
		<>
			<h1>GifExpertApp</h1>
			
			<AddCategory/>

			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{categories.map(category => { return <li key={category}> {category}</li> })}
				{ }
			</ol>
		</>
	)
	
}
