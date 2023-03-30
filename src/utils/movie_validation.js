const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    imdb: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    }
};


module.exports = {
    create,
};