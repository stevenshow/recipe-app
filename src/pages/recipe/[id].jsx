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

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the recipe `id`.
	// If the route is like /recipe/1, then params.id is 1
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

	// Pass recipe data to the page via props
	return { props: { recipe } };
}

export default function RecipeViewer({ recipe }) {
	console.log(recipe);
	const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <Recipe recipe={recipe.data.attributes} />;
}
