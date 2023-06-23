import ReactMarkdown from 'react-markdown';

export default function Instructions({instructions}) {
    const components = {
        ul: ({node, ...props}) => <ul className="custom-list-disc" {...props} />
      }
    return (
        <>
            <h2 className="font-semibold text-xl">Instructions:</h2>
            <ReactMarkdown components={components} className="ml-4 text-body-gray">{instructions}</ReactMarkdown>
        </>
    )
}