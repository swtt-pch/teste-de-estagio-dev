import { Box, Flex, Text, Heading, Card, CardBody, Stack } from '@chakra-ui/react'
import phoneSvg from '../assets/img/phone.svg'
import emailSvg from '../assets/img/email.svg'
import locationSvg from '../assets/img/location.svg'
function SideBar() {
    return (
        <Box as='aside' maxWidth='384px'>
            <Flex w='100%' wrap='wrap' gap='64px'>
                <Stack>
                    <Heading size='md' mb='12px'>Our Commitment</Heading>
                    <Card color='#718096'>
                        <CardBody backgroundColor='white' p='28px'>
                            <Text fontSize='lg'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius dictum</Text>
                        </CardBody>
                    </Card>
                </Stack>
                <Stack>
                    <Heading size='md' mb='12px'>Art Directing</Heading>
                    <Card color='#718096'>
                        <CardBody backgroundColor='white' p='28px' alignContent='center'>
                            <Text fontSize='lg'>Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla.</Text>
                            <Stack direction='column' spacing='20px' mt='24px'>
                                <Flex columnGap='5px' alignItems='center'>
                                    <img src={phoneSvg} className='contact-icon' /> <Text>+123 (4567) 8910</Text>
                                </Flex>
                                <Flex columnGap='5px' alignItems='center'>
                                    <img src={emailSvg} className='contact-icon' /><Text>hello@example.com</Text>
                                </Flex>
                                <Flex columnGap='5px' alignItems='center'>
                                    <img src={locationSvg} className='contact-icon' /> <Text>120 Street Lorem Ipsum Sit Amet</Text>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                </Stack>
            </Flex>
        </Box>
    );
}

export default SideBar;