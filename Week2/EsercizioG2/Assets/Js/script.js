var aldo = 'aldo,';
let cliente = 'cliente,';
const x = '3.14';

document.getElementById('concatena').innerHTML = aldo + ' ' + cliente + ' ' + x;
var part2 = aldo+ ' ' +cliente+ ' ' + x;
document.getElementById('concatena2').innerHTML = part2;

var nome1 = 'mario';
document.getElementById('var').innerHTML = nome1;
{
    let nome1 = 'carla';
    document.getElementById('let').innerHTML = nome1;
}
document.getElementById('final').innerHTML = nome1;
var nome1 = 'mario';
document.getElementById('let2').innerHTML = nome1;
{
    let nome1 = 'carla';
    document.getElementById('let3').innerHTML = nome1;
    document.getElementById('final2').innerHTML = nome1;
}

var primoN = 15;
var Addizione = primoN + primoN;
var sottrazione =  primoN - 10;


document.getElementById('iniziale').innerHTML  += primoN;
document.getElementById('valore1').innerHTML  += Addizione + ',' + ++Addizione ;
document.getElementById('valore2').innerHTML  += sottrazione  + ',' + --sottrazione;
document.getElementById('valore3').innerHTML  += primoN * 3;
document.getElementById('valore4').innerHTML  +=  primoN / 3;
document.getElementById('valore5').innerHTML  +=  primoN + ' ' + 'è un numero';
