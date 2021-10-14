let mainSection = document.querySelector("#main-section");
fetch("https://ghibliapi.herokuapp.com/films")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        let movieData = data;

        /* Select where movie title will go */
        let movieTitlesSelection = document.querySelector("#movie-titles-selection")

        /* Add each movie as an option element to the `select` section */
        for (let movie of movieData) {
            console.log(movie.title);
            let movieOption = document.createElement("option");
            movieOption.textContent = movie.title;
            movieOption.value = movie.title;
            movieTitlesSelection.append(movieOption);
        }
    })
    .catch((err)=>{
        console.log(err);
    })