// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.

// 1 primo punto mettere delle email lista
/*
var email = ['pippo@gmail.com', 'palla@gmail.com', 'pincopalla@gmail.com'];
console.log(email);
// 2
var accesso = prompt('inserisci email').toLowerCase() ;
console.log(accesso);
// 3
var accessoTrovato = ('Email sbagliata spiacente');
// 4 DAI SE FALSO
for (var i = 0; i < email.length; i++) {
    console.log(email[i]);

    if(email[i] === accesso) {
        accessoTrovato = ('Email corretta puoi entrare');
    }
}
// 5 DAI SE E' VERO 
if(accessoTrovato === true) {
    console.log('entri')
} else {
    console.log('non entri')
} 
// 6 STAMPA NELLA PAGINA HTML
document.getElementById('email-box').innerHTML = accessoTrovato;

*/



/* GIOCO DEI DADI */
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1  NUMERO GIOCATORE RANDOM DA 1 A 6 PER IL GIOCATORE 
var utente = Math.floor(Math.random() * 6) +1;
console.log('numero utente' , utente);
document.getElementById('utente-dado').innerHTML = 'Dado utente : ' + utente;
// 2 NUMERO (generato grazie a math.random)COMPUTER RANDOM DA 1 A 6 PER IL COMPUTER
var computer = Math.floor(Math.random() * 6) +1;
console.log('numero computer' , computer);
document.getElementById('computer-dado').innerHTML = 'Dado pc : ' + computer;

// 3 
if (utente > computer) {
    console.log(utente > computer);
    document.getElementById('hai-vinto').innerHTML = 'Hai vinto!!';
} else if ( utente < computer) {
    console.log(utente < computer);
    document.getElementById('hai-vinto').innerHTML = 'Hai perso!!';
} else  {
    console.log(utente == computer);
    document.getElementById('hai-vinto').innerHTML = 'PAREGGIO';
}


// 4 STABILISCI IL VINCITORE IN BASE A CHI HA IL PUNTEGGIO PIU' ALTO












