export default function getTags(recipe) {
	const tags = recipe.tags?.data ?? [];
	const tagNames = tags.map((tag) => tag.attributes.name);
	return tagNames;
}
