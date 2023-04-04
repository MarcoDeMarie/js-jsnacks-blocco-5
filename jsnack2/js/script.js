const studenti=[
  {
    firstName: 'Fabio',
    lastName: 'Fabianini',
    matricola: '28759',
    voti:[ 15, 21, 28, 18,]
  },
  {
    firstName: 'Mario',
    lastName: 'Mariolini',
    matricola: '75377',
    voti:[ 17, 19, 18, 24,]
  },
  {
    firstName: 'Luca',
    lastName: 'Luchini',
    matricola: '47454',
    voti:[ 27, 21, 24, 22,]
  },
  {
    firstName: 'Maria',
    lastName: 'Giovanna',
    matricola: '65474',
    voti:[ 18, 20, 21, 18,]
  },
  {
    firstName: 'Anna',
    lastName: 'Stefania',
    matricola: '23542',
    voti:[ 30, 30, 29, 25,]
  },
  {
    firstName: 'Francesca',
    lastName: 'Lucia',
    matricola: '23425',
    voti:[ 25, 23, 28, 30,]
  }
];


const elencoMedia = [];

studenti.forEach(studente =>{
  let somma = 0;
  studente.voti.forEach(voto => somma += voto);
  elencoMedia.push({
    firstName: studente.firstName,
    lastName: studente.lastName,
    matricola: studente.matricola,
    media: somma / studente.voti.length,
  })
})

console.log(elencoMedia)

