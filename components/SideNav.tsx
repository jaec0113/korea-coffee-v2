import Link from "next/link"
import styled from "styled-components"

export default function SideNav() {
  return (
    <StyledSideNav>
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
  )
}

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: "#fff";
`
