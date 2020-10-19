import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./Imagenes/Img-1.png";
import Principal from './Principal/principal';
import Registro from './Registro/registro';
import Sesion from './Sesion/sesion';
import './Components/Navbar.css';

class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      loginscreen:[],

    }
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  Sesion = () => {
    var loginscreen = [];
    loginscreen.push(<Sesion/>);
    this.setState({loginscreen: loginscreen});
    }

  Registro = () => {
    var loginscreen = [];
    loginscreen.push(<Registro/>);
    this.setState({loginscreen: loginscreen});
    }   

  Principal = () => {
    var loginscreen = [];
    loginscreen.push(<Principal/>);
    this.setState({loginscreen: loginscreen});
    }   


  componentWillMount(){

      var loginscreen=[];
      loginscreen.push(<Principal/>);
      this.setState({loginscreen:loginscreen})
    
  }

  render() {
    return (
        <div>
        <nav className="nav" id="navbar">
        <div className="nav-content">
        
          <div className="nav-items">
          <div className="fondo">
          <button className="icono"><img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.Principal}
          /></button>
          </div>
            <div className="nav-item">
              <div>
            <Link
                activeClass="active"
                to="registro"
                onClick={this.Registro}
              >
                Registrarme
              </Link>
              </div>
              </div>
              <div className="nav-item">
              <Link
                activeClass="active"
                to="sesion"
                onClick={this.Sesion}
              >
                Ingresar
              </Link>
              </div>
              <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ¿Quiénes somos?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ¿Cómo funciona?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ¿Qué te ofrecemos?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Blog
              </Link>
            </li>
          </div>
        </div>
      </nav>
      
      <div className="loginscreen">
        {this.state.loginscreen}
      </div>
      
      </div>
    );
  }
}

export default Loginscreen;