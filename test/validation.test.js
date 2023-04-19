const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Gato de botas 2",
        produtora: "Universal Pictures",
        ano: "2023",
        imdb: "7.5"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "Universal Pictures",
        ano: "2023",
        imdb: "7.5"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});