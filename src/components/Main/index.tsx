import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'Stomper Incorporation',
  description = 'We proudly presents to you Summoners Stomper'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
