import Description from "./Description";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Time from "./Time";
import Tags from "./Tags";
import Title from "./Title";

export default function Recipe({recipe}){
    const tags = recipe.tags?.data ?? [];
    const tagNames = tags.map(tag => tag.attributes.name);
    console.log(recipe)
    return(
        <div className="flex flex-col gap-4 text-body-gray">
            <Title title={recipe.recipeName}/>
            <Time prepTime={recipe.prepTime} cookTime={recipe.cookTime}/>
            <Description description={recipe.description} />
            <Ingredients ingredients={recipe.ingredients} />
            <Instructions instructions={recipe.recipe} />
            <Tags tags={tagNames} />
        </div>
    )
}
