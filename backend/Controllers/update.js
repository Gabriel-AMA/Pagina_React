import { db } from "../db.js";

export const putProcess= (req, res) => {
    const { id } = req.params;
    const {nome, cpf, numero, duracao, responsavel} = req.body; 
    const q = "UPDATE processos SET Nome=?, CPF=?, Numero=?, Duracao=?, Responsavel=? WHERE id=?";

    db.query(q, [nome,cpf, numero, duracao, responsavel, id],(err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
