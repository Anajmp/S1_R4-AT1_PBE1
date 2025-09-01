const express = require('express');
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {
    try {
        const {nome} = req.params; //Definirá a constante nome como parametro
        const {hora} = req.query;  //Definirá a constante hora como query
        const horaNum = parseInt(hora); //O valor (string) de "hora" será difinido como número e esse núemro chamará horaNum
        let saudacao;

        if (isNaN(horaNum) || horaNum < 0 || horaNum > 23) {
            return res.status(400).send("Digite uma hora (em número) entre 0 e 23."); //Filtra se "horaNum" será válido
        }

        //Filtro para relacionar horários com a saudação
        if (horaNum >= 6 && horaNum < 12) {
            saudacao = "Bom dia";
        } else if (horaNum >= 12 && horaNum < 17) {
            saudacao = "Boa tarde";
        } else {
            saudacao = "Boa noite";
        }

        //Enviará a saudação definida pelo horário passado e seu nome em seguida
        res.send(`${saudacao}, ${nome}!`);
    } catch (error) {
        res.status(500).send(`Erro no servidor: ${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
