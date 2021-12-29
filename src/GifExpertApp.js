import React, {useState} from 'react'
import AddCategorias from './components/AddCategorias';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	//  const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categorias, setCategorias] = useState(['One Punch']);
	

	// const handleAdd = () => {
	// 	// setCategorias([... categorias, 'HunterXHunter']);
	// 	setCategorias(cats => [... cats, 'HunterXHunter']);
	// }
	return (
		<>
		<h2>GifExpertApp</h2>	
		<hr></hr>
		<AddCategorias setCategorias={setCategorias}/>
		{/* <button onClick={handleAdd}>Agregar Categoria</button> */}
		<ol>
			{
				categorias.map(categoria => (
					<GifGrid 
					key={categoria}
					categoria={categoria} 
					
					/>
			))
			}
		</ol>
		</>
	)
}
// categorias.map(categoria => {
// 	return (
// 		<li key={categoria}>{categoria}</li>
// 	)
// })