import Image from 'next/image';
import Link from 'next/link';

const recipes = [
	{
		id: 1,
		name: 'Recipe 1',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	// Other recipes...
];

export default function RecipeList() {
	return (
		<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{recipes.map((recipe) => (
				<li
					key={recipe.id}
					className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-herbGreen/40 text-center shadow"
				>
					<Link href={`/recipe/${recipe.id}`}>
						<div className="flex flex-1 flex-col p-8">
							<Image
								className="mx-auto rounded-sm"
								src={recipe.imageUrl}
								alt="recipe image"
								height={200}
								width={300}
							/>
							<h3 className="mt-6 text-sm font-medium text-gray-900">{recipe.name}</h3>
							<dl className="mt-1 flex flex-grow flex-col justify-between">
								<dt className="sr-only">Title</dt>
								<dd className="text-sm text-gray-500">{recipe.title}</dd>
								<dt className="sr-only">Role</dt>
								<dd className="mt-3">
									<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
										{recipe.role}
									</span>
								</dd>
							</dl>
						</div>
					</Link>
					<div></div>
				</li>
			))}
		</ul>
	);
}
