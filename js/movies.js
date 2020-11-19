(function() {
    'use strict';
}());


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        this.numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', "");

        while (this.numberOfFilms == '' || this.numberOfFilms == null || isNaN(this.numberOfFilms)) {
            this.numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', "");
        }
    },
    RememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один изпоследних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");

            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');

            } else {
                console.log("Error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {

        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 & personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр подномером ${i}`, '');
        }
    },
    toggleVisibleMyDB: function() {
        if (!this.private) {
            this.private = true;
        } else {
            this.private = false;
        }

    }
};