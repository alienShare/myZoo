import React, { Component } from 'react';
import NavBar from '../../components/UI/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Accueil from "../../containers/site/accueil/Accueil";
import Error from "../../components/Error";
import Footer from "../../components/Footer/footer";
import Application from "../site/application/Application";
import Contact from './contact/Contact';

export default class Site extends Component {
  render() {
    return (
        <>
        <div className='site'>
            <NavBar/>
            <Routes>
              
              <Route path="/" element={<Accueil/>}/>
              <Route path="/animaux" element={<Application/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Error type="404">La page n'existe pas</Error>}/>
              <Route path="/mentionslegales" element={<h1>Mentions Légales</h1>}/>
            </Routes>
            <div className='minsite'></div>
        </div>
        
        <Footer/>
           
      </>
    )
  }
}
