import { GetStaticPaths, GetStaticProps } from "next"
import { getRecipePaths, getRecipes } from "@/lib/recipes"
import Markdown from "markdown-to-jsx"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// const files = fs.readdirSync(path.join("recipes"))

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getRecipePaths(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  // return {
  //   props: { recipes: getRecipes(slug) },
  // }
  const markdownWithMeta = fs.readFileSync(
    path.join("recipes", slug + ".md"),
    "utf-8"
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

export default function CoffeeRecipe({ frontmatter, content }: any) {
  return (
    <>
      <div>
        <h2>
          {frontmatter.카페} {frontmatter.레시피} {frontmatter.브루어}
        </h2>
        <h3>Recipe Information</h3>
        <div>
          <p>Coffee: {frontmatter.커피}</p>
          <p>Water: {frontmatter.물}</p>
        </div>
      </div>
      <Markdown>{content}</Markdown>
    </>
  )
}
