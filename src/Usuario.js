import React from "react";

export default function Usuario(){

  function Usuario(props) {
    return(
      <div class="usuario">
      <img onClick={inserirFoto} src={props.foto}/>
      <div class="texto">
        <strong>catanacomics</strong>
        <span onClick={inserirNome}>
          {props.nome}
          <ion-icon name="pencil" ></ion-icon>
        </span>
      </div>
    </div>
    )
  }

    const [nome, setNome] = React.useState("Catana");
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg" )
   
    function inserirNome(){
        const nomePrompt = prompt("Qual é o seu nome?");
        setNome(nomePrompt);
    }

    function inserirFoto() {
        const fotoPrompt = prompt("Qual foto você quer colocar?");
        setFoto(fotoPrompt);
    }

    return(
        < Usuario foto={foto} nome={nome}/>
    )
}

