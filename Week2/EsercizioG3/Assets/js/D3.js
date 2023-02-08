/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 9 ;
var numero2 = 7 ;


if (numero1 > numero2) {
  document.getElementById('es1').innerHTML = numero1 ;
}

else {
  document.getElementById('es1').innerHTML = numero2 ;
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
var numero3 = 10;

if (numero3 != 5) {
  document.getElementById('es2').innerHTML = 'not equal' ;
}

else {
  document.getElementById('es2').innerHTML = 'equal' ;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero4 = (30 % 5);
 
if (numero4 ==0) {
  document.getElementById('es3').innerHTML = 'divisibile per 5' ;
}

else {
  document.getElementById('es3').innerHTML = 'non divisibile per 5' ;
}



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var numero5 = 3;
var numero6 = 7;
 
if ((numero5 + numero6==8) || (numero5 - numero6==8) || (numero5 ==8) || (numero6 ==8)) {
  document.getElementById('es4').innerHTML = 'verificato' ;
}

else {
  document.getElementById('es4').innerHTML = 'non verificato' ;
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
 var totalShoppingCart = 50 ;

 if ((totalShoppingCart > 50) ) {
  document.getElementById('es5').innerHTML = totalShoppingCart ;
}

else {
  document.getElementById('es5').innerHTML = totalShoppingCart + 10 ;
}



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nu, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.ova promozione nell'algoritmo
*/

var totalShoppingCart = 70 ;
var sconto = (totalShoppingCart * 20)/ 100;

if ((totalShoppingCart > 50) ) {
 document.getElementById('es6').innerHTML = totalShoppingCart - sconto ;
}

else {
 document.getElementById('es6').innerHTML = (totalShoppingCart - sconto) + 10;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var Numero1 = 1;
var Numero2 = 2;
var Numero3 = 3;

if ((Numero1 > Numero2) ) {
  document.getElementById('es7').innerHTML =  Numero1 + Numero2 + Numero3;
 }
 
 else {
  document.getElementById('es7').innerHTML = 'non verificato';
 }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var numero8 = 5;

if(typeof(numero8)==='number'){
  document.getElementById('es8').innerHTML = 'è un numero';
}
else {
  document.getElementById('es8').innerHTML = 'non è un numero';
 }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero9 = 6;

if(numero9 %2==0){
  document.getElementById('es9').innerHTML = 'è pari';
}
else {
  document.getElementById('es9').innerHTML = 'non è pari';
 }






/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZIO 10

 // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 
 let val = 4;
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';

console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


delete me.lastName;
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var array = [];
array.push('1','2','3','4','5','6','7','8','9','10');
document.getElementById('es14').innerHTML = array;/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array.splice(10,0)
/* SCRIVI QUI LA TUA RISPOSTA */
