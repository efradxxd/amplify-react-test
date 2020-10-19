import React, { Component } from 'react';
import axios from 'axios';
import url from '../URL';

import './sesion.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img_1 from '../Imagenes/Img-2.png';
import img_9 from '../Imagenes/Img-9.png';

class principal extends Component {
  constructor(props){
    super(props);
    this.state={
    message:''
    }
    this.Ingresar = this.Ingresar.bind(this);
    this.limpiar = this.limpiar.bind(this);
  }

  limpiar(){
    var message = " ";
      this.setState({message:message});
   }

  Ingresar() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
      
  // Validacion campos vacios
  if (email === '' || password === ''){
    var message = "Completa todos los campos!";
    this.setState({message:message});
    setTimeout(this.limpiar,3000);
  }else{

  // Validacion campo email
  if(email !== "undefined"){
    var fields = email;
    let lastAtPos = fields.lastIndexOf('@');
    let lastDotPos = fields.lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.indexOf('@@') === -1 && lastDotPos > 2 && (fields.length - lastDotPos) > 2)) {
      message = "El email no es valido";
      this.setState({message:message});
      setTimeout(this.limpiar,3000);
     }else{

          var apiBaseUrl = url;
          var payload={
          "email": email,
          "password": password
          }
          axios.post(apiBaseUrl+'/login', payload)
        .then(function (response) {
          console.log(response);
          
          if(response.status === 200){

              localStorage.setItem('token', response.data.Token);

          }
        })

        .catch(function (error) {
          console.log(error);
          
          // console.log(error.response.data);
          // if (error.response.data === 404){
          //   var loginmessage = "La contraseña es Incorrecta. Intente nuevamente!";
          //   self.props.parentContext.setState({loginmessage:loginmessage});
          // }
          // if (error.response.data === 406){
          //   loginmessage = "El Email es Incorrecto. Intente nuevamente!";
          //   self.props.parentContext.setState({loginmessage:loginmessage});
          // }

        });
      }
    }
  }
}

render() {
    return (
      <div>
       
        <button className="Chat"></button>
        
        <div className="portada-sesion">
          <div className="portada-sesion_2">
            <img src={img_1} alt="Logo"></img>
          </div>
          <div className="portada-sesion_3">
            <input type="email" placeholder="   Correo electrónico" id="email" required></input>
            <br/><br/>
            <input type="password" placeholder="   Contraseña" id="password" required></input>
            <br/><br/>
            <a className="recuperar">Olvide mi contraseña</a>
            <br/><br/>
            <button className="button-2" onClick={this.Ingresar}>Ingresar</button>
            <br/><br/>
            <h2 className="mensaje">{this.state.message}</h2>
          </div>
        </div>

        <div className="footer">
          <div className="footer-1">
            <img src={img_1} alt="Logo"></img>
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
      </div>
    );
  }
}

export default principal;
