import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import DropDown from 'components/NavBar/DropDown'

export default function NavBarBottom() {
  return (
    <Container>
      <DropDown />
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

const SearchInput = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 26px;
  color: white;
  background-color: transparent;
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  border: 2px solid ${(props) => props.theme.colors.gray5};
  border-radius: ${(props) => props.theme.border.base};
  outline: none;

  :active,
  :focus {
    border-color: ${(props) => props.theme.colors.brand};
  }
`

const FilmsToWatch = styled.a`
  padding: 35px 10px 35px 50px;
  filter: opacity(0.7);

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
