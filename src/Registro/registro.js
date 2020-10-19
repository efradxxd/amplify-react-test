import React, { Component } from 'react';
import axios from 'axios';
import url from '../URL';

import './registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img_1 from '../Imagenes/Img-2.png';
import img_9 from '../Imagenes/Img-9.png';
import img_10 from '../Imagenes/Img-10.png';

class principal extends Component {
  constructor(props){
    super(props);
    this.state={
    message:'',
    contenido:''
    }
    this.Registro = this.Registro.bind(this);
    this.limpiar = this.limpiar.bind(this);
    this.agregar = this.agregar.bind(this);
  }

  limpiar(){
    var message = " ";
      this.setState({message:message});
   }

   agregar() {

    var txt = document.getElementById("contador");
    console.log(txt.innerHTML);
    var contenido = <div id="contador">
    <select name="deuda" id="deuda">
        <option value="null">&nbsp;¿Cuánto debes?</option>
        <option value="1">Menos de $10,000</option>
        <option value="2">$10,000 - $25,000</option>
        <option value="3">$25,000 - $35,000</option>
        <option value="4">$35,000 - $50,000</option>
        <option value="4">Más de $50,000</option>
        </select>
        &nbsp;&nbsp;
    <select name="banco" id="banco">
        <option value="null">&nbsp;Selecciona un banco</option>
        <option value="1">BBVA</option>
        <option value="2">Banamex</option>
        <option value="3">HSBC</option>
        <option value="4">Santander</option>
        <option value="4">Banorte</option>
        </select>
        </div>;
    this.setState({contenido:contenido});
   }

   Registro() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var rfc = document.getElementById("rfc").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_2 = document.getElementById("password_2").value;
    var deuda = document.getElementById("deuda").value;
    var banco = document.getElementById("banco").value;

          // Validar campos vacios
if (nombre === '' || apellido === '' || email === '' || rfc === '' 
|| password === '' || password_2 === '' || deuda === '' || banco === ''){

  var message = "Completa todos los campos!";
  this.setState({message:message});
  setTimeout(this.limpiar,3000);
}else{

// Tamaño de la contraseña
if (password.length < 8){
  message = "La contraseña es muy corta! Mínimo 8 caracteres";
    this.setState({message:message});
    setTimeout(this.limpiar,3000);
}else{

  // Tamaño de RFC
  if(rfc.length > 13){
    message = "Tu RFC excede su longitud";
    this.setState({message:message});
    setTimeout(this.limpiar,3000);
  }else{

    if(rfc.length < 12){
      message = "Tu RFC no cumple su longitud";
      this.setState({message:message});
      setTimeout(this.limpiar,3000);
    }else{

  // Comparar contraseñas
if (password !== password_2){
  message = "Tus contraseñas no coenciden";
    this.setState({message:message});
    setTimeout(this.limpiar,3000);
}else{
  
  // Validar campo email
  if(email !== "undefined"){
    var fields = email;
    let lastAtPos = fields.lastIndexOf('@');
    let lastDotPos = fields.lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.indexOf('@@') === -1 && lastDotPos > 2 && (fields.length - lastDotPos) > 2)) {
      message = "El email no es valido";
    this.setState({message:message});
    setTimeout(this.limpiar,3000);
     }else{

      // Solo letras en el campo Nombre
      const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$', 'i');
      if(!pattern.test(nombre)){ 
        message = "Tu Nombre solo debe contener letras";
        this.setState({message:message});
        setTimeout(this.limpiar,3000);
    }else{

      // Solo letras en el campo Apellidos
      const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$', 'i');
      if(!pattern.test(apellido)){ 
        message = "Tu Apellido solo debe contener letras";
        this.setState({message:message});
        setTimeout(this.limpiar,3000);
    }else{
       

      var apiBaseUrl = url;

      var payload={
      "nombre": nombre,
      "apellido": apellido,
      "rfc": rfc,
      "email":email,
      "password":password,
      "deuda":deuda,
      "banco":banco
      }
      axios.post(apiBaseUrl+'/register', payload)
    .then(function (response) {
      console.log(response);
      
      if(response.status === 200){
        console.log("registration successfull");
  
        }
        
      })
      .catch(function (error) {
        //  console.log(error.message);

        // console.log(error.response.data);
        // if (error.response.data === 409){
        //   var loginmessage = "Email en uso. Intente nuevamente!";
        //   self.props.parentContext.setState({loginmessage:loginmessage});
        // }
        // if (error.response.data === 412){
        //   loginmessage = "El Email no existe. Intente nuevamente!";
        //   self.props.parentContext.setState({loginmessage:loginmessage});
        // }

      });
} 
}
}
}
}
}
}
}
}
   }


render() {
    return (
      <div>
        <button className="Chat"></button>

        <div className="portada-registro">
          <div className="portada-registro_2">
            <img src={img_1} alt="Logo"></img>
          </div>
          <div className="portada-registro_3">
            <input type="text" placeholder="   Nombre(s)" id="nombre" required></input>
            <br/><br/>
            <input type="text" placeholder="   Apellido(s)" id="apellido" required></input>
            <br/><br/>
            <input type="text" placeholder="   RFC" id="rfc" required></input>
            <br/><br/>
            <input type="text" placeholder="   Correo electrónico" id="email" required></input>
            <br/><br/>
            <input type="number" placeholder="   Telefóno" id="telefono" required></input>
            <br/><br/>
            <input type="password" className="chico" placeholder="   Contraseña" id="password" required></input>
            <br/><br/>
            <input type="password" className="chico" placeholder="   Repetir Contraseña" id="password_2" required></input>
            <br/><br/>
            <div id="contador">
            <select name="deuda" id="deuda">
                <option disabled selected>&nbsp;¿Cuánto debes?</option>
                <option value="1">Menos de $10,000</option>
                <option value="2">$10,000 - $25,000</option>
                <option value="3">$25,000 - $35,000</option>
                <option value="4">$35,000 - $50,000</option>
                <option value="4">Más de $50,000</option>
                </select>
                &nbsp;&nbsp;
            <select name="banco" id="banco">
                <option disabled selected>&nbsp;Selecciona un banco</option>
                <option value="1">AMEX</option>
                <option value="2">Banamex</option>
                <option value="3">Banorte</option>
                <option value="4">Bancomer</option>
                <option value="5">Banco Azteca</option>
                <option value="6">Elektra</option>
                <option value="7">Global Card</option>
                <option value="8">HSBC</option>
                <option value="9">Inbursa</option>
                <option value="10">Invex</option>
                <option value="11">IXE</option>
                <option value="12">Santander</option>
                <option value="13">Scotiabank</option>
                <option value="14">Walmart</option>
                <option value="15">C&A</option>
                <option value="16">Coopel</option>
                <option value="17">Famsa</option>
                <option value="18">Liverpool</option>
                <option value="19">Palacio de Hierro</option>
                <option value="20">SEARS</option>
                <option value="21">Financiera</option>
                </select>
                </div>
            <br/>
            <div>
            {this.state.contenido}
            <br/>
            </div>
            <div className="agregar-mas">
              <div className="agregar-mas-2">
              <button className="mas" onClick={this.agregar}><img src={img_10} alt="imagen"></img></button>
              </div>
              <div className="agregar-mas-3">
              <h6>Agregar deuda</h6>
              </div>
            </div>
            <br/>
            <button className="button-2" onClick={this.Registro}>Registrarme</button>
            <br/><br/>
            <h2 className="mensaje">{this.state.message}</h2>
          </div>
        </div>
        
        <div className="footer">
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
      </div>
    );
  }
}

export default principal;
