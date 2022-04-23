import { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import playIcon from 'resources/icons/arrow-right.svg'
import { useFilmPlayer } from 'components/FilmPlayer/hooks/useFilmPlayer'

interface FilmPlayer {
  url?: string
}

export default function FilmPlayer({ url }: FilmPlayer) {
  const [viewPlayer, setViewPlayer] = useState(false)

  const { playerState, handlers } = useFilmPlayer()

  useEffect(() => setViewPlayer(true), [])

  if (!viewPlayer) return null

  return (
    <Container>
      <ReactPlayerStyled
        url={url}
        controls={true}
        width="100%"
        height="100%"
        playing={playerState.playing}
        muted={playerState.muted}
        onClickPreview={handlers.handleClickPreview}
        playIcon={<LightPlayIcon />}
        volume={1}
        onDuration={handlers.handleDuration}
      />

      {/*<PlayerGradientBottom />*/}

      {/*<PlayerBottom>*/}
      {/*  <ProgressBarContainer>*/}
      {/*    <ProgressBar draggable={true}>*/}
      {/*      <ProgressList>*/}
      {/*        <ProgressLoad />*/}
      {/*        <ProgressPlay />*/}
      {/*      </ProgressList>*/}
      {/*    </ProgressBar>*/}
      {/*  </ProgressBarContainer>*/}
      {/*  <PlayerControls>*/}
      {/*    <PlayerLeftControls>*/}
      {/*      <PlayButton onClick={handlers.handlePlay}>*/}
      {/*        {renderIconButtonPlay(playerState.playing)}*/}
      {/*      </PlayButton>*/}
      {/*      <VolumeArea>*/}
      {/*        <MuteButton onClick={handlers.handleMute}>*/}
      {/*          {renderIconButtonMute(playerState.muted)}*/}
      {/*        </MuteButton>*/}
      {/*      </VolumeArea>*/}
      {/*      <TimeDisplay>*/}
      {/*        <TimeContainer>*/}
      {/*          <TimeCurrent>{playerState.elapsed.format}</TimeCurrent>*/}
      {/*          <TimeSeparator> / </TimeSeparator>*/}
      {/*          <TimeDuration>{playerState.duration.format}</TimeDuration>*/}
      {/*        </TimeContainer>*/}
      {/*      </TimeDisplay>*/}
      {/*    </PlayerLeftControls>*/}
      {/*    <PlayerRightControls>*/}
      {/*      <SettingsButton>*/}
      {/*        <svg*/}
      {/*          width="18"*/}
      {/*          height="18"*/}
      {/*          fill="none"*/}
      {/*          xmlns="http://www.w3.org/2000/svg"*/}
      {/*        >*/}
      {/*          <path*/}
      {/*            fillRule="evenodd"*/}
      {/*            clipRule="evenodd"*/}
      {/*            d="M16.112 10.473c.322.17.57.44.745.71.34.559.313 1.243-.018 1.846l-.644 1.08c-.34.576-.975.936-1.628.936-.322 0-.68-.09-.975-.27-.24-.153-.515-.207-.81-.207-.91 0-1.673.747-1.701 1.638 0 1.035-.846 1.845-1.904 1.845h-1.25c-1.068 0-1.914-.81-1.914-1.845-.018-.891-.782-1.638-1.692-1.638-.304 0-.58.054-.81.207-.294.18-.662.27-.975.27A1.92 1.92 0 0 1 .9 14.109l-.634-1.08c-.34-.585-.36-1.287-.019-1.845.147-.27.423-.54.736-.711.258-.126.423-.333.58-.576.46-.774.183-1.791-.598-2.25A1.84 1.84 0 0 1 .283 5.1l.616-1.062a1.912 1.912 0 0 1 2.594-.684c.8.432 1.84.144 2.309-.621.147-.252.23-.522.211-.792a1.606 1.606 0 0 1 .258-.954C6.61.429 7.227.069 7.899.05h1.296c.681 0 1.297.378 1.638.936a1.6 1.6 0 0 1 .248.954c-.018.27.064.54.212.792.469.765 1.508 1.053 2.317.62a1.901 1.901 0 0 1 2.585.685L16.81 5.1c.534.89.24 2.034-.68 2.547-.782.459-1.058 1.476-.59 2.25.148.243.314.45.571.576ZM5.947 9.06c0 1.413 1.168 2.538 2.612 2.538 1.444 0 2.584-1.125 2.584-2.538 0-1.413-1.14-2.547-2.584-2.547-1.444 0-2.612 1.134-2.612 2.547Z"*/}
      {/*            fill="#fff"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </SettingsButton>*/}
      {/*      <FullscreenButton>{renderIconButtonFullscreen()}</FullscreenButton>*/}
      {/*    </PlayerRightControls>*/}
      {/*  </PlayerControls>*/}
      {/*</PlayerBottom>*/}
    </Container>
  )
}

const LightPlayIcon = () => (
  <LightPlayIconWrapper>
    <Image src={playIcon} width="25px" height="25px" alt="Иконка Play" />
  </LightPlayIconWrapper>
)
//
// const renderIconButtonPlay = (playing?: boolean) =>
//   playing ? (
//     <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect width="5.4" height="18.001" rx="2.7" fill="#fff" />
//       <rect x="9.9" width="5.4" height="18.001" rx="2.7" fill="#fff" />
//     </svg>
//   ) : (
//     <svg width="15" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M14.446 10.697c-.085.087-.405.459-.703.764-1.747 1.925-6.307 5.075-8.693 6.036-.362.155-1.278.482-1.768.503a2.9 2.9 0 0 1-1.343-.327 2.81 2.81 0 0 1-1.192-1.356c-.15-.395-.385-1.575-.385-1.596C.13 13.43 0 11.331 0 9.012c0-2.21.129-4.223.32-5.534.022-.02.256-1.488.511-1.99C1.301.57 2.217 0 3.197 0h.085c.639.022 1.982.593 1.982.614 2.257.963 6.711 3.958 8.501 5.949 0 0 .504.511.724.83.341.46.511 1.028.511 1.596 0 .635-.191 1.226-.554 1.707"
//         fill="#fff"
//       />
//     </svg>
//   )
//
// const renderIconButtonMute = (muted?: boolean) =>
//   muted ? (
//     <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16.503.257a.877.877 0 1 1 1.24 1.241L1.497 17.743A.897.897 0 0 1 .876 18a.912.912 0 0 1-.617-.254.88.88 0 0 1-.003-1.244l2.678-2.678h-.027c-1.335 0-2.307-.942-2.487-2.406-.202-1.464-.162-3.971 0-5.305.19-1.384 1.213-2.336 2.487-2.336H4.64L7.95 1.07C8.352.729 9.064.407 9.614.398c1.003 0 1.926.7 2.257 1.824.13.472.181.943.222 1.395l.079.64c.013.099.025.193.035.294L16.503.257Zm-5.248 9.909c.135-.133.438-.228.574-.193.368.093.44.622.435 1.037-.017 1.205-.057 2.044-.122 2.562l-.045.427v.008c-.043.43-.088.875-.215 1.35-.335 1.12-1.23 1.848-2.248 1.848h-.1c-.563 0-1.173-.338-1.519-.631l-1.232-.954c-.469-.348-.33-.904-.067-1.225.196-.24 2.554-2.405 3.793-3.542.42-.386.711-.653.746-.687Z"
//         fill="#fff"
//       />
//     </svg>
//   ) : (
//     <svg width="19" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M10.632 2.875c-.042-.405-.086-.825-.194-1.245C10.146.626 9.335 0 8.465 0 7.98-.002 7.367.297 7.02.6L4.136 3.013H2.627c-1.11 0-2.003.856-2.172 2.092-.143 1.186-.178 3.426 0 4.73.155 1.306 1.007 2.15 2.172 2.15h1.51l2.938 2.45c.302.262.834.563 1.323.563l.087.001c.887 0 1.667-.65 1.96-1.65.11-.424.149-.82.186-1.204v-.007l.04-.382c.15-1.24.15-7.283 0-8.513l-.04-.369Zm3.374.037a.756.756 0 0 0-1.065-.197.797.797 0 0 0-.19 1.09c.668.985 1.036 2.296 1.036 3.695 0 1.397-.368 2.71-1.036 3.695a.797.797 0 0 0 .191 1.09.755.755 0 0 0 1.064-.197c.845-1.244 1.31-2.873 1.31-4.588 0-1.715-.466-3.345-1.31-4.588Zm1.57-2.726a.754.754 0 0 1 1.064.197c1.307 1.924 2.027 4.453 2.027 7.119 0 2.667-.72 5.195-2.027 7.12a.751.751 0 0 1-1.064.197.797.797 0 0 1-.192-1.09c1.131-1.666 1.754-3.878 1.754-6.227s-.623-4.56-1.754-6.226a.798.798 0 0 1 .192-1.09Z"
//         fill="#fff"
//       />
//     </svg>
//   )
//
// const renderIconButtonFullscreen = (fullscreen?: boolean) =>
//   fullscreen ? (
//     <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M17.42.27a.926.926 0 1 1 1.309 1.311L1.579 18.73A.947.947 0 0 1 .926 19a.963.963 0 0 1-.651-.268.93.93 0 0 1-.004-1.313l2.827-2.827h-.029c-1.409 0-2.435-.995-2.625-2.54-.213-1.545-.17-4.192 0-5.6.2-1.46 1.28-2.465 2.625-2.465h1.83L8.393 1.13C8.817.77 9.568.43 10.15.42c1.058 0 2.032.74 2.381 1.926.138.498.192.995.234 1.472l.084.676c.014.104.026.204.037.31L17.42.27Zm-5.54 10.461c.144-.14.463-.24.607-.203.389.099.465.656.459 1.095-.018 1.272-.06 2.157-.128 2.704l-.048.451v.008c-.046.454-.093.923-.227 1.424-.353 1.184-1.298 1.952-2.373 1.952l-.106-.001c-.594 0-1.237-.356-1.603-.666l-1.3-1.006c-.495-.368-.349-.954-.071-1.294.207-.253 2.696-2.538 4.003-3.738.444-.407.751-.69.788-.726Z"
//         fill="#fff"
//       />
//     </svg>
//   ) : (
//     <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M13.89 4.109a.73.73 0 0 0-1.031.007l-2.652 2.37a.93.93 0 0 0-.009 1.314.93.93 0 0 0 1.315-.01l2.37-2.65a.73.73 0 0 0 .008-1.031Z"
//         fill="#fff"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M17.998 1.4s.004-.299-.021-.456a1.063 1.063 0 0 0-.305-.61 1.11 1.11 0 0 0-.655-.323c-.05 0-.253-.01-.43-.01-1.073-.03-3.338.429-4.326.866-.152.065-.52.244-.672.384-.14.14-.243.305-.307.495-.071.246-.06.512.033.745.068.157.336.565.343.572.3.44.863 1.08 1.528 1.744.633.634 1.248 1.173 1.681 1.491.013 0 .502.35.724.418.403.123.84.013 1.132-.28l.026-.025c.184-.197.421-.762.416-.768.398-.95.869-3.139.833-4.244ZM4.11 13.89a.73.73 0 0 0 1.032-.007l2.65-2.37a.93.93 0 0 0 .01-1.314.93.93 0 0 0-1.315.009l-2.37 2.651a.73.73 0 0 0-.007 1.032Z"
//         fill="#fff"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M6.718 16.254a1.16 1.16 0 0 0-.032-.745 5.776 5.776 0 0 0-.343-.572c-.3-.44-.864-1.08-1.529-1.745-.633-.633-1.248-1.172-1.681-1.491-.013 0-.503-.35-.723-.417a1.134 1.134 0 0 0-1.134.28l-.025.025c-.184.197-.422.76-.415.767-.4.95-.871 3.14-.834 4.244 0 0-.004.298.022.454.03.234.141.448.305.611.182.182.408.294.654.324.05 0 .253.01.43.01 1.073.029 3.338-.43 4.325-.867.153-.064.521-.243.673-.383.14-.14.243-.305.307-.495Z"
//         fill="#fff"
//       />
//     </svg>
//   )

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ReactPlayerStyled = styled(ReactPlayer)`
  position: relative;
  box-sizing: content-box !important;
  width: 100%;
  height: 100%;
  margin: 0;
  background: transparent;
  cursor: default;
  outline: 0;
`

const LightPlayIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 23px 23px 25px;
  border-radius: 60px;
  background-color: rgba(40, 40, 40, 0.5);
`
//
// const PlayerGradientBottom = styled.div`
//   position: absolute;
//   height: 146px;
//   width: 100%;
//   bottom: 0;
//   background-repeat: repeat-x;
//   background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAACSCAYAAACE56BkAAAAAXNSR0IArs4c6QAAAPVJREFUKFNlyOlHGAAcxvHuY93H1n1fW1v3fbej+zAmI5PIRGYiM5JEEkkiiSSRRPoj83nze9Pz4uPrSUh4tURPEpKDFJWKtCBdZSAzeKOykB3kqFzkBfmqAIVBkSrG2+CdKkEpyoJyVYHKoEpVoyaoVXWoDxpUI5qCZtWC98EH1YqPwSfVhvagQ3WiK+hWPegN+lQ/BoJBNYThYESNYgzjwYSaDD6rL/iKb8GUmsZMMKvmMB8sqEUsYRnf8QMr+IlV/MIa1rGB39jEFv7gL7axg3/4j13sYR8HOMQRjnGCU5zhHBe4xBWucYNb3OEeD3jEE55fAOMNI9cZbRZdAAAAAElFTkSuQmCC');
//   z-index: 13;
// `
//
// const PlayerBottom = styled.div`
//   width: 100%;
//   height: 50px;
//   position: absolute;
//   bottom: 0;
//   z-index: 14;
// `
//
// const PlayerControls = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 50px;
// `
//
// const PlayerLeftControls = styled.div`
//   display: flex;
//   height: 50px;
//   margin-left: 10px;
// `
//
// const PlayButton = styled.button`
//   display: inline-block;
//   width: 50px;
//   margin: 0;
//   padding: 0 2px;
//   border: 0;
//   background: transparent;
//   cursor: pointer;
//   opacity: 0.9;
//   outline: none;
//   transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
//
//   &:hover {
//     opacity: 1;
//   }
//
//   &:active {
//     transform: scale(0.9);
//   }
// `
//
// const VolumeArea = styled.span`
//   display: flex;
// `
//
// const MuteButton = styled.button`
//   display: inline-block;
//   width: 50px;
//   margin: 0;
//   padding: 0 2px;
//   border: 0;
//   background: transparent;
//   cursor: pointer;
//   opacity: 0.9;
//   outline: none;
//   transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
//
//   &:hover {
//     opacity: 1;
//   }
//
//   &:active {
//     transform: scale(0.9);
//   }
// `
//
// const TimeDisplay = styled.div`
//   display: inline-block;
//   vertical-align: top;
//   line-height: 47px;
//   font-size: 14px;
//   font-weight: 500;
//   white-space: nowrap;
//   padding: 0 5px;
//   color: ${(props) => props.theme.colors.gray2};
// `
//
// const TimeContainer = styled.div`
//   display: flex;
// `
//
// const TimeCurrent = styled.span``
//
// const TimeSeparator = styled.span`
//   padding: 0 5px;
// `
//
// const TimeDuration = styled.span``
//
// const PlayerRightControls = styled.div`
//   display: flex;
//   height: 50px;
//   margin-right: 10px;
// `
//
// const SettingsButton = styled.button`
//   display: inline-block;
//   width: 50px;
//   margin: 0;
//   padding: 0 2px;
//   border: 0;
//   background: transparent;
//   cursor: pointer;
//   opacity: 0.9;
//   outline: none;
//   transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
//
//   &:hover {
//     opacity: 1;
//   }
//
//   &:active {
//     transform: scale(0.9);
//   }
// `
//
// const FullscreenButton = styled.button`
//   display: inline-block;
//   width: 50px;
//   margin: 0;
//   padding: 0 2px;
//   border: 0;
//   background: transparent;
//   cursor: pointer;
//   opacity: 0.9;
//   outline: none;
//   transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
//
//   &:hover {
//     opacity: 1;
//   }
//
//   &:active {
//     transform: scale(0.9);
//   }
// `
//
// const ProgressBarContainer = styled.div`
//   height: 5px;
//   cursor: pointer;
//   display: block;
//   position: absolute;
//   width: 100%;
//   bottom: 49px;
// `
//
// const ProgressBar = styled.div`
//   touch-action: none;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 31;
//   outline: none;
// `
//
// const ProgressList = styled.div`
//   z-index: 39;
//   background: rgba(255, 255, 255, 0.2);
//   height: 100%;
//   transform: scaleY(0.6);
//   transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
//   position: relative;
// `
//
// const ProgressLoad = styled.div`
//   position: absolute;
//   left: 0;
//   transform: scaleX(0.821542);
//   z-index: 33;
//   background: rgba(255, 255, 255, 0.4);
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   transform-origin: 0 0;
// `
//
// const ProgressPlay = styled.div`
//   left: 0;
//   transform: scaleX(0.804121);
//   z-index: 34;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   transform-origin: 0 0;
//   background-color: ${(props) => props.theme.colors.brand};
// `
