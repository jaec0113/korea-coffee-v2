import Link from "next/link"
import styled from "styled-components"

interface IPaginationProps {
  currentPage: number
  numPages: number
}

export default function Pagination({
  currentPage,
  numPages,
}: IPaginationProps) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const prevPage = `/recipes/page/${currentPage - 1}`
  const nextPage = `/recipes/page/${currentPage + 1}`

  if (numPages === 1) return <></>
  return (
    <Wrapper>
      <StyledList>
        {!isFirstPage && (
          <Link href={prevPage} passHref>
            <StyledListItem>Previous</StyledListItem>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/recipes/page/${i + 1}`} passHref>
            <StyledListItem>{i + 1}</StyledListItem>
          </Link>
        ))}

        {!isLastPage && (
          <Link href={nextPage} passHref>
            <StyledListItem>Next</StyledListItem>
          </Link>
        )}
      </StyledList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
`

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`

const StyledListItem = styled.li`
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
`
