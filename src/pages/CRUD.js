import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './css/home.css';
import "./css/crud.css"
import axios from 'axios';

function Crud(){
    let variavel = useLocation();
    const dados = variavel.state || {};
    const [Nome, setNome] = useState(dados.Nome || '');
    const [Numero, setNumero] = useState(dados.Numero || '');
    const [CPF, setCPF] = useState(dados.CPF || '');
    const [Duracao, setDuracao] = useState(dados.Duracao || '')
    const [Responsavel, setResponsavel] = useState(dados.Responsavel || '');

    let navigate = useNavigate()

    const handleSubmit = () => {
        if (dados && dados.Id) {
          putProcessos(dados.Id);
        } else {
          postProcessos();
        }
      };

    const postProcessos = () => {
        axios.post("http://localhost:8800/post", {
            nome: Nome, 
            numero: Numero,
            cpf: CPF,
            duracao:Duracao,
            responsavel: Responsavel
        })
        .then(() => {
            alert("Usuário Criado");
            navigate("/lista");
        })
        .catch(error => console.error("Falha ao criar usuário", error));
    };
    const putProcessos = (id) => {
        axios.put(`http://localhost:8800/put/${id}`, {
            nome: Nome, 
            numero: Numero,
            cpf: CPF,
            duracao:Duracao,
            responsavel: Responsavel
        })
        .then(() => {
            alert("Usuário Atualizado");
            navigate("/lista");
        })
        .catch(error => console.error("Falha ao atualizar usuário", error));
    }

    return(
        <div>
            <div className="cabecalho">
                <h1 className="titulo">{dados && dados.Id?'Editando':'Criando'} Processo</h1>   
                <div className="navegador">
                    <Link to="/" className="botaoNavegador">Home</Link>
                    <Link to="/lista" className="botaoNavegador">Lista Usuários</Link>
                    <Link to="/crud" className="botaoNavegador">Novo</Link>
                </div> 
            </div>
            <div className="input">
                <input className="botao_crud" value={Nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome"></input>
                <input className="botao_crud" value={Numero} onChange={(e) => setNumero(e.target.value)} type="number" placeholder="Numero do Protocolo"></input>
                <br></br>
                <input className="botao_crud" value={CPF} onChange={(e) => setCPF(e.target.value)} type="number" placeholder="CPF"></input>
                <input className="botao_crud" value={Duracao} onChange={(e) => setDuracao(e.target.value)} type="number" placeholder="Duracao"></input>
                <br></br>
                <input className="botao_crud" value={Responsavel} onChange={(e) => setResponsavel(e.target.value)} type="text" placeholder="Responsavel"></input>
                <button className="botao_crud" onClick={handleSubmit}>Salvar</button>
            </div>
            <footer>
                <p className="dados">E-mail: a.martins7@pucpr.edu.br</p>
                <p className="dados">Telefone: (41)99893-5513</p>
            </footer>
        </div>
    );
}

export default Crud;