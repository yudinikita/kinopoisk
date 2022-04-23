import React from 'react'
import styled from 'styled-components'
import NavBarTop from './NavBarTop'
import NavBarBottom from './NavBarBottom'

export default function NavBar() {
  return (
    <Wrapper>
      <NavBarTop />
      <Divider />
      <NavBarBottom />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.space.xxl};
  margin: 70px auto 50px;

  @media (max-width: ${(props) => props.theme.space.md}) {
    padding: 0 30px;
  }

  @media (max-width: ${(props) => props.theme.space.sm}) {
    margin: 50px auto 25px;
  }
`

const Divider = styled.div`
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: 10px 0;
`
