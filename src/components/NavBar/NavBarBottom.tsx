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
      <Link href="/watchlist" passHref>
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
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M19.95 4.166c-10.645 0-12.443 1.553-12.443 14.048 0 13.989-.262 17.619 2.398 17.619 2.659 0 7-6.14 10.045-6.14s7.387 6.14 10.045 6.14c2.66 0 2.399-3.63 2.399-17.619 0-12.495-1.799-14.048-12.444-14.048Z' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-size: contain;
  }

  :hover {
    ::before {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.07 2H8.9C6.2 2 4 3.07 4 5.79v15.18c0 .56.45 1.02 1.01 1.02.17 0 .341-.051.49-.13l6.49-3.24 6.48 3.24c.24.14.53.18.79.1.27-.08.49-.26.62-.5.08-.15.12-.32.12-.49V5.79C19.97 3.07 17.78 2 15.07 2' fill='%23fff'/%3E%3C/svg%3E");
    }
  }

  :active {
    transform: scale(0.96);
  }
`
