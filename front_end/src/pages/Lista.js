import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './css/home.css';
import './css/listar.css'
import axios from 'axios';


function Lista(){
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const limite = 10;


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
                <h1 className="titulo">Lista de Processos</h1>   
                <div className="navegador">
                    <Link to="/" className="botaoNavegador">Home</Link>
                    <Link to="/lista" className="botaoNavegador">Lista Usuários</Link>
                    <Link to="/crud" className="botaoNavegador">Novo</Link>
                </div> 
            </div>
            <div>
                <table className="tabela_principal">
                    <tr className="tabela_topo">
                        <th>Ações</th>
                        <th>Numero</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Responsavel</th>
                        <th>Duracao</th>
                    </tr>
                    {Array.isArray(data) && data.map((processos) => (
                        <tr className="elemento" key={processos.Id}>
                            <td>
                                <button className="botao" onClick={() => vizualizar(processos)}>Vizualizar</button>
                                <button className="botao" onClick={() => atualizar(processos)}>Alterar</button>
                                <button className="botao" onClick={() => deleteProcessos(processos.Id)}>Deletar</button>
                            </td>
                            <td>{processos.Numero}</td>
                            <td>{processos.Nome} </td>
                            <td>{processos.CPF}</td>
                            <td>{processos.Responsavel}</td>
                            <td>{processos.Duracao}</td>
                        </tr>
                    ))}

                </table>
                <div className="botao_pagina">
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
                <p className="dados">E-mail: a.martins7@pucpr.edu.br</p>
                <p className="dados">Telefone: (41)99893-5513</p>
            </footer>
        </div>
    );

}

export default Lista;