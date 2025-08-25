const express = require('express');
const app = express();
const PORT = 8081;

app.get("/ano/:ano", (req, res) => {
    try {
        const { ano } = req.params;
        const anoNum = parseInt(ano);

        if (isNaN(anoNum)) {
            return res.status(400).send("O valor do ano precisa ser um número válido.");
        }

        const Bissexto = (anoNum % 4 === 0 && anoNum % 100 !== 0) || (anoNum % 400 === 0);

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
