import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <>
        <h1>Sobre</h1>
        <p>
            Um projeto criado e desenvolvido pela Lorena Oka, aluna de análise e desenvolvimento de sistemas na FATEC-ID
        </p>
        <hr/>
        <Link to='/'>Página inicial</Link><br/>
        <Link to='/contato'>Contato</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
        </>
    )
}