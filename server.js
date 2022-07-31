const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json()); // estou avisando ao express: use a formatação tipo json.

//resourse eh um objeto, uma entidade! dados associados a ele, etc...
//Verbos HTTP
//GET:Receber dados de um Resource.
//POST: Enviar dados ou informações para serem processados por um Resource.
//PUT: Atualizar dados de um Resource.
//DELETE: Deletar um Resource

app.get("/clients", function (req, res) {
    //o /clients eh o "endpoint"
    res.json(data);
}); // pronto para usar no EXPRESS

app.get("/clients/:id", function (req, res) {
    const {
        id
    } = req.params; //parametros da requisição
    const client = data.find((cli) => (cli.id = id)); // Procura o cliente de ID igual ao ID que eu pedi e joga na minha variável 'client'

    if (!client) return res.status(204).json(); //SE o retorno nao houver resposta(res), o programa retorna 204=não há conteúdo

    res.json(client); //aqui é a saída de resposta para o que eu pedi
});

app.post("/clients", function (req, res) {
    const {
        name,
        email
    } = req.body;
    // salvar

    res.json({
        name,
        email
    }); // to enviando a resposta de volta pro meu clients (insomnia)
});

app.put("/clients/:id", function (req, res) {
    const {
        id
    } = req.params;
    const client = data.find((cli) => cli.id == id);

    if (!client) return res.status(204).json();

    const {
        name
    } = req.body;

    client.name = name;

    res.json(client);
});

app.delete("/clients/:id", function (req, res) {
    const {
        id
    } = req.params;
    const clientsFiltered = data.filter((client) => client.id != id);

    res.json(clientsFiltered);
});

app.listen(3000, function () {
    console.log("Server is running...");
});