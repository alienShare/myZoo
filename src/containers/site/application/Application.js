
import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/titres/TitreH1";
import axios from 'axios';
import Animal from './animal/Animal';


export default class Application extends Component {
    state={
        animaux: null
    }
    constructor(props){
        super(props);
    }
    animauxAddress = 'http://localhost/SERVEURANIMAUX/front/animaux'
    componentDidMount(){
        // object.values --> tab d'objets        
        axios.get(this.animauxAddress)

        .then (resp=>this.setState({animaux: Object.values(resp.data)}, ()=>{                    
             this.state.animaux && console.log(this.state.animaux);
        }));
    }
  render() {
    return (
        <>
        <TitreH1 bgColor='bg-success'>Les animaux du parc</TitreH1>
        <div className="container-fluid">
            <div className='row no-gutters'>
           {this.state.animaux && 
           this.state.animaux.map(animal=>{
             return  (
             <div className='col-12 col-md-6 col-xl-4' key={animal.id}>
                 <Animal {...animal} />
             </div>
            )
            })}
            </div>
        </div>
        </>
    )
  }
}

