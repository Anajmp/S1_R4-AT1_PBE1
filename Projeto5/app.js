const express = require('express');
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {
    try {
        const {nome} = req.params;
        const {hora} = req.query;    
        const horaNum = parseInt(hora);
        let saudacao;

        if (isNaN(horaNum) || horaNum < 0 || horaNum > 23) {
            return res.status(400).send("Digite uma hora (em número) entre 0 e 23.");
        }
        if (horaNum >= 6 && horaNum < 12) {
            saudacao = "Bom dia";
        } else if (horaNum >= 12 && horaNum < 17) {
            saudacao = "Boa tarde";
        } else {
            saudacao = "Boa noite";
        }

        res.send(`${saudacao}, ${nome}!`);
    } catch (error) {
        res.status(500).send(`Erro no servidor: ${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
