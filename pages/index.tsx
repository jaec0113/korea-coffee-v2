import type { GetStaticProps } from "next"
import type { ReactElement } from "react"
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
      <div>
        {recipes.map((recipe: any) => (
          <Recipe key={recipe.slug} recipe={recipe} />
        ))}
      </div>
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
