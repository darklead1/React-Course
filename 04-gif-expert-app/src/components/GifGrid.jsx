import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
	const [images, setimages] = useState([])

	const showImageDescription = ({ title = '', id = '' }) =>
	(<div className='card-grid'>
		<div className='card' key={id}>
		<p>{title}</p>
		<img src={`https://media.giphy.com/media/${id}/giphy.gif`} alt={title} />
		</div>
	</div>)
	
	const getImages = async () => setimages(await getGifs(category));

	useEffect(() => { getImages() }, [])

	const renderImagesList = () => images.map(showImageDescription)

	return (
		<>
			<h2>The Gif API gives me {images.length} items.</h2>
			<h3>{category}</h3> 
			
				{renderImagesList()}
			
			
		</>

	)
}


// GifGrid.propTypes = {
// 	category: PropTypes.string.isRequired
// }