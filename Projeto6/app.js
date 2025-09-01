const express = require('express');
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {
    try {
        const { peso, altura } = req.query;
        const pesoUm = parseFloat(peso);
        const alturaUm = parseFloat(altura);
        let classificacao;

        if (isNaN(pesoUm) || isNaN(alturaUm) || pesoUm <= 0 || alturaUm <= 0) {
            return res.status(400).send("Informe um peso e altura válidos");
        }
        const imc = pesoUm / (alturaUm * alturaUm);
    
        if (imc < 18.5) {
            classificacao = "Baixo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc>= 30 && imc < 39.9) {
            classificacao = "Obesidade";
        }else{
            classificacao = "Obesidade Gravíssima";
        }

        res.send(`seu IMC: ${imc.toFixed(2)} você está na classificação "${classificacao}"`);
    } catch (error) {
        res.status(500).send(`Erro no servidor: ${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
