import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { MenuButton } from "@/components/MenuButton"

export default function SideNav() {
  const [navbar, setNavbar] = useState(false)
  const showSideNav = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <MenuButton onClick={showSideNav} />
      <StyledSideNav
        style={
          navbar
            ? {
                transform: "translateX(0)",
              }
            : {
                transform: "translateX(-110%)",
              }
        }
      >
        <input type='text' placeholder='Search recipes...' />
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
        <Link href='/brewing-tips'>
          <a>Brewing Tips</a>
        </Link>
      </StyledSideNav>
    </>
  )
}

const StyledSideNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #ac7231;
  height: 100vh;
  width: 50vw;
  z-index: 50;
  transition: transform 1000ms ease-in-out;
`
