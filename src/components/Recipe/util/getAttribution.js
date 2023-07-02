export default function getImagePath(recipe) {
	const link = recipe?.attribution?.data?.attributes?.Link ?? undefined;
	const name = recipe?.attribution?.data?.attributes?.Name ?? undefined;
	return { link, name };
}
