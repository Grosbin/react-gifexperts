// import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({categoria}) => {

	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	getGifs(categoria).then(setImages);
	// }, [categoria]);

	// const [count, setCount] = useState(0)

	const {data:images, loading} = useFetchGifs(categoria);	


	// getGifs();
	return (
		<>
		<h3>{categoria}</h3>
		{loading && <p className="animate__animated animate__heartBeat">Cargando...</p>}
		<div className="card-grid card animate__animated animate__fadeIn">
			{
				images.map( img => (
					<GifGridItem 
					key={img.id}
					{...img} 
					/>
					))
				}
		</div>
		</>
	)
}
