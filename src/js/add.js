function average(){
    let number = document.querySelector("#input1").value;
    const numbers = number.split(",")
    if(numbers.length != 3){
        alert("Atenção são apenas 3 números")
        return
    }else{
        let average =  numbers.reduce((acc,item)=> acc += parseFloat(item),0);
        const results = average/3;
        const message = `Soma da media ponderada é ${results.toFixed(2)}`;
        return  send(message);
    }
}

function imc(){
    const height = document.querySelector("#input1").value;
    const weight = document.querySelector("#input2").value;
    if(height < 1  || weight <  1){
        alert("Precisa de 1 numero no campo")
        return;
    }else{
        const results =  parseFloat(weight)/(parseFloat(height)*parseFloat(height)); 
        const message = `Resultado do seu IMC é ${results.toFixed(2)}kg/m²`
        return send(message)
    }
}

function bigger(){
    let number = document.querySelector("#input1").value;
    const numbers = number.split(",")
    if(numbers.length != 3){
        alert("Atenção são apenas 3 números")
        return
    }else{
        const bigger = numbers.reduce( function(acc,item){ 
            if( parseFloat(acc) > parseFloat(item)){
                return acc;
            }else{
                return item;
            }     
        },0);
        const message =  `${bigger} é seu maior numero`
        return send(message); 
     
    }
}

function age(){
    let number = document.querySelector("#input1").value;
    console.log(number)
    if(number < 1 ){
        alert("Precisa de  1 número no campo")
        return
    }else{
        const message = parseFloat(number) < 18? "Você e de menor":"Você é de maior"
        return send(message); 
     
    }
}





function send(prop){
    const edit = document.querySelector(".span1");
    edit.innerHTML = prop ;
    controlButton1(); 
}

function controlButton1(){
    const button = document.querySelector(".button1");
    button.disabled = true;
    button.style.cursor = "not-allowed";
    controlButton2();
}

function controlButton2(){
    const button = document.querySelector(".button2");
    button.disabled = false;
    button.style.cursor = "pointer";

}




