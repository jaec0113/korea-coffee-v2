import React from "react"

const Recipe = ({ recipe }: any) => {
  return (
    <>
      <div>Recipe</div>
      <div>
        <h2>
          {recipe.frontmatter.카페} {recipe.frontmatter.레시피}{" "}
          {recipe.frontmatter.브루어}
        </h2>
      </div>
    </>
  )
}
export default Recipe
