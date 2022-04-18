import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { v4 } from 'uuid'

import burgerPic from 'resources/icons/burger.svg'
import homePic from 'resources/icons/home.svg'
import homeFillPic from 'resources/icons/homeFill.svg'
import videoPic from 'resources/icons/video.svg'
import videoFillPic from 'resources/icons/videoFill.svg'
import ticketPic from 'resources/icons/ticket.svg'
import ticketFillPic from 'resources/icons/ticketFill.svg'
import folderPic from 'resources/icons/folder.svg'
import folderFillPic from 'resources/icons/folderFill.svg'
import playPic from 'resources/icons/play.svg'
import playFillPic from 'resources/icons/playFill.svg'
import documentPic from 'resources/icons/document.svg'
import documentFillPic from 'resources/icons/documentFill.svg'

const dropdownList = [
  { href: '/', title: 'Главная', icon: homePic, iconFill: homeFillPic },
  {
    href: '/hd',
    title: 'Онлайн-кинотеатр',
    icon: videoPic,
    iconFill: videoFillPic,
  },
  {
    href: '/movies',
    title: 'Фильмы',
    icon: ticketPic,
    iconFill: ticketFillPic,
  },
  {
    href: '/serials',
    title: 'Сериалы',
    icon: folderPic,
    iconFill: folderFillPic,
  },
  {
    href: '/tv',
    title: 'Установить на ТВ',
    icon: playPic,
    iconFill: playFillPic,
  },
  {
    href: '/media',
    title: 'Медиа',
    icon: documentPic,
    iconFill: documentFillPic,
  },
]

export default function DropDown() {
  const router = useRouter()

  const renderDropdownList = () =>
    dropdownList.map((item) => (
      <Link key={v4()} href={item.href}>
        <a>
          <ListIconContainer>
            <ListIcon
              src={router.asPath === item.href ? item.iconFill : item.icon}
            />
          </ListIconContainer>
          {item.title}
        </a>
      </Link>
    ))

  return (
    <Dropdown>
      <DropdownBtn>
        <Image src={burgerPic} alt="Меню" />
      </DropdownBtn>
      <DropdownContent>{renderDropdownList()}</DropdownContent>
    </Dropdown>
  )
}

const ListIconContainer = styled.span`
  margin-right: 15px;
  display: flex;
  align-items: center;
`

const ListIcon = styled(Image)``

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${(props) => props.theme.colors.gray9};
  min-width: 160px;
  width: max-content;
  font-size: 22px;
  border-radius: ${(props) => props.theme.border.base};
  z-index: 1;

  ${ListIcon} {
    opacity: 0.4;
  }

  a {
    padding: 15px 30px;
    display: flex;

    :hover {
      ${ListIcon} {
        opacity: 0.8;
      }
    }
  }
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`

const DropdownBtn = styled.button`
  padding: 25px 50px 25px 0;
  background: transparent;
  cursor: pointer;
  border: none;
`
