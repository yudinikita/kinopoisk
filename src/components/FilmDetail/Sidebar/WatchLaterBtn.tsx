import styled from 'styled-components'

export default function WatchLaterBtn() {
  return <WatchLater>Буду смотреть</WatchLater>
}

const WatchLater = styled.button`
  width: 100%;
  padding: 10px 12px;
  font-weight: 400;
  font-size: 16px;
  border: 0;
  border-radius: ${(props) => props.theme.border.base};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray5};

  &:active {
    transform: scale(0.95);
  }
`
