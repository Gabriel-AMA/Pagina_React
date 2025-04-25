import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './css/home.css';
import './css/vizualizar.css'
import axios from 'axios';

function Vizualizar(){
    let variavel = useLocation();
    let navigate = useNavigate()
    const dados = variavel.state || {};
    const [Nome, setNome] = useState(dados.Nome || '');
    const [Numero, setNumero] = useState(dados.Numero || '');
    const [CPF, setCPF] = useState(dados.CPF || '');
    const [Responsavel, setResponsavel] = useState(dados.Responsavel || '');
    const [Duracao, setDuracao] = useState(dados.Duracao || '')

    const deleteProcessos = (id) => {
            axios.delete(`http://localhost:8800/delete/${id}`)
            .then(() => {
                alert("Usuário Deletado");
                navigate("/lista");
            })
            .catch(error => console.error("Falha ao deletar usuário", error));
    }

    const atualizar = (dados) => {
        navigate('/crud', {state:dados});
    };

    return(
        <div>
            <div className="cabecalho">
                <h1 className="titulo">Vizualizando Processo</h1>   
                <div className="navegador">
                    <Link to="/" className="botaoNavegador">Home</Link>
                    <Link to="/lista" className="botaoNavegador">Lista Usuários</Link>
                    <Link to="/crud" className="botaoNavegador">Novo</Link>
                </div> 
            </div>
            <div className="vizualizacao">
                <p className="botao_vizualizar">Nome: {Nome}</p>
                <p className="botao_vizualizar">CPF: {CPF}</p>
                <p className="botao_vizualizar">Numero: {Numero}</p>
                <p className="botao_vizualizar">Duração: {Duracao}</p>
                <p className="botao_vizualizar">Responsavel: {Responsavel}</p>
                <button className="botao_vizualizar" onClick={() => atualizar(dados)}>Editar</button>
                <button className="botao_vizualizar" onClick={() => deleteProcessos(dados.Id)}>Deletar</button>
            </div>
            <footer>
                <p className="dados">E-mail: a.martins7@pucpr.edu.br</p>
                <p className="dados">Telefone: (41)99893-5513</p>
            </footer>
        </div>
    );

}

export default Vizualizar;