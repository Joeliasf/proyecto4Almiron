const valores = ["1","2","3","4","5","6","7","8","9","10","11","12",];
const palos = ["picas", "corazones", "tréboles", "diamantes"]

let valorCarta = 0;
let paloCarta = 0;
let primeraCartaMano = 0 ;
let segundaCartaMano = 0 ;
let primeraCartaManoDealer = 0;
let segundaCartaManoDealer = 0;
let cartaNueva = 0;
let cartaNuevaDealer= 0;
let ultimaCarta = 0;
let ultimaRondaCarta = 0;

let iniciarSimulador = document.getElementById("boton-iniciar")
iniciarSimulador.addEventListener("click", simulador)

function simulador(){
function cartaMano() {
    valorCarta = (Math.floor(Math.random() * (valores.length)+1));
    paloCarta = (Math.floor(Math.random() * (palos.length)));
    return (`${valorCarta} de ${palos[paloCarta]}`);
  }

function pedirCarta(){
    let primeraCarta = parseInt(prompt("Bienvenido al instructor de blackjack. Ingrese 1 para comenzar a jugar"));
    if (primeraCarta == 1){
        primeraCartaMano = cartaMano(valorCarta, palos[paloCarta])
    alert(`Su primera carta es un ${primeraCartaMano}`);
    }else {
        alert("Ingrese un número válido");
        pedirCarta()
    }
}
pedirCarta();

function pedirSegundaCarta(){
    let segundaCarta = parseInt(prompt("Ingrese 2 para ver su segunda carta"));
    if(segundaCarta===2){
    segundaCartaMano = cartaMano(valorCarta, palos[paloCarta])
    alert(`Su segunda carta es un ${segundaCartaMano}`)
} else{ 
    alert("Ingrese un número válido");
    pedirSegundaCarta()
}
}
pedirSegundaCarta();

const suma = (a,b) => a + b;

function sumaCartaManos(){
let cartasMano = suma(parseFloat(primeraCartaMano), parseFloat(segundaCartaMano));
    alert("sus cartas suman "+ cartasMano);
while (cartasMano>21){
    alert ("sus cartas superan 21, ha perdido")
    break;
}
}
sumaCartaManos();

function pedirCartasDealer() {
    let cartasDealer = parseInt(prompt("Ingrese 1 para ver las cartas del dealer"));
    if(cartasDealer===1){
    do{
    primeraCartaManoDealer = cartaMano(valorCarta, palos[paloCarta]);
    alert(`La primera carta del dealer es un ${primeraCartaManoDealer}`)
    segundaCartaManoDealer = cartaMano(valorCarta, palos[paloCarta])
    alert(`La segunda carta del dealer es un ${segundaCartaManoDealer}`)
}
    while (primeraCartaManoDealer>cartaMano);
}
else{
    alert("Ingrese un número válido");
    pedirCartasDealer()
}
}
pedirCartasDealer();

let cartasManoDealer = suma(parseFloat(primeraCartaManoDealer), parseFloat(segundaCartaManoDealer));
    alert("Las cartas del dealer suman "+ cartasManoDealer);
    while (cartasManoDealer>21){
        alert ("El dealer ha superado 21, usted ha ganado.")
        break;
    }
const sumaMultiple = (a,b,c) => a+b+c;

function pedirCartaNueva (){
    let pedirCartaBaraja = parseInt(prompt("Ingrese 1 si quiere pedir una carta. De lo contrario, ingrese 0"));
    if (pedirCartaBaraja===1) {
        cartaNueva = cartaMano(valorCarta, palos[paloCarta]);
        alert (`Su nueva carta es un ${cartaNueva}`);
    } else if (pedirCartaBaraja===0){
        alert (`Usted decidió no pedir.`);
    } else {
        alert (`Ingrese una opción válida`)
        pedirCartaNueva();
    }
}
pedirCartaNueva();

let nuevasCartasMano = sumaMultiple(parseFloat(primeraCartaMano), parseFloat(segundaCartaMano), parseFloat(cartaNueva));
    alert("Sus cartas ahora suman "+ nuevasCartasMano);
    while (nuevasCartasMano>21){
        alert ("Usted supero 21, ha perdido.")
        break;   
    }

function pedirCartaNuevaDealer (){
    let pedirCartaDealer = parseInt(prompt("Ingrese 1 si el dealer pidió una carta. Ingrese 0 si se plantó."));
    if (pedirCartaDealer===1) {
        cartaNuevaDealer = cartaMano(valorCarta, palos[paloCarta]);
        alert (`La nueva carta del dealer es un ${cartaNuevaDealer}`);
    } else if (pedirCartaDealer===0){
        alert (`El dealer no pidió.`);
    } else {
        alert (`Ingrese una opción válida`)
        pedirCartaNuevaDealer();
    }
}
pedirCartaNuevaDealer()

let nuevasCartasDealer = suma(parseFloat(cartasManoDealer), parseFloat(cartaNuevaDealer));
    alert("Las cartas del dealer ahora suman "+ nuevasCartasDealer);

function pedirUltimaCarta(){
    if (nuevasCartasMano<20){
    let pedirUnaUltimaCarta = parseInt(prompt("Ingrese 1 si quiere pedir otra carta. Ingrese 0 si se plantó."));
    if (pedirUnaUltimaCarta===1) {
        ultimaCarta = cartaMano(valorCarta, palos[paloCarta]);
        alert (`La nueva carta pedida es un ${ultimaCarta}`);
    } else if (pedirUnaUltimaCarta===0){
        alert (`Usted no pidió.`);
    } else {
        alert (`Ingrese una opción válida`)
        pedirUltimaCarta();
    }
}
}
pedirUltimaCarta();

let cartasFinales = suma(parseFloat(ultimaCarta), parseFloat(nuevasCartasMano));
    alert("Todas sus cartas ahora suman "+ cartasFinales);

function ultimaRonda (){
    if (cartasFinales<20){
    let pedirUltimaRonda = parseInt(prompt("Ingrese 1 si quiere pedir una última carta. Ingrese 0 si se planto."));
if (pedirUltimaRonda===1) {
    ultimaRondaCarta = cartaMano(valorCarta, palos[paloCarta]);
    alert (`la carta final es un ${ultimaRondaCarta}`);
} else if (pedirUltimaRonda===0){
    alert (`Usted no pidió.`);
} else {
    alert (`Ingrese una opción válida`)
    ultimaRonda();
        }
    }
}
ultimaRonda()

let ultimasCartas = suma(parseFloat(cartasFinales), parseFloat(ultimaRondaCarta));
alert("sus cartas finales suman "+ ultimasCartas);

if ((ultimasCartas>nuevasCartasDealer)&&(ultimasCartas<=21)||((nuevasCartasDealer>21))&&(ultimasCartas<=21)){
    alert (`Sus cartas suman ${ultimasCartas} y las cartas del dealer suman ${nuevasCartasDealer}`)
    alert("Usted ha ganado")
} else if ((ultimasCartas<nuevasCartasDealer)&&(nuevasCartasDealer<=21)||(ultimasCartas>21)){
    alert (`Sus cartas suman ${ultimasCartas} y las del dealer suman ${nuevasCartasDealer}`)
    alert("Usted ha perdido")
} else {
    alert (`Sus Cartas y las del dealer suman lo mismo, el dealer ha ganado.`)
}
let usuarioGanador = document.getElementById("ganador");
let usuarioPerdedor = document.getElementById("perdedor");

if ((ultimasCartas>nuevasCartasDealer)&&(ultimasCartas<=21)||((nuevasCartasDealer>21))&&(ultimasCartas<=21)){
    usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
    usuarioGanador.className = "ganador"
}else if ((ultimasCartas<nuevasCartasDealer)&&(nuevasCartasDealer<=21)||(ultimasCartas>21)){
    usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
    usuarioPerdedor.className = "perdedor"
}
}

/* let usuarioGanador = document.getElementById("ganador");
let usuarioPerdedor = document.getElementById("perdedor");

if ((ultimasCartas>nuevasCartasDealer)&&(ultimasCartas<=21)||((nuevasCartasDealer>21))&&(ultimasCartas<=21)){
    usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
}else if ((ultimasCartas<nuevasCartasDealer)&&(nuevasCartasDealer<=21)||(ultimasCartas>21)){
    usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
} */