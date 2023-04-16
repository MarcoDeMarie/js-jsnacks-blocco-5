const biciclette =[
  {
    name: 'bici 1',
    weight: 10
  },
  {
    name: 'bici 2',
    weight: 15
  },
  {
    name: 'bici 3',
    weight: 20
  },
  {
    name: 'bici 4',
    weight: 25
  }
];

let biciLight = biciclette[0];

biciclette.forEach(bici => {
  if(bici.weight < biciLight.weight) biciLight = bici
})

const {name,weight} = biciLight;

console.log(biciLight)