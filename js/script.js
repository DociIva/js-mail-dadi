// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.
// 1 primo punto mettere delle email lista

var email = ['pippo@gmail.com','palla@gmail.com','pincopalla@gmail.com'];
console.log(email);
// 2
var user = prompt('inserisci email'.toLowerCase());
for(var i = 0; i < email.length ; i++) {
    console.log(email[i]);
 if (email[i] === user);
  userFound = false;
  //break;
}
var userFound = true; 
if (userFound === true) {
    console.log(' utente trovato , puoi entrare');
} else {
    console.log('errore');
}






