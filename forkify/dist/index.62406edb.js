// import icons from "url:../img/icons.svg";
// import recipeView from '/.views/recipeView.js';
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import * as model from "./model.js";
const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
//////////////////////////////////////
// https://forkify-api.herokuapp.com/v2
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        console.log(id);
        if (!id) return;
        recipeView.renderSpinner();
        //Loading recipe
        await model.loadRecipe(id);
        // const { recipe } = model.state;
        // (2) Rendering the recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        alert(err);
    }
};
[
    "hashchange",
    "load"
].forEach((ev)=>window.addEventListener(ev, controlRecipes)); // window.addEventListener("hashchange", controlRecipes);
 // window.addEventListener("load".controlRecipes);

//# sourceMappingURL=index.62406edb.js.map
