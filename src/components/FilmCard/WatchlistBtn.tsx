import React from 'react'
import styled, { css } from 'styled-components'

export const AddWatchlistBtn = ({
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <AddWatchlistBtnStyle {...props}>
      <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M3 0h2v8H3z" />
        <path fill="#fff" d="M8 3v2H0V3z" />
      </svg>
    </AddWatchlistBtnStyle>
  )
}

export const RemoveWatchlistBtn = ({
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <RemoveWatchlistBtnStyle {...props}>
      <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m6.865.465 1.6 1.6-6.4 6.4-1.6-1.6 6.4-6.4Z" fill="#fff" />
        <path d="m8.465 6.865-1.6 1.6-6.4-6.4 1.6-1.6 6.4 6.4Z" fill="#fff" />
      </svg>
    </RemoveWatchlistBtnStyle>
  )
}

const WatchlistBtn = css`
  display: flex;
  padding: 15px;
  border: none;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.brand};
  cursor: pointer;
  pointer-events: all;

  &:hover {
    filter: opacity(0.9);
  }

  &:active {
    transform: scale(0.95);
  }
`

const AddWatchlistBtnStyle = styled.button`
  ${WatchlistBtn} {
  }
`

const RemoveWatchlistBtnStyle = styled.button`
  ${WatchlistBtn} {
    background-color: red;
  }
`
