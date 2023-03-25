import { FormControl, FormLabel, Stack, Input, Textarea, Button, Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'

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

      <form>
        <Flex p="32px" gap="32px" wrap="wrap" bg="white" boxShadow="base" rounded="md">
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
                <Input borderColor="gray.200" borderRadius='6px' colorScheme="whiteAlpha" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Company Name
                </FormLabel>
                <Input borderColor="gray.200" borderRadius='6px' />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Email
                </FormLabel>
                <Input borderColor="gray.200" borderRadius='6px' />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                  Phone Number
                </FormLabel>
                <Input borderColor="gray.200" borderRadius='6px' />
              </FormControl>
            </>
          ) : (
            <>
              <Stack direction="row" width="100%" columnGap="32px">
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Name
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius='6px' colorScheme="whiteAlpha" />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Company Name
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius='6px' />
                </FormControl>
              </Stack>
              <Stack direction="row" width="100%" columnGap="32px">
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Email
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius='6px' />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
                    Phone Number
                  </FormLabel>
                  <Input borderColor="gray.200" borderRadius='6px' />
                </FormControl>
              </Stack>
            </>
          )}

          <FormControl w="100%">
            <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
              Subject
            </FormLabel>
            <Input borderColor="gray.200" borderRadius='6px' />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="md" lineHeight="6" fontWeight="medium">
              Your Message
            </FormLabel>
            <Textarea borderColor="gray.200" borderRadius='6px' />
          </FormControl>
          <Button bg="#EC7E83" color="white" borderRadius='4px' fontSize='lg' lineHeight='7' fontWeight='semibold'>
            Submit
          </Button>
        </Flex>
      </form>
    </>
  )
}

export default Form
