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
import { useState } from 'react'
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
import { Song } from '../../types/song'

type PlayerProps = {
  songs: Song[]
  activeSong: Song
}

const Player: NextPage<PlayerProps> = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState<boolean>(true)
  const [repeat, setRepeat] = useState<boolean>(false)
  const [shuffle, setShuffle] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [seek, setSeek] = useState<number>(0.0)
  const [duration, setDuration] = useState<number>(0.0)

  const handleTogglePlayPause = (value: boolean) => {
    setPlaying(value)
  }
  const handleShuffle = () => {
      setShuffle(state => !state)
  }
  const handleRepeat = () => {
      setRepeat(state => !state)
  }

  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong.url} />
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
            <Text fontSize="xs">1:00</Text>
          </Box>
          <Box flexGrow="1">
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              id="player-range"
              max={122}
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box textAlign="right" marginBottom="2px">
            <Text fontSize="xs">2:11</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Player
