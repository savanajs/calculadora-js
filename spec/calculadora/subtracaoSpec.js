describe("Suite de testes de subtração", function(){

    var Calculadora = require('../../src/js/calculadora.js');

    it('Deve retornar 5 para 8 e 3', function(){
       expect(Calculadora.subtrair(8, 3)).toEqual(5);
    });

    it('Deve retornar 5 para 8 e 3 em formato texto', function(){
        expect(Calculadora.subtrair('8','3')).toEqual(5);
    });

    it('Deve retornar 4 para 5.5 e 1.5', function(){
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
        expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4);
    });

    it('deve retornar 0 para valor 1 inválido', function() {
       expect(Calculadora.subtrair(undefined, 5)).toEqual(0);
    });

    it('deve retornar 0 para valor 2 inválido', function() {
        expect(Calculadora.subtrair(5, undefined)).toEqual(0);
     });

});