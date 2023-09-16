// script.js
const recipeForm = document.getElementById('recipe-form');

recipeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Here, you can send the data to the server for storage and processing.
    // You would typically use AJAX or fetch() to send a request to your backend.
    // For this example, we'll just log the data to the console.
    console.log('Recipe Name:', recipeName);
    console.log('Ingredients:', ingredients);
    console.log('Instructions:', instructions);

    // Clear the form fields (you can add this functionality).
});
