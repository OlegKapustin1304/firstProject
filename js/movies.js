(function() {
    'use strict';
}());

//Variables
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', "");

let lastMovie1,
    lastMovie2,
    rate1,
    rate2;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

lastMovie1 = prompt("Один изпоследних просмотренных фильмов?", "");
rate1 = +prompt("На сколько оцените его?", "");
lastMovie2 = prompt("Один изпоследних просмотренных фильмов?", "");
rate2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastMovie1] = rate1;
personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);