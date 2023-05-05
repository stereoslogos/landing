import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} mt={4} align="center">
                Hey, I&apos;m a Web developer!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        BIGztar
                    </Heading>
                    <p>Enterprise ( Artist / Developer / Designer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page