import PropTypes from 'prop-types';

// const newMessage = {
// 	Nombre: 'Juan',
// 	Apellido: 'Perez',
// 	Edad: 30
// }

export const FirstApp = ({ title, subTitle, name}) => {
	

	return (
		<>
			<h1>{title}</h1>
			{/* <code>{ JSON.stringify(newMessage)}</code> */}
			<p>{subTitle}</p>
			<p>{name }</p>
		</>
	)
}


FirstApp.propTypes = {
	title: PropTypes.string
}

FirstApp.defaultProps = {
	title: 'No hay titulo',
	subTitle: 'No hay subtitulo',
	name: 'Felipe'

}