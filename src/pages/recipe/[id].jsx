import Recipe from '@/components/Recipe';

export default function RecipeViewer({ recipe }) {
	return (
		<>
			<h1 className="mb-12 text-left font-georgia text-4xl font-bold text-primary-coral">
				Kayla&apos;s Recipes
			</h1>
			<Recipe recipe={recipe} key={index} />
		</>
	);
}
