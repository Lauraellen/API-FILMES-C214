const mongoose = require('mongoose');

const uri = `mongodb+srv://lauraellen:root123@cluster0.ywcsmof.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const FilmeSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    ano: String,
    imdb: String,
    produtora: String
});

const FilmeModel = mongoose.model('FilmeModel', FilmeSchema);

module.exports = {
    FilmeModel,
};