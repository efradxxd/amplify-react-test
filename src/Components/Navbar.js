import React, { Component } from "react";
import logo from "../Imagenes/Grupo 13.png";
import './Navbar.css';
import Registro from '../Registro/registro';
import Sesion from '../Sesion/sesion';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
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

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="fondo">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          </div>
          <ul className="nav-items">
            <li className="nav-item">
            <Link
                activeClass="active"
                to="registro"
                onClick={this.Registro}
              >
                Registrarme
              </Link>
              </li>
              <li className="nav-item">
              <Link
                activeClass="active"
                to="sesion"
                onClick={this.Sesion}
              >
                Ingresar
              </Link>
              </li>
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
          </ul>
        </div>
      </nav>
    );
  }
}