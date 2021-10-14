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
            // console.log(movie.title);
            let movieOption = document.createElement("option");
            movieOption.textContent = movie.title;
            movieOption.value = movie.title;
            movieTitlesSelection.append(movieOption);
        }

        /* Select dropdown list */
        let dropDownMovies = document.querySelector("#movie-titles-selection");
        /* Select `display-info` section where movie title will go */
        let displayInfo = document.querySelector("#display-info");

        /* Event Listener on dropdown list */
        dropDownMovies.addEventListener("change", (e) => {
            for (let movie of movieData) {
                if (dropDownMovies.value === movie.title) {
                    console.log(movie.title);
                    displayInfo.innerHTML = `<h3>${movie.title}</h3>
                    <p id="release-year"></p>
                    <p id="movie-description"></p>`;
                }
            }
        });



    })
    .catch((err)=>{
        console.log(err);
    })