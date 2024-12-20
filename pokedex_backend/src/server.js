const express = require('express');
const cors = require('cors');
const {pokemonRouter} = require('./routes/pokemon');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.seeders();

        this.middlewares();
        this.routes();
    }

middlewares(){
    this.app.use(express.json());
    this.app.use(cors());
}

routes(){
    this.app.use('/pokemon', pokemonRouter);
}

seeders(){
    require('./seeds/pokemon').pokemonSeeder();
}

start() {
    this.app.listen(this.port, () => {
        console.log('Servidor corriendo en el puerto' + this.port);
    });
}
}

module. exports = {
    Server
};


