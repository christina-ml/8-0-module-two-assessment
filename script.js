// STEP 1 ---------  FETCH MOVIE DATA --------- 
fetch("https://ghibliapi.herokuapp.com/films")
    .then((res)=>{
        // parse the JSON data that comes back from our API call
        return res.json();
    })
    .then((movies)=>{
        console.log(movies);
        // STEP 2 ---------  POPULATE DROPDOWN WITH MOVIE TITLES FROM API DATA --------- 
        const dropdown = document.querySelector("#dropdown select");
        for (let movie of movies){
            const option = document.createElement("option");
            option.textContent = movie.title;
            option.setAttribute("value", movie.title);
            dropdown.append(option);
        }
    })

// STEP 3 ---------  DISPLAY SELECTED MOVIE'S DATA --------- 
// STEP 4 --------- ADD FUNCTIONALITY TO FORM TO LEAVE MOVIE REVIEW --------- 