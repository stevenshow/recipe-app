import '../app/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-beige px-12 py-8">
			<div className="z-10 w-full max-w-5xl items-center">
				<h1 className="mb-12 text-center font-georgia text-4xl font-bold text-primary-coral">
					Kayla&apos;s Recipes
				</h1>
				<Component {...pageProps} /> {/* This line renders the page-specific content */}
			</div>
		</main>
	);
}

export default MyApp;
