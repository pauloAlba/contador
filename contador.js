// componentes teclado
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let btn7 = document.querySelector(".btn7")
let btn8 = document.querySelector(".btn8")
let btn9 = document.querySelector(".btn9")
let btnZero = document.querySelector(".zero")
let btnDot = document.querySelector(".dot")



let btnMais = document.querySelector(".contMais")
let btnMenos = document.querySelector(".contMenos")
let btnBackspace = document.querySelector(".btn-backspace")

let qtd = document.querySelector(".qtd").textContent = 1

let multplo = 1

btnMais.addEventListener("click", function ()  {
    multplo += 1
    document.querySelector(".qtd").textContent = multplo
    
})
btnMenos.addEventListener("click", function () {
    if(multplo != 1){
        multplo += -1
        document.querySelector(".qtd").textContent = multplo
    }
 })
    

let btnAdicionar = document.querySelector(".btn-adicionar")
let btnRemover = document.querySelector(".btn-remover")
let btnZerar = document.querySelector(".zerar")

let total = document.querySelector(".total").textContent
total = 0

document.querySelector(".total").textContent = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

btnAdicionar.addEventListener("click", somar)
btnRemover.addEventListener("click", remover)
btnZerar.addEventListener("click", zerar)

function somar(){
    let containerInput = document.querySelector(".containerInput").textContent
    if(containerInput != ""){
        num1 = Number(containerInput).toFixed(2)
        total += num1 * multplo
        // adiciona formatação a variável total
        document.querySelector(".total").textContent = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.querySelector(".containerInput").textContent = ""
        let li = document.createElement("li")
        li.textContent = "R$ " + num1 + " (" + multplo + ")"
        let ul = document.querySelector("ul")
        ul.appendChild(li)
        document.querySelector(".qtd").textContent = 1
        multplo = 1
        return
    } 

}

function remover(){
    let containerInput = document.querySelector(".containerInput").textContent
    num1 = Number(containerInput)
    let li = document.querySelectorAll("li")
    let list = Array.from(li)

    for(let i = 0; i < list.length; i++){

        for(li of list){
            if(li.textContent == "R$ " + num1.toFixed(2) + " (" + multplo + ")"){
            let ul = document.querySelector("ul")
            ul.removeChild(li)
            document.querySelector(".containerInput").textContent = ""
            total -= num1 * multplo
            // adiciona formatação R$ a variável total
            document.querySelector(".total").textContent = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            document.querySelector(".qtd").textContent = 1 
            multplo = 1
            return
            }
          
        }

    }
}

function zerar(){
    location.reload()
    let li = document.querySelectorAll("li")
    let list = Array.from(li)
    document.querySelector(".total").textContent = 0
    document.querySelector(".qtd").textContent = 1 
    for(let i = 0; i < list.length; i++){
    list[i].classList.add("remover")
    return
}
}


btnBackspace.addEventListener("click", backspace)

function backspace(){
    let containerInput = document.querySelector(".containerInput").textContent
    if(containerInput != ""){
        let array = containerInput.slice(0,-1);
        return document.querySelector(".containerInput").textContent = array
    }
}


// botões

btn1.addEventListener("click", digito1)


function digito1 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 1
    
}


btn2.addEventListener("click", digito2)


function digito2 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 2
}


btn3.addEventListener("click", digito3)

function digito3 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 3
}

btn4.addEventListener("click", digito4)

function digito4 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 4
}

btn5.addEventListener("click", digito5)

function digito5 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 5
}

btn6.addEventListener("click", digito6)

function digito6 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 6
}

btn7.addEventListener("click", digito7)

function digito7 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 7
}
btn8.addEventListener("click", digito8)

function digito8 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 8
}
btn9.addEventListener("click", digito9)

function digito9 (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 9
}
btnZero.addEventListener("click", digitoZero)

function digitoZero (){
    let containerInput = document.querySelector(".containerInput")
    containerInput.textContent += 0
}

btnDot.addEventListener("click", digitoDot)

function digitoDot (){
    let containerInput = document.querySelector(".containerInput")
    if(containerInput.textContent != ""){
       return containerInput.textContent += "."
    } 
}

