// Assignment 5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// console.log(game.releases["Oath In Felghana"]);
// console.log(Object.keys(game.releases)[0]);

// Write Your Destructuring Assignment/s Here
let { title: t, developer: d } = game;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

let { releases: { o = Object.keys(game.releases)[0], "Oath In Felghana": [u, j]} } = game;
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

let { releases: { a = Object.keys(game.releases)[1] } } = game;
console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

let { releases: { "Ark Of Napishtim": { US: u_price, JAP: j_price } , Origin:or } } = game;
console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD