import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import burgerPic from 'resources/icons/burger.svg'

export default function NavBarBottom() {
  return (
    <Container>
      <Burger>
        <Image src={burgerPic} alt="Меню" />
      </Burger>
      <SearchInput type="text" placeholder="Фильмы, сериалы, персоны" />
      <Link href="/" passHref>
        <FilmsToWatch />
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Burger = styled.button`
  padding: 25px 50px 25px 0;
  background: transparent;
  cursor: pointer;
  border: none;
`

const SearchInput = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 26px;
  color: white;
  background-color: transparent;
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  border: 2px solid ${(props) => props.theme.colors.gray3};
  border-radius: ${(props) => props.theme.border.base};
  outline: none;

  :active,
  :focus {
    border-color: ${(props) => props.theme.colors.brand};
  }
`

const FilmsToWatch = styled.a`
  padding: 25px 10px 25px 50px;

  ::before {
    display: block;
    width: 40px;
    height: 40px;
    content: '';
    background-image: url('/static/icons/bookmark.svg');
    background-size: contain;
  }

  :hover {
    ::before {
      background-image: url('/static/icons/bookmark-fill.svg');
    }
  }

  :active {
    transform: scale(0.96);
  }
`
