import type { GetStaticProps } from "next"
import type { ReactElement } from "react"
import styled from "styled-components"
import { getRecipeFrontMatter } from "@/lib/recipes"
import Layout from "@/components/Layout"
import SideNav from "@/components/SideNav"
import Recipe from "@/components/Recipe"

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { recipes: getRecipeFrontMatter() },
  }
}

export default function Home({ recipes }: any) {
  return (
    <>
      <HomeWrapper>
        {recipes.map((recipe: any) => (
          <Recipe key={recipe.slug} recipe={recipe} />
        ))}
      </HomeWrapper>
    </>
  )
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return (
    <Layout>
      <SideNav />
      {Home}
    </Layout>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
