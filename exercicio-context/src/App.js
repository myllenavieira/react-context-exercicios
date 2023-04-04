import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Router from "./routes/Router"
import GlobalState from './contexts/GlobalState';

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <Router />
      </GlobalState>
    </ChakraProvider>
  )
}

export default App;
