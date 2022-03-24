import { GetStaticPaths, GetStaticProps } from "next"
import { getRecipePaths, getRecipes } from "@/lib/recipes"
import Markdown from "markdown-to-jsx"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import styled from "styled-components"

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
    <Wrapper>
      <div>
        <h2>
          {frontmatter.cafe} {frontmatter.recipe} {frontmatter.brewer}
        </h2>
        <h3>Recipe Information</h3>
        <StyledList>
          <StyledListItem>Coffee: {frontmatter.coffee}</StyledListItem>
          <StyledListItem>Water: {frontmatter.water}</StyledListItem>
          <StyledListItem>Brewer: {frontmatter.brewer}</StyledListItem>
        </StyledList>
      </div>
      <h3>Recipe</h3>
      <StyledListItem>Upload Date: {frontmatter.upload}</StyledListItem>
      <Markdown>{content}</Markdown>
      <VideoWrapper>
        <iframe
          src={frontmatter.ytIframe}
          width='500'
          height='340'
          frameBorder='0'
        ></iframe>
        <StyledLink href={frontmatter.ytUrl}>View On YouTube</StyledLink>
      </VideoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`
const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 80vw;
  justify-content: center;
  align-items: center;
`
const StyledList = styled.ul`
  list-style: none;
  padding: 0 0.5rem;
`
const StyledListItem = styled.li`
  padding: 0.5rem;
  list-style: none;
`
const StyledLink = styled.a`
  color: #fff;
  cursor: pointer;
  margin: 1rem;
`
