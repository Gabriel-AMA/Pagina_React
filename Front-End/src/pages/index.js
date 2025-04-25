import React from "react";
import { Link } from "react-router-dom";
import './css/home.css';
import './css/base.css';


const Home = () => {
    return (
        <div>
            <div className="cabecalho">
                <h1 className="cabecalho_titulo">Bem Vindo</h1>   
                <div className="cabecalho_navegador">
                    <Link to="/" className="cabecalho_navegador_botao">Home</Link>
                    <Link to="/lista" className="cabecalho_navegador_botao">Lista Usuários</Link>
                    <Link to="/crud" className="cabecalho_navegador_botao">Novo</Link>
                </div> 
            </div>
            <div className="about_us">
                <h2 className="about_us_cabecalho">Realização</h2>    
                <h3>Gabriel Augusto Martins de Arauujo</h3>
            </div>
            <div className="about_us_2">
                <h3 className="about_us_2_cabecalho">Sobre Nós</h3>
                <p>Como parte desse trabalho um banco de dados com uma tabela é usada, essa tabela representa os dados ao redor de um processo judiciários, com dados como nome da pessoa que iniciou o processo, o numero do processo, data do inicio do processo, cpf da pessoa que iniciou o processo e a pessoa que está lidando com o processo.</p>
            </div>
            <footer>
                <div className="contatos">
                    <h4 className="contatos_cabecalho">Contatos</h4>
                    <p className="contatos_elementos">E-mail: a.martins7@pucpr.edu.br</p>
                    <p className="contatos_elementos">Telefone: (41)99893-5513</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;