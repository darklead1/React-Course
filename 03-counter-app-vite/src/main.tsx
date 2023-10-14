import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import "./styles.css"

const element: DocumentFragment = document.getElementById('root') as unknown as DocumentFragment;

ReactDOM.createRoot(element).render(
	<React.StrictMode>
		<CounterApp value={0} />
	</React.StrictMode>)