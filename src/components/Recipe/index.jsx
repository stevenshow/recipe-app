import Image from 'next/image';

import Attribution from './Attribution';
import Description from './Description';
import Ingredients from './Ingredients';
import Steps from './Steps';
import Tags from './Tags';
import Time from './Time';
import Title from './Title';
import getAttribution from './util/getAttribution';
import getImagePath from './util/getImagePath';
import getTags from './util/getTags';

export default function Recipe({ recipe }) {
	const tags = getTags(recipe);
	const imagePath = getImagePath(recipe);
	const { link, name } = getAttribution(recipe);
	const apiUrl = 'https://cms.devsteve.net';
	console.log(link, name);

	return (
		<div className="mt-8 flex flex-col gap-4 text-body-gray">
			<Title title={recipe?.recipeName} />
			{imagePath && (
				<Image alt="recipe image" src={`${apiUrl}${imagePath}`} width={400} height={500} />
			)}
			<Time prepTime={recipe?.prepTime} cookTime={recipe?.cookTime} />
			<Description description={recipe?.description} />
			<Ingredients ingredients={recipe?.ingredients} />
			<Steps instructions={recipe?.recipe} />
			<Tags tags={tags} />
			{(link || name) && <Attribution name={name} link={link} />}
		</div>
	);
}
