
import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/titres/TitreH1";
import axios from 'axios';
import Animal from './animal/Animal';
import Bouton from '../../../components/UI/bouton/Bouton';

export default class Application extends Component {
    state={
        animaux: null,
        filtreFamille: null,
        filtreContinent: null,
        listeFamilles: null,
        listeContinents: null
    }
    constructor(props){
        super(props);
    }
    
    
    handleSelectionFamille = (familleId)=>{
        console.log("famille : ", familleId);
        if (familleId === "-1"){
            this.handleResetFiltreFamille();
        }else{
            this.setState({filtreFamille: familleId});
        }
 
        
    }
    handleSelectionContinent = (continentId) =>{
        console.log("continent : ", continentId);
        if (continentId === "-1"){
            this.handleResetFiltreContinent();
        }else{         
            this.setState({filtreContinent: continentId});
        }
    }
    loadData =()=>{
       
        const filtreFamille = this.state.filtreFamille ? this.state.filtreFamille : "-1";
        const filtreContinent = this.state.filtreContinent ? this.state.filtreContinent : "-1";
        const animauxAddress = `http://localhost/SERVEURANIMAUX/front/animaux/${filtreFamille}/${filtreContinent}`;
        const listeFamillesAddress = `http://localhost/SERVEURANIMAUX/front/familles`;
        const listeContinentsAddress = `http://localhost/SERVEURANIMAUX/front/continents`;
        // object.values --> tab d'objets        
         axios.get(animauxAddress)

         .then (resp=>this.setState({animaux: Object.values(resp.data)}, ()=>{                    
              this.state.animaux && console.log(this.state.animaux);
         }));
         axios.get(listeFamillesAddress)

         .then (resp=>this.setState({listeFamilles: Object.values(resp.data)}, ()=>{                    
              this.state.listeFamilles && console.log(this.state.listeFamilles);
         }));
         axios.get(listeContinentsAddress)

         .then (resp=>this.setState({listeContinents: Object.values(resp.data)}, ()=>{                    
              this.state.listeContinents && console.log(this.state.listeContinents);
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

    let nomFamilleFiltre="";
    if (this.state.listeFamilles){
        if(this.state.filtreFamille){
            const numCaseFamille = this.state.listeFamilles.findIndex(famille=>{
                return famille.famille_id === this.state.filtreFamille;
            });
            nomFamilleFiltre = this.state.listeFamilles[numCaseFamille].famille_libelle;
        }
    }
    let nomFiltreContinent="";
    if (this.state.listeContinents){
        if(this.state.filtreContinent){
            const numCaseContinent = this.state.listeContinents.findIndex(continent=>{
                return continent.continent_id === this.state.filtreContinent;
            });
            nomFiltreContinent = this.state.listeContinents[numCaseContinent].continent_libelle;
        }
    }
    return (
        <>
        <div className='container-fluid'>
            <span>Filtres</span>
            {/* familles */}
            <select onChange={(event)=>{this.handleSelectionFamille(event.target.value)}}>
                <option 
                    selected={this.state.filtreFamille === null && "selected"} 
                    value="-1">
                    Familles
                </option>
                {
                this.state.listeFamilles && this.state.listeFamilles.map(aFamille=>{
                    return <option 
                    value={aFamille.famille_id}
                    selected={this.state.filtreFamille === aFamille.famille_id && "selected"}                    
                    >
                        {aFamille.famille_libelle}
                    </option>
                    })
                }
                
            </select>
             {/* continents */}
             <select onChange={(event)=>{this.handleSelectionContinent(event.target.value)}}>
                <option 
                    selected={this.state.filtreContinent === null && "selected"} 
                    value="-1">
                    Continents
                </option>
                {
                this.state.listeContinents && this.state.listeContinents.map(aContinent=>{
                    return <option 
                    value={aContinent.continent_id}
                    selected={this.state.filtreContinent === aContinent.continent_id && "selected"}                    
                    >
                        {aContinent.continent_libelle}
                    </option>
                    })
                }
                
            </select>
            {this.state.filtreFamille && 
            <Bouton 
            typeBtn="btn-dark"
            clic={this.handleResetFiltreFamille}
            >{nomFamilleFiltre} &nbsp;
            {<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>}
            </Bouton>}
           

            {this.state.filtreContinent && 
            <Bouton 
            typeBtn={this.filterButtonColor(this.state.filtreContinent)}
            clic={this.handleResetFiltreContinent}
            >{nomFiltreContinent} &nbsp;
            {
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            }
            </Bouton>}
        </div>
        <TitreH1 bgColor='bg-success'>Les animaux du parc</TitreH1>
        <div className="container-fluid">
            <div className='row no-gutters'>
           {this.state.animaux && 
           this.state.animaux.map(animal=>{
             return  (
             <div className='col-12 col-md-6 col-xl-4' key={animal.id}>
                 <Animal {...animal} btnColor={this.filterButtonColor} filtreContinent={this.handleSelectionContinent} filtreFamille={this.handleSelectionFamille} />
             </div>
            )
            })}
            </div>
        </div>
        </>
    )
  }
}

