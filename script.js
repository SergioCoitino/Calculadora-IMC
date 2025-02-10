const nome = document.querySelector ('#nome')
const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)) .toFixed(2)
        let classification = ''

        if (imc < 18.5) {
            classification = 'Abaixo do peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        }else if (imc < 30) {
            classification = 'Acima do peso'
        }else if (imc < 35) {
            classification = 'Obesidade grau I'
        }else if (imc < 41) {
            classification = 'Obesidade grau II'
        }else {
            classification = 'Obesidade grau III'
        }

        resultado.innerHTML = `IMC: ${imc}. (${nome.value}: ${classification})`
    } else {
        resultado.innerHTML = 'Preencha os campos'
    }
}
















// const button = document.getElementById("button");
// const nome = document.getElementById("nome");
// const peso = document.getElementById("peso");
// const altura = document.getElementById("altura");
// const resultado = document.getElementById("resultado");


// const getText = (imc) => {
//     if(imc > 40) return "Obesidade grau III";
//     if(imc > 35) return "Obesidade grau II";
//     if(imc > 30) return "Obesidade grau I";
//     if(imc > 25) return "Levemente acima do peso";
//     if(imc > 18.5) return "Peso ideal";
//     return "Abaixo do peso";
// }

// const imcCalc = () => {
//     if(!nome.value || !altura.value || !peso.value) return resultado.textContent = "Preencha todos os campos";

//     const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
//     resultado.textContent = `${nome.value} = ${getText(valorImc)}`;
// }

// button.addEventListener('click', imcCalc);