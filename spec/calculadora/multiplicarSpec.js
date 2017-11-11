describe("Suite de testes de divisão", function () {
    
        var Calculadora = require('../../src/js/calculadora.js');

        it('deve retornar 6 para 2 e 3', function(){
            expect(Calculadora.multiplicar(2, 3)).toEqual(6);
        });

        it('deve retornar 6 para 2 e 3 em formato texto', function(){
            expect(Calculadora.multiplicar(2, 3)).toEqual(6);
        });

        it('deve retornar 4.5 para 1.5 e 3', function(){
            expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
        });

        it('deve retornar 0 para valor 1 invalido', function(){
            expect(Calculadora.multiplicar(undefined, 4)).toEqual(0);
        });

        it('deve retornar 0 para valor 1 invalido', function(){
            expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
        });
});