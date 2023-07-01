import Recipe from '@/components/Recipe';
import { useRouter } from 'next/router';

// This function gets called at build time
export async function getStaticPaths() {
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

	// Get the paths we want to pre-render based on recipes
	const paths = recipes.map((recipe) => `/recipe/${recipe.id}`);

	// We'll pre-render only these paths at build time.
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const apiUrl = `https://cms.devsteve.net/api/recipes/${params.id}?populate=*`;
	const response = await fetch(apiUrl, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
		},
	});

	const recipe = await response.json();

	return { props: { recipe }, revalidate: 30 };
}

export default function RecipeViewer({ recipe }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <Recipe recipe={recipe.data?.attributes} />;
}
