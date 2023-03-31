const fs = require('fs');
const os = require('os')
var user = os.userInfo();
const notes = require('./notes');
//const _ = require('lodash');

let command = process.argv[2];
console.log("Komenda : ", command);
console.log(process.argv);

if(command === 'add'){
    console.log('Dodawanie nowej notatki');
}
    else if(command === 'list'){
        console.log('Listowanie notatki');
    }
    else if(command === 'read'){
        console.log('Odczyt notatki');
    }
    else if(command === 'remove'){
        console.log('Kasowanie notatki');
    }
    else{
        console.log('Nie rozpoznana komenda!');
    }

/*
let res = notes.addNote();
console.log(res);
*/

/*
let suma = notes.addSuma(5, 5);
console.log(suma);
*/

//fs.appendFile('powitanie.txt', 'Hello JS!');

//fs.appendFileSync('powitanie.txt', 'Hello JS!' + user.username + "!");
//fs.appendFileSync('powitanie2.txt', `Witaj ${user.username} !Masz ${notes.age}`);


/* fs.appendFile('powitanie.txt', 'Hello JS!', function(err){
if(err){
    console.log('problem z dostepem do pliku!')
}
});
console.log(user); */
console.log('Startowa app.js')