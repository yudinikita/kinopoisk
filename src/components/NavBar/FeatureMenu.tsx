import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const FeatureMenuItem = styled.a`
  font-size: 26px;

  :not(:last-child) {
    margin-right: 34px;
  }
`

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
