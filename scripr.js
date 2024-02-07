function calcularIMC(){
var altura = document.getElementById("altura").value;
var peso= document.getElementById("peso").value;


var imc = peso / (altura * altura);
var resultado = "Calculo do IMC:" + imc.toFixed(2);


if(imc > 40.0) {    
    resultado += "\nObesidade grau III Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente."

} else if(imc >= 35.0 && imc <= 39.9){
    resultado += "\nObesidade    grau II    Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde."
}else if(imc >= 30.0 && imc <= 34.9){
    resultado += "\nObesidade grau I Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
}else if(imc >= 25.0 && imc <= 29.9){
    resultado += "\nSobrepeso Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer."
}else if(imc >= 18.6 && imc <= 24.9){
    resultado += "\n Normal Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
}else if(imc >= 18.5){
    resultado += "\nAbaixo do normal   Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso"
}




document.getElementById("resultado").innerHTML = resultado;
console.log(resultado)
}