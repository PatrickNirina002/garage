import React, { useState } from 'react'

const Edit = props => {
	const [ user, setUser ] = useState(props.currentUser)

	const handleInputChange = event => {
		const { num, value } = event.target

		setUser({ ...user, [num]: value })
	}

	return (
		<form
			onSubmit={event => {
				
				event.preventDefault()

				props.updateUser(user.id, user)
			}}
		>
			<label>N° Matricule</label>
			<input type="text" name="num" value={user.num} onChange={handleInputChange} />
			<label>Propriétaire</label>
			<input type="text" name="prop" value={user.prop} onChange={handleInputChange} />
			<label>Type de Réparation</label>
			<input type="text" name="typ" value={user.typ} onChange={handleInputChange} />
			<label>Prix</label>
			<input type="text" name="prix" value={user.prix} onChange={handleInputChange} />
			<button>Update user</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Cancel
			</button>
		</form>
	)
}

export default Edit