const movies = [
  { name: "Avatar 3D", year: 2008, rating: 9 },
  { name: "Titanik 4D", year: 1997, rating: 7 },
  { name: "Forsaj 9 3D", year: 2020, rating: 4 },
  { name: "Qasoskorlar", year: 2012, rating: 6 },
];

// forEach

// movies.forEach((kino) => {
//   console.log(kino);
// });

// const yangiKinolar = [];

// movies.forEach((kino) => {
//   if (kino.year > 2010) {
//     yangiKinolar.push(kino);
//   }
// });

// console.log(yangiKinolar);

// filter

// movies.filter((kino) => {
//   return;
// });

// const filterKinolar = movies.filter((kino) => {
//   return kino.year > 2010;
// });

// console.log(filterKinolar);

// const filterKinolar = movies.filter((kino) => {
//   return kino.rating > 5;
// });

const filterKinolar = movies.filter((kino) => {
  return kino.name.includes("3D");
});

console.log(filterKinolar);
