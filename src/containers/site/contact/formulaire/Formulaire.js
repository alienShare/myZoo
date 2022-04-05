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
    onBlur={props.handleBlur} /*Pour n'afficher le message que si saisit --> mAj props.touched*/
    />
    {props.touched.nom && props.errors.nom && 
      <span style={{color: 'red'}}>{props.errors.nom}</span>}
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
  onBlur={props.handleBlur}/*mAj props.touched*/
  />
  {props.touched.mail && props.errors.mail && <span style={{color:'red'}}>{props.errors.mail}</span>}
  
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
  onBlur={props.handleBlur}/*mAj props.touched*/
  >

  </textarea>
  {props.touched.message && props.errors.message &&<span style={{color:'red'}}>{props.errors.message}</span>}
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
  nom: Yup.string()
  .min(5, "Le nom doit avoir plus de 5 caractères")
  .required("Le nom est obligatoire!"),
  mail: Yup.string()
  .email("L'email n'a pas le bon format")
  .required("L'email est obligatoire!"),
  message: Yup.string()
  .max(200, "Le message ne doit pas dépasser 200 caractères")
  .min(50, "Le message doit faire au moins 50 caractères")
}),
/* action testée */
handleSubmit: (values)=>{
    alert('message envoyé');
}

})(Formulaire)