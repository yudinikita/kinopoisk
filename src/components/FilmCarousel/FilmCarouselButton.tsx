import React from 'react'
import styled, { css } from 'styled-components'

interface FilmCarouselButtonProps {
  enabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const PrevButton = ({ enabled, onClick }: FilmCarouselButtonProps) => {
  return (
    <PrevBtn onClick={onClick} disabled={!enabled}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5 19s-7-4.144-7-7c0-2.855 7-7 7-7"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </PrevBtn>
  )
}

export const NextButton = ({ enabled, onClick }: FilmCarouselButtonProps) => {
  return (
    <NextBtn onClick={onClick} disabled={!enabled}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.5 5s7 4.144 7 7c0 2.855-7 7-7 7"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </NextBtn>
  )
}

const baseButtonStyle = css`
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: rgba(135, 135, 135, 0.2);
  backdrop-filter: blur(10px);
  outline: 0;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(135, 135, 135, 0.4);
  }
`

const PrevBtn = styled.button`
  ${baseButtonStyle} {
    left: 27px;
  }
`

const NextBtn = styled.button`
  ${baseButtonStyle} {
    right: 27px;
  }
`
