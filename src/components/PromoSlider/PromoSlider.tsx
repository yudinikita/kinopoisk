import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface PromoSliderProps {
  title?: string
  desc?: string
  cast?: string
  url?: string
}

export default function PromoSlider({
  title = '',
  desc = '',
  cast = '',
  url = '',
}: PromoSliderProps) {
  return (
    <Container>
      <Video autoPlay loop muted poster="static/images/trailer-poster.jpg">
        <source src="/static/videos/promo-trailer.mp4" />
      </Video>
      <Gradient />
      <Content>
        <Link href={url} passHref>
          <Title>{title}</Title>
        </Link>
        <Desc>{desc}</Desc>
        <Cast>
          <span>В главных ролях:</span>
          {cast}
        </Cast>
        <Buttons>
          <Link href={url + '#filmPlayer'} passHref>
            <WatchNowBtn>
              <IconWatchNow
                width="20"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.113.5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.391-1.69 4.06-4.113 4.06H4.113C1.691 15.5 0 13.831 0 11.44V4.56C0 2.17 1.691.5 4.113.5Zm13.845 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675c0 .5-.25.957-.669 1.22a1.385 1.385 0 0 1-1.374.063l-1.481-.748a1.623 1.623 0 0 1-.888-1.457V5.083c0-.621.34-1.18.888-1.456l1.482-.748Z"
                  fill="#fff"
                />
              </IconWatchNow>
              Смотреть сейчас
            </WatchNowBtn>
          </Link>
          <Link href={url} passHref>
            <LinkInfo>Подробнее</LinkInfo>
          </Link>
        </Buttons>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray5};
`

const Video = styled.video`
  top: -2px;
  width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
`

const Gradient = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    #0c0c0c 65%,
    hsla(0, 0%, 5%, 0.5),
    rgba(31, 31, 31, 0)
  );

  @media (max-width: ${(props) => props.theme.space.sm}) {
    display: none;
  }
`

const Content = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 0;
  box-sizing: border-box;
  width: 50%;
  padding: 40px;
  transform: translate(0, -50%);

  @media (max-width: ${(props) => props.theme.space.sm}) {
    display: none;
  }
`

const Title = styled.a`
  font-size: 56px;
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme.colors.gray1};

  @media (max-width: ${(props) => props.theme.space.xl}) {
    font-size: 44px;
    line-height: 120%;
  }

  @media (max-width: ${(props) => props.theme.space.md}) {
    font-size: 28px;
  }
`

const Desc = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 22px;
  line-height: 160%;
  color: ${(props) => props.theme.colors.gray2};

  @media (max-width: ${(props) => props.theme.space.xl}) {
    font-size: 18px;
  }

  @media (max-width: ${(props) => props.theme.space.lg}) {
    font-size: 16px;
  }

  @media (max-width: ${(props) => props.theme.space.md}) {
    display: none;
  }
`

const Cast = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray2};

  span {
    color: ${(props) => props.theme.colors.gray5};
    margin-bottom: 5px;
  }

  @media (max-width: ${(props) => props.theme.space.xl}) {
    display: none;
  }
`

const Buttons = styled.div`
  display: flex;

  @media (max-width: ${(props) => props.theme.space.md}) {
    margin-top: 25px;
  }
`

const WatchNowBtn = styled.a`
  display: flex;
  margin: 0;
  margin-right: 15px;
  padding: 12px 25px;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border: 0;
  border-radius: ${(props) => props.theme.border.base};
  color: white;
  background-color: ${(props) => props.theme.colors.brand};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #e95000;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${(props) => props.theme.space.md}) {
    font-size: 16px;
  }
`

const IconWatchNow = styled.svg`
  margin-right: 10px;
`

const LinkInfo = styled.a`
  font-weight: 500;
  font-size: 18px;
  border: 0;
  padding: 12px 45px;
  margin: 0;
  border-radius: ${(props) => props.theme.border.base};
  background-color: rgba(81, 81, 81, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.gray3};

  &:hover {
    background-color: rgba(81, 81, 81, 1);
    color: ${(props) => props.theme.colors.gray3};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${(props) => props.theme.space.xl}) {
    display: none;
  }
`
