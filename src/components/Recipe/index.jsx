import Description from './Description';
import Ingredients from './Ingredients';
import Steps from './Steps';
import Tags from './Tags';
import Time from './Time';
import Title from './Title';
import getTags from './util/getTags';

export default function Recipe({ recipe }) {
	const tags = getTags(recipe);

	return (
		<div className="flex flex-col gap-4 text-body-gray">
			<Title title={recipe?.recipeName} />
			<Time prepTime={recipe?.prepTime} cookTime={recipe?.cookTime} />
			<Description description={recipe?.description} />
			<Ingredients ingredients={recipe?.ingredients} />
			<Steps instructions={recipe?.recipe} />
			<Tags tags={tags} />
		</div>
	);
}
