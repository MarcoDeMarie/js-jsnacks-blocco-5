const utenti=[
  {
    firstName: 'Fabio',
    lastName: 'Fabianini',
    Age: '21',
  },
  {
    firstName: 'Mario',
    lastName: 'Mariolini',
    Age: '68',
  },
  {
    firstName: 'Luca',
    lastName: 'Luchini',
    Age: '15',
  },
  {
    firstName: 'Maria',
    lastName: 'Giovanna',
    Age: '19',
  },
  {
    firstName: 'Anna',
    lastName: 'Stefania',
    Age: '80',
  },
  {
    firstName: 'Francesca',
    lastName: 'Lucia',
    Age: '14',
  }
];


const minorenni = utenti.filter((utente) =>{
  if(utente.Age < 18) return true;
  return false;
})

console.log(minorenni)

const over65 = utenti.filter((utente) =>{
  if(utente.Age >= 65) return true;
  return false;
})

console.log(over65)



