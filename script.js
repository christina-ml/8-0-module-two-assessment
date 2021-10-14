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
        dropDownMovies.addEventListener("change", () => {
            for (let movie of movieData) {
                /* Find `release-year` and `movie-description` */
                let releaseYear = movie.release_date;
                let movieDescription = movie.description;

                if (dropDownMovies.value === movie.title) {
                    console.log(movie.title);
                    displayInfo.innerHTML = `<h3>${movie.title}</h3>
                    <p id="release-year">${releaseYear}</p>
                    <p id="movie-description">${movieDescription}</p>`;
                }
            }
        });


        /* REVIEW Section */
        /* Add Event Listener on `submit-button` - on click */
        /* Add the review to the empty ul */
        let submitList = document.querySelector("#review-form ul");

        let reviewForm = document.querySelector("#review-form");
        reviewForm.addEventListener("submit", (event)=>{
            event.preventDefault(); // stops page refresh

            /* make input field blank after each input is submitted */
            let reviewInput = document.querySelector("#review-field");
            // reviewInput.value = "";

            /* Get display-info h3 title */
            let movieHeader = document.querySelector("#display-info h3")

            /* Create a list item element to add to empty ul */
            let li = document.createElement("li");
            li.innerHTML = `<strong>${movieHeader.textContent}: </strong>${reviewInput.value}`
            // <li>
            //     <strong>BlahBlahBlah:</strong> reviewInput
            // </li>
            /* Append it to our page */
            submitList.append(li);
        });

    })
    .catch((err)=>{
        console.log(err);
    })