let mainSection = document.querySelector("#main-section");
fetch("https://ghibliapi.herokuapp.com/films")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        console.log(data[0].title); // first movie only

        let movieData = data;

        for (let movie of movieData) {
            console.log(movie.title);
        }
    });