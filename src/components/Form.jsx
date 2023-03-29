import { FormControl, FormLabel, Stack, Input, Textarea, Button, Flex, Text, Box } from '@chakra-ui/react'

function Form({ isMobile }) {
  return (
    <>
      {!isMobile ? (
        <>
          <Text fontSize="4xl" lineHeight="10" fontWeight="extrabold">
            Let’s Connect
          </Text>
          <Text fontWeight="normal" lineHeight="7" fontSize="xl" color="gray.600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.
          </Text>
        </>
      ) : (
        <></>
      )}

      <Box as='form'>
        <Flex p={8} gap={8} wrap="wrap" bg="white" boxShadow="base" rounded="md">
          {isMobile ? (
            <>
              <Text fontSize="4xl" lineHeight="10" fontWeight="extrabold">
                Let’s Connect
              </Text>
              <Text fontWeight="normal" lineHeight="7" fontSize="xl" color="gray.600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.
              </Text>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Name
                </FormLabel>
                <Input borderColor="gray.200" borderRadius={1.5} colorScheme="whiteAlpha" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Company Name
                </FormLabel>
                <Input borderColor="gray.200" borderRadius={1.5} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Email
                </FormLabel>
                <Input borderColor="gray.200" borderRadius={1.5} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Phone Number
                </FormLabel>
                <Input borderColor="gray.200" borderRadius={1.5} />
              </FormControl>
            </>
          ) : (
            <>
              <Stack direction="row" width="100%" columnGap={8}>
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Name
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius={1.5} colorScheme="whiteAlpha" />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Company Name
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius={1.5} />
                </FormControl>
              </Stack>
              <Stack direction="row" width="100%" columnGap={8}>
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Email
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius={1.5} />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Phone Number
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius={1.5} />
                </FormControl>
              </Stack>
            </>
          )}

          <FormControl w="100%">
            <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
              Subject
            </FormLabel>
            <Input borderColor="gray.200" borderRadius={1.5} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
              Your Message
            </FormLabel>
            <Textarea borderColor="gray.200" borderRadius={1.5} />
          </FormControl>
          <Button w={isMobile? '100%' : 'auto'} bg="#EC7E83" color="white" borderRadius="4px" fontSize="lg" lineHeight="7" fontWeight="semibold">
            Submit
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default Form
