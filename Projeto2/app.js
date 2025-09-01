const express = require('express');
const app = express();
const PORT = 8081;

app.get("/calculadora/:op", (req, res) => {
    try {

        const { op } = req.params //Definirá a constante op como parametro
        const { numUm, numDois } = req.query; //Definirá as constantes numUm e numDois como query
        const n1 = parseFloat(numUm); //O valor (string) de "numUm" será difinido como número e esse núemro chamará n1
        const n2 = parseFloat(numDois); //O valor (string) de "numDois" será difinido como número e esse núemro chamará n2

        let result = 0;
        if (isNaN(n1) || isNaN(n2)) {
            return res.status(400).send("Os valores devem ser números.");
        }

        //Identifica qual operação vai ser escolhida e caso seja, o que vai acontecer
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
                //se o dividendo for 0 ou se n1 ou n2 nao forem numeros, dará erro
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
        res.send(`Resultado da ${op} dos números = ${result}`);
    } catch (error) {
        res.status(400).send(`${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});