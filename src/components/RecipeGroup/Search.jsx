export default function Search({ type, value, onChange, placeholder, className }) {
	return (
		<div className={className}>
			<input
				type={type}
				name="search"
				className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
}
