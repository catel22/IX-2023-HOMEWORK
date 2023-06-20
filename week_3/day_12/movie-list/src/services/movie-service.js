import {collection, query, getDocs, addDoc} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Movie } from '../models/Movie';

class MovieService {
    constructor() {
        this.collection = 'movies';
    }

    async createMovie(movie) {
        // save movie passed in
        // use toJson function
        const collectionRef = collection(db, this.collection);
        // await becuase trying to save file to database
        const docRef = await addDoc(collectionRef, movie.toJson());

        // assign movie id
        movie.id = docRef.id;
        return movie;
    }

    async fetchMovies() {
        // we want a list of movies, in form of query snapshot
        const collectionRef = collection(db, this.collection);

        const querySnapshot = await getDocs(query(collectionRef));
        const movies = [];

        // for each movie we get back, push movie into the array
        querySnapshot.forEach((doc) => {
            movies.push(Movie.fromFirebase(doc));
        });

        return movies;
    }
}

const service = new MovieService();
export default service;