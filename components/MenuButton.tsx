import styled from "styled-components"

interface IMenuButtonProps {
  onClick: () => void
}

const MenuButton: React.FC<IMenuButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick} />
}

const StyledButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  overflow: hidden;
  z-index: 100;
  &:before {
    content: "";
    background: url("/coffee-cup.png");
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
  }
  &:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background-color: hsl(0, 0%, 100%, 0.9);
    bottom: 0;
    left: -50%;
    border-radius: 35%;
    animation: waves 5s ease-in-out alternate infinite;
  }

  @keyframes waves {
    to {
      transform: translateY(-50%) rotate(540deg);
    }
  }
`

export { MenuButton }
