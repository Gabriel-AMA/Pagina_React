import mysl from "mysql";

export const db = mysl.createConnection({
    host: "localhost",
    user: "root",
    password: "475269",
    database: "sys"
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar:", err);
        return;
    }
    console.log("Conectado ao banco!");
});