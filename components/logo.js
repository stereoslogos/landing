import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    margin-top: 15px;

    &:hover img {
        transform: scale(0.8,0.8);
    }
`

const Logo = () => {
    const bigztarImg = `/images/bigztar${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            {/* <a> */}
                <LogoBox>
                    <Image src={bigztarImg} width={50} height={50} alt="logo"/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Ubuntu'
                        fontWeight='bold'
                        ml={3}
                    >
                        bigztar Enterprise
                    </Text>
                </LogoBox>
            {/* </a> */}
        </Link>
    )
}

export default Logo