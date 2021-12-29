import React, {useState} from 'react'
import PropTypes from 'prop-types';


function AddCategorias({setCategorias}) {
	const [inputValue, setinputValue] = useState('');

	const handleInputChange = (e) => {
		setinputValue(e.target.value);
	}	

	const handleSubmit = (e) => {
		e.preventDefault();

		if(inputValue.trim().length > 2){
			setCategorias(cats => [inputValue, ...cats]);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
			type="text"
			placeholder="Agregar Categoria"
			value={inputValue}
			onChange={handleInputChange} 
			
			/>	
		</form>
	)
}

export default AddCategorias

AddCategorias.prototypes = {
	setCategorias: PropTypes.func.isRequired
}

