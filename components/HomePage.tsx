import React from "react"
import { GetStaticProps } from "next"
import { getRecipes } from "@/lib/recipes"
import Recipe from "@/components/Recipe"

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      recipes: getRecipes(),
    },
  }
}

const HomePage = ({ recipes }: any) => {
  return (
    <div>
      <h1>All Coffee Recipes</h1>
      <div>
        {recipes.map((recipe: any) => (
          <Recipe key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
