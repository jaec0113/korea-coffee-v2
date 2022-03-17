import fs from "fs"
import path from "path"
import matter from "gray-matter"

const files = fs.readdirSync(path.join("recipes"))

export function getRecipeFrontMatter() {
  const recipeFrontMatter = files.map((filename) => {
    const slug = filename.split(".")[0]
    const markdownWithMeta = fs.readFileSync(
      path.join("recipes", filename),
      "utf-8"
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      frontmatter,
      slug,
    }
  })
  return recipeFrontMatter
}

export function getRecipePaths() {
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }))

  return paths
}

export function getRecipes({ slug }: any) {
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
