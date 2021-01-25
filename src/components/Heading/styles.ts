import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'
import { PRIMARY, SECONDARY } from '../../constants'

const wrapperModifiers = {
  lineLeft: () => css`
    padding-left: 1.2rem;
    border-left: 0.7rem solid ${SECONDARY};
  `,

  lineBottom: () => css`
    position: relative;
    margin-bottom: 1.6rem;

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${PRIMARY};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ lineLeft, lineBottom, color }) => css`
    color: ${color};
    font-size: 2rem;
    ${media.greaterThan('medium')`
        font-size: 2.8rem;
    `}
    ${lineLeft && wrapperModifiers.lineLeft}
    ${lineBottom && wrapperModifiers.lineBottom}
  `}
`
