const init = () => {
 const form = document.querySelector('form');
const movieInput = document.getElementById("searchByID");
form.addEventListener('submit', (e) => { //a call back function that will be called to handle the event
    e.preventDefault() // stps the page from refreshing
     const movie = movieInput.value; // access input value from mivieInput
     console.log(movie);

     //fetch data based on users input
     fetch(`http://localhost:3000/movies/${movie}`)
     .then(response => response.json())
     .then (data =>{
        console.log(data)
        //display fetched data on the page
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        //change the contents of our title and summary elements based on the retrieved data
        title.textContent = data.title;
        summary.textContent = data.summary;


     });
    

});
  
}

document.addEventListener('DOMContentLoaded', init);


// Add event listeners to capture form data and override a form's default behavior
