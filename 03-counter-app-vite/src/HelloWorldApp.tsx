import React from 'react'

interface HelloWorldProps {
	message?: string;
}

export const HelloWorldApp: React.FC<HelloWorldProps> = ({ message = "hola peluca" }) => (
	<div>{message}</div>
)
