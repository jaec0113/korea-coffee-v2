import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Recipe = ({ recipe }: any) => {
  return (
    <Wrapper>
      <RecipeCard>
        <h2>
          {recipe.frontmatter.카페} {recipe.frontmatter.레시피}{" "}
          {recipe.frontmatter.브루어}
        </h2>
        <Link href={`/recipes/${recipe.slug}`}>
          <a>See Recipe</a>
        </Link>
      </RecipeCard>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RecipeCard = styled.div`
  height: 100%;
  width: 60vw;
  border: 1px solid black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin: 10px;
`

export default Recipe
