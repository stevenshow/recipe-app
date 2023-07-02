import { useState } from 'react';

import Link from 'next/link';

import getTags from '../Recipe/util/getTags';
import Search from './Search';

export default function RecipeList({ recipes }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredRecipes = recipes.filter((recipe) => {
		const tags = getTags(recipe);
		const lowerCaseSearchTerm = searchTerm.toLowerCase();

		return (
			recipe.recipeName.toLowerCase().includes(lowerCaseSearchTerm) ||
			tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
		);
	});

	return (
		<div>
			<Search
				type="text"
				value={searchTerm}
				onChange={handleSearch}
				placeholder="Search by title or tag"
				className="m-auto w-5/6 max-w-[400px] px-3 py-6"
			/>
			<div className="flex flex-wrap">
				{filteredRecipes.map((recipe, index) => {
					const tags = getTags(recipe);
					tags.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

					return (
						<div className="w-full p-3 sm:w-1/2 lg:w-1/3" key={index}>
							<Link href={`/recipe/${recipe.id}`}>
								<div className="flex h-full flex-col rounded-lg bg-herbGreen/40 text-center shadow hover:shadow-md">
									<div className="flex flex-grow flex-col justify-between gap-4 p-8">
										<h3 className="mt-6 font-georgia text-xl font-medium text-gray-700">
											{recipe.recipeName}
										</h3>
										<div className="mt-1 text-sm italic text-gray-500">{recipe.description}</div>
										<div className="mt-3 flex flex-wrap justify-center gap-2">
											{tags.map((tag, index) => (
												<span
													className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/30"
													key={index}
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
