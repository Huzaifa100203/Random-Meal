// script.js

const url = 'https://api.freeapi.app/api/v1/public/meals/meal/random';
const options = { method: 'GET', headers: { accept: 'application/json' } };

const generateMealButton = document.getElementById('generate-meal');
const mealContainer = document.getElementById('meal-container');
const errorMessage = document.getElementById('error-message');

// Function to fetch a random meal
async function getRandomMeal() {
  mealContainer.innerHTML = "Loading...";
  errorMessage.textContent = ""; // Clear any previous errors

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Check if data is valid
    if (data.success && data.data) {
      displayMeal(data.data);
    } else {
      showError("Could not fetch a meal. Please try again.");
    }
  } catch (error) {
    console.error(error);
    showError("An error occurred while fetching the meal.");
  }
}

// Function to display the meal
function displayMeal(meal) {
  mealContainer.innerHTML = `
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.name}" />
    <p><strong>Category:</strong> ${meal.strCategory}</p>
    <p><strong>Cuisine:</strong> ${meal.strArea}</p>
    <p><strong>Instructions:</strong>${meal.strInstructions}</p>
    <p><strong>Ingredients:</strong>${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}
    ,${meal.strIngredient6},${meal.strIngredient7},${meal.strIngredient8},${meal.strIngredient9},${meal.strIngredient10},${meal.strIngredient11}
    ,${meal.strIngredient12},${meal.strIngredient13},${meal.strIngredient14},${meal.strIngredient15},${meal.strIngredient16},${meal.strIngredient17},
    ${meal.strIngredient18},${meal.strIngredient19},${meal.strIngredient20}</p>
    <p><strong>Measures:${meal.strMeasure1}, ${meal.strMeasure2}, ${meal.strMeasure3}, ${meal.strMeasure4}, ${meal.strMeasure5}
    ,${meal.strMeasure6},${meal.strMeasure7},${meal.strMeasure8},${meal.strMeasure9},${meal.strMeasure10},${meal.strMeasure11}
    ,${meal.strMeasure12},${meal.strMeasure13},${meal.strMeasure14},${meal.strMeasure15},${meal.strMeasure16},${meal.strMeasure17},
    ${meal.strMeasure18},${meal.strMeasure19},${meal.strMeasure20} </strong></p>
    <p><strong>See the video here:</strong>  <a href="${meal.strYoutube}">Click Here</a></p>
    <p><strong>Original Website:</strong> <a href="${meal.strSource}">Click Here</a></p>
  `;
}

// Function to show error messages
function showError(message) {
  errorMessage.textContent = message;
  mealContainer.innerHTML = "";
}

// Event listener for button
generateMealButton.addEventListener('click', getRandomMeal);
