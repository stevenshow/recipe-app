import ReactMarkdown from 'react-markdown';

export default function Instructions({instructions}) {
    const components = {
        ol: ({node, ...props}) => <ol className="custom-ol" {...props} />,
        ul: ({node, ...props}) => <ul className="custom-list-disc" {...props} />,
      }
    return (
        <>
            <h2 className="font-semibold text-xl">Steps:</h2>
            <ReactMarkdown components={components} className="ml-4 text-body-gray">{instructions}</ReactMarkdown>
        </>
    )
}