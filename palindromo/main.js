/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

// chiedere all'utente una parola

let parola = prompt('Inserisci una parola');

// dividi la parola 
let lettereParola = parola.split('');
console.log(lettereParola);

// inverti le lettere della parola
let lettereInvertite = lettereParola.reverse();

// riunisci le lettere
let parolaInvertita = lettereInvertite.join('');
console.log(parolaInvertita);

// se la parola invertita è uguale alla parola iniziale la parola è palindroma
if(parolaInvertita == parola){
    console.log('la parola è palindroma');
}
else{
    console.log('la parola non è palindroma');
}