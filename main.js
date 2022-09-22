const vari = document.getElementById('print');
let redmessagem = document.getElementById("redmessage");
let colab = document.getElementById('colab');
const valorName = document.getElementById('valorName');
let nota = 0;
vari.innerText = nota;
const names = {nome1: "Rafael W.",nome2: "Kamila K.",nome3: "Wesley D.",nome4: "Railson A.",nome5: "Barbara L."}
const lupa = () =>{
    if (valorName.value == 4049405){
        colab.innerText = names.nome1;
    }else if (valorName.value == 4022869) {
        colab.innerText = names.nome2;
    }else if (valorName.value == 4052154) {
        colab.innerText = names.nome3;
    }else if (valorName.value == 4052044) {
        colab.innerText = names.nome4;
    }else if (valorName.value == 4062055) {
        colab.innerText = names.nome5;
    }else{
        alert("Colaborador não encontrado!");
    }
}
const Soma = () =>{
    nota++
    if (nota > 5){
        vari.style.color = "#e42a2aec";
        redmessagem.innerText = "Limite atingido";
    }else{
        vari.innerText = nota;
    };
}