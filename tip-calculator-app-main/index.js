const campos = document.querySelector('#campo');
const numPeople = document.querySelector('#numPeople')
const outputValor = document.getElementById('outputValor')
const outputPessoas = document.getElementById('outputPessoas')
const btnMostrar = document.querySelector('#btn');
const num1 = document.getElementById('5')
const num2 = document.getElementById('10')
const num3 = document.getElementById('15')
const num4 = document.getElementById('25')
const num5 = document.getElementById('50')

btnMostrar.addEventListener('click', ()=>{
    let valor = Number(campos.value);
    let pessoas = Number(numPeople.value);

    if(valor == 0 && pessoas == 0){
        alert('Digite um valor válido');
    }
    else{
       let resposta = valor / pessoas

       outputPessoas.innerHTML = `$${resposta.toFixed(2)}`
       campos.value = ''
    }
});
num1.addEventListener('click', ()=>{
    let valor = Number(campos.value);
    let resposta = (valor * 0.05)
    outputValor.innerHTML = `$${resposta.toFixed(2)}`
});
num2.addEventListener('click', ()=>{
    let valor = Number(campos.value);
    let resposta = (valor * 0.10)
    outputValor.innerHTML = `$${resposta.toFixed(2)}`
});
num3.addEventListener('click', ()=>{
    let valor = Number(campos.value);
    let resposta = (valor * 0.15)
    outputValor.innerHTML = `$${resposta.toFixed(2)}`
});
num4.addEventListener('click', ()=>{
    let valor = Number(campos.value);
    let resposta = (valor * 0.25)
    outputValor.innerHTML = `$${resposta.toFixed(2)}`
});
num5.addEventListener('click', ()=>{
    let valor = Number(campos.value);
    let resposta = (valor * 0.50)
    outputValor.innerHTML = `$${resposta.toFixed(2)}`
});