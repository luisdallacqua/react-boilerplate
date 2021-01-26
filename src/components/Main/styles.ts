import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.gray};
    width: 100vw;
    height: 100vh;
    padding: ${theme.spacings.medium};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
export const Logo = styled.img`
  width: 25rem;
  height: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 400;
`
