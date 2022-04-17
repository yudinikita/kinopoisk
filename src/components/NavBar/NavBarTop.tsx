import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import FeatureMenu from './FeatureMenu'

import logoPic from 'resources/icons/logo.svg'
import btnPlusPic from 'resources/icons/btnPlus.svg'

export default function NavBarTop() {
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src={logoPic} alt="Кинопоиск" />
        </a>
      </Link>
      <FeatureMenu />
      <Link href="/" passHref>
        <a>
          <BtnPlus src={btnPlusPic} />
        </a>
      </Link>
      <Avatar />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Image)`
  width: 163px;

  :active {
    transform: scale(0.96);
  }
`

const BtnPlus = styled(Image)`
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
`
