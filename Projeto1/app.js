const express = require('express');
const app = express();
const PORT = 8081;

// Rota da soma
app.get("/soma/:numUm/:numDois", (req, res) => {
    try {
        const { numUm, numDois } = req.params;
        if (!isNaN(numDois && numUm)) {
            let resultado = parseFloat(numUm) + parseFloat(numDois);

            res.send(`Resultado da soma dos números ${numUm} e ${numDois} = ${resultado}`);
        } else {
            return res.send(`É obrigatório ser um número`);
        }
    } catch (error) {
        res.status(400).send(`${error}`);
    }
});
// Rota de subtração
app.get("/subtracao/:numUm/:numDois", (req, res) => {
    try {
        const { numUm, numDois } = req.params;
        if (!isNaN(numDois && numUm)) {
            let resultado = parseFloat(numUm) - parseFloat(numDois);

            res.send(`Resultado da subtração dos números ${numUm} e ${numDois} = ${resultado}`);
        } else {
            return res.send(`É obrigatório ser um número`);
        }
    } catch (error) {
        res.status(400).send(`${error}`);
    }
});

// Rota de multiplicação
app.get("/multiplicacao/:numUm/:numDois", (req, res) => {
    try {
        const { numUm, numDois } = req.params;
        if (!isNaN(numDois && numUm)) {
            let resultado = parseFloat(numUm) * parseFloat(numDois);

            res.send(`Resultado da multiplicação dos números ${numUm} e ${numDois} = ${resultado}`);
        } else {
            return res.send(`É obrigatório ser um número`);
        }
    } catch (error) {
        res.status(400).send(`${error}`);
    }
});

app.get("/divisao/:numUm/:numDois", (req, res) => {
    try {
        const { numUm, numDois } = req.params;
        if (numDois > 0 && !IsNaN(numDois && numUm)) {
            let resultado = parseFloat(numUm) / parseFloat(numDois);

            res.send(`Resultado da divisão dos números ${numUm} e ${numDois} = ${resultado}`);
        } else {
            return res.send(`O segundo número não pode ser igual a 0 ou os numeros serem uma letra`);
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(`${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});