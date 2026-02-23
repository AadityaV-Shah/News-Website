import { Box, Flex, HStack, Text, Button, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Container } from "@chakra-ui/react"


const Topbar = () => {
    return (
        <Box w="full" bg="rgb(28, 165, 172)">
            <Container>
                <Flex backdropFilter="blur(10px)"
                    py="2"
                    justify="space-between"
                    align="center">
                    <HStack gap="4">
                        <Text>Wednesday, January 1, 2026</Text>
                        <Text>|</Text>
                        <Text>About</Text>
                        <Text>|</Text>
                        <Text>Contact Us</Text>
                    </HStack>
                    <HStack gap="4">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaTiktok />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Topbar