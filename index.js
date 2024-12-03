const app = require("express")();

const port = process.env.PORT ?? 3000;

app.get("/**/:cep", async (req, res) => {
    const { cep = "63031185" } = req.params;

    return res.json({
        "city": {
            "name": "Volta Redonda",
            "code": cep
        },
        "country": "BRA",
        "postalCode": "27264-530",
        "street": "João de Carvalho",
        "streetSuffix": "Rua",
        "additionalInformation": "",
        "district": "São Lucas",
        "state": "RJ"
    })
});

app.listen(port, () => console.log("Listening on", port))