import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const IpadPage = () => {
    return (
        <Box>
            <Flex
                w={'45%'}
                border={'2px solid red'}
                m={'auto'}
            >
                <Image boxSize={'90%'}
                    src='https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_large.jpg'
                />
                <Box
                    border={'2px solid green'}
                    // h='200px'
                    mt={'35%'}
                    ml={'-25%'}
                >
                    <Text
                        fontSize={'35'}
                        textAlign={'center'}
                        fontWeight={'500'}
                        fontFamily={'sans-serif'}
                        mb={'-19%'}
                    >
                        iPad
                    </Text>
                    <Text
                        fontSize={'50'}
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
        </Box>
    )
}

export default IpadPage