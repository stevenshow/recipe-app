import Group from '@/components/RecipeGroup';

export async function getStaticProps() {
	const apiUrl = 'https://cms.devsteve.net/api/recipes?populate=tags';
	const response = await fetch(apiUrl, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
		},
	});

	const { data } = await response.json();
	const recipes = data
		? data.map((item) => ({
				id: item.id,
				...item.attributes,
		  }))
		: [];

	return {
		props: {
			recipes,
		},
		revalidate: 30,
	};
}

export default function Home({ recipes }) {
	return <Group recipes={recipes} />;
}
