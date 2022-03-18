import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/titres/TitreH1";
import banderole from "../../../assets/images/banderole.png";
import logo from "../../../assets/images/logo.png";

export default class Accueil extends Component {
  componentDidMount(){
    document.title="Parc d'animaux myZoo";
  }
  render() {
    return (
      <>
       <img className='img-fluid' src={banderole} alt="banderole de myZoo"/>
      <TitreH1>Venez visiter le parc MyZoo!!</TitreH1>
     <div className='container'>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet quasi doloribus veniam exercitationem? 
        Non odio deleniti eius magnam, 
        magni nesciunt maxime quaerat perspiciatis hic numquam suscipit saepe eligendi animi unde.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet quasi doloribus veniam exercitationem? 
        Non odio deleniti eius magnam, 
        magni nesciunt maxime quaerat perspiciatis hic numquam suscipit saepe eligendi animi unde.
      </p>
      <div className='row no-gutters align-items-center'>
        <div className='col-12 col-md-6'>
          <img src={logo} alt="logo" className='img-fluid'/>
        </div>
        <div className='col-12 col-md-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet quasi doloribus veniam exercitationem? 
        Non odio deleniti eius magnam, 
        magni nesciunt maxime quaerat perspiciatis hic numquam suscipit saepe eligendi animi unde.
        </div>
        <div className='col-12 col-md-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet quasi doloribus veniam exercitationem? 
        Non odio deleniti eius magnam, 
        magni nesciunt maxime quaerat perspiciatis hic numquam suscipit saepe eligendi animi unde.
        </div>
        <div className='col-12 col-md-6'>
          <img src={logo} alt="logo" className='img-fluid'/>
        </div>
      </div>
     </div>
      </>
    )
  }
}
