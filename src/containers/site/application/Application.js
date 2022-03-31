
import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/titres/TitreH1";
import axios from 'axios';
import Animal from './animal/Animal';
import Bouton from '../../../components/UI/bouton/Bouton';

export default class Application extends Component {
    state={
        animaux: null,
        filtreFamille: null,
        filtreContinent: null
    }
    constructor(props){
        super(props);
    }
    
    
    handleSelectionFamille = (familleId)=>{
        console.log("famille : ", familleId);      
        this.setState({filtreFamille: familleId});
        this.loadData();
    }
    handleSectionContinent = (continentId) =>{
        console.log("continent : ", continentId);       
        this.setState({filtreContinent: continentId});
        this.loadData();
    }
    loadData =()=>{
       
        const filtreFamille = this.state.filtreFamille ? this.state.filtreFamille : "-1";
        const filtreContinent = this.state.filtreContinent ? this.state.filtreContinent : "-1";
        const animauxAddress = `http://localhost/SERVEURANIMAUX/front/animaux/${filtreFamille}/${filtreContinent}`
         // object.values --> tab d'objets        
         axios.get(animauxAddress)

         .then (resp=>this.setState({animaux: Object.values(resp.data)}, ()=>{                    
              this.state.animaux && console.log(this.state.animaux);
         }));
    }
    componentDidMount(){
       this.loadData();
    }
    componentDidUpdate=(oldProps, oldState)=>{
        if (this.state.filtreFamille !== oldState.filtreFamille || this.state.filtreContinent !== oldState.filtreContinent){
            this.loadData();
    }
    
    }
    filterButtonColor=(continentId)=>{
        let colorBtn;
        switch (continentId) {
            case "1":
                colorBtn="btn-primary";                
            break;
            case "2":
                colorBtn="btn-danger";                 
            break;
            case "3":
                colorBtn="btn-warning";
            break;
            case "4":
                colorBtn="btn-success";                
            break;
            case "5":
                colorBtn="btn-info";
            break;
        
            default:
                colorBtn="btn-secondary";
                break;
        }
        return colorBtn;
    }

    handleResetFiltreFamille=()=>{
        this.setState({filtreFamille: null});
    }
    handleResetFiltreContinent=()=>{
        this.setState({filtreContinent: null});
    }
  render() {
    return (
        <>
        {(this.state.filtreFamille || this.state.filtreContinent) && <span>Filtres</span>}
        {this.state.filtreFamille && 
        <Bouton 
        typeBtn="btn-dark"
        clic={this.handleResetFiltreFamille}
        >{this.state.filtreFamille} &nbsp;
        {<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>}
        </Bouton>}
        {this.state.filtreContinent && 
        <Bouton 
        typeBtn={this.filterButtonColor(this.state.filtreContinent)}
        clic={this.handleResetFiltreContinent}
        >{this.state.filtreContinent} &nbsp;
        {
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        }
        </Bouton>}
        <TitreH1 bgColor='bg-success'>Les animaux du parc</TitreH1>
        <div className="container-fluid">
            <div className='row no-gutters'>
           {this.state.animaux && 
           this.state.animaux.map(animal=>{
             return  (
             <div className='col-12 col-md-6 col-xl-4' key={animal.id}>
                 <Animal {...animal} btnColor={this.filterButtonColor} filtreContinent={this.handleSectionContinent} filtreFamille={this.handleSelectionFamille} />
             </div>
            )
            })}
            </div>
        </div>
        </>
    )
  }
}

