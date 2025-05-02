import { omeletteRecipe } from "../contants/recipes";
import Card from "../components/Card";

const Recipe = () => {
  return (
    <div>
      <section className="w-full">
        <img src={omeletteRecipe.image} alt={omeletteRecipe.title} className="w-full" />
      </section>
      <section className="px-8 w-full">
        <section className="flex justify-start py-8" id="recipe-title">
          <h1>{omeletteRecipe.title}</h1>
        </section>
        <section className="mb-8" id="recipe-description">
          <p className="text-stone-600">{omeletteRecipe.description}</p>
        </section>
        <section className="mb-8" id="preparation-card">
          <Card preparationTime={omeletteRecipe.preparationTime} />
        </section>
        <section id="recipe-ingredients">
          <h2 className="mb-5">Ingredients</h2>
          <ul className="text-stone-600 list-disc list-inside mb-8">
            {omeletteRecipe.ingredients.map((ingredient, index) => (
              <div className="flex" key={index}>
                <li className="mb-1.5 marker:text-brown-800"></li>
                <p>{ingredient}</p>
              </div>
            ))}
          </ul>
          <hr className="border-t-2 border-stone-300 mb-8" />
        </section>
        <section id="recipe-instructions">
          <h2 className="mb-5">Instructions</h2>
          {omeletteRecipe.instructions.map((instruction) => (
            <div key={instruction.step} className="flex leading-7 mb-1.5">
              <p className="bold-brown-text">{instruction.step}.</p>
              <p className="text-stone-600 inline pl-3">
                <span className="font-bold">{instruction.title}: </span>
                {instruction.description}
              </p>
            </div>
          ))}
          <hr className="border-t-2 border-stone-300 mt-8 mb-8" />
        </section>
        <section id="recipe-nutrition" className="mb-8">
          <h2 className="mb-5">Nutrition</h2>
          <p className="text-stone-600 mb-8">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <div className="grid gap-y-2">
            <div className="nutrition-table-line">
              <p className="nutrition-table-macros">Calories</p>
              <p className="bold-brown-text">{omeletteRecipe.nutrition.calories}</p>
            </div>
            <div className="nutrition-table-line">
              <p className="nutrition-table-macros">Protein</p>
              <p className="bold-brown-text">{omeletteRecipe.nutrition.protein}</p>
            </div>
            <div className="nutrition-table-line">
              <p className="nutrition-table-macros">Carbs</p>
              <p className="bold-brown-text">{omeletteRecipe.nutrition.carbs}</p>
            </div>
            <div className="nutrition-table-line">
              <p className="nutrition-table-macros">Fat</p>
              <p className="bold-brown-text">{omeletteRecipe.nutrition.fat}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Recipe;
