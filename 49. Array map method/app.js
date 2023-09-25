const sonlar = [2, 3, 4, 5, 6];

// forEach

// const qiymat = [];
// sonlar.forEach((son) => {
//   qiymat.push(son ** 2);
// });
// console.log(qiymat);

const mapSonlar = sonlar.map((son) => son ** 2);

console.log(mapSonlar);

const kinolar = [
  { name: "Avatar 3D", year: 2008, rating: 9 },
  { name: "Titanik 4D", year: 1997, rating: 7 },
  { name: "Forsaj 9 3D", year: 2020, rating: 4 },
  { name: "Qasoskorlar", year: 2012, rating: 6 },
];

// const mapKinolar = kinolar.map((kino) => {
//   return kino.rating + 1;
// });

// console.log(mapKinolar);

const mapKinolar = kinolar.map((kino) => {
  return { name: kino.name, year: kino.year, rating: kino.rating + 1 };
});

console.log(mapKinolar);
console.log(kinolar);
