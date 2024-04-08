
let numero = document.getElementById("multi")//Só serve para a function "tabuada()"
let result =document.getElementById("resultado")//Só serve para a function "tabuada()"
let base = "",numi, ultimo,nu2 , dece, vezes = "", suba = 0, mos1 = "", mos2 = ""
let quan, soma = 0
let fator, buzz

function sominha() {
    quan = Number(document.getElementById("quantidade").value)
    for(let i = 0; i < quan; i++){
        soma += i 
        
    } 
    alert(soma)
}
function tabuada(){
    nuMulti = Number(numero.value)
    result.innerHTML = ' '
    for(let i = 0; i<=10; i++){
        result.innerHTML += nuMulti + " X " + i + " = " + (nuMulti * i) + "<br>"
    }

}
function diminuir(){
    for(let i = 10; i>=1; i--){
       console.log(i)
    }
    alert("Veja no console no 'inspercionar'")

}

function imparPar(){
    numi = Number(document.getElementById("imPar").value)
    console.log(numi)
    for(let contador = 0; contador < numi; contador++){
        if(contador % 2 == 0){
            base += "O " + contador + " é par" + "\n"
            console.log(contador)
        }else{
            base += "O " + contador + " é impar" + "\n"
            console.log(contador)
        }
    }
    alert(base)
}
function bobEsponja(){
    ultimo = Number(document.getElementById("qua1").value)
    for(let i = 1 ; i < ultimo; i++){
       vezes += (i * i) + "\n"
    }
    alert(vezes);
}

function subiuDeceu(){
    n2 = Number(document.getElementById("levante").value)
    for(let i = n2; i >= 0; i--){
        mos1 += i + "\n"
     }
    for(let e = 0; e <= n2 ; e++){
        mos2 += e + "\n"
    }
    alert("Crecente:\n\n" + mos2 + "Decreceste:\n\n" + mos1)
 
}
function fatorial(){
    let mostrar = "", num = 1
    fator = Number(document.getElementById("fato").value)
    for(let i = fator; i > 1; i--){
        num *= i 
        mostrar += i + " X "
     }
    alert(fator + "! = " + mostrar + "1 = " + num)
 
}
function aoInfinito(){
    let mostrar = document.getElementById('chamarBuzz')
    buzz = Number(document.getElementById("buzzlightyear").value)
    for(let i = 1; i <= buzz; i++){
        let fizzBuzz = false
        if(i % 3 === 0){
          mostrar.innerHTML += "Fizz <br>" 
          fizzBuzz = true 
        } 
        if(i % 5 === 0){
          mostrar.innerHTML += "Buzz <br>"
          fizzBuzz = true
        }
        else mostrar.innerHTML += "Nunhum = " + i + "<br>"
         
    }
}
