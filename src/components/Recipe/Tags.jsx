import Tag from './Tag';

export default function Tags({ tags }) {
	return (
		<div className="mt-4 flex flex-wrap gap-4">
			{tags.map((tag, index) => (
				<Tag tag={tag} key={index} />
			))}
		</div>
	);
}
