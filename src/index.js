


fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(res => res.json())
// .then((data) => console.log(data.drinks[0].strDrink))

// button selector
let button = document.getElementById("submit")

// event listener for button, get the user input
button.addEventListener("click", (event) => {
    event.preventDefault();
    let ingredients = document.getElementById("ingredients").value
    // console.log(ingredients)
    return getCocktail(ingredients)
})


// get cocktail based on single ingredient
function getCocktail(ingredient) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient)
    .then(res => res.json())
    .then((data) => console.log(data.drinks[0].strDrink))

}