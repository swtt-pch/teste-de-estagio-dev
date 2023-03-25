import { Box, Flex, Text, Heading, Card, CardBody, Stack, Image } from '@chakra-ui/react'
import phoneSvg from '../assets/img/phone.svg'
import emailSvg from '../assets/img/email.svg'
import locationSvg from '../assets/img/location.svg'
function SideBar() {
  return (
    <Box as="aside" maxWidth="384px">
      <Flex w="100%" wrap="wrap" gap="64px">
        <Stack mt="px">
          <Text fontSize="lg" lineHeight="7" fontWeight="bold" mb="12px">
            Our Commitment
          </Text>
          <Card color="gray.500">
            <CardBody backgroundColor="white" p="28px">
              <Text fontSize="lg" lineHeight="7" fontWeight="normal">
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius dictum
              </Text>
            </CardBody>
          </Card>
        </Stack>
        <Stack>
          <Text fontSize="lg" lineHeight="7" fontWeight="bold" mb="12px">
            Art Directing
          </Text>
          <Card color="gray.500">
            <CardBody backgroundColor="white" p="28px" alignContent="center">
              <Text fontSize="lg" lineHeight="7" fontWeight="normal">
                Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla.
              </Text>
              <Stack direction="column" spacing="20px" mt="24px">
                <Flex columnGap="5px" alignItems="center">
                  <Image src={phoneSvg} />
                  <Text fontSize="md" lineHeight="6" fontWeight="medium">
                    +123 (4567) 8910
                  </Text>
                </Flex>
                <Flex columnGap="5px" alignItems="center">
                  <Image src={emailSvg} />
                  <Text fontSize="md" lineHeight="6" fontWeight="medium">
                    hello@example.com
                  </Text>
                </Flex>
                <Flex columnGap="5px" alignItems="center">
                  <Image src={locationSvg} />
                  <Text fontSize="md" lineHeight="6" fontWeight="medium">
                    120 Street Lorem Ipsum Sit Amet
                  </Text>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Flex>
    </Box>
  )
}

export default SideBar
