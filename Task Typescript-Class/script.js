
class Movie {
    constructor(title,studio,rating){
this.title = title;
this.studio = studio;
this.rating = rating;

}
Movie_title() {
return `Title of the movie ${this.title}`;
}
Movie_studio() {        
return `Studio of the movie ${this.studio}`;
}
Movie_rating() {        
    return `Rating of the movie ${this.rating}`;
}
}


const Movie_obj = new Movie("Casino Royale","Eon Productions","PG­13");
console.log(Movie_obj.Movie_title());
console.log(Movie_obj.Movie_studio());
console.log(Movie_obj.Movie_rating());


