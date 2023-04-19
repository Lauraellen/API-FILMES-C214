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

it('Caso válido', () => {
    const result = Validation.update({
        nome: "Gato de botas",
        produtora: "Universal Pictures",
        ano: "2023",
        imdb: "8.5"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem algum parâmetro', () => {
    const result = Validation.update({
        nome: "Gato de botas",
        ano: "2023",
        imdb: "8.5"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - filme não encontrado', () => {
    const result = Validation.delete({
        
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.delete({
        nome: "Gato de botas",
    });
    expect(result).toEqual(undefined);
});