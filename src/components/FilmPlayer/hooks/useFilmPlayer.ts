import React, { useEffect, useState } from 'react'

const defaultState = {
  playing: false,
  showBottom: false,
  muted: false,
  volume: 1,
  fullscreen: false,
  duration: {
    format: '0:00',
    value: 0,
  },
  elapsed: {
    format: '0:00',
    value: 0,
  },
  played: 0,
}

export const useFilmPlayer = () => {
  const [playerState, setPlayerState] = useState(defaultState)

  const handleClickPreview: React.MouseEventHandler<HTMLButtonElement> = () => {
    setPlayerState({ ...playerState, showBottom: true })
  }

  const handlePlay: React.MouseEventHandler<HTMLButtonElement> = () => {
    setPlayerState({ ...playerState, playing: !playerState.playing })
  }

  const handleMute: React.MouseEventHandler<HTMLButtonElement> = () => {
    setPlayerState({ ...playerState, muted: !playerState.muted })
  }

  const handleFullscreen: React.MouseEventHandler<HTMLButtonElement> = () => {
    setPlayerState({ ...playerState, fullscreen: !playerState.fullscreen })
  }

  const handleDuration: any = (duration: number) => {
    setPlayerState({
      ...playerState,
      duration: {
        format: formatTime(duration),
        value: duration,
      },
    })
  }

  const handleSeekChange: any = (e: any) => {
    setPlayerState({ ...playerState, played: parseFloat(e.target.value) })
  }

  useEffect(() => {
    const elapsedValue = playerState.duration.value * playerState.played

    setPlayerState({
      ...playerState,
      elapsed: {
        format: elapsedValue.toString(),
        value: elapsedValue,
      },
    })
  }, [playerState.played])

  return {
    playerState,
    handlers: {
      handleClickPreview,
      handlePlay,
      handleMute,
      handleFullscreen,
      handleDuration,
      handleSeekChange,
    },
  }
}

function formatTime(seconds: number) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds().toString())
  if (hh) {
    return `${hh}:${pad(mm.toString())}:${ss}`
  }
  return `${mm}:${ss}`
}

function pad(str: string) {
  return ('0' + str).slice(-2)
}
