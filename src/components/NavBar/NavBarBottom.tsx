import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import DropDown from 'components/NavBar/DropDown'
import SearchSuggest from 'components/SearchSuggest/SearchSuggest'
import useNavBarBottom from 'components/NavBar/hooks/useNavBarBottom'

export default function NavBarBottom() {
  const {
    handleChangeSearchValue,
    handleCloseSearch,
    handleSuggest,
    suggest,
    foundFilms,
    handleKeyDown,
  } = useNavBarBottom()

  return (
    <Container>
      <DropDown />
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Фильмы, сериалы, персоны"
          onClick={handleSuggest}
          onChange={handleChangeSearchValue}
          onKeyDown={handleKeyDown}
        />
        {suggest && (
          <CloseBtn onClick={handleCloseSearch}>
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2.4 2.4 19.2 19.2m-19.2 0L21.6 2.4"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CloseBtn>
        )}
      </SearchInputContainer>
      <Link href="/" passHref>
        <FilmsToWatch />
      </Link>
      {suggest && <SearchSuggest films={foundFilms} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchInputContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 20;
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

const CloseBtn = styled.button`
  position: absolute;
  top: 21px;
  right: 21px;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.gray9};
  }

  :active {
    transform: scale(0.95);
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
