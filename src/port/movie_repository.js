const { FilmeModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new FilmeModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await FilmeModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { produtora: data.produtora };
            const result = await FilmeModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await FilmeModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = MovieRepository;