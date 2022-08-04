const express = require("express")
const server = express();

const PORT = 5000;

server.get('/', (req, res) => {
    res.json( { hello: "world" } );
})

server.listen(5000, () => {
    console.log(`\n*** Server running on http://localhost:${PORT}`)
})