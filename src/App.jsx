import { Flex, useMediaQuery, ChakraProvider, extendTheme } from '@chakra-ui/react'
import './App.css'
import Form from './components/Form'
import SideBar from './components/Sidebar'
import theme from './theme'


function App() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <ChakraProvider theme={theme}>
      <Flex m="24px" direction={'row'} wrap="wrap" minH="100vh" w="100w" alignItems="center" gap="32px" justifyContent="center">
        <Flex gap="32px" wrap="wrap" maxW="800px">
          <Form isMobile={isMobile} />
        </Flex>
        <SideBar />
      </Flex>
    </ChakraProvider>
  )
}

export default App
