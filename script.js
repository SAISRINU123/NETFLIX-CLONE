// Sample movie data (replace with actual data from API or static data)
const movies = [
    { title: "Movie 1", description: "Description of Movie 1" },
    { title: "Movie 2", description: "Description of Movie 2" },
    { title: "Movie 3", description: "Description of Movie 3" },
    { title: "Movie 4", description: "Description of Movie 4" }
];

// Function to fetch movie data from an API (simulated example)
async function fetchMovies() {
    try {
        // Simulated API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Return sample movies (replace with actual API fetch logic)
        return movies;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return []; // Return empty array on error
    }
}

// Function to update movie cards with fetched data
async function updateMovieCards() {
    const movies = await fetchMovies();
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = ''; // Clear previous movie cards

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
        `;
        movieList.appendChild(movieCard);
    });
}

// Function to handle "Start Watching" button click
function handleStartWatching() {
    // Simulated navigation to another page (replace with actual navigation logic)
    window.location.href = 'movie-list.html'; // Navigate to movie list page
}

// Call the function to update movie cards on page load
document.addEventListener('DOMContentLoaded', () => {
    updateMovieCards();

    // Select the "Start Watching" button and add a click event listener
    const startWatchingBtn = document.querySelector('.btn');
    startWatchingBtn.addEventListener('click', handleStartWatching);
});
