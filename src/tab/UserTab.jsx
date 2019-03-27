
import React, { useState } from 'react'
//import "./table.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './UserTab.css'

const UserTab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                = props => (
<div class="pas">
	<div className="container navig">
	<div className="row">
		<div className="col-md-3 bout">
			<a href="#fidelity" className="btn btn-primary" onClick={
				(e)=>{
					e.preventDefault()
					function copie(obj){
						var copie=Object.create(Object.getPrototypeOf(obj));
						var propNames=Object.getOwnPropertyNames(obj);
						propNames.forEach(function(nom){
							var desc=Object.getOwnPropertyDescriptor(obj,nom);
							Object.defineProperty(copie,nom,desc)
						})
						return copie;
					}
					
				var fidel1 = copie(props.users);
				fidel1.sort(function(a,b){return b.prix - a.prix})
				console.log(fidel1);
				if (typeof(fidel1[0])!= "undefined"){
				document.getElementById("total").innerHTML="CLIENT DU JOUR: "+fidel1[0].num.toUpperCase()+", Appartenant à "+fidel1[0].prop+" avec un prix de: "+fidel1[0].prix+" Ariary"
				} else {document.getElementById("total").innerHTML="Aucun enregistrement"}
			}
			}>Fidélité</a>
		</div>
		<div className="col-md-3 bout">
			<button className="btn btn-primary"  onClick={
					()=>{
						var total=0;
						for(let i=0;i<props.users.length;i++)
						{
							total+=parseInt(props.users[i].prix);
						}
					let a=[total]
					var nbr=new Intl.NumberFormat("es-ES");
					var pas=a.map(nbr.format);
						document.getElementById("total").innerHTML="TOTAL= "+pas+" Ariary";
					}
				}>TOTAL</button>
		</div>
		<div className="col-md-6 bout test">
			<input className="cherche" type="text" id="texte" name="input" placeholder="Entrer la numéro de véhicule"/>
			<button className="btn btn-primary cherche1" onClick={
					(e)=>{
						e.preventDefault()
						function copie(obj){
							var copie=Object.create(Object.getPrototypeOf(obj));
							var propNames=Object.getOwnPropertyNames(obj);
							propNames.forEach(function(nom){
								var desc=Object.getOwnPropertyDescriptor(obj,nom);
								Object.defineProperty(copie,nom,desc)
							})
							return copie;
						}
						
					var search = copie(props.users);
					console.log(search);
					
					for(let i=0;i<search.length;i++){
					if (document.getElementById('texte').value == search[i].num){
						var a="N° "+search[i].num.toUpperCase()
						var b=" Prop: "+search[i].prop
						var c=" Rep°: "+search[i].typ
						var d=" Prix: "+search[i].prix
						i=search.length
					} else {
						var a="Element "
						var b="recherché "
						var c="introuvable "
						var d="!"
					}
				}		document.getElementById("total").innerHTML=a+b+c+d
			}
				}>Search</button>
		</div>
	</div>
	</div>
	<div className="container">
	<div className="row"> 
	<div className="col-md-12"> 
	<table class="table table-hover container">
		<thead>
			<tr >
				<th class="bg bg-success">N°</th>
				<th class="bg bg-success">Propriétaire</th>
				<th class="bg bg-success">Réparation</th>
				<th class="bg bg-success">Prix</th>
				<th class="bg bg-success">Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr class="si">
						<td>{user.num.toUpperCase()}</td>
						<td>{user.prop[0].toUpperCase()+user.prop.split("").splice(1).join("").toLowerCase()}</td>
						<td>{user.typ}</td>
						<td>{user.prix}</td>
						<td>

	
	<button class="btn btn-success"
  onClick={() => {
		
		confirmAlert({
			customUI: ({onClose}) => {
				return (
					<form id='ID'>
					<div>
						<input name='input' placeholder={user.typ} id="e" className="modifier" /><br/>
						<div id="sss" class="r"></div>	
						<button onClick={(e) => {
							var teste=document.forms['ID'].elements['input'].value
							
								document.getElementById("sss").innerHTML=""
								user.typ=document.forms['ID'].elements['input'].value
							
								props.updateUser(user.typ,user)
								
								onClose()
							
			}} class="btn btn-primary d">ok</button>
			<button class="btn btn-primary d" onClick={() => onClose(	)}>Anuler</button>
			
					</div>
					</form>
					)
				
				}
	
			})
		}}
	
	  
	>
	  Edit
	</button>
	</td>
					</tr>
				))
			) : (
				<tr>
				
				</tr>
			)}
		</tbody>
	</table>
	</div>
	</div>
	</div>
	<div className="container"><p className="row ss"><span id="total">&nbsp;&nbsp;</span></p></div>
	<div><center><div id="fidelite"></div></center></div>
</div>
)

export default UserTab