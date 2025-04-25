import { db } from "../db.js";

export const getProcess = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const countQuery = "SELECT COUNT(*) as total FROM processos";
  db.query(countQuery, (countErr, countResult) => {
    if (countErr) return res.status(500).json(countErr);

    const total = countResult[0].total;

    const dataQuery = "SELECT * FROM processos LIMIT ? OFFSET ?";
    db.query(dataQuery, [limit, offset], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json({
        resultados: data,
        total: total,
        page: page,
        limit: limit
      });
    });
  });
};
