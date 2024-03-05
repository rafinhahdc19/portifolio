import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: '#161616'
      },
    },
  },
});

export default theme;