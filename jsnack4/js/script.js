const studenti=[
  {
    id: 213,
    name: 'Marco della Rovere',
    voti: 78,
  },
  {
    id: 110,
    name: 'Paola Cortellessa',
    voti: 96,
  },
  {
    id: 250,
    name: 'Andrea Mantegna',
    voti: 48,
  },
  {
    id: 145,
    name: 'Gaia Borromini  ',
    voti: 74,
  },
  {
    id: 196 ,
    name: 'Luigi Grimaldello ',
    voti: 68,
  },
  {
    id: 102 ,
    name: 'Piero della Francesca',
    voti: 50,
  },
  {
    id: 120 ,
    name: 'Francesca da Polenta',
    voti: 84,
  },
];

const upperCaseList = [];


studenti.forEach(studente =>{
  upperCaseList.push(studente.name.toUpperCase())
})

console.log(upperCaseList)



const elencoOver70 = studenti.filter((studente) =>{
  if(studente.voti > 70) return true;
  return false;
})

console.log(elencoOver70)

const elencoOver120 = studenti.filter((studente) =>{
  if(studente.voti > 70 && studente.id >= 120) return true;
  return false;
})

console.log(elencoOver120)





