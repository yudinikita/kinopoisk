import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { dropdownList } from 'components/NavBar/dropdownList'

import burgerPic from 'resources/icons/burger.svg'

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
        <Image src={burgerPic} alt="Меню" width={35} height={12} />
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

const ListIcon = styled(Image)`
  transition: opacity 0.3s ease-in-out;
`

const DropdownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  background-color: ${(props) => props.theme.colors.gray9};
  min-width: 160px;
  width: max-content;
  font-size: 22px;
  border-radius: ${(props) => props.theme.border.base};
  z-index: 1;
  transition: visibility 0s, opacity 0.3s linear;

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
    visibility: visible;
    opacity: 1;
  }
`

const DropdownBtn = styled.button`
  padding: 35px 50px 35px 0;
  background: transparent;
  cursor: pointer;
  border: none;
  width: max-content;
`
