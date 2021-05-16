const btn = document.querySelector(".button2");
btn.onclick = function(){clear()};


function clear() {
    const edit = document.querySelector(".span1");
    edit.innerHTML="";
    const input = document.querySelector(".input");
    input.value = "";    
    return offButton(input.value)

}

//foi necessário o return no final do if,para impedir que este 
//script fique rodando em segundo plano,porque inferimos que
//input.value  é igual uma string vazia
function offButton(item){
    if(item === ""){
    const button = document.querySelector(".button2");
    button.disabled = true;
    button.style.cursor = "not-allowed";
    const nextButton = document.querySelector(".button1");
    nextButton.disabled = false;
    nextButton.style.cursor = "pointer";
    return;
      }
}



