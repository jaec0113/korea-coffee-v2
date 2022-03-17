import Head from "next/head"
import { ILayoutProps } from "../custom-types/layoutProps"

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>Korea Coffee Recipes</title>
      </Head>
      <main>{children}</main>
    </>
  )
}
