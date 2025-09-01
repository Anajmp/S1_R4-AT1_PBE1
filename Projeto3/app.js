const express = require('express');
const app = express();
const PORT = 8081;

// Rota para operações matemáticas
app.get("/operacao/:tipo", (req, res) => {
    try {
        const { tipo } = req.params;  //Definirá a constante tipo como parametro         
        const { numUm, numDois } = req.query;  //Definirá a constante numUm e numDois como query

        const n1 = parseFloat(numUm); //O valor (string) de "numUm" será difinido como número e esse núemro chamará n1
        const n2 = parseFloat(numDois); //O valor (string) de "numDois" será difinido como número e esse núemro chamará n2
        let resultado; //Armazenar o resultado

        //Identificar se n1 e n2 é um número
        if (isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Os valores devem ser números válidos.");
        }

        //Identifica qual tipo de operação será utilizada e caso for, o que irá acontecer
        switch (tipo) {
            case "soma":
                resultado = n1 + n2;
                break;
            case "subtracao":
                resultado = n1 - n2;
                break;
            case "multiplicacao":
                resultado = n1 * n2;
                break;
            case "divisao":
                if (n2 === 0) return res.status(400).send("Não é possível dividir por 0.");
                resultado = n1 / n2;
                break;
            default:
                return res.status(400).send("Operação inválida. Use: soma, subtracao, multiplicacao ou divisao.");
        }

        res.send(`Resultado da ${tipo} dos números = ${resultado}`);
    } catch (error) {
        res.status(500).send(`Erro no servidor: ${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
