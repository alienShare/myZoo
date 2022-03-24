import React from "react";
import facebook from "../../assets/images/footer/fb.png"
import twitter from "../../assets/images/footer/twitter.png"
import youtube from "../../assets/images/footer/youtube.png"
import { NavLink } from "react-router-dom";
import classes from "./footer.module.css";

const Footer=(props)=> {
return (
<>
    <footer className="bg-primary ">
       <div className="text-white text-center"> MyZoo - tous droits réservés</div>
        <div className="row no-gutters align-items-center text-center pt-2">
            <div className="col-3">
                <a href="" className="d-block" target="_blank">
                    <img className="img-fb" src={facebook} alt="facebook"/>
                </a>
                </div>        
                <div className="col-3">
                <a href="" className="d-block" target="_blank">
                    <img className="img-twitter" src={twitter} alt="twitter"/>
                </a>
                </div>
                <div className="col-3">
                <a href="" className="d-block" target="_blank">
                    <img className="img-youtube" src={youtube} alt="youtube"/>
                </a>
                </div>
                <div className="col-3">
                <NavLink to="/mentionslegales" className={["p-0", "m-0", classes['p-footer-link']].join(" ")}>Mentions Légales</NavLink>
                <p><a href="mailto:contact@myzoo.com" className={["p-0", "m-0", classes['p-footer-link']].join(" ")}>contact@myzoo.com</a></p>
                </div>
           
        </div>
    </footer>
</>

)
}
export default Footer