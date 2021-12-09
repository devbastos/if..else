// if..else

// se a hora estiver entre 06:00 e 12:00 : 'Bom dia'
// se a hora estiver entre 12:00 e 18:00 : 'Boa Tarde'
// caso contrario : 'Boa noite'

let hora = 23;

if (hora > 6 && hora < 12) {
    console.log('Bom Dia!');

} else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde!');

} else {
    console.log('Boa Noite!');
}