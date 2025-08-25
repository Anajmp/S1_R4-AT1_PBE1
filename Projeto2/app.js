const express = require('express');
const app = express();
const PORT = 8081;

// Rota da Calculadora
app.get("/calculadora/:op", (req, res) => {
    try {

        const { op } = req.params
        const { numUm, numDois } = req.query;
        const n1 = parseFloat(numUm);
        const n2 = parseFloat(numDois);

        let result = 0;
        if (isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Os valores devem ser números.");
        }

        switch (op) {
            case "soma":
                result = n1 + n2;
                break;
            case "subtração":
                result = n1 - n2;
                break;
            case "multiplicacao":
                result = n1 * n2;
                break;
            case "divisao":
                result = n1 / n2;
                if (n2 !== 0 && !isNaN(n1) && !isNaN(n2)) {
                    let result = parseFloat(numUm) / parseFloat(numDois);

                    res.send(`Resultado da divisão dos números ${n1} e ${n2} = ${result}`);
                } else {
                    return res.send(`O segundo número não pode ser igual a 0 ou os numeros serem uma letra`);
                }
                break;
            default:
                return res.send("Operação inválida");

        }
        // //Soma
        // if (operacao = "soma") {
        //     let resultado = parseFloat(numUm) + parseFloat(numDois);

        //     res.send(`Resultado da soma dos números ${numUm} e ${numDois} = ${resultado}`);
        // } else {
        //     return res.send(`Digite um operação válida`);
        // }

        // //Subtração
        // if (operacao = "subtracao") {
        //     let resultado = parseFloat(numUm) - parseFloat(numDois);

        //     res.send(`Resultado da subtração dos números ${numUm} e ${numDois} = ${resultado}`);
        // } else {
        //     return res.send(`Digite um operação válida`);
        // }

        // //Multiplicação
        // if (operacao = "multiplicacao") {
        //     let resultado = parseFloat(numUm) * parseFloat(numDois);

        //     res.send(`Resultado da multiplicação dos números ${numUm} e ${numDois} = ${resultado}`);
        // } else {
        //     return res.send(`Digite um operação válida`);
        // }

        // //Divisão
        // if (operação = "divisao") {
        //     let resultado = parseFloat(numUm) / parseFloat(numDois);

        //     res.send(`Resultado da divisão dos números ${numUm} e ${numDois} = ${resultado}`);
        // } else {
        //     return res.send(`Digite um operação válida`);
        // }

        res.send(`Resultado da ${op} dos números = ${result}`);
    } catch (error) {
        res.status(400).send(`${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});