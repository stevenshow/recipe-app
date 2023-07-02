export default function Attribution({ link, name }) {
	return (
		<>
			{link ? (
				<a className="font-light italic" href={link} target="_blank" rel="noopener noreferrer">
					Original Recipe From: {name}
				</a>
			) : (
				<span>Original Recipe From: {name}</span>
			)}
		</>
	);
}
