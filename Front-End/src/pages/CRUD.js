import React from "react";
import { useState } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './css/base.css';
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
        if (Nome==="" || Numero==="" || CPF==="" || Duracao==="" || Responsavel==="")
            alert("Todos os campos são obrigatórios")
        else{
            if (dados && dados.Id) {
                putProcessos(dados.Id);
            }else {
                postProcessos();
            }
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
                <h1 className="cabecalho_titulo">{dados&&dados.Id? "Editando":"Criando "}Processo</h1>   
                <div className="cabecalho_navegador">
                    <Link to="/" className="cabecalho_navegador_botao">Home</Link>
                    <Link to="/lista" className="cabecalho_navegador_botao">Lista Usuários</Link>
                    <Link to="/crud" className="cabecalho_navegador_botao">Novo</Link>
                </div> 
            </div>
            <div className="criar">
                <h2 className="criar_titulo">Processo</h2>
                <input className="criar_input" value={Nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome"></input><br></br>
                <input className="criar_input" value={Numero} onChange={(e) => setNumero(e.target.value)} type="number" placeholder="Numero do Protocolo"></input><br></br>
                <input className="criar_input" value={CPF} onChange={(e) => setCPF(e.target.value)} type="number" placeholder="CPF"></input><br></br>
                <input className="criar_input" value={Duracao} onChange={(e) => setDuracao(e.target.value)} type="number" placeholder="Duracao"></input><br></br>
                <input className="criar_input" value={Responsavel} onChange={(e) => setResponsavel(e.target.value)} type="text" placeholder="Responsavel"></input><br></br>
                <button className="criar_botao" onClick={handleSubmit}>Salvar</button>
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
}

export default Crud;