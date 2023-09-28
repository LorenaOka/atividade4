import { Link } from "react-router-dom"
//import ButtonFatec from "../../components/ButtonFatec"
//import InputFatec from "../../components/InputFatec"

function Home() {

  return (
    <>
      <h1>Entenda sobre o projeto </h1>
      <hr/>
      <div>
        <p>
          
A apresentação do projeto de educação infantil é uma oportunidade emocionante de compartilhar uma visão transformadora para o desenvolvimento das nossas crianças. 

Neste projeto, estamos comprometidos em proporcionar um ambiente seguro, inclusivo e estimulante, onde as crianças possam crescer, aprender e prosperar. 

Acreditamos que investir na educação infantil é investir no futuro, preparando nossas crianças para uma vida de aprendizado contínuo, cidadania ativa e sucesso pessoal. 

Ao longo desta apresentação, vamos explorar as estratégias, recursos e benefícios que este projeto trará não apenas para as crianças, mas também para a nossa comunidade como um todo. 

Estamos entusiasmados em compartilhar nossos planos e ansiosos para a colaboração e o apoio de todos vocês nesta jornada importante.
        </p>
      </div>
      <hr/>
        <Link to='/sobre'>Sobre</Link><br/>
        <Link to='/contato'>Contato</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
    </>
  )
}

export default Home