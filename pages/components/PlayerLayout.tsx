import { FC } from 'react'
import { Box } from '@chakra-ui/react'

const PlayerLayout: FC = ({ children }) => {
  return (
    <Box bg="gray.100" h="100vh">
      <Box position="absolute" top={0} left={0} w="250px" bg='red'>
        sidebar
      </Box>
      <Box bg='green.100' marginBottom='100px' marginLeft='250px'>{children}</Box>
      <Box h='100px' position="absolute" bottom={0} left={0} bg='blue.400' w='full'>player</Box>
    </Box>
  )
}

export default PlayerLayout