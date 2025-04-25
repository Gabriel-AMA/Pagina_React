import React from "react";
import { Link } from "react-router-dom";
import './css/home.css';


const Home = () => {
    return (
        <div>
            <div className="cabecalho">
                <h1 className="titulo">Bem Vindo</h1>   
                <div className="navegador">
                    <Link to="/" className="botaoNavegador">Home</Link>
                    <Link to="/lista" className="botaoNavegador">Lista Usuários</Link>
                    <Link to="/crud" className="botaoNavegador">Novo</Link>
                </div> 
            </div>
            <div className="corpo">
                <h2>Trabalho realizado por:</h2>
                <h3>Gabriel Augusto Martins de Arauujo</h3>
            </div>
            <div className="corpo_2">
                <p>Como parte desse trabalho um banco de dados com uma tabela é usada, essa tabela representa os dados ao redor de um processo judiciários, com dados como nome da pessoa que iniciou o processo, o numero do processo, data do inicio do processo, cpf da pessoa que iniciou o processo e a pessoa que está lidando com o processo.</p>
            </div>
            <footer>
                <p className="dados">E-mail: a.martins7@pucpr.edu.br</p>
                <p className="dados">Telefone: (41)99893-5513</p>
            </footer>
        </div>
    );
};

export default Home;