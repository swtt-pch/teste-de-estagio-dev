import { Flex, useMediaQuery, ChakraProvider } from '@chakra-ui/react'
import Form from './components/Form'
import SideBar from './components/Sidebar'
import theme from './theme'

function App() {
  const [isMobile] = useMediaQuery('(max-width: 48em)')
  return (
    <ChakraProvider theme={theme}>
      <Flex m={6} direction={'row'} wrap="wrap"  w="100w" alignItems="center" gap={8} justifyContent="center">
        <Flex gap={8} wrap="wrap" maxW="container.md">
          <Form isMobile={isMobile} />
        </Flex>
        <SideBar />
      </Flex>
    </ChakraProvider>
  )
}

export default App
