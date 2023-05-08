import { Box, Button, Center, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import IpadCard from '../component/Ipad/IpadCard'
import axios from 'axios';


const IpadPage = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://645863860c15cb14821cc145.mockapi.io/apple/ipad")
            .then((res) => {
                // console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


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
                m='auto'
                mt='10'
                mb='10'
                bgColor={'black'}
                display={'flex'}
                gap='10'
            >
                <Box
                    border='2px solid green'
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
                <Box  >
                    <Image
                        boxSize={'100%'}
                        border={'2px solid red'}
                        src='https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg'
                    />
                </Box>

            </Box>
            {/* gsgsgh */}
            <Box marginTop='90px' textAlign='center'>
                <Text fontWeight='700' fontSize='40'>Which iPad is right for you?</Text>
            </Box>
            <Box width='70%' margin='auto' display='flex' justifyContent='space-between' alignItems='center'>

                <IpadCard key={1}
                    id={1}
                    image={"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_pro__erf9x8mw04sy_small_2x.png"}
                    dotSrc={'https://www.apple.com/v/iphone/home/bo/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_medium.png'}
                    name={"iPad Pro"}
                    description={'descrippjhdgb'}
                    price={"from $900"}
                    size={'12.9″ or 11″'}
                    info1={'Liquid Retina XDR display or'}
                    info2={'Liquid Retina display1'}
                    info3={'ProMotion technology'}
                    chipSrc={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_chip_m2__c17adphgllsi_large_2x.jpg'}
                    icon={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_front_portrait__zyhtkvd2biay_large_2x.jpg'}
                    camera={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_dual_lens_1__gghfjcu81eqi_large_2x.jpg'}
                    face={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_authentication_face__ft5wp26ng5aq_large.jpg'}
                    usb={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_connector_thunderbolt_usb_c__dw5jz6kqedci_large.jpg'}
                    network={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_cellular_5g__cei94kfo9hyu_large.jpg'}
                    pencil={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_pencil_2ndgen__fx6w6j72iu2y_large.jpg'}
                    keyboard={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_keyboard_magic__gj8e0r1o3662_large.jpg'}
                    chipName={'M2 chip'}
                    icontxt1={'12MP Ultra Wide'}
                    icontxt2={'front camera'}
                    icontxt3={'TrueDepth camera system'}
                    cameraTxt1={'12MP Wide camera'}
                    cameraTxt2={'10MP Ultra Wide camera'}
                    cameraTxt3={'4K video, ProRes'}
                    lockTxt={'Face ID'}
                    usbTxt1={'USB‑C connector'}
                    usbTxt2={'Support for'}
                    usbTxt3={'Thunderbolt / USB 4'}
                    networkText={'5G cellular2'}
                    pencilTxt={'Supports Apple Pencil'}
                    keyboardTxt={'Supports Magic'}
                />

                <IpadCard key={2}
                    id={2}
                    image={"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_air__bxjv33pk6nte_large.png"}
                    dotSrc={'https://www.apple.com/v/iphone/home/bo/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_medium.png'}
                    name={"ipad"}
                    description={'descrippjhdgb'}
                    price={"from $900"}
                    size={'12.9″ or 11″'}
                    info1={'Liquid Retina XDR display or'}
                    info2={'Liquid Retina display1'}
                    info3={'ProMotion technology'}
                    chipSrc={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_chip_m2__c17adphgllsi_large_2x.jpg'}
                    icon={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_front_portrait__zyhtkvd2biay_large_2x.jpg'}
                    camera={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_dual_lens_1__gghfjcu81eqi_large_2x.jpg'}
                    face={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_authentication_face__ft5wp26ng5aq_large.jpg'}
                    usb={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_connector_thunderbolt_usb_c__dw5jz6kqedci_large.jpg'}
                    network={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_cellular_5g__cei94kfo9hyu_large.jpg'}
                    pencil={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_pencil_2ndgen__fx6w6j72iu2y_large.jpg'}
                    keyboard={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_keyboard_magic__gj8e0r1o3662_large.jpg'}
                    chipName={'M2 chip'}
                    icontxt1={'12MP Ultra Wide'}
                    icontxt2={'front camera'}
                    icontxt3={'TrueDepth camera system'}
                    cameraTxt1={'12MP Wide camera'}
                    cameraTxt2={'10MP Ultra Wide camera'}
                    cameraTxt3={'4K video, ProRes'}
                    lockTxt={'Face ID'}
                    usbTxt1={'USB‑C connector'}
                    usbTxt2={'Support for'}
                    usbTxt3={'Thunderbolt / USB 4'}
                    networkText={'5G cellular2'}
                    pencilTxt={'Supports Apple Pencil'}
                    keyboardTxt={'Supports Magic'}
                />

                <IpadCard key={3}
                    id={3}
                    image={"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png"}
                    dotSrc={'https://www.apple.com/v/iphone/home/bo/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_medium.png'}
                    name={"ipad"}
                    description={'descrippjhdgb'}
                    price={"from $900"}
                    size={'12.9″ or 11″'}
                    info1={'Liquid Retina XDR display or'}
                    info2={'Liquid Retina display1'}
                    info3={'ProMotion technology'}
                    chipSrc={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_chip_m2__c17adphgllsi_large_2x.jpg'}
                    icon={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_front_portrait__zyhtkvd2biay_large_2x.jpg'}
                    camera={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_dual_lens_1__gghfjcu81eqi_large_2x.jpg'}
                    face={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_authentication_face__ft5wp26ng5aq_large.jpg'}
                    usb={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_connector_thunderbolt_usb_c__dw5jz6kqedci_large.jpg'}
                    network={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_cellular_5g__cei94kfo9hyu_large.jpg'}
                    pencil={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_pencil_2ndgen__fx6w6j72iu2y_large.jpg'}
                    keyboard={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_keyboard_magic__gj8e0r1o3662_large.jpg'}
                    chipName={'M2 chip'}
                    icontxt1={'12MP Ultra Wide'}
                    icontxt2={'front camera'}
                    icontxt3={'TrueDepth camera system'}
                    cameraTxt1={'12MP Wide camera'}
                    cameraTxt2={'10MP Ultra Wide camera'}
                    cameraTxt3={'4K video, ProRes'}
                    lockTxt={'Face ID'}
                    usbTxt1={'USB‑C connector'}
                    usbTxt2={'Support for'}
                    usbTxt3={'Thunderbolt / USB 4'}
                    networkText={'5G cellular2'}
                    pencilTxt={'Supports Apple Pencil'}
                    keyboardTxt={'Supports Magic'}
                />

                <IpadCard key={4}
                    id={4}
                    image={"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png"}
                    dotSrc={'https://www.apple.com/v/iphone/home/bo/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_medium.png'}
                    name={"ipad"}
                    description={'descrippjhdgb'}
                    price={"from $900"}
                    size={'12.9″ or 11″'}
                    info1={'Liquid Retina XDR display or'}
                    info2={'Liquid Retina display1'}
                    info3={'ProMotion technology'}
                    chipSrc={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_chip_m2__c17adphgllsi_large_2x.jpg'}
                    icon={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_front_portrait__zyhtkvd2biay_large_2x.jpg'}
                    camera={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_dual_lens_1__gghfjcu81eqi_large_2x.jpg'}
                    face={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_authentication_face__ft5wp26ng5aq_large.jpg'}
                    usb={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_connector_thunderbolt_usb_c__dw5jz6kqedci_large.jpg'}
                    network={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_cellular_5g__cei94kfo9hyu_large.jpg'}
                    pencil={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_pencil_2ndgen__fx6w6j72iu2y_large.jpg'}
                    keyboard={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_keyboard_magic__gj8e0r1o3662_large.jpg'}
                    chipName={'M2 chip'}
                    icontxt1={'12MP Ultra Wide'}
                    icontxt2={'front camera'}
                    icontxt3={'TrueDepth camera system'}
                    cameraTxt1={'12MP Wide camera'}
                    cameraTxt2={'10MP Ultra Wide camera'}
                    cameraTxt3={'4K video, ProRes'}
                    lockTxt={'Face ID'}
                    usbTxt1={'USB‑C connector'}
                    usbTxt2={'Support for'}
                    usbTxt3={'Thunderbolt / USB 4'}
                    networkText={'5G cellular2'}
                    pencilTxt={'Supports Apple Pencil'}
                    keyboardTxt={'Supports Magic'}
                />

                <IpadCard key={5}
                    id={5}
                    image={"https://www.apple.com/v/ipad/home/cd/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png"}
                    dotSrc={'https://www.apple.com/v/iphone/home/bo/images/overview/compare/swatch_iphone_14_pro__c2bl98e0li4i_medium.png'}
                    name={"ipad"}
                    description={'descrippjhdgb'}
                    price={"from $900"}
                    size={'12.9″ or 11″'}
                    info1={'Liquid Retina XDR display or'}
                    info2={'Liquid Retina display1'}
                    info3={'ProMotion technology'}
                    chipSrc={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_chip_m2__c17adphgllsi_large_2x.jpg'}
                    icon={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_front_portrait__zyhtkvd2biay_large_2x.jpg'}
                    camera={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_camera_dual_lens_1__gghfjcu81eqi_large_2x.jpg'}
                    face={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_authentication_face__ft5wp26ng5aq_large.jpg'}
                    usb={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_connector_thunderbolt_usb_c__dw5jz6kqedci_large.jpg'}
                    network={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_cellular_5g__cei94kfo9hyu_large.jpg'}
                    pencil={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_pencil_2ndgen__fx6w6j72iu2y_large.jpg'}
                    keyboard={'https://www.apple.com/v/ipad/home/cd/images/overview/compare-features/icon_keyboard_magic__gj8e0r1o3662_large.jpg'}
                    chipName={'M2 chip'}
                    icontxt1={'12MP Ultra Wide'}
                    icontxt2={'front camera'}
                    icontxt3={'TrueDepth camera system'}
                    cameraTxt1={'12MP Wide camera'}
                    cameraTxt2={'10MP Ultra Wide camera'}
                    cameraTxt3={'4K video, ProRes'}
                    lockTxt={'Face ID'}
                    usbTxt1={'USB‑C connector'}
                    usbTxt2={'Support for'}
                    usbTxt3={'Thunderbolt / USB 4'}
                    networkText={'5G cellular2'}
                    pencilTxt={'Supports Apple Pencil'}
                    keyboardTxt={'Supports Magic'}
                />
            </Box>
        </Box>
    )
}

export default IpadPage