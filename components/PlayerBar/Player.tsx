import {
  Box,
  ButtonGroup,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import ReactHowler from 'react-howler'
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from 'react-icons/md'
import { useStoreActions } from '../../hooks/useStore'
import { formatTime } from '../../lib/formatters'
import { Song } from '../../types/song'

type PlayerProps = {
  songs: Song[]
  activeSong: Song
}

const Player: NextPage<PlayerProps> = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [repeat, setRepeat] = useState<boolean>(false)
  const [shuffle, setShuffle] = useState<boolean>(false)
  const [index, setIndex] = useState<number | void>(
    songs.findIndex((s) => s.id === activeSong.id)
  )
  const [seek, setSeek] = useState<number | undefined>(0.0)
  const [isSeeking, setIsSeeking] = useState<boolean>(false)
  const [duration, setDuration] = useState<number | undefined>(0.0)
  const [showRangeSliderThumb, setShowRangeSliderThumb] =
    useState<boolean>(false)

  const setActiveSong = useStoreActions((state: any) => state.changeActiveSong)

  const soundRef = useRef<ReactHowler>(null)
  const repeatRef = useRef(repeat)

  useEffect(() => {
    let timerId: number

    if (playing && !isSeeking) {
      const f = () => {
        setSeek(soundRef.current?.seek())
        timerId = requestAnimationFrame(f)
      }

      timerId = requestAnimationFrame(f)
      return () => cancelAnimationFrame(timerId)
    }
    return () => cancelAnimationFrame(timerId)
  }, [playing, isSeeking])
  useEffect(() => {
    setActiveSong(songs[Number(index)])
  }, [index, setActiveSong, songs])
  useEffect(() => {
    repeatRef.current = repeat
  }, [repeat])

  const handleTogglePlayPause = (value: boolean) => {
    setPlaying(value)
  }
  const handleShuffle = () => {
    setShuffle((state) => !state)
  }
  const handleRepeat = () => {
    setRepeat((state) => !state)
  }
  const handlePrevSong = () => {
    setIndex((state) => {
      return state ? state - 1 : songs.length - 1
    })
  }
  const handleNextSong = () => {
    setIndex((state) => {
      if (shuffle) {
        const next = Math.floor(Math.random() * songs.length)
        if (next === state) return handleNextSong()
        return next
      } else {
        return state === songs.length - 1 ? 0 : Number(state) + 1
      }
    })
  }
  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(0)
      soundRef.current?.seek(0)
    } else {
      handleNextSong()
    }
  }
  const onLoad = () => {
    const songDuration = soundRef.current?.duration()
    setDuration(songDuration)
  }
  const onSeek = (e: number[]) => {
    setSeek(e[0])
    soundRef.current?.seek(e[0])
  }

  return (
    <Box>
      <Box>
        <ReactHowler
          playing={playing}
          src={activeSong.url}
          ref={soundRef}
          onEnd={onEnd}
          onLoad={onLoad}
        />
      </Box>
      <Center color="gray.600" marginBottom="8px">
        <ButtonGroup>
          <IconButton
            color={shuffle ? 'white' : 'gray.600'}
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="20px"
            icon={<MdShuffle />}
            onClick={handleShuffle}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="20px"
            icon={<MdSkipPrevious />}
            onClick={handlePrevSong}
          />
          {playing ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="38px"
              icon={<MdOutlinePauseCircleFilled />}
              color="white"
              onClick={() => handleTogglePlayPause(false)}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="38px"
              icon={<MdOutlinePlayCircleFilled />}
              color="white"
              onClick={() => handleTogglePlayPause(true)}
            />
          )}
          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="20px"
            icon={<MdSkipNext />}
            onClick={handleNextSong}
          />
          <IconButton
            color={repeat ? 'white' : 'gray.600'}
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="20px"
            icon={<MdOutlineRepeat />}
            onClick={handleRepeat}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center" gap="8px">
          <Box marginBottom="2px">
            <Text fontSize="xs">{formatTime(seek)}</Text>
          </Box>
          <Box flexGrow="1">
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              id="player-range"
              max={duration ? (duration.toFixed(2) as unknown as number) : 0}
              onChange={onSeek}
              value={[seek as number]}
              onChangeStart={() => setIsSeeking(true)}
              onChangeEnd={() => setIsSeeking(false)}
              onMouseEnter={() => setShowRangeSliderThumb(true)}
              onMouseLeave={() => setShowRangeSliderThumb(false)}
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack
                  bg={showRangeSliderThumb ? 'green.400' : 'gray.600'}
                />
              </RangeSliderTrack>
              {showRangeSliderThumb && <RangeSliderThumb index={0} />}
            </RangeSlider>
          </Box>
          <Box textAlign="right" marginBottom="2px">
            <Text fontSize="xs">{formatTime(duration)}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Player
