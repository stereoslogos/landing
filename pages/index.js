import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
// import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} mt={6} align="center">
                Allowing you to be.
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Stéreoslógos
                    </Heading>
                    <p>Hey, I&apos;m bigztar Entrprise's CEO</p>
                    <span style={{ fontWeight: 'bold' }}>( Artist / Developer / Designer)</span>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md:0}}
                    ml={{md: 6}}
                    align="center"
                >
                    <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="67px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/me.jpeg"
                            alt="Profile image"
                            width={67}
                            height={67}
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Background
        </Heading>
        <Paragraph>
            I am a Software Developer from &#160;
          <Link as={NextLink} href="https://www.cesde.edu.co/" passHref scroll={false} target='blank'>
            CESDE
          </Link>
          &#160;and currently studying Systems Engineer 👨‍💻 with more than 12 years of experience in web graphic solutions.
          I take every job with great commitment and interest in implementing new trends in development and design.
          Always seeking to innovate with each project. I have experience managing Linux servers and W3 pages.
          I also have a &quot;White Belt&quot; of &quot;Lean Six Sigma.&quot;
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.bigztar.com"
            scroll={false}
            colorScheme="teal"
            style={{display: "block", paddingTop:12}}
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2008</BioYear>
          MySpace Layouts (HTML & CSS).
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Art Director (Adobe)
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Data Analyst (SQL & Excel)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Community Manager (WordPress & Meta)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Software Developer (PHP, JavaScript & Pyton)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Certicates
        </Heading>
        <Paragraph>
            ◦
            <span style={{ fontWeight: 'bold' }}> 2014 </span>
            Manager Academy | at&t
        </Paragraph>
        <Paragraph>
            ◦
            <span style={{ fontWeight: 'bold' }}> 2016 </span>
            White Belt | Lean Six Sigma
        </Paragraph>
        <Paragraph>
            ◦
            <span style={{ fontWeight: 'bold' }}> 2018 </span>
            Inbound Marketing | HubSpot
        </Paragraph>
        <Paragraph>
            ◦
            <span style={{ fontWeight: 'bold' }}> 2021 </span>
            UX | Google
        </Paragraph>
        <Paragraph>
            ◦
            <span style={{ fontWeight: 'bold' }}> 2021 </span>
            UX-UI / Design Thinking / Usability | Platzi
        </Paragraph>
        <Paragraph>
            ◦
            <span style={{ fontWeight: 'bold' }}> 2023 </span>
            PowerBI | CESDE
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact me @
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/stereoslogos" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                //leftIcon={<IoLogoGithub />}
              >
                @stereoslogos
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                //leftIcon={<IoLogoTwitter />}
              >
                @stereoslogos
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                //leftIcon={<IoLogoInstagram />}
              >
                @b1gztar
              </Button>
            </Link>
          </ListItem>
        </List>

        

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"

            style={{display: "block", paddingTop:8}}
          >
            Email me
          </Button>
        </Box>
      </Section>
        </Container>
    )
}

export default Page