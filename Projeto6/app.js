const express = require('express');
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {
    try {
        const { peso, altura } = req.query; //Definirá a constante peso e altura como query
        const pesoUm = parseFloat(peso); //O valor (string) de "peso" recebido será difinido como número e esse número chamará pesoUm
        const alturaUm = parseFloat(altura);//O valor (string) de "altura" recebido será difinido como número e esse número chamará alturaUm
        let classificacao;
        let va;

        //FIltro para indentificar se o peso ou altura será um número e igual ou menor que 0, caso seja, derá erro e retornará
        if (isNaN(pesoUm) || isNaN(alturaUm) || pesoUm <= 0 || alturaUm <= 0) {
            return res.status(400).send("Informe um peso e altura válidos");
        }
        //Irá fazer a conta do calculo do imc
        const imc = pesoUm / (alturaUm * alturaUm);
    
        //FIltro que vai identificar em qual classificação o imc calculado está
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            va=1
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
            va=2
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
            va=3
        } else if (imc>= 30 && imc < 39.9) {
            classificacao = "Obesidade";
            va=4
        }else{
            classificacao = "Obesidade Gravíssima";
            va=5
        }
        
        let emoji;
        switch (va) {
            case 1:
                emoji = "😣";
                break;
            case 2:
                emoji = "😌";
                break;
            case 3:
                emoji = "🫤";
                break;
            case 4:
                emoji = "😞";
                break;
            case 5:
                emoji = "😱";
                break;
            default:
                return res.status(400).send("Operação inválida.");
        }

        //Enviará o Imc calculado e a classificação em seguida
        res.send(`${emoji}${emoji} seu IMC: ${imc.toFixed(2)} você está na classificação "${classificacao}" `);
    } catch (error) {
        res.status(500).send(`Erro no servidor: ${error}`);
    }
});

//SEMPRE A ÚLTIMA LINHA DO CÓDIGO
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
