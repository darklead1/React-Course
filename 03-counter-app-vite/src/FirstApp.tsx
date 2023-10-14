import React from 'react'

interface FirstAppProps {
	title: string;
	subTitle?: string;
	name?: string;
}

export const FirstApp: React.FC<FirstAppProps> = ({ title, subTitle, name }) => (
	<>
		<h1>{title}</h1>
		<p>{subTitle}</p>
		<p>{name}</p>
	</>
)