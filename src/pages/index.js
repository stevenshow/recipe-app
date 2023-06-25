import Recipe from '@/components/Recipe';
import Group from '@/components/RecipeGroup';

export async function getStaticProps() {
	const apiUrl =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:1337/api/recipes?populate=tags'
			: 'https://api.publicapis.org/entries';
	const response = await fetch(apiUrl, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
		},
	});

	const { data } = await response.json();
	const recipes = data ? data.map((item) => item?.attributes) : [];

	return {
		props: {
			recipes,
		},
	};
}

export default function Home({ recipes }) {
	return <Group recipes={recipes} />;
}
