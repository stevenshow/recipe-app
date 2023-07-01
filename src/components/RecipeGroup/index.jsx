import Image from 'next/image';
import Link from 'next/link';

import getTags from '../Recipe/util/getTags';

export default function RecipeList({ recipes }) {
	return (
		<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{recipes.map((recipe, index) => {
				const tags = getTags(recipe);
				return (
					<Link href={`/recipe/${recipe.id}`} key={index}>
						<li
							className={`col-span-1 flex flex-col ${
								recipe.imageUrl ? 'divide-y divide-gray-200' : ''
							} rounded-lg bg-herbGreen/40 text-center shadow hover:shadow-md`}
						>
							<div className="flex flex-1 flex-col gap-2 p-8">
								{recipe.imageUrl && (
									<Image
										className="mx-auto rounded-sm"
										src={recipe.imageUrl}
										alt="recipe image"
										height={200}
										width={300}
									/>
								)}
								<h3 className="text-md mt-6 font-georgia font-medium text-gray-700">
									{recipe.recipeName}
								</h3>
								<dl className="mt-1 flex flex-grow flex-col justify-between">
									<dt className="sr-only">Description</dt>
									<dd className="text-sm italic text-gray-500">{recipe.description}</dd>
									<dt className="sr-only">Tags</dt>
									<dd className="mt-3 flex justify-center gap-2">
										{tags.map((tag, index) => {
											return (
												<span
													className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/30"
													key={index}
												>
													{tag}
												</span>
											);
										})}
									</dd>
								</dl>
							</div>
						</li>
					</Link>
				);
			})}
		</ul>
	);
}
