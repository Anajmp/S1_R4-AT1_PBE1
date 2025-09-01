const express = require('express');
const app = express();
const PORT = 8081;

app.get("/ano/:ano", (req, res) => {
    try {
        const { ano } = req.params; //Definirá a constante nome ano parametro
        const anoNum = parseInt(ano); //O valor (string) de "ano" será difinido como número e esse núemro chamará anoNum

        //Identifica se anoNum é um número, caso não seja, dará erro e retornará
        if (isNaN(anoNum)) {
            return res.status(400).send("O valor do ano precisa ser um número válido.");
        }
        
        // Um ano é bissexto se for divisível por 4 e não por 100. OU se for divisível por 400 (regra do calendário gregoriano).
        const Bissexto = (anoNum % 4 === 0 && anoNum % 100 !== 0) || (anoNum % 400 === 0);

        //Irá identificar se é bissexto
        if (Bissexto) {
            res.send(`O ano ${anoNum} é bissexto`);
        } else {
            res.send(`O ano ${anoNum} não é bissexto`);
        }
    } catch (error) {
        res.status(500).send(`Erro no servidor: ${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
