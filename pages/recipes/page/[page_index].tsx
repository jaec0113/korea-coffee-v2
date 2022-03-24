import { GetStaticPaths, GetStaticProps } from "next"
import fs from "fs"
import path from "path"
import Pagination from "@/components/Pagination"
import { POSTS_PER_PAGE } from "@/config/index"
import { getRecipeFrontMatter, getRecipeByPage } from "@/lib/recipes"
import Recipe from "@/components/Recipe"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getRecipeByPage(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page: any = parseInt((params && params.page_index) || "1")
  const files = fs.readdirSync(path.join("recipes"))
  const recipes = getRecipeFrontMatter()

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedRecipes = recipes.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      recipes: orderedRecipes,
      numPages,
      currentPage: page,
    },
  }
}

export default function RecipePage({ recipes, numPages, currentPage }: any) {
  return (
    <div>
      <h1>See All Recipes</h1>
      <div>
        {recipes.map((recipe: any) => (
          <Recipe key={recipes.slug} recipe={recipe} />
        ))}
        <Pagination currentPage={currentPage} numPages={numPages} />
      </div>
    </div>
  )
}
