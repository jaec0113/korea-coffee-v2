import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getRecipes() {
  const files = fs.readdirSync(path.join("recipes"))
  const recipes = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("recipes", filename),
      "utf-8"
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      frontmatter,
      slug: filename.split(".")[0],
    }
  })

  return recipes
}
