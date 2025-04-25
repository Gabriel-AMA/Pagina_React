import { useEffect, useState } from "react";
import axios from 'axios';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Lista from "./pages/Lista";
import Crud from "./pages/CRUD";
import Vizualizar from "./pages/Vizualizar";

function App() {
    const [data, setData] = useState([]); // Inicializando como array
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    


    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/lista" element={<Lista />} />
                    <Route path="/crud" element={<Crud />} />
                    <Route path="/vizualizar" element={<Vizualizar />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
