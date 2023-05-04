import { Box, Center, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const IpadPage = () => {
    return (
        <Box>
            <Flex
                w={'45%'}
                border={'0px solid red'}
                m={'auto'}
                mt={'20'}
            >
                <Image boxSize={'90%'}
                    src='https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_large.jpg'
                />
                <Box
                    border={'0px solid green'}
                    // h='200px'
                    mt={'35%'}
                    ml={'-25%'}
                >
                    <Text
                        fontSize={'35'}
                        textAlign={'center'}
                        fontWeight={'500'}
                        fontFamily={'sans-serif'}
                        mb={'-5%'}
                    >
                        iPad
                    </Text>
                    <Text
                        fontSize={'40'}
                        textAlign={'center'}
                        fontFamily={'sans-serif'}
                        fontWeight={'600'}
                    >
                        Lovable.
                        Drawable.
                        Magical.
                    </Text>
                    <Text
                        textAlign={'center'}
                        fontSize={'22'}
                    >From $449</Text>
                    <Text
                        textAlign={'center'}
                        fontSize={'22'}
                    ><a href="">Watch the film</a></Text>
                </Box>
            </Flex>
            <Box
                w='100%'
                h='800px'
                mt='10'
                mb='10'
                bgColor={'black'}
            >
                <Flex
                >
                    <Box
                        border='2px solid green'
                        w={'20%'}
                        pt='22%'
                    >
                        <Text
                            textAlign={'center'}
                            color={'red'}
                            fontSize={12}
                        >New
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={'white'}
                            fontSize={50}
                            fontWeight={'700'}
                        >iPad Pro
                        </Text>
                            <Flex
                                gap={'4'}
                            >
                                <Text
                                    textAlign={'center'}
                                    color={'white'}
                                    fontSize={23}
                                    fontWeight={'600'}
                                >Supercharged byM2
                                </Text>
                                <Image
                                    boxSize={'45px'}
                                    src='https://www.apple.com/v/ipad-pro/al/images/overview/hero/m2_logo__90ungfqgnsiu_large.png'
                                />
                            </Flex>
                        <Text
                            textAlign={'center'}
                            color={'white'}
                        >From $799</Text>
                    </Box>
                    <Box
                    w='80%'
                    h={'800px'}
                    >
                    <Image
                    boxSize={'100%'}
                    border={'2px solid red'}
                        src='https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg'
                    />
                    </Box>
                    
                </Flex>

            </Box>
        </Box>
    )
}

export default IpadPage