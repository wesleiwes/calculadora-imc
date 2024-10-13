const IMC = document.getElementById("btn-calculate");

function calculeIMC()
{
    const resultado = document.getElementById("resultado");
    const  nome = document.getElementById("idade").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    if (idade !== '' && altura !== '' && peso !== '')
    {
        var alturaEmMetro = (altura/100);
        var teste = (peso/(alturaEmMetro*alturaEmMetro)).toFixed(1);

            var classificacao = '';
        if(teste < 18.5){
            classificacao = 'abaixo do peso';
        }else if(teste <= 24.9){    
            classificacao = 'com peso normal';
        }else if(teste <= 29.9){
            classificacao = 'com Sobrepeso';
        }else if(teste <= 34.9){
            classificacao = 'com obesidade (Grau 1)';
        }else if(teste <= 39.9){
            classificacao = 'com obesidade (Grau 2)';
        }else {
            classificacao = 'com obesidade (Grau 3)';
        }

        resultado.textContent = `Olá ${nome}, seu IMC é: ${teste}, e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Por favor, preencha todos os campos.';
    }
}

IMC.addEventListener("click", calculeIMC);
