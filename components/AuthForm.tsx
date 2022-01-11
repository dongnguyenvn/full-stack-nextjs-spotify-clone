import { FC, FormEvent, useState } from 'react'
import { Box, Flex, Input, Button, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { auth } from '../lib/mutation'

type AuthFormProps = {
  mode: 'signin' | 'signup'
}

const AuthForm: FC<AuthFormProps> = ({ mode }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const user = await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/');
  }

  return (
    <Box h="100vh" bg="black">
      <Flex justify="center" align="center" h="calc(100vh - 100px)">
        <Box w="300px">
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Input
                placeholder="email"
                type="text"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                bg="green.300"
                color="white"
                isLoading={isLoading}
                _hover={{ background: 'green.400' }}
              >
                {mode === 'signin' ? 'Sign in' : 'Sign up'}
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
