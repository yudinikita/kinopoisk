import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function FeatureMenu() {
  return (
    <div>
      <Link href="/hd" passHref>
        <FeatureMenuItem>Онлайн-кинотеатр</FeatureMenuItem>
      </Link>
      <Link href="/tv" passHref>
        <FeatureMenuItem>Установить на ТВ</FeatureMenuItem>
      </Link>
    </div>
  )
}

const FeatureMenuItem = styled.a`
  font-size: 26px;
  color: ${(props) => props.theme.colors.gray2};

  :not(:last-child) {
    margin-right: 34px;
  }
`
