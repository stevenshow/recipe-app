import ReactMarkdown from 'react-markdown';

export default function ingredients({ ingredients }) {
	const components = {
		ul: ({ node, ...props }) => <ul className="custom-list-disc" {...props} />,
	};
	return (
		<>
			<h2 className="text-xl font-semibold">Ingredients:</h2>
			<ReactMarkdown components={components} className="ml-4 text-body-gray">
				{ingredients}
			</ReactMarkdown>
		</>
	);
}
