import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme(
    {
        styles: {
            global: {
                body: {
                    bg: '#f7fafc',
                },
            },
        },
        fonts: {
            body: `'Inter', sans-serif`,
        }
    })
export default theme