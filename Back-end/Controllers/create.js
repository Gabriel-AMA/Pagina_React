import { db } from "../db.js";

export const postProcess = (req, res) => {
    const {nome, cpf, numero, duracao, responsavel} = req.body; 
    const q = "INSERT INTO processos (Numero, Nome, CPF, Duracao, Responsavel) VALUES(?,?,?,?,?)";

    db.query(q, [numero, nome, cpf,  duracao, responsavel], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
