import React, { Component } from 'react';
import NavBar from '../../components/UI/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Accueil from "../../containers/site/accueil/Accueil";
import Error from "../../components/Error";

export default class Site extends Component {
  render() {
    return (
        <>
            <NavBar/>
            <Routes>
              
              <Route path="/" element={<Accueil/>}/>
              <Route path="/contact" element={<h1>Contact</h1>}/>
              <Route path="*" element={<Error type="404">La page n'existe pas</Error>}/>
              
            </Routes>
           
      </>
    )
  }
}
