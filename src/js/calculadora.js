var Calculadora = {

    ADICAO: '+',
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',

    adicionar: function(num1, num2){

        return this.calcular(num1, num2, this.ADICAO);

    },
    subtrair: function(num1, num2){

        return this.calcular(num1, num2, this.SUBTRACAO);

    },
    dividir: function(num1, num2){

        if(num2 == 0){
            return "Erro";
        }

        return this.calcular(num1, num2, this.DIVISAO);

    },
    multiplicar: function(num1, num2){

        return this.calcular(num1, num2, this.MULTIPLICACAO);

    },
    // Refactory
    calcular(num1, num2, operacao){

        var resultado = 0;

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if(isNaN(num1) || isNaN(num2)){
            return 0;
        }

        switch (operacao) {
            case Calculadora.ADICAO:
                 resultado = num1 + num2;
                 break;
            case Calculadora.SUBTRACAO:
                 resultado = num1 - num2;
                 break;
            case Calculadora.DIVISAO:
                 resultado = num1 / num2;
                 break;
            case Calculadora.MULTIPLICACAO:
                 resultado = num1 * num2;
                 break;
            default: 
                 resultado = 0;
                 break;
        }

        return resultado;

    }
}

// usado na função 'require' do NODEJS
if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = Calculadora;
}