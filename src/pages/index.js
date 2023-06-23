import Recipe from "@/components/Recipe"

export async function getStaticProps() {
  const response = await fetch('http://localhost:1337/api/recipes?populate=tags', {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const { data } = await response.json();
  const recipes = data.map(item => item.attributes);

  return {
    props: {
      recipes
    },
  }
}

export default function Home({recipes}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:px-24 bg-beige">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-md">
      <h1 className="text-4xl text-primary-coral font-bold mb-12 text-left font-lobster">Kayla&apos;s Recipes</h1>
        {recipes.map((recipe, index) => {
          return <Recipe recipe={recipe} key={index} />
        })}
      </div>
    </main>
  )
} 
