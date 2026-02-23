import { Box, Flex, HStack, Text, Button, Link, Image, } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react"

const Herobar = () => {
    return (
        <Box w="full" bg="white">
            <Container>
                <Flex py="3"
                    justify="space-between"
                    align="center">
                    <Box w="200px" h="auto">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Motocycle_clubs_portal_news_banner.png" />
                    </Box>
                    <Box w="300px" h="auto">
                        <Image src="https://cdn.sanity.io/images/8wzdrx7x/production/206f129236af1220ae0163c6810fab3e72b6c4b5-700x198.png" />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Herobar