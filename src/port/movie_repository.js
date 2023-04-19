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
};

module.exports = MovieRepository;