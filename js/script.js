// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.
// 1 primo punto mettere delle email lista

var email = ['pippo@gmail.com', 'palla@gmail.com', 'pincopalla@gmail.com'];
console.log(email);
// 2
var accesso = prompt('inserisci email').toLowerCase() ;
console.log(accesso);

var accessoTrovato = ('Email sbagliata spiacente');

for (var i = 0; i < email.length; i++) {
    console.log(email[i]);

    if(email[i] === accesso) {
        accessoTrovato = ('Email corretta puoi entrare');
    }
}
// 
if(accessoTrovato === true) {
    console.log('entri')
} else {
    console.log('non entri')
}
document.getElementById('email-box').innerHTML = accessoTrovato;
















