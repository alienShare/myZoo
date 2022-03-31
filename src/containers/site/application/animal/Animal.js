import React from "react";
import Bouton from "../../../../components/UI/bouton/Bouton";

const Animal=(props)=> {
return (
<>
<div className="card mb-3">
  <h3 className="card-header">{props.id} - {props.nom}</h3>
  <div className="card-body">
    <h5 className="card-title">{props.description}</h5>
  
  </div>
  <div className="photo-container">
    <img className="img-fluid h-100 text-center"src={props.image} alt={props.nom}/>
    </div>

  <div className="card-body">
    <h3>Famille</h3>
    <Bouton 
      typeBtn="btn-dark" 
      clic = {()=>props.filtreFamille(props.famille.idFamille)}
      >{props.famille.libelleFamille.toUpperCase()}
    </Bouton>
    <div>{props.famille.descriptionFamille}</div>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
  <div className="card-footer text-muted">

    {
       
    props.continents && props.continents.map((aContinent)=>{
        let colorBtn = "";
        colorBtn = props.btnColor(aContinent.idContinent);
        console.log("lacouleur : ", colorBtn);

        return <Bouton 
        key={aContinent.idContinent} 
        typeBtn={colorBtn} 
        css='m-1'
        clic={()=>props.filtreContinent(aContinent.idContinent)}
        >
          {aContinent.libelleContinent} 
        </Bouton>
        
    })
    }
  </div>
</div>

</>

)
}
export default Animal