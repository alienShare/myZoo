import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const Formulaire=(props)=> {
return (
<>
<form>
<div className="form-group">
    <label htmlFor="nom" className="form-label">Votre nom</label>
    <input 
    type="text" 
    className="form-control" 
    id="nom" 
    aria-describedby="nomHelp"
    /* formik */
    name="nom" 
    onChange={props.handleChange}
    value={props.values.nom}
    
    />
</div>

    <label htmlFor="mail">Votre adresse mail</label>
<div className="input-group mb-3">
  <input 
  type="text" 
  id="mail" 
  className="form-control" 
  placeholder="Username" 
  aria-label="John Doe"
  name="mail"
  onChange={props.handleChange}
  value={props.values.mail}
  />
  
</div>

<div className="input-group">
  <span className="input-group-text">Message</span>
  <textarea 
  id="message" 
  className="form-control" 
  aria-label="With textarea"
  /* formik */
  name="message"
  onChange={props.handleChange}
  value={props.values.message}
  >

  </textarea>
</div>
 
  <button type="submit" 
  className="btn btn-primary"
  onClick={props.handleSubmit}
  >Envoyer
  </button>
</form>
</>

)
}
export default withFormik({
/* éléments de formulaire vérifiés par formik */
mapPropsToValues : ()=>({
    nom: "",
    mail: "",
    message: ""

}),
/* validation schéma de saisie Yup : vérifications que l'on souhaite faire sur les champs*/
validationSchema: Yup.object().shape({

}),
/* action testée */
handleSubmit: (values)=>{
    alert('message envoyé');
}

})(Formulaire)