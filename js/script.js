'use strict';

// // const category = 'toys';

// // console.log(`https://someurl.com/${category}/5`);

// // const user = 'Ivan';
// // alert(`privet, ${user}`);

// ========================================

// // console.log('arr' + " - object");
// // console.log(4 + +"5");
// --------

// // let incr = 10,
// //     decr = 10;

// // // ++incr;
// // // --decr;

// // console.log(++incr);
// // console.log(--decr);

// // console.log(2*4 == 8);

// // const isCeked = false,
// //       isClose = false;
// // // console.log(isCeked || isClose);
// // // console.log(isCeked && isClose);
// // console.log(isCeked || !isClose);
// ==========================================
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один?', ''),
    b = prompt('На сколько?', ''),
    c = prompt('Один?', ''),
    d = prompt('На сколько?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



