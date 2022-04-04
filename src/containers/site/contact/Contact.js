
import TitreH1 from "../../../components/UI/titres/TitreH1";
import Formulaire from "./formulaire/Formulaire";

import React, { Component } from 'react';

export default class Contact extends Component {
componentDidMount(){
    document.title="Page de contact";
}
  render() {
    return (
        <>
        <TitreH1 bgColor='bg-success'>
            Contactez-nous!
        </TitreH1>
        <div className="container">
            <h2>Adresse:        </h2>
            ***
            <h2>Téléphone:        </h2>
            00 00 00 00 00
            <h2>Vous préférez nous laisser un message ?</h2>
            <Formulaire/>
        </div>
    </>
    )
  }
}

