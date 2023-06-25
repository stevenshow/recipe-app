import Recipe from '@/components/Recipe';
import { useRouter } from 'next/router';

// This function gets called at build time
export async function getStaticPaths() {
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

	// Get the paths we want to pre-render based on recipes
	const paths = recipes.map((recipe) => `/recipe/${recipe.id}`);

	// We'll pre-render only these paths at build time.
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const apiUrl =
		process.env.NODE_ENV === 'development'
			? `http://localhost:1337/api/recipes/${params.id}`
			: `https://api.publicapis.org/entries/${params.id}`;
	const response = await fetch(apiUrl, {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
		},
	});

	const recipe = await response.json();

	return { props: { recipe } };
}

export default function RecipeViewer({ recipe }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <Recipe recipe={recipe.data.attributes} />;
}
