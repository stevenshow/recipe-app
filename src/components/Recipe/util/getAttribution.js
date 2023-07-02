export default function getImagePath(recipe) {
	console.log(recipe);
	const link = recipe?.attribution?.data?.attributes?.Link ?? undefined;
	const name = recipe?.attribution?.data?.attributes?.Name ?? undefined;
	return { link, name };
}
