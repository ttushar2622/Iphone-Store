import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const IpadCard = ({
    id,
    image,
    dotSrc,
    name,
    description,
    price,
    size,
    info1, info2, info3,
    chipSrc,
    icon, camera, face, usb, network, pencil, keyboard,
    chipName,
    icontxt1, icontxt2, icontxt3,
    cameraTxt1, cameraTxt2, cameraTxt3,
    lockTxt,
    usbTxt1, usbTxt2, usbTxt3,
    networkText,
    pencilTxt,
    keyboardTxt
}) => {
    return (
        <Box marginTop='50px' textAlign='center'>
            <Image
                boxSize={'150px'}
                margin='auto' marginBottom='20px' src={image} />
            <Image margin='auto' src={dotSrc} />
            <Text color='tomato'>New</Text>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <br></br>
            <Text>{price}</Text>
            <Link to={`/singlepage/${id}`} >
            <Button
                borderRadius='15px'
                color='white'
                backgroundColor='blue.400'
            >Buy</Button>
            </Link>

            <Text color="blue.400">
                <a href="https://www.apple.com/">Learn More</a>
            </Text>
            <br></br>
            <hr></hr>
            <br></br>
            <Text
                fontSize={'2xl'}
                fontWeight={'600'}
            >{size}</Text>
            <Text
                mb={'0'}
            >{info1}</Text>
            <Text>{info2}</Text>
            <Text>{info3}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={chipSrc} />
            <Text>{chipName}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={icon} />
            <Text>{icontxt1}</Text>
            <Text>{icontxt2}</Text>
            <Text>{icontxt3}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={camera} />
            <Text>{cameraTxt1}</Text>
            <Text>{cameraTxt2}</Text>
            <Text>{cameraTxt3}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={face} />
            <Text>{lockTxt}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={usb} />
            <Text>{usbTxt1}</Text>
            <Text>{usbTxt2}</Text>
            <Text>{usbTxt3}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={network} />
            <Text>{networkText}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={pencil} />
            <Text>{pencilTxt}</Text>
            <br></br>
            <br></br>
            <Image margin='auto' src={keyboard} />
            <Text>{keyboardTxt}</Text>
            <br></br>
            <br></br>
        </Box>
    )
}

export default IpadCard;