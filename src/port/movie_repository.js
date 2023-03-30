const { MovieModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await MovieModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

module.exports = MovieRepository;