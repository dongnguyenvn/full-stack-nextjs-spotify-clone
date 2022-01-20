import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { FC } from 'react'

type GradientLayoutProps = {
  color: string
  image?: string
  title?: string
  subtitle?: string
  description?: string
  roundImage?: string
}

const GradientLayout: FC<GradientLayoutProps> = ({
  color,
  image,
  title,
  subtitle,
  description,
  roundImage,
  children,
}) => {
  return (
    <Box
      h="100vh"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="10px" align="end">
        <Box padding="20px">
          <Image boxSize="190px" boxShadow="2xl" src={image}></Image>
        </Box>
        <Box padding="15px" color='white' display='flex' justifyContent='flex-end' flexDirection='column'>
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="48px" fontWeight='700'>{title}</Text>
          <Text fontSize="sm" fontWeight="100">
            {description}
          </Text>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default GradientLayout
