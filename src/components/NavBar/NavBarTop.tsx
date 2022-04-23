import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import logoPic from 'resources/icons/logo.svg'
import btnPlusPic from 'resources/icons/btnPlus.svg'
import FeatureMenu from './FeatureMenu'

export default function NavBarTop() {
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src={logoPic} alt="Кинопоиск" />
        </a>
      </Link>
      <Menu>
        <FeatureMenu />
      </Menu>
      <BtnPlus>
        <Link href="/" passHref>
          <a>
            <BtnPlusImage src={btnPlusPic} />
          </a>
        </Link>
      </BtnPlus>
      <Avatar />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template: '. . . .';
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.space.xl}) {
    grid-template: '. . .';
  }

  @media (max-width: ${(props) => props.theme.space.md}) {
    grid-template: '. .';
  }

  @media (max-width: ${(props) => props.theme.space.sm}) {
    grid-template: '.';
    justify-content: center;
  }
`

const Menu = styled.div`
  @media (max-width: ${(props) => props.theme.space.xl}) {
    display: none;
  }
`

const Logo = styled(Image)`
  width: 163px;

  :active {
    transform: scale(0.96);
  }
`

const BtnPlus = styled.div`
  @media (max-width: ${(props) => props.theme.space.md}) {
    display: none;
  }
`

const BtnPlusImage = styled(Image)`
  :active {
    transform: scale(0.96);
  }
`

const Avatar = styled.div`
  background-color: #753ea0;
  background-image: linear-gradient(150deg, #a23df3, #e4354d);
  width: 55px;
  height: 55px;
  border-radius: 30px;

  @media (max-width: ${(props) => props.theme.space.sm}) {
    display: none;
  }
`
