import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import  styles from './principal.css';

import img from '../Imagenes/Img-1.png';
import img_1 from '../Imagenes/Img-2.png';
import img_2 from '../Imagenes/Img-11.png';
import img_3 from '../Imagenes/Img-7.png';
import img_4 from '../Imagenes/Img-8.png';
import img_5 from '../Imagenes/Img-6.png';
import img_6 from '../Imagenes/Icono-2.png';
import img_7 from '../Imagenes/Icono-1.png';
import img_8 from '../Imagenes/Icono-3.png';
import img_9 from '../Imagenes/Img-9.png';


const modalStyles={
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

class principal extends Component {
  constructor(props){
    super(props);
    this.state={
      abierto: false,
    }
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToDown = () => {
    scroll.scrollToBottom();
  };


render() {


    return (
      <div>

        <button className="flecha" onClick={this.scrollToTop}></button>
        <button className="Chat" onClick={this.abrirModal}></button>
       
        <div className="portada">
          <div className="portada_2">
              <img src={img_1} alt="Logo"></img>
              <br/><br/>
              <div className="conjunto_btn">
              <button className="button_1" onClick={this.Registro}>Registrarme</button>
              &nbsp;&nbsp;
              <button className="button_2"  onClick={this.scrollToDown}>Contacto</button>
              </div>
          </div>
        </div>

        <br/>

        <div className="info" id="section1">
          <br/>
          <h1 id="parte1">¿Quiénes somos?</h1>
          <div className="info-contenido">
            <div className="info-img">
              <div>
              <img src={img_2} alt="Imagen" className="sal"></img>
              </div>
              <div>
              <img src={img} alt="Imagen" className="sal-icono"></img>
              </div>
            </div>
            <div className="info-text">
              <br></br>
              <p>Somos una <b>reparadora de deuda 100% mexicana</b> que ofrece un
                programa personalizado para liquidar deudas que sean mayores a 
                $35,000.00 mil pesos.</p>
              <p>
                Negociamos con las instituciones financieras y reducimos adeudos 
              <b> hasta con un 85% de descuento</b> en tarjetas de crédito, departamentales, 
                prestamos de nómina y personales.</p>
              <p>
                Con base en aportaciones mensuales se logra el éxito en el programa y 
                nuestros clientes, vulven a ser sujetos de crédito.
              </p>
            </div>  
          </div>  
        </div>

        <div className="info-2" id="section2">
          <br/><br/>
          <h1>¿Cómo funciona?</h1>
          <br/>
          <div className="info-2-img">
            <img src={img_3} alt="Imagen" width="80%" height="40%"></img>
            <img src={img_4} alt="Imagen" width="80%" height="40%"></img>
          </div>
          <br/><br/>
        </div>
        
        <div className="info-3" id="section3">
          <br/><br/>
          <h1>¿Qué te ofrecemos?</h1>
          <br/>
          <div className="info-3-img">
            <img src={img_5} alt="Imagen" width="80%" height="40%"></img>
          </div>
          <br/><br/>
          <div>
            <button className="boton_3" onClick={this.scrollToTop}>Registrarme</button>
          </div>
        </div>
        
        <br/>
        
        <div className="info-4">
          <div className="info-4-img-1">
            <img src={img_6} alt="Imagen" width="30%" height="30%"></img>
            <br/><br/>
            <div>
              <button className="boton-blanco">96%</button>
              <br/><br/>
              <div>
                <p>de clientes liberados</p>
              </div>
            </div>
          </div>
          <div className="info-4-img-2">
            <img src={img_7} alt="Imagen" width="30%" height="30%"></img>
            <br/><br/>
            <div>
              <button className="boton-verde">9 meses</button>
              <br/><br/>
              <div>
                <p className="info-4-p">Plazo medio</p>
              </div>
            </div>
          </div>
          <div className="info-4-img-3">
            <img src={img_8} alt="Imagen" width="30%" height="30%"></img>
            <br/><br/>
            <div>
              <button className="boton-blanco">81%</button>
              <br/><br/>
              <div>
                <p className="info-4-p">Descuento promedio</p>
             </div>
            </div>
          </div>
        </div>

          <div className="footer" id="fin">
            <div className="footer-1">
              <img src={img_1} alt="Logo" width="45%" height="20%"></img>
            </div>
            <div className="footer-2">
              <p>Maestro Antonio Caso #78 Col. San Rafael C.P. 06470 Alcaldía Cuahútemoc</p>
              <h3>(55) 8112 4070</h3>
              <h3>contacto@debexit.mx</h3>
              <h3>Aviso de privacidad</h3>
              <br/>
            <p>Derechos reservados 2020</p>
            </div>
            <div className="footer-3">
              <img src={img_9} alt="Imagen"></img>
            </div>
          </div>


          <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader className="container">
          Contacto
        </ModalHeader>
        <ModalBody className="container-2">
          <FormGroup>
            <p>Llena el siguiente formulario para resolver cualquier
              duda. Responderemos lo antes posible.
            </p>
            <input type="text" placeholder="Nombre" id="nombre" required></input>
          </FormGroup>
          <FormGroup>
          <input type="text" placeholder="Correo electronico" id="email" required></input>
          </FormGroup>
          <FormGroup>
          <textarea id="mensaje" rows="10" cols="20">Mensaje</textarea>
          </FormGroup>
        </ModalBody>

        <ModalFooter className="container-3">
            <button className="enviar">Enviar</button>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      </div>
    );
  }
}

export default principal;
