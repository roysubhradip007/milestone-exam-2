const movieInput = document.getElementById("movieInput");
const wrapper = document.querySelector('.movieCardWrapper');

movieInput.addEventListener('keydown', async (e) => {
    if(e.key === 'Enter'){
        const inputValue = movieInput.value.trim();
        if(!inputValue) {
            console.log("Enter Valid Film Name");
            return;
        }
        const url = `http://www.omdbapi.com/?s=${inputValue}&apikey=187776e4`;
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.Search);

        const container = document.createElement('div');
        container.className = "movieCardContainer";

        data.Search.map((e) => {
            const eachMovie = document.createElement('div');
            eachMovie.className = "movieCard";
            const image = document.createElement('img');
            image.src = e.Poster;
            const movieTitle = document.createElement('h3');
            movieTitle.textContent = e.Title;
            const btn = document.createElement('button');
            btn.textContent = "Watch Now";

            eachMovie.appendChild(image);
            eachMovie.appendChild(movieTitle);
            eachMovie.appendChild(btn);

            container.appendChild(eachMovie);
        })
        wrapper.prepend(container);
    }
})

