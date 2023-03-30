const Movie = require('../application/movie_service');
const Utils = require('../utils/utils');

const route = '/movie';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Movie.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.get(`${route}/list`, async (req, res) => {
        const response = await Movie.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};