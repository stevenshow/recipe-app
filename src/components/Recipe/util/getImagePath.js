export default function getImagePath(recipe) {
	const imagePath = recipe?.picture?.data?.[0]?.attributes?.url ?? undefined;
	return imagePath;
}
