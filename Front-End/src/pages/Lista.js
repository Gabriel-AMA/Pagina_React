import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './css/base.css';
import './css/listar.css'
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faPen, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function Lista(){
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const limite = 14;
    


    const atualizar = (processos) => {
        navigate('/crud', {state:processos});
    };
    const vizualizar = (processos) => {
        navigate('/vizualizar', {state:processos});
    };

    const getProcessos = () =>{
        fetch(`http://localhost:8800/get?page=${paginaAtual}&limit=${limite}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data recebida:", data);
                setData(data.resultados);
                setTotalPaginas(Math.ceil(data.total / limite));
            })
            .catch(error => console.error("Erro ao buscar processos:", error));
    }
    const deleteProcessos = (id) => {
            axios.delete(`http://localhost:8800/delete/${id}`)
            .then(() => {
                alert("Usuário Deletado");
                getProcessos();
            })
            .catch(error => console.error("Falha ao deletar usuário", error));
        }
    const mudarPagina = (pagina) => {
        if (pagina >= 1 && pagina <= totalPaginas) {
            setPaginaAtual(pagina);
        }
    };
    

    useEffect(() => {
        getProcessos();
    }, [paginaAtual]);

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
            <div className="conteudo">
                <table className="tabela_principal">
                    <tr className="tabela_principal_topo">
                        <th className="tabela_principal_topo_elemento_acao">Ações</th>
                        <th className="tabela_principal_topo_elemento">Numero</th>
                        <th className="tabela_principal_topo_elemento">Nome</th>
                        <th className="tabela_principal_topo_elemento">CPF</th>
                        <th className="tabela_principal_topo_elemento">Responsavel</th>
                        <th className="tabela_principal_topo_elemento">Duracao</th>
                    </tr>
                    {Array.isArray(data) && data.map((processos) => (
                        <tr className="tabela_principal_linha_par" key={processos.Id}>
                            <td className="tabela_principal_linha_elemento_acao">
                                <button className="tabela_principal_linha_elemento_acao_botao" onClick={() => vizualizar(processos)}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                                <button className="tabela_principal_linha_elemento_acao_botao" onClick={() => atualizar(processos)}><FontAwesomeIcon icon={faPen}/></button>
                                <button className="tabela_principal_linha_elemento_acao_botao" onClick={() => deleteProcessos(processos.Id)}><FontAwesomeIcon icon={faTrash}/></button>
                            </td>
                            <td className="tabela_principal_linha_elemento">{processos.Numero}</td>
                            <td className="tabela_principal_linha_elemento">{processos.Nome} </td>
                            <td className="tabela_principal_linha_elemento">{processos.CPF}</td>
                            <td className="tabela_principal_linha_elemento">{processos.Responsavel}</td>
                            <td className="tabela_principal_linha_elemento_ultimo">{processos.Duracao} dias</td>
                        </tr>
                    ))}

                </table>
                <div className="tabela_paginas">
                    <button onClick={() => mudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>Anterior</button>
                    {[...Array(totalPaginas)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => mudarPagina(i + 1)}
                            style={{ fontWeight: i + 1 === paginaAtual ? "bold" : "normal", margin: "0 5px" }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => mudarPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>Próximo</button>
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

export default Lista;