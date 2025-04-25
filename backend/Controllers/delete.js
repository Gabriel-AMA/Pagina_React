import { db } from "../db.js";

export const deleteProcess = (req, res) => {
    const  {id}  = req.params;
    const q = "DELETE FROM processos WHERE Id=?";

    db.query(q, [id], (err, data) => {    
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
