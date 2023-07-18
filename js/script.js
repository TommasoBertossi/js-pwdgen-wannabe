let nomeUtente;
let colorePreferito;
let passwdSicura;


nomeUtente = prompt("Come ti chiami?");
colorePreferito = prompt("Qual è il tuo colore preferito?")
passwdSicura = nomeUtente + colorePreferito + "21"
document.getElementById("passwd").innerHTML = passwdSicura;