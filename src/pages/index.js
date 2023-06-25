import Recipe from '@/components/Recipe';
import Group from '@/components/RecipeGroup/Group';

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
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-beige p-12 sm:px-24">
			<div className="z-10 w-full max-w-5xl items-center">
				<Group />
				{recipes.map((recipe, index) => {
					return <Recipe recipe={recipe} key={index} />;
				})}
			</div>
		</main>
	);
}
