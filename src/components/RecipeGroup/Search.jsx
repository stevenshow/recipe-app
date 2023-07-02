export default function Search({ type, value, onChange, placeholder, className }) {
	return (
		<div className={className}>
			<input
				type={type}
				name="search"
				className="sm:text-md block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-accent-herbGreen placeholder:text-gray-400 focus:ring-0 sm:leading-6"
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
}
