import React from "react";
import { useState } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './css/base.css';
import './css/vizualizar.css'
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons'

function Vizualizar(){
    let variavel = useLocation();
    let navigate = useNavigate()
    const dados = variavel.state || {};
    const [Nome] = useState(dados.Nome || '');
    const [Numero] = useState(dados.Numero || '');
    const [CPF] = useState(dados.CPF || '');
    const [Responsavel] = useState(dados.Responsavel || '');
    const [Duracao] = useState(dados.Duracao || '')

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
                <h1 className="cabecalho_titulo">Lista de Processos</h1>   
                <div className="cabecalho_navegador">
                    <Link to="/" className="cabecalho_navegador_botao">Home</Link>
                    <Link to="/lista" className="cabecalho_navegador_botao">Lista Usuários</Link>
                    <Link to="/crud" className="cabecalho_navegador_botao">Novo</Link>
                </div> 
            </div>
            <div className="vizualizar">
                <h2 className="vizualizar_cabecalho">Processo</h2>
                <div className="vizualizar_linha">
                    <div className="vizualizar_linha_nome">
                        <text className="vizualizar_linha_nome_titulo">Nome: </text>
                        <text className="vizualizar_linha_nome_corpo">{Nome}</text>
                    </div>
                    <div className="vizualizar_linha_cpf">
                        <text className="vizualizar_linha_cpf_titulo">CPF: </text>
                        <text className="vizualizar_linha_cpf_corpo">{CPF}</text>
                    </div>  
                </div>
                <div className="vizualizar_linha">
                    <div className="vizualizar_linha_cpf">
                        <text className="vizualizar_linha_cpf_titulo">Duração: </text>
                        <text className="vizualizar_linha_cpf_corpo">{Duracao} dias</text>
                    </div>
                    <div className="vizualizar_linha_nome">
                        <text className="vizualizar_linha_nome_titulo">Responsavel: </text>
                        <text className="vizualizar_linha_nome_corpo">{Responsavel}</text>
                    </div>
                </div>
                <div className="vizualizar_linha">
                    <div className="vizualizar_linha_numero">
                        <text className="vizualizar_linha_numero_titulo">Numero: </text>
                        <text className="vizualizar_linha_numero_corpo">{Numero}</text>
                    </div>
                    <div className="vizualizar_linha_botao">
                        <button className="vizualizar_linha_botao_atualizar" onClick={() => atualizar(dados)}><FontAwesomeIcon icon={faPen}/> Editar</button>
                        <button className="vizualizar_linha_botao_atualizar" onClick={() => deleteProcessos(dados.Id)}><FontAwesomeIcon icon={faTrash}/> Deletar</button>
                    </div>
                </div>
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

export default Vizualizar;