import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './AddText.css'
const AddText = props => {
	const initialFormState = { id: [], num: '', prop: '', typ: '', prix: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
    <div className="container si">
		<div className="row">
		<div class="col-md-5">
			<label class="s">N° Matricule</label>
			<input class="i" type="text" name="num" value={user.num} onChange={handleInputChange} />
			<br/>
			<label class="s">Propriétaire&nbsp;</label>
			<input class="i" type="text" name="prop" value={user.prop} onChange={handleInputChange} />
		</div>
		<div className="col-md-5">
			<label class="s">Réparation</label>
			<input class="i autre" type="text" name="typ" id="pa" value={user.typ} onChange={handleInputChange} />
			<br/>
			<label class="s px">Prix</label>
			<input class="i autre" type="text" name="prix" id="pa" value={user.prix} onChange={handleInputChange} />
            <label>Ar</label>
			<div id="sis" class="naf"></div>
		</div>
		<div className="col-md-2">
			<button class="btn btn-primary b" onClick={(event => {
				event.preventDefault()
				if (!user.num || !user.typ) return

				if (!isNaN(user.prix)) {
					document.getElementById("sis").innerHTML=""
				props.addUser(user)
				props.setCount(props.count+1)
				setUser(initialFormState)
				} else {document.getElementById("sis").innerHTML="Entrer un nombre"}
			})}>Ajouter</button>
		</div>
		</div>
    </div>
	)
}

export default AddText
