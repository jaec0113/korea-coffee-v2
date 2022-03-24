import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Recipe = ({ recipe }: any) => {
  return (
    <RecipeCard>
      <Wrapper>
        <h2>
          {recipe.frontmatter.cafe} {recipe.frontmatter.recipe}{" "}
          {recipe.frontmatter.brewer}
        </h2>
        <p>{recipe.frontmatter.region}</p>
        <Link href={`/recipes/${recipe.slug}`}>
          <a>See Recipe</a>
        </Link>
      </Wrapper>
    </RecipeCard>
  )
}

const RecipeCard = styled.div`
  height: 100%;
  width: 60vw;
  background: #fff;
  border: 1px solid black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Recipe
