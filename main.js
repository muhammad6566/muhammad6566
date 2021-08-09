//condition

// var name1 = +prompt('yoshingiz');
//1
// if (name1 < 18) {
//   console.log('oqishingiz kerak');
// } else if (name1 <= 50) {
//   console.log('ishlashingiz kerak');
// }else if (name1 <=59) {
//   console.log('yaqinda pensiyaga chiqasiz');
// }else if (name1 <=150) {
//   console.log('pensionerga oxshaysiz,hali tirik bolsangiz')
// }else {
//   console.log('Nimadir notogri ketib qoldi')
// }

// let firstName = prompt('ismingizni kiriting?');
// if (firstName +  'muhammad') {
//     console.log("Hello  boss" );
// }else if ( + 'Rashid') {
//     console.log('Hello guest')
// } 

var login = 'Iskandar';
var pass = 1996;
var user__login = prompt('ismingiz');

if ((user__login == login) && (user__pass == pass)) {
    console.log('Kirdingiz');
    var who = confirm('siz shu akkauntning egasimisiz ?')
    if (who == true) {
        console.log('Welcom');


    }
    else{
        console.log('akkaund buzib kirilgan');
    }
} else{
    console.log('kirmadingiz')
}