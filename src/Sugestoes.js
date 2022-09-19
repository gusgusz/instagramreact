
export default function Sugestoes(){


  function Sugestao(props){
    return(
      <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
    )
  }

  const sugestao = [
    {nome:"bad.vibes.memes" , foto:"assets/img/bad.vibes.memes.svg" },
    {nome:"chibirdart" , foto:"assets/img/chibirdart.svg" },
    {nome:"razoesparaacreditar" , foto:"assets/img/razoesparaacreditar.svg" },
    {nome:"adorable_animals" , foto:"assets/img/adorable_animals.svg" },
    {nome:"smallcutecats" , foto:"assets/img/smallcutecats.svg" }
  ]
    
    return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestao.map((s) => < Sugestao nome={s.nome} imagem={s.foto}/>)}

      
      </div>
    )
}