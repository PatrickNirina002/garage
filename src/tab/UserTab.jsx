
import React, { useState } from 'react'
//import "./table.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './UserTab.css'

const UserTab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                = props => (
<div class="pas">
	<div className="container navig" id="boutons">
	<div className="row">
		
	<div className="col-md-4"></div>
		<div className="col-md-8 bout test">
			<input className="cherche" type="text" id="texte" name="input" placeholder="Entrer la numéro de véhicule"/>
			<button className="btn btn-success cherche1" onClick={
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
						var d=" Prix: "+search[i].prix+" Ariary"
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
		<thead className="thead-dark">
			<tr id="entet">
				<th className="center">N°</th>
				<th className="center">Propriétaire</th>
				<th className="center">Réparation</th>
				<th className="center">Prix</th>
				<th className="center">Actions</th>
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
						<input name='input' placeholder="entrer la type de réparation" id="e" className="modifier" /><br/>
						<input name='input1' placeholder="entrer la prix" id="e" className="modifier" /><br/>
						<div id="sss" class="r"></div>	
						<button onClick={(e) => {
							var teste=document.forms['ID'].elements['input1'].value
							if(isNaN(teste) || teste=="")
							{
								e.preventDefault()
								document.getElementById("sss").innerHTML="Entrer un nombre"
						
							}else{
								document.getElementById("sss").innerHTML=""
								user.typ=document.forms['ID'].elements['input'].value
								user.prix=document.forms['ID'].elements['input1'].value
								props.updateUser(user.typ,user)
								
								onClose()}
							
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
	<div id="boutons1">
		<div class = "row">
		<div className="col-md-6 bout"></div>
		<div className="col-md-6 bout1">
			<a href="#fidelity" className="btn btn-warning" onClick={
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
			}>Fidelity</a>&nbsp;
			<button className="btn btn-danger"  onClick={
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
				}>TOTAL</button>&nbsp;
				<button className="btn btn-dark" onClick={() => {
					document.getElementById("boutons").style.display = "none";
					document.getElementById("boutons1").style.display = "none";
					document.getElementById("formulaire").style.display = "none";
					window.print();
					document.getElementById("boutons").style.display = "block";
					document.getElementById("boutons1").style.display = "block";
					document.getElementById("formulaire").style.display = "block";
				}}>Print</button>
		</div>
		</div>
	</div>
	</div>
	</div>
	</div>
	<div className="container"><p className="row ss"><span id="total">&nbsp;&nbsp;</span></p></div>
	<div><center><div id="fidelite"></div></center></div>
</div>
)

export default UserTab